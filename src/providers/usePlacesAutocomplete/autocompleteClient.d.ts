export type FetchPredictions<Prediction, RequestOptions = any> = (
  value: string,
  requestOptions?: RequestOptions,
) => Promise<Prediction[]>;

export type GetPlaceDetails<PlaceDetails> = (
  placeId: string,
) => Promise<PlaceDetails>;

export type SearchAddresses<Address> = (
  inputValue: string,
) => Promise<Address[]>;

interface ReadyAutocompleteClient<
  Prediction,
  PlaceDetails,
  Address,
  RequestOptions = any
> {
  fetchPredictions: FetchPredictions<Prediction, RequestOptions>;
  getPlaceDetails: GetPlaceDetails<PlaceDetails>;
  searchAddresses: SearchAddresses<Address>;
  ready: true;
}

interface NotReadyAutocompleteClient {
  ready: false;
}

export type AutocompleteClient<
  Prediction,
  PlaceDetails,
  Address,
  RequestOptions = any
> =
  | ReadyAutocompleteClient<Prediction, PlaceDetails, Address, RequestOptions>
  | NotReadyAutocompleteClient;

export type UseAutocompleteClient<
  Client extends AutocompleteClient<any, any, any, any>,
  InitOptions = any
> = (options?: InitOptions) => Client;
