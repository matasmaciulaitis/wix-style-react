import React, { useCallback, useMemo } from 'react';
import AddressInput from '../AddressInput';
import { addressInputOptionBuilder } from '../AddressInputOption/AddressInputOption';
import usePlacesAutocomplete from '../hooks/usePlacesAutocomplete';
import useAtlasClient from '../hooks/usePlacesAutocomplete/useAtlasClient';

const AtlasAddressInput = ({ baseUrl, onChange, onClear, ...props }) => {
  const client = useAtlasClient({ baseUrl });
  const {
    predictions,
    updatePredictions,
    clearPredictions,
  } = usePlacesAutocomplete({ client });

  const options = useMemo(
    () =>
      predictions.map(prediction =>
        addressInputOptionBuilder({
          id: prediction.placeId,
          mainLabel: prediction.textStructure.mainText,
          secondaryLabel: prediction.textStructure.secondaryText,
          displayLabel: prediction.description,
        }),
      ),
    [predictions],
  );

  const _onChange = useCallback(
    event => {
      updatePredictions(event.target.value);
      if (onChange) {
        onChange(event);
      }
    },
    [updatePredictions, onChange],
  );
  const _onClear = useCallback(() => {
    clearPredictions();
    if (onClear) {
      onClear();
    }
  }, [clearPredictions, onClear]);

  return (
    <AddressInput
      options={options}
      onChange={_onChange}
      onClear={_onClear}
      {...props}
    />
  );
};

export default AtlasAddressInput;
