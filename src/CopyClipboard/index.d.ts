import * as React from 'react';

export interface CopyClipboardProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
  children: Function; 
  onCopy?: Function;
  value: string;
}

export default class CopyClipboard extends React.PureComponent<CopyClipboardProps>{}
