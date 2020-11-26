import { renderHook, cleanup } from '@testing-library/react-hooks';
import useCheckUnmounted from './useCheckUnmounted';

describe('useCheckUnmounted', () => {
  const renderHelper = () => renderHook(() => useCheckUnmounted()).result;

  it('should return a function that checks whether component is unmounted', () => {
    const result = renderHelper();
    expect(result.current).toBeInstanceOf(Function);
  });
  describe('checkUnmounted', () => {
    it('should return false if component is active', () => {
      const { current: checkUnmounted } = renderHelper();
      expect(checkUnmounted()).toBe(false);
    });
    it('should return true if component was unmounted', async () => {
      const { current: checkUnmounted } = renderHelper();
      await cleanup(); // unmounts all hooks
      expect(checkUnmounted()).toBe(true);
    });
  });
});
