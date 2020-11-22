import * as React from 'react';
import { AddressInputProps } from '../AddressInput';
import {
  AddressInputOptionBuilderData,
  AddressInputOptionBuilderReturn,
} from '../AddressInputOption';

export interface AutocompleteProviderRenderArgs
  extends Pick<AddressInputProps, 'onChange' | 'status'> {
  options: AddressInputOptionBuilderReturn[];
}

export interface AutocompleteProviderProps {
  children: (args: AutocompleteProviderRenderArgs) => React.ReactNode;
  getOptionProps?: (
    option: Pick<
      AddressInputOptionBuilderData,
      'id' | 'displayLabel' | 'mainLabel' | 'secondaryLabel'
    >,
  ) => AddressInputOptionBuilderReturn;
}

declare const AutocompleteProvider: React.FC<AutocompleteProviderProps>;

export default AutocompleteProvider;
