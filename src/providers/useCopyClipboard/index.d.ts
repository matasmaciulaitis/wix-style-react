declare const useCopyClipboard: ({
  value: string,
  onCopy: Function,
  stateResetInterval: number,
}) => {
  isCopied: boolean;
  copyToClipboard: () => void;
  resetState: () => void;
};

export default useCopyClipboard;
