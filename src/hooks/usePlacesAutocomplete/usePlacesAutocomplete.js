import { useState, useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';
import useLatest from '../useLatest';
import useCheckUnmounted from '../useCheckUnmounted';

const defaultInit = () => ({ ready: true });

const initialFetchState = {
  loading: false,
  predictions: [],
};

/** A hook for fetching place predictions based on input value */
const usePlacesAutocomplete = ({
  /** client: connects and sends requests to location service (Atlas / Google)
   * contains: {
   *  fetchPredictions: A pure function that fetches predictions from service given input value
   *  useInit (optional): A hook used to initialize connection to location service
   * } */
  client: { fetchPredictions, useInit = defaultInit },
  /** options to be passed to client init hook */
  initOptions,
  /** options to be passed to client's fetchPredictions function */
  requestOptions,
  /** fetch predictions debounce in milliseconds (default: 200) */
  debounceMs = 200,
  /** input default value (default: '') */
  defaultValue = '',
}) => {
  const { ready, clientOptions } = useInit(initOptions); // Initialize client

  const [value, _setValue] = useState(defaultValue);
  const [
    {
      /** whether fetch request is ongoing */
      loading,
      /** array of prediction results */
      predictions,
    },
    setFetchState,
  ] = useState(initialFetchState);

  const clearPredictions = useCallback(
    () => setFetchState(initialFetchState),
    [],
  );

  const predictionsRequestId = useRef(0); // id of latest request to avoid race conditions
  const checkUnmounted = useCheckUnmounted(); // checks whether component has been unmounted

  /** We want the `getPredictions` callback to have zero dependencies (to avoid re-renders),
   * so we make latest options available through refs */
  const requestOptionsRef = useLatest(requestOptions);
  const clientOptionsRef = useLatest(clientOptions);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPredictions = useCallback(
    debounce(async val => {
      if (checkUnmounted()) {
        return;
      }
      // Increase request id counter
      const requestId = ++predictionsRequestId.current;

      if (!val) {
        clearPredictions();
        return;
      }

      setFetchState(state => ({ ...state, loading: true }));

      const newPredictions = await fetchPredictions(
        val,
        requestOptionsRef.current,
        clientOptionsRef.current,
      );

      // Don't update state if new fetch request has been initiated or if component was unmounted
      if (!checkUnmounted() && requestId === predictionsRequestId.current) {
        setFetchState({ loading: false, predictions: newPredictions });
      }
    }, debounceMs),
    [],
  );

  // Set input value to state and get predictions from client
  const setValue = useCallback(
    (newValue, shouldFetchData = true) => {
      _setValue(newValue);
      if (shouldFetchData) {
        getPredictions(newValue);
      }
    },
    [getPredictions],
  );

  return {
    /** value of input */
    value,
    /** (value: string, shouldFetchData?: boolean) => void
     * receives a new input value and
     * fetches new predictions from client if shouldFetchData is true */
    setValue,
    /** whether client is ready to receive requests */
    ready,
    /** whether fetch request is ongoing */
    loading,
    /** array of prediction results */
    predictions,
    /** function that clears predictions array and sets loading state to false */
    clearPredictions,
  };
};

export default usePlacesAutocomplete;
