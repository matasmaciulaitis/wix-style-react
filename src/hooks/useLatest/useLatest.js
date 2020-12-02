import { useRef, useEffect } from 'react';

/** Takes hook argument and puts it into ref,
 * updates ref value with latest argument value.
 * Should be used when you want to access an argument value from a hook
 * without depending on it. */
const useLatest = value => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref;
};

export default useLatest;
