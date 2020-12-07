import { useCallback, useMemo } from 'react';
import { WixAtlasServiceWeb } from '@wix/ambassador-wix-atlas-service-web/http';

export const BASE_ATLAS_URL = 'https://www.wix.com/wix-atlas-service-web';

const useAtlasClient = ({ baseUrl = BASE_ATLAS_URL } = {}) => {
  const autocompleteService = useMemo(
    () => WixAtlasServiceWeb(baseUrl).AutocompleteServiceV1(),
    [baseUrl],
  );

  const fetchPredictions = useCallback(
    async (value, requestOptions) => {
      const { predictions } = await autocompleteService().getPredictions({
        ...requestOptions,
        input: value,
      });

      return predictions;
    },
    [autocompleteService],
  );

  return { fetchPredictions, ready: true };
};

export default useAtlasClient;
