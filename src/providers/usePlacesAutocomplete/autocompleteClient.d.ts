export type FetchPredictions<Prediction, RequestOptions = any> = (
  value: string,
  requestOptions?: RequestOptions,
) => Promise<Prediction[]>;

interface ReadyAutocompleteClient<Prediction, RequestOptions = any> {
  fetchPredictions: FetchPredictions<Prediction, RequestOptions>;
  ready: true;
}

interface NotReadyAutocompleteClient {
  ready: false;
}

export type AutocompleteClient<Prediction, RequestOptions = any> =
  | ReadyAutocompleteClient<Prediction, RequestOptions>
  | NotReadyAutocompleteClient;

export type UseAutocompleteClient<
  Prediction,
  RequestOptions = any,
  InitOptions = any
> = (options?: InitOptions) => AutocompleteClient<Prediction, RequestOptions>;
