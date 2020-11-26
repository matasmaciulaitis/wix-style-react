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
  const [value, _setValue] = useState(defaultValue);
  const [fetchState, setFetchState] = useState(initialFetchState);
  const { ready, clientOptions } = useInit(initOptions); // Initialize client
  const predictionsRequestId = useRef(0); // id of latest request to avoid race conditions
  const checkUnmounted = useCheckUnmounted();

  /** We want the `setValue` callback to have zero dependencies (to avoid rer-enders),
   * so we make latest options available through refs */
  const requestOptionsRef = useLatest(requestOptions);
  const clientOptionsRef = useLatest(clientOptions);

  const clearPredictions = useCallback(
    () => setFetchState(initialFetchState),
    [],
  );

  const getPredictionsRef = useRef(
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

      const { predictions: newPredictions } = await fetchPredictions(
        val,
        requestOptionsRef.current,
        clientOptionsRef.current,
      );

      // Don't update state if new fetch request has been initiated or if component was unmounted
      if (!checkUnmounted() && requestId === predictionsRequestId.current) {
        setFetchState({ loading: true, predictions: newPredictions });
      }
    }, debounceMs),
  );

  const setValue = useCallback((newValue, shouldFetchData = true) => {
    _setValue(newValue);
    if (shouldFetchData) {
      const getPredictions = getPredictionsRef.current;
      getPredictions(newValue);
    }
  }, []);

  const { loading, predictions } = fetchState;

  return { value, setValue, ready, loading, predictions, clearPredictions };
};

export default usePlacesAutocomplete;
