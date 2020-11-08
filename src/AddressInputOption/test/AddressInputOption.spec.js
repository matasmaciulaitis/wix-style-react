import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AddressInputOption from '../AddressInputOption';
import { addressInputOptionPrivateDriverFactory } from './AddressInputOption.private.uni.driver';

describe(AddressInputOption.displayName, () => {
  const renderAddressInputOption = (props = {}) => (
    <AddressInputOption {...props} />
  );
  const render = createRendererWithUniDriver(
    addressInputOptionPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(renderAddressInputOption({}));

    expect(await driver.exists()).toBe(true);
  });

  it('should trigger click callback', async () => {
    const onClick = jest.fn();
    const { driver } = render(renderAddressInputOption({ onClick }));

    expect(onClick).not.toHaveBeenCalled();
    await driver.click();
    expect(onClick).toHaveBeenCalled();
  });

  it('should not trigger click callback when disabled', async () => {
    const onClick = jest.fn();
    const { driver } = render(
      renderAddressInputOption({ disabled: true, onClick }),
    );

    await driver.click();
    expect(onClick).not.toHaveBeenCalled();
  });
});
