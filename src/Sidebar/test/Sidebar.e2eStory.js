import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { storySettings } from './storySettings';
import Sidebar from '../Sidebar';
import SidebarSectionItem from '../../SidebarSectionItem/SidebarSectionItem';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import Button from '../../Button/Button';
import Box from '../../Box';

const SidebarWithState = () => {
  const [items, setItems] = useState(Array(5).fill('item'));
  return (
    <Box dataHook={storySettings.dataHooks.boxContainer} height="200px">
      <Sidebar dataHook={storySettings.dataHooks.sidebar}>
        {items.map(item => {
          return <SidebarSectionItem>{item}</SidebarSectionItem>;
        })}
      </Sidebar>

      <Button
        dataHook={storySettings.dataHooks.addItemButton}
        style={{ position: 'absolute', left: '300px', top: '50%' }}
        onClick={() => setItems([...items, 'item'])}
      >
        Add Item
      </Button>
    </Box>
  );
};

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(storySettings.testStoryNames.GRADIENT, () => (
  <SidebarWithState />
));
