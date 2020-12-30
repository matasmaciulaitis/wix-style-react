import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.COMPONENTS,
  storyName: 'Sidebar',
  dataHooks: {
    sidebar: 'story-sidebar',
    addItemButton: 'add-item-button',
    divContainer: 'div-container',
  },
  testStoryNames: {
    GRADIENT: 'sidebar gradient',
  },
};
