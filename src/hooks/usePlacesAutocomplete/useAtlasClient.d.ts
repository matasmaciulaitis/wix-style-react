import { Prediction, GetPredictionsRequest } from '@wix/ambassador-wix-atlas-service-web/types';
import { AutocompleteClient, UseAutocompleteClient } from './autocompleteClient';

export type AtlasRequestOptions = Omit<GetPredictionsRequest, 'input'>;
export type { Prediction };

export type AtlasClient = AutocompleteClient<Prediction, AtlasRequestOptions>;

declare const useAtlasClient: UseAutocompleteClient<Prediction, AtlasRequestOptions, never>;
export default useAtlasClient;
