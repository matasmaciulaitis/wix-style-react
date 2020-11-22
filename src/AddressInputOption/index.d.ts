import * as React from 'react';

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

export interface AddressInputOptionBuilderData {
  id: string | number;
  className?: string;
  prefix?: React.ReactNode;
  mainLabel?: string;
  secondaryLabel?: string;
  suffix?: React.ReactNode;
  disabled?: boolean;
  dataHook?: string;
  optionLayout?: AddressInputOptionLayout;
  displayLabel?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface AddressInputOptionBuilderReturn {
  id: string | number;
  disabled: boolean | undefined;
  overrideOptionStyle: true;
  label?: string;
  value: (props?: Partial<AddressInputOptionProps>) => React.ReactNode;
}

export const addressInputOptionBuilder: (
  data: AddressInputOptionBuilderData,
) => AddressInputOptionBuilderReturn;

export default class AddressInputOption extends React.PureComponent<
  AddressInputOptionProps
> {}
