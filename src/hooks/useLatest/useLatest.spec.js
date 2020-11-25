import { renderHook } from '@testing-library/react-hooks';
import useLatest from './useLatest';

describe('useLatest', () => {
  it('should return latest value inside ref', () => {
    const val = 'test';
    const {
      result: { current: latest },
    } = renderHook(() => useLatest(val));
    expect(latest.current).toBe(val);
  });
});
