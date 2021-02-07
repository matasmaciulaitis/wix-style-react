import React from 'react';
import { useAppLoaded, useInstance } from 'yoshi-flow-bm-runtime';
import * as allComponents from 'wix-style-react';
import { Page } from 'wix-style-react';
import AtlasAddressInput from 'wix-style-react/AtlasAddressInput';
// @ts-ignore
import LiveCodeExample from 'wix-storybook-utils/LiveCodeExample';

const initialCode = `
<AtlasAddressInput token={token} />
`;

const App: React.FC = () => {
  useAppLoaded({ auto: true });
  const token = useInstance();

  const scope = { ...allComponents, AtlasAddressInput, token };

  return (
    <Page>
      <Page.Header dataHook="app-title" />
      <Page.Content>
        <LiveCodeExample initialCode={initialCode} scope={scope} />
      </Page.Content>
    </Page>
  );
};

export default App;
