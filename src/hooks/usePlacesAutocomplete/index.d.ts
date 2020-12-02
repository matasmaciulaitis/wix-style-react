import { AutocompleteClient } from './autocompleteClient';

export type UpdatePredictions = (value: string) => void;

export interface UsePlacesAutocompleteReturn<Prediction> {
  predictions: Prediction[];
  loading: boolean;
  updatePredictions: UpdatePredictions;
  clearPredictions: () => void;
}
export interface UsePlacesAutocompleteProps<Prediction, RequestOptions> {
  client: AutocompleteClient<Prediction, RequestOptions>;
  debounce?: number;
  defaultValue?: string;
}

declare const usePlacesAutocomplete: <Prediction, RequestOptions>(
  args?: UsePlacesAutocompleteProps<Prediction, RequestOptions>,
) => UsePlacesAutocompleteReturn<Prediction>;

export default usePlacesAutocomplete;
