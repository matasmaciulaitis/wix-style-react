import * as React from 'react';
import {CommonAvatarProps} from '../Avatar';

export type GroupType = 'stretched' | 'condensed';
export type AvatarGroupSize = 'medium' | 'small';
export interface AvatarGroupProps {
  dataHook?: string;
  className?: string;
  type?: GroupType;
  size?: AvatarGroupSize;
  showDivider?: boolean;
  maxItems?: number;
  items: CommonAvatarProps[];
  moreItemContent?: React.ReactNode;
}

export default class AvatarGroup extends React.PureComponent<AvatarGroupProps>{}
