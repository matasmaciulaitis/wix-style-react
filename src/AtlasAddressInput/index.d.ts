import * as React from 'react';
import { AddressInputProps } from '../AddressInput';
import { AtlasInitOptions } from '../hooks/usePlacesAutocomplete/useAtlasClient';

export interface AtlasAddressInputProps
  extends AddressInputProps,
    AtlasInitOptions {}

declare const AtlasAddressInput: React.FC<AtlasAddressInputProps>;
export default AtlasAddressInput;
