import * as React from 'react';

declare const useLatest: <T>(value: T) => React.RefObject<T>;
export default useLatest;
