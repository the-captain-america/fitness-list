import { useEffect, useRef } from 'react';

const useIsMounted = () => {
  const componentIsMounted = useRef(true);
  useEffect(
    () => () => {
      componentIsMounted.current = false;
    },
    []
  );
  return componentIsMounted;
};

export { useIsMounted };
