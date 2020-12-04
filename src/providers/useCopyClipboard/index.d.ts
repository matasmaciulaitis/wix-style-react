export interface useCopyClipboardProps {
  value: string;
  onCopy?: Function;
  resetIterval?: number;
}

export interface useCopyClipboardReturn {
  isCopied: boolean;
  copyToClipboard: () => void;
  resetState: () => void;
}

declare const useCopyClipboard: (
  props: useCopyClipboardProps,
) => useCopyClipboardReturn;

export default useCopyClipboard;
