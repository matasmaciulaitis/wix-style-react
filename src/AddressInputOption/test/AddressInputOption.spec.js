import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AddressInputOption from '../AddressInputOption';
import { addressInputOptionPrivateDriverFactory } from './AddressInputOption.private.uni.driver';

describe(AddressInputOption.displayName, () => {
  const render = createRendererWithUniDriver(
    addressInputOptionPrivateDriverFactory,
  );

  afterEach(cleanup);
});
