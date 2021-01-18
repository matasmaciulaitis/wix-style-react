import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AvatarGroup from '../AvatarGroup';
import { avatarGroupPrivateDriverFactory } from './AvatarGroup.private.uni.driver';

describe(AvatarGroup.displayName, () => {
  const render = createRendererWithUniDriver(
    avatarGroupPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<AvatarGroup />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<AvatarGroup />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<AvatarGroup buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
