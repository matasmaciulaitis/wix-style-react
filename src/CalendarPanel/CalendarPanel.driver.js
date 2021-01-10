import calendarDriverFactory from '../Calendar/Calendar.driver';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import { WithDeprecationWarning } from '../utils/WithDeprecationWarning';

const calendarPanelDriverFactory = ({ element }) => {
  WithDeprecationWarning(calendarPanelDriverFactory);

  const dropdownLayoutElement = () =>
    element.querySelector('[data-hook=dropdown-layout]');
  const calendarElement = () => element.querySelector('[data-hook=calendar]');
  const getCalendarDriver = () =>
    calendarDriverFactory({ element: calendarElement() });
  const dropdownLayoutDriver = () =>
    dropdownLayoutDriverFactory({ element: dropdownLayoutElement() });

  const driver = {
    exists: () => !!element,
    calendarDriver: () => getCalendarDriver(),
    presetsDropdownLayoutDriver: () => dropdownLayoutDriver(),
    isDropdownExists: () => Boolean(dropdownLayoutElement()),
    findByDataHook: dataHook =>
      element.querySelector(`[data-hook=${dataHook}]`),
  };

  return driver;
};

export default calendarPanelDriverFactory;
