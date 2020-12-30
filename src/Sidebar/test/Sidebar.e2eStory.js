import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import storySettings from '../docs/storySettings';
import Sidebar from '../Sidebar';
import SidebarSectionItem from '../../SidebarSectionItem/SidebarSectionItem';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';

const SidebarWithState = () => {
  const [items, setItems] = useState([]);
  return (
    <div style={{ overflow: 'hidden', height: '500px', color: 'white' }}>
      <Sidebar dataHook={storySettings.dataHook}>
        {items.map(item => {
          return <SidebarSectionItem>{item}</SidebarSectionItem>;
        })}
      </Sidebar>

      <button
        style={{ position: 'absolute', left: '300px', top: '50%' }}
        onClick={() => setItems([...items, 'item'])}
      >
        Add Item
      </button>
    </div>
  );
};

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(storySettings.testStoryNames.GRADIENT, () => (
  <SidebarWithState items={['item1', 'item2']} />
));
