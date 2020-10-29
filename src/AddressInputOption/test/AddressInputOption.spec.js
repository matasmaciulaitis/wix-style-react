import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AddressInputOption from '../AddressInputOption';
import { addressInputOptionPrivateDriverFactory } from './AddressInputOption.private.uni.driver';

describe(AddressInputOption.displayName, () => {
  const render = createRendererWithUniDriver(
    addressInputOptionPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<AddressInputOption />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<AddressInputOption />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<AddressInputOption buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
