import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AvatarGroup from '../AvatarGroup';
import { avatarGroupPrivateDriverFactory } from './AvatarGroup.private.uni.driver';

const tempAvatarGroupItems = [
  {
    ariaLabel: 'Avatar for Roi Bendet',
    color: 'A1',
    imgProps: undefined,
    name: 'Roi Bendet',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    name: 'Roi Bendet',
    text: 'boom boom',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    imgProps: undefined,
    name: 'Roi Bendet',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    text: 'hello world',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    name: 'Tal Zaidman',
    placeholder: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    name: 'Eran Egozi',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    name: 'Ofir Bendet',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Roi Bendet',
    imgProps: undefined,
    name: 'Omer Bendet',
  },
];

describe(AvatarGroup.displayName, () => {
  const render = createRendererWithUniDriver(avatarGroupPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<AvatarGroup items={tempAvatarGroupItems} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should render 5 avatars by default', async () => {
    const { driver } = render(<AvatarGroup items={tempAvatarGroupItems} />);
    expect(await driver.getAvatarsCount()).toBe(5);
  });

  it('should render 3 avatar and one moreIndicator avatar when maxItems prop is 4', async () => {
    const { driver } = render(
      <AvatarGroup items={tempAvatarGroupItems} maxItems={4} />,
    );
    expect(await driver.getAvatarsCount()).toBe(4);
  });

  it('should return the name of the avatar', async () => {
    const AvatarGroupItems = [
      {
        name: 'Roi Bendet',
      },
      {
        name: 'Eran Egozi',
      },
    ];
    const expectedTextContent = 'EE';
    const { driver } = render(<AvatarGroup items={AvatarGroupItems} />);
    expect(await driver.getAvatarContentByIndex(1)).toBe(expectedTextContent);
  });
});
