import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ButtonX from '../ButtonX';
import { buttonXPrivateDriverFactory } from './ButtonX.private.uni.driver';

describe(ButtonX.displayName, () => {
  const render = createRendererWithUniDriver(buttonXPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<ButtonX />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<ButtonX />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<ButtonX buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
