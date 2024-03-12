import { useEffect, useCallback } from 'react';

const useEscape = (callback = () => {}) => {
  const escapeFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      callback(event);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escapeFunction, false);
    return () => {
      document.removeEventListener('keydown', escapeFunction, false);
    };
  }, []);

  return escapeFunction; // not really necessary but whatever
};

export { useEscape };
