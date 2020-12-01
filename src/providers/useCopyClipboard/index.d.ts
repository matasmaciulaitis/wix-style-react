declare const useCopyClipboard: (
  value: string,
  onCopy: Function,
) => { copied: boolean; copyToClipboard: () => void; resetState: () => void };

export default useCopyClipboard;
