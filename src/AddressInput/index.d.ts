import * as React from 'react';
import { AddressInputOption } from '../AddressInputOption';

export interface AddressInputProps {
  dataHook?: string;
  className?: string;
  clearButton?: boolean;
  initialValue?: string;
  onSelect?: (
    option: AddressInputOption,
    setInputValue: (value: string) => void,
  ) => void;
  debounceDuration?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  options?: AddressInputOption[];
  onClear?: () => void;
  status?: 'loading' | 'error' | 'warning';
  roundInput?: boolean;
  optionsLayout?: 'single-line' | 'double-line';
  showOptionsIcons?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default class AddressInput extends React.PureComponent<
  AddressInputProps
> {}
