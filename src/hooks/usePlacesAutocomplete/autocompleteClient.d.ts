import { Prediction } from '@wix/ambassador-wix-atlas-service-web/http';

export type FetchPredictions<RequestOptions, ClientOptions = any> = (
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
  RequestOptions,
  InitOptions = any,
  ClientOptions = any
> {
  fetchPredictions: FetchPredictions<RequestOptions, ClientOptions>;
  useInit?: InitializerHook<InitOptions, ClientOptions>;
}
