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
  Prediction,
  RequestOptions,
  InitOptions = any,
  ClientOptions = any
> {
  client: AutocompleteClient<
    Prediction,
    RequestOptions,
    InitOptions,
    ClientOptions
  >;
  initOptions?: InitOptions;
  requestOptions?: RequestOptions;
  debounce?: number;
  defaultValue?: string;
}

declare const usePlacesAutocomplete: <
  Prediction,
  RequestOptions,
  InitOptions = any,
  ClientOptions = any
>(
  args?: UsePlacesAutocompleteProps<
    Prediction,
    RequestOptions,
    InitOptions,
    ClientOptions
  >,
) => UsePlacesAutocompleteReturn;

export default usePlacesAutocomplete;
