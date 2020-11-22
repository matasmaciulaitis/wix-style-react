import * as React from 'react';
import {
  AddressInputOptionBuilderData,
  AddressInputOptionBuilderReturn,
} from '../AddressInputOption';

export interface AutocompleteProviderProps {
  children: () => React.ReactNode;
  getOptionProps: (
    option: Pick<
      AddressInputOptionBuilderData,
      'id' | 'displayLabel' | 'mainLabel' | 'secondaryLabel'
    >,
  ) => AddressInputOptionBuilderReturn;
}

declare const AutocompleteProvider: React.FC<AutocompleteProviderProps>;

export default AutocompleteProvider;
