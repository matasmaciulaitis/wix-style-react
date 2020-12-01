import { act, renderHook } from '@testing-library/react-hooks';
import useCopyClipboard from '../useCopyClipboard';

describe('useCopyClipboard', () => {
  beforeEach(() => {
    document.createRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
      selectNodeContents: () => {},
    });
    document.getSelection = () => ({
      addRange: () => {},
      removeRange: () => {},
    });
    document.execCommand = jest.fn();
  });

  it('should call copy command', () => {
    const { result } = renderHook(() =>
      useCopyClipboard('https://www.wix.com'),
    );
    act(() => {
      result.current.copyToClipboard();
    });
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
