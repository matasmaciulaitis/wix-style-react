import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AvatarGroup from '../AvatarGroup';
import { avatarGroupPrivateDriverFactory } from './AvatarGroup.private.uni.driver';

describe(AvatarGroup.displayName, () => {
  const render = createRendererWithUniDriver(avatarGroupPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<AvatarGroup />);
    expect(await driver.exists()).toBe(true);
  });
});
