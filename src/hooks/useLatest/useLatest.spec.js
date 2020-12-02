import { renderHook } from '@testing-library/react-hooks';
import useLatest from './useLatest';

describe('useLatest', () => {
  it('updates ref when argument changes', () => {
    const {
      result: { current: latestRef },
      rerender,
    } = renderHook((value = 'test') => useLatest(value));
    expect(latestRef.current).toBe('test');
    rerender('test2');
    expect(latestRef.current).toBe('test2');
  });
});
