import * as React from 'react';

export interface NestableListProps {
  dataHook?: string;
  items?: object[];
  isRenderDraggingChildren?: boolean;
  childrenProperty?: string;
  childrenStyle?: React.CSSProperties;
  onUpdate?: (data: { items: object[]; item: object }) => void;
  useDragHandle?: boolean;
  maxDepth?: number;
  threshold?: number;
  onDragStart?: (itemProps: any) => void;
  onDragEnd?: (itemProps: any) => void;
  renderItem?: (data: {
    isPlaceholder: boolean;
    depth: number;
    isPreview: boolean;
    connectDragSource: any;
    item: object;
  }) => React.ReactNode;
}

export default class NestableList extends React.PureComponent<
  NestableListProps
> {}
