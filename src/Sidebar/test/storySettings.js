import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.COMPONENTS,
  storyName: 'Sidebar',
  dataHooks: {
    sidebar: 'story-sidebar',
    addItemButton: 'add-item-button',
    innerMenuItem: 'inner-menu-item',
    boxContainer: 'box-container',
    setBoxHeightButton: 'set-box-height-button',
  },
  testStoryNames: {
    GRADIENT: 'sidebar gradient',
  },
};
