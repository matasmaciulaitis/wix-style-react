import { findByHook } from '../../../test/utils/unidriver';
import { dropdownBasePrivateDriverFactory } from '../../DropdownBase/DropdownBase.private.uni.driver';
import inputDriverFactory from '../../Input/Input.uni.driver';
import { timeInputWipDriverFactory as publicDriverFactory } from '../TimeInputWip.uni.driver';
import { dataHooks } from '../constants';

export const timeInputWipPrivateDriverFactory = (base, body) => {
  const dropdownBaseTestkit = dropdownBasePrivateDriverFactory(base, body);
  const input = findByHook(base, dataHooks.timeInputWipInput);
  const inputDriver = inputDriverFactory(input);

  return {
    ...publicDriverFactory(base, body),

    selectOptionAt: async index => {
      await inputDriver.click();
      const isDropdownShown = await dropdownBaseTestkit.isDropdownShown();
      const isInputDisabled = await inputDriver.isDisabled();
      if (isDropdownShown && !isInputDisabled) {
        await dropdownBaseTestkit.selectOption(index);
      }
    },

    isOptionHoveredAt: index => dropdownBaseTestkit.isOptionHovered(index),

    optionContentAt: index => dropdownBaseTestkit.optionContentAt(index),

    openDropdown: () => inputDriver.click(),

    isDropDownShown: () => dropdownBaseTestkit.isDropdownShown(),

    enterText: value => inputDriver.enterText(value),
  };
};
