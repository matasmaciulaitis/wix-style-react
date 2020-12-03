import React, { useCallback, useMemo } from 'react';
import AddressInput from '../AddressInput';
import usePlacesAutocomplete from '../hooks/usePlacesAutocomplete';
import useAtlasClient from '../hooks/usePlacesAutocomplete/useAtlasClient';

// TODO: build addressInputOptionBuilder (mai)
const addressInputOptionBuilder = options => ({});

const AtlasAddressInput = ({ onChange, ...props }) => {
  const client = useAtlasClient();
  const { predictions, updatePredictions } = usePlacesAutocomplete({ client });
  const options = useMemo(
    () =>
      predictions.map(prediction =>
        addressInputOptionBuilder({
          someAttribute: prediction.description,
          anotherAttribute: prediction.textStructure.mainText,
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

  return <AddressInput options={options} onChange={_onChange} {...props} />;
};

export default AtlasAddressInput;
