export type FetchPredictions<
  Prediction,
  RequestOptions,
  ClientOptions = any
> = (
  value: string,
  requestOptions: RequestOptions,
  clientOptions: ClientOptions,
) => Promise<{
  data?: Prediction[];
  status: string;
}>;

export type InitializerHook<InitOptions, ClientOptions = any> = (
  options: InitOptions,
) => {
  ready: boolean;
  clientOptions?: ClientOptions;
};

export interface AutocompleteClient<
  Prediction,
  RequestOptions,
  InitOptions = any,
  ClientOptions = any
> {
  fetchPredictions: FetchPredictions<Prediction, RequestOptions, ClientOptions>;
  useInit?: InitializerHook<InitOptions, ClientOptions>;
}
