import React from 'react';
import Range from '../Range';
import DatePicker from '../../DatePicker';
import rangeDriverFactory from '../Range.driver';
import { createRendererWithDriver, cleanup } from '../../../test/utils/unit';

describe('Range', () => {
  afterEach(cleanup);

  const render = createRendererWithDriver(rangeDriverFactory);

  it('should work with datePickers', () => {
    const onChange = jest.fn();
    const dataHook = 'compHook';

    const { driver } = render(
      <Range dataHook={dataHook}>
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} />
      </Range>,
    );

    expect(driver.exists()).toBe(true);
  });
});
