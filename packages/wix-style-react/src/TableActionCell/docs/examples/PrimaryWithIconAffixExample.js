import React from 'react';

import { classes } from '../TableActionCell.story.st.css';
import { TableActionCell } from 'wix-style-react';
import Add from 'wix-ui-icons-common/Add';
import ChevronDownSmall from 'wix-ui-icons-common/ChevronDownSmall';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      dataHook="story-primary-with-icon-prefix"
      primaryAction={{
        text: 'Prefix',
        prefixIcon: <Add />,
        skin: 'standard',
        onClick: () => window.alert('Primary action was triggered!'),
      }}
    />
    <TableActionCell
      dataHook="story-primary-with-icon-suffix"
      primaryAction={{
        text: 'Suffix',
        suffixIcon: <ChevronDownSmall />,
        skin: 'standard',
        onClick: () => window.alert('Primary action was triggered!'),
      }}
    />
  </div>
);

export default Example;
