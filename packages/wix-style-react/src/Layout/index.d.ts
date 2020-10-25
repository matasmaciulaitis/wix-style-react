import * as React from 'react';

export interface LayoutProps {
  dataHook?: string;
  children?: React.ReactNode;
  gap?: string | number;
  cols?: number;
  justifyItems?: string;
  alignItems?: string;
}

export interface CellProps {
  children?: React.ReactNode;
  span?: number;
  vertical?: boolean;
}

export const Layout: React.SFC<LayoutProps>;
export default Layout;

export const Cell: React.SFC<CellProps>;
