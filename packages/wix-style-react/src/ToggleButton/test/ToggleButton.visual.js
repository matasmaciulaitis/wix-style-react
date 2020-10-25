import React from 'react';
import CropRotate from 'wix-ui-icons-common/CropRotate';
import ToggleButton from '../ToggleButton';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const Story = props => (
  <ToggleButton {...props} labelValue="Crop & Rotate">
    <CropRotate />
  </ToggleButton>
);

const options = {
  props: [
    'selected',
    'size',
    'skin',
    'disabled',
    'shape',
    'border',
    'labelPlacement',
  ],
  skipUndefinedValue: true,
};

storyOfAllPermutations(Story, ToggleButton, options);
