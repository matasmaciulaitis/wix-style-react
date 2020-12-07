import { V2Prediction as Prediction, ListPredictionsRequest } from '@wix/ambassador-wix-atlas-service-web/types';
import { OmitPolyfill } from '../../common';
import { AutocompleteClient, UseAutocompleteClient } from './autocompleteClient';

export type AtlasRequestOptions = OmitPolyfill<ListPredictionsRequest, 'input'>;
export interface AtlasInitOptions {
  baseUrl?: string;
}
export type { Prediction };

export type AtlasClient = AutocompleteClient<Prediction, AtlasRequestOptions>;

declare const useAtlasClient: UseAutocompleteClient<Prediction, AtlasRequestOptions, AtlasInitOptions>;
export default useAtlasClient;
