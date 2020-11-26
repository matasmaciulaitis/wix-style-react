import { useRef, useEffect } from 'react';

// Returns a function that checks whether component has been unmounted
const useCheckUnmounted = () => {
  const isUnmounted = useRef(false);
  useEffect(() => {
    // React performs the cleanup when the component unmounts
    const cleanup = () => {
      isUnmounted.current = true;
    };
    return cleanup;
  }, []);

  return () => isUnmounted.current;
};

export default useCheckUnmounted;
