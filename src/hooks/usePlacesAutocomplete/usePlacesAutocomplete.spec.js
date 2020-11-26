import { act, renderHook } from '@testing-library/react-hooks';
import usePlacesAutocomplete from './usePlacesAutocomplete';

const wait = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

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

  describe('props', () => {
    describe('debounceMs', () => {
      const debounceMs = 100;
      it('should set the debounce timeout for fetching request', async () => {
        const fetchPredictionsFn = jest.fn(fetchPredictions);
        const client = {
          fetchPredictions: fetchPredictionsFn,
          useInit,
        };
        const result = renderHelper({ client, debounceMs });

        act(() => result.current.setValue('t'));
        await wait(10);
        act(() => result.current.setValue('te'));
        await wait(10);
        act(() => result.current.setValue('tes'));
        await wait(10);
        act(() => result.current.setValue('test'));
        // state changes after debounce timeout
        await act(() => wait(debounceMs));
        act(() => result.current.setValue('blah'));
        // state changes after debounce timeout
        await act(() => wait(debounceMs));

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
      // state changes after debounce timeout
      await act(() => wait(defaultDebounceMs));
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
      // state changes after debounce timeout
      await act(() => wait(defaultDebounceMs));
      expect(fetchPredictionsFn).toHaveBeenCalledWith(
        'test',
        requestOptions,
        undefined,
      );
    });
    it('should call fetchPrediction with options from client', async () => {
      const fetchPredictionsFn = jest.fn(fetchPredictions);
      const clientOptions = { authorizationHeader: 'somethingsecure' };
      const client = {
        fetchPredictions: fetchPredictionsFn,
        useInit: () => ({ ready: true, clientOptions }),
      };
      const result = renderHelper({ client });
      act(() => result.current.setValue('test'));
      // state changes after debounce timeout
      await act(() => wait(defaultDebounceMs));
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
      await wait(defaultDebounceMs);
      expect(fetchPredictionsFn).not.toHaveBeenCalled();
    });
  });

  // it('should return "ready" correctly', () => {
  //   // @ts-ignore
  //   delete global.google;
  //   let res = renderHelper({
  //     ,
  //     initOptions: { googleMaps: getMaps().maps },
  //   });
  //   expect(res.current.ready).toBeTruthy();

  //   res = renderHelper();
  //   expect(res.current.ready).toBeFalsy();

  //   global.google = getMaps();
  //   res = renderHelper();
  //   expect(res.current.ready).toBeTruthy();
  // });

  // it('should return "value" correctly', () => {
  //   let result = renderHelper();
  //   expect(result.current.value).toBe('');

  //   const defaultValue = 'Welly';
  //   result = renderHelper({ , defaultValue });
  //   expect(result.current.value).toBe(defaultValue);

  //   result.current.setValue(val);
  //   expect(result.current.value).toBe(val);
  // });

  // it('should return "predictions" correctly', async () => {
  //   let res = renderHelper();
  //   expect(res.current.predictions).toEqual(defaultPredictions);

  //   res.current.setValue('');
  //   expect(res.current.predictions).toEqual(defaultPredictions);

  //   res.current.setValue(val, false);
  //   expect(res.current.predictions).toEqual(defaultPredictions);

  //   res.current.setValue(val);
  //   expect(res.current.predictions).toEqual({
  //     ...defaultPredictions,
  //     loading: true,
  //   });

  //   res.current.setValue(val);
  //   await flushPromises();
  //   expect(res.current.predictions).toEqual(okPredictions);

  //   global.google = getMaps('failure');
  //   res = renderHelper();
  //   res.current.setValue(val);
  //   await flushPromises();
  //   expect(res.current.predictions).toEqual({
  //     loading: false,
  //     status: error,
  //     data: [],
  //   });
  // });

  // it('should clear predictions', async () => {
  //   const result = renderHelper();
  //   result.current.setValue(val);
  //   await flushPromises();
  //   expect(result.current.predictions).toEqual(okPredictions);

  //   result.current.clearPredictions();
  //   expect(result.current.predictions).toEqual(defaultPredictions);
  // });
});
