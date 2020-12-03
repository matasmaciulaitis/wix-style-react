import { WixAtlasServiceWeb } from '@wix/ambassador-wix-atlas-service-web/http';

const autocompleteService = WixAtlasServiceWeb(
  'https://bo.wix.com/wix-atlas-service-web',
).AutocompleteServiceV1();

const fetchPredictions = async (value, requestOptions) => {
  const { predictions } = await autocompleteService().getPredictions({
    ...requestOptions,
    input: value,
  });

  return predictions;
};

const useAtlasClient = () => ({ fetchPredictions, ready: true });

export default useAtlasClient;
