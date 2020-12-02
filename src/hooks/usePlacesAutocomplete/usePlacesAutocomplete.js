import { useState, useCallback, useRef } from 'react';
import _debounce from 'lodash/debounce';
import useIsMounted from '../useIsMounted';
import useLatest from '../useLatest';

const initialFetchState = {
  loading: false,
  predictions: [],
};

/** A hook for fetching place predictions based on input value */
const usePlacesAutocomplete = ({
  /** client: connects and sends requests to location service (Atlas / Google)
   * contains: {
   *  fetchPredictions: A function that fetches predictions from service given input value
   *  ready: is client ready to receive requests
   * } */
  client,
  /** (callback: Function, debounceMs: number) => Function
   * allow passing a custom debounce function (default: lodash debounce) */
  debounceFn = _debounce,
  /** fetch predictions debounce in milliseconds (default: 200) */
  debounceMs = 200,
}) => {
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
  const isMounted = useIsMounted(); // checks whether component is still mounted

  /** We want the `getPredictions` callback to have zero dependencies (to avoid re-renders and unpredictable debouncing),
   * so we make client available through ref */
  const clientRef = useLatest(client);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updatePredictions = useCallback(
    debounceFn(async (value, requestOptions) => {
      const { ready, fetchPredictions } = clientRef.current;
      if (!ready || !isMounted()) {
        return;
      }
      // Increase request id counter
      const requestId = ++predictionsRequestId.current;

      if (!value) {
        clearPredictions();
        return;
      }

      setFetchState(state => ({ ...state, loading: true }));

      const newPredictions = await fetchPredictions(value, requestOptions);

      // check if no new fetch request has been initiated
      const isMostRecentRequest = requestId === predictionsRequestId.current;

      if (isMounted() && isMostRecentRequest) {
        setFetchState({ loading: false, predictions: newPredictions });
      }
    }, debounceMs),
    [],
  );

  return {
    /** array of prediction results */
    predictions,
    /** whether fetch request is ongoing */
    loading,
    /** (value: string, requestOptions?: RequestOptions) => void
     * fetches predictions for given value from client (debounced)
     * and sets results to prediction state.
     *
     * Can also receive requestOptions,
     * which are client specific options to pass to the request */
    updatePredictions,
    /** function that clears predictions array and sets loading state to false */
    clearPredictions,
  };
};

export default usePlacesAutocomplete;
