import * as React from 'react';
import { BadgeSize, BadgeType } from '../Badge';
import { PopoverCommonProps } from '../common';
import { BadgeSelectOption } from '../BadgeSelectItemBuilder';

export interface BadgeSelectProps {
  options: BadgeSelectOption[];
  selectedId?: string;
  onSelect?: (option: BadgeSelectOption) => void;
  size?: BadgeSize;
  type?: BadgeType;
  uppercase?: boolean;
  dataHook?: string;
  popoverProps?: PopoverCommonProps;
}

export default class BadgeSelect extends React.Component<BadgeSelectProps> {
  hideDropdown: () => void;
  showDropdown: () => void;
  toggleDropdown: () => void;
  getSelectedOption: (props: any) => BadgeSelectOption;
}

export { BadgeSelectOption };
