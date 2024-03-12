import React, { useRef, useEffect } from 'react';

function useOutsideAlerter({ ref, callback }) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

const useClickOutside = ({ children, style, mb, mt, className, ...props }) => {
  const wrapperRef = useRef(null);
  // eslint-disable-next-line react/prop-types
  useOutsideAlerter({ ref: wrapperRef, callback: props.callback });

  // eslint-disable-next-line react/prop-types
  return (
    <div ref={wrapperRef} style={style} mb={mb} mt={mt} className={className}>
      {children}
    </div>
  );
};

export default useClickOutside;
