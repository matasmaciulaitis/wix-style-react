import { Prediction } from '@wix/ambassador-wix-atlas-service-web/http';
import { AutocompleteClient } from './autocompleteClient';

export type SetValue = (value: string, shouldFetchData?: boolean) => void;

export interface UsePlacesAutocompleteReturn {
  value: string;
  setValue: SetValue;
  ready: boolean;
  loading: boolean;
  predictions: Prediction[];
  clearPredictions: () => void;
}
export interface UsePlacesAutocompleteProps<
  RequestOptions,
  InitOptions = any,
  ClientOptions = any
> {
  client: AutocompleteClient<RequestOptions, InitOptions, ClientOptions>;
  initOptions?: InitOptions;
  requestOptions?: RequestOptions;
  debounce?: number;
  defaultValue?: string;
}

declare const usePlacesAutocomplete: <RequestOptions>(
  args?: UsePlacesAutocompleteProps<RequestOptions>,
) => UsePlacesAutocompleteReturn;

export default usePlacesAutocomplete;
