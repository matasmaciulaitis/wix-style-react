import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.COMPONENTS,
  storyName: 'Sidebar',
  dataHooks: {
    sidebar: 'story-sidebar',
    addItemButton: 'add-item-button',
    boxContainer: 'box-container',
  },
  testStoryNames: {
    GRADIENT: 'sidebar gradient',
  },
};
