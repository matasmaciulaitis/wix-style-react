import { useMemo } from 'react';
import usePlacesAutocomplete from 'wix-places';
import atlasProvider from 'wix-places/Atlas';
import { addressInputOptionBuilder } from '../AddressInputOption/AddressInputOption';

const AutocompleteProvider = ({
  children,
  getOptionProps = props => props,
}) => {
  const {
    suggestions: { data, loading },
    ready,
    setValue,
  } = usePlacesAutocomplete({ provider: atlasProvider });
  const options = useMemo(
    () =>
      data.map(
        ({
          placeId: id,
          description: displayLabel,
          textStructure: { mainText: mainLabel, secondaryText: secondaryLabel },
        }) => {
          const optionProps = getOptionProps({
            id,
            displayLabel,
            mainLabel,
            secondaryLabel,
          });
          return addressInputOptionBuilder(optionProps);
        },
      ),
    [data, getOptionProps],
  );
  return children({ ready, options, loading, setValue });
};

export default AutocompleteProvider;
