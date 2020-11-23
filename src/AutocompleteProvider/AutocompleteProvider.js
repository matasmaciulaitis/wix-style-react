import { useCallback, useMemo } from 'react';
import usePlacesAutocomplete from 'wix-places';
import atlasProvider from 'wix-places/Atlas';
import { addressInputOptionBuilder } from '../AddressInputOption/AddressInputOption';

const AutocompleteProvider = ({
  children,
  getOptionProps = props => props,
}) => {
  const {
    suggestions: { data, loading },
    setValue,
    clearSuggestions,
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
  const onChange = useCallback(
    event => {
      setValue(event.target.value);
    },
    [setValue],
  );
  const status = loading ? 'loading' : undefined;

  return children({ options, onChange, onClear: clearSuggestions, status });
};

export default AutocompleteProvider;
