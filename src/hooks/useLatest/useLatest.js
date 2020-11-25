import { useRef, useEffect } from 'react';

// Sets value argument into ref
const useLatest = value => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref;
};

export default useLatest;
