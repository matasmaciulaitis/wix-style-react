import * as React from 'react';

export interface CopyClipboardProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
  value: string;
  children: Function;
  onCopy?: Function;
  resetTimeout?: number;
}

export default class CopyClipboard extends React.PureComponent<
  CopyClipboardProps
> {}
