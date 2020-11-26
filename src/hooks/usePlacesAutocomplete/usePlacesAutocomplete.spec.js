import { act, renderHook } from '@testing-library/react-hooks';
import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import usePlacesAutocomplete from './usePlacesAutocomplete';

// Lodash debounce doesn't play nicely with jest fake timers
jest.mock('lodash/debounce');
debounce.mockImplementation((callback, delay = 250) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
});
jest.useFakeTimers();

const wait = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

const defaultDebounceMs = 200;

const mockPredictions = [
  {
    description: 'Paris, France',
    distanceInMeters: 5000,
    matchedSubstrings: [],
    placeId: 'test',
    textStructure: {
      mainText: 'Paris',
      secondaryText: 'France',
    },
  },
];

describe('usePlacesAutocomplete', () => {
  const waitForDebounce = async () => {
    jest.advanceTimersByTime(defaultDebounceMs);
    await flushPromises();
  };
  const fetchPredictions = () =>
    new Promise(resolve => resolve(mockPredictions));
  const useInit = () => ({ ready: true });

  const mockClient = {
    fetchPredictions,
    useInit,
  };

  const renderHelper = props =>
    renderHook(() => usePlacesAutocomplete({ client: mockClient, ...props }))
      .result;

  it('should initialize client', () => {
    const useInitFn = jest.fn(useInit);
    const client = {
      fetchPredictions,
      useInit: useInitFn,
    };
    renderHelper({ client });
    expect(useInitFn).toHaveBeenCalled();
  });

  it('should pass initOptions to client init hook', async () => {
    const useInitFn = jest.fn(useInit);
    const initOptions = { authToken: 'some-token' };
    const client = {
      fetchPredictions,
      useInit: useInitFn,
    };
    renderHelper({ client, initOptions });
    expect(useInitFn).toHaveBeenCalledWith(initOptions);
  });

  it('should return ready state', () => {
    const useInitFn = () => {
      const [ready, setReady] = useState(false);
      useEffect(() => {
        setTimeout(() => setReady(true), 200);
      }, []);
      return { ready };
    };
    const client = { fetchPredictions, useInit: useInitFn };
    const result = renderHelper({ client });
    expect(result.current.ready).toBe(false);
    act(() => jest.advanceTimersByTime(200));
    expect(result.current.ready).toBe(true);
  });

  it('should return loading state', async () => {
    const fetchDelay = 100;
    const fetchPredictionsFn = async () => {
      await wait(fetchDelay);
      return mockPredictions;
    };
    const client = { fetchPredictions: fetchPredictionsFn, useInit };
    const result = renderHelper({ client });
    expect(result.current.loading).toEqual(false);
    act(() => result.current.setValue('test'));
    act(() => jest.advanceTimersByTime(defaultDebounceMs));
    expect(result.current.loading).toEqual(true);
    await act(async () => {
      jest.advanceTimersByTime(fetchDelay);
      await flushPromises();
    });
    expect(result.current.loading).toEqual(false);
    expect(result.current.predictions).toBe(mockPredictions);
  });

  it('should return predictions data', async () => {
    const result = renderHelper();
    expect(result.current.predictions).toEqual([]);
    act(() => result.current.setValue('test'));
    await act(() => waitForDebounce());
    expect(result.current.predictions).toBe(mockPredictions);
  });

  describe('setValue', () => {
    it('should change value', async () => {
      const result = renderHelper();
      expect(result.current.value).toBe('');
      act(() => result.current.setValue('test'));
      expect(result.current.value).toBe('test');
    });
    it('should call fetchPredictions with new value', async () => {
      const fetchPredictionsFn = jest.fn(fetchPredictions);
      const client = {
        fetchPredictions: fetchPredictionsFn,
        useInit,
      };
      const result = renderHelper({ client });
      act(() => result.current.setValue('test'));
      await act(() => waitForDebounce());
      expect(fetchPredictionsFn).toHaveBeenCalledWith(
        'test',
        undefined,
        undefined,
      );
    });
    it('should call fetchPrediction with requestOptions from props', async () => {
      const fetchPredictionsFn = jest.fn(fetchPredictions);
      const client = {
        fetchPredictions: fetchPredictionsFn,
        useInit,
      };
      const requestOptions = { languageCode: 'he' };
      const result = renderHelper({ client, requestOptions });
      act(() => result.current.setValue('test'));
      await act(() => waitForDebounce());
      expect(fetchPredictionsFn).toHaveBeenCalledWith(
        'test',
        requestOptions,
        undefined,
      );
    });
    it('should call fetchPrediction with options from client', async () => {
      const fetchPredictionsFn = jest.fn(fetchPredictions);
      const clientOptions = { gMaps: {} };
      const client = {
        fetchPredictions: fetchPredictionsFn,
        useInit: () => ({ ready: true, clientOptions }),
      };
      const result = renderHelper({ client });
      act(() => result.current.setValue('test'));
      await act(() => waitForDebounce());
      expect(fetchPredictionsFn).toHaveBeenCalledWith(
        'test',
        undefined,
        clientOptions,
      );
    });
    it('should not call fetchPredictions when shouldFetchData is false', async () => {
      const fetchPredictionsFn = jest.fn(fetchPredictions);
      const client = {
        fetchPredictions: fetchPredictionsFn,
        useInit,
      };
      const result = renderHelper({ client });
      act(() => result.current.setValue('test', false));
      await act(() => waitForDebounce());
      expect(fetchPredictionsFn).not.toHaveBeenCalled();
    });
  });

  describe('clearPredictions', () => {
    it('should clear predictions', async () => {
      const result = renderHelper();
      act(() => result.current.setValue('test'));
      await act(() => waitForDebounce());
      expect(result.current.predictions).toBe(mockPredictions);
      act(() => result.current.clearPredictions());
      expect(result.current.predictions).toEqual([]);
    });
  });

  describe('props', () => {
    describe('debounceMs', () => {
      it('should set the debounce timeout for fetching request', async () => {
        const debounceMs = 100;
        const fetchPredictionsFn = jest.fn(fetchPredictions);
        const client = {
          fetchPredictions: fetchPredictionsFn,
          useInit,
        };
        const result = renderHelper({ client, debounceMs });

        act(() => result.current.setValue('t'));
        jest.advanceTimersByTime(10);
        act(() => result.current.setValue('te'));
        jest.advanceTimersByTime(10);
        act(() => result.current.setValue('tes'));
        jest.advanceTimersByTime(10);
        act(() => result.current.setValue('test'));
        await act(() => waitForDebounce());
        act(() => result.current.setValue('blah'));
        await act(() => waitForDebounce());

        expect(fetchPredictionsFn).toHaveBeenCalledTimes(2);
        expect(fetchPredictionsFn).toHaveBeenNthCalledWith(
          1,
          'test',
          undefined,
          undefined,
        );
        expect(fetchPredictionsFn).toHaveBeenNthCalledWith(
          2,
          'blah',
          undefined,
          undefined,
        );
      });
    });
    describe('defaultValue', () => {
      it('should set default input value', () => {
        const result = renderHelper({ defaultValue: 'test' });
        expect(result.current.value).toBe('test');
      });
    });
  });
});
