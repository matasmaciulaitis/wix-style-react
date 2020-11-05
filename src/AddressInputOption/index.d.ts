import * as React from 'react';
import { OPTION_LAYOUT } from './constants'

export interface AddressInputOptionProps {
  dataHook?: string;
  className?: string;
  displayLabel?: string;
  mainLabel?: string;
  secondaryLabel?: string;
  optionLayout?: AddressInputOptionLayout;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  highlighted?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type AddressInputOptionLayout = 'single-line' | 'double-line';

export const addressInputOptionBuilder: (data: {
  id: string | number;
  className?: string;
  prefix?: React.ReactNode;
  title?: string;
  subtitle?: string;
  suffix?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  dataHook?: string;
}) => {
  id: string | number;
  disabled: boolean | undefined;
  overrideStyle: true;
  value: (props?: Partial<AddressInputOptionProps>) => React.ReactNode;
};

export default class AddressInputOption extends React.PureComponent<AddressInputOptionProps>{}

export default AddressInputOption;