import { renderHook } from '@testing-library/react-hooks';
import { AmbassadorTestkit } from '@wix/ambassador-testkit';
import { WixAtlasServiceWeb } from '@wix/ambassador-wix-atlas-service-web/http';
import {
  aGetPredictionsResponse,
  aPrediction,
} from '@wix/ambassador-wix-atlas-service-web/builders';
import useAtlasClient from './useAtlasClient';

const baseUrl = 'https://bo.wix.com/wix-atlas-service-web';

describe('useAtlasClient', () => {
  const ambassadorTestkit = new AmbassadorTestkit();
  ambassadorTestkit.beforeAndAfter();
  const renderHelper = () => renderHook(() => useAtlasClient()).result;
  it('fetches autocomplete predictions from Atlas location service', async () => {
    const predictions = [aPrediction().build()];
    const response = aGetPredictionsResponse()
      .withPredictions(predictions)
      .build();
    const atlasStub = ambassadorTestkit.createStub(WixAtlasServiceWeb, baseUrl);
    atlasStub
      .AutocompleteServiceV1()
      .getPredictions.when({ input: 'Paris' })
      .resolve(response);

    const result = renderHelper();
    const res = await result.current.fetchPredictions('Paris');
    expect(res).toEqual(predictions);
  });
});
