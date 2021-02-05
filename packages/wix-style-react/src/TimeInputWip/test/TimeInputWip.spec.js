import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import TimeInputWip from '../TimeInputWip';
import { timeInputWipPrivateDriverFactory } from './TimeInputWip.private.uni.driver';

describe(TimeInputWip.displayName, () => {
  const defaultDate = '1995-05-31T05:24:00.000';
  const naiveFortmatToParts = (value, isAm) => {
    const date = new Date(value);
    if (!isAm) {
      return [
        {
          type: 'hour',
          value: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        },
        { type: 'literal', value: ':' },
        { type: 'minute', value: date.getMinutes() },
      ];
    }

    return [
      { type: 'hour', value: date.getHours() },
      { type: 'literal', value: ':' },
      {
        type: 'minute',
        value:
          date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
      },
      { type: 'literal', value: ' ' },
      { type: 'dayPeriod', value: 'am' },
    ];
  };

  const render = createRendererWithUniDriver(timeInputWipPrivateDriverFactory);
  let dateTimeFormatSpy;

  function createComponent(props = {}, isAm) {
    const mockDateTimeFormatExpression = {
      locale: 'en-GB',
      formatToParts: value => naiveFortmatToParts(value, isAm),
    };

    dateTimeFormatSpy = jest
      .spyOn(Intl, 'DateTimeFormat')
      .mockImplementationOnce(() => mockDateTimeFormatExpression);

    return render(<TimeInputWip {...props} />);
  }

  afterEach(() => {
    dateTimeFormatSpy.mockRestore();
    cleanup();
  });

  it('should render', async () => {
    const { driver } = createComponent();

    expect(await driver.exists()).toBe(true);
  });

  it('should render formatted date value in 24 hours mode', async () => {
    const props = {
      value: new Date(defaultDate),
      hour12: false,
    };
    const { driver } = createComponent(props);

    expect(await driver.getStringValue()).toBe('05:24');
  });

  it('should render formatted date value in 12 hours mode', async () => {
    const props = {
      value: new Date(defaultDate),
      hour12: true,
    };
    const { driver } = createComponent(props, true);

    expect(await driver.getStringValue()).toBe('5:24 AM');
  });

  it(`should set time input value to passed date in miliseconds`, async () => {
    const dateValue = new Date(defaultDate);
    const props = {
      value: dateValue,
    };
    const { driver } = createComponent(props);

    expect(await driver.getValue()).toBe(dateValue.getTime());
  });

  it(`should call onChange when choosing a date`, async () => {
    const dateValue = new Date(defaultDate);
    const expectedDateMs = dateValue.setHours(0, 15, 0, 0);
    const onChangeMock = jest.fn();
    const props = {
      value: dateValue,
      onChange: onChangeMock,
    };
    const { driver } = createComponent(props, true);

    await driver.selectOptionAt(1);

    expect(onChangeMock).toBeCalledWith({
      date: new Date(expectedDateMs),
      formattedDate: '0:15 AM',
    });
  });

  describe('enter time', () => {
    it(`should mark option '10:00' when entering '1'`, async () => {
      const dateValue = new Date(defaultDate);
      const props = {
        value: dateValue,
        step: 60,
      };
      const { driver } = createComponent(props);
      await driver.openDropdown();

      expect(await driver.isDropDownShown()).toBe(true);

      await driver.enterText('1');

      expect(await driver.isOptionHoveredAt(10)).toBe(true);
    });

    it(`should mark option '01:00' when entering '01'`, async () => {
      const dateValue = new Date(defaultDate);
      const props = {
        value: dateValue,
        step: 60,
      };
      const { driver } = createComponent(props);
      await driver.openDropdown();

      expect(await driver.isDropDownShown()).toBe(true);

      await driver.enterText('01');

      expect(await driver.isOptionHoveredAt(1)).toBe(true);
    });

    it(`should mark option '05:00' when entering '5'`, async () => {
      const dateValue = new Date(defaultDate);
      const props = {
        value: dateValue,
        step: 60,
      };
      const { driver } = createComponent(props);
      await driver.openDropdown();

      expect(await driver.isDropDownShown()).toBe(true);

      await driver.enterText('5');

      expect(await driver.isOptionHoveredAt(5)).toBe(true);
    });

    it(`should mark option '12:00 AM' when entering '12'`, async () => {
      const dateValue = new Date(defaultDate);
      const props = {
        value: dateValue,
        hour12: true,
        step: 60,
      };
      const { driver } = createComponent(props, true);
      await driver.openDropdown();

      expect(await driver.isDropDownShown()).toBe(true);

      await driver.enterText('12');

      expect(await driver.isOptionHoveredAt(12)).toBe(true);
      expect(await driver.optionContentAt(12)).toBe('12:00 AM');
    });
  });
});
