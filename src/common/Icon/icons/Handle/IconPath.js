/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const IconPath = (props) => {
  const { fill = '#A9AEB9' } = props;
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 11C4.32843 11 5 11.6716 5 12.5C5 13.3284 4.32843 14 3.5 14C2.67157 14 2 13.3284 2 12.5C2 11.6716 2.67157 11 3.5 11Z"
        fill={fill}
      />
      <path
        d="M8.5 11C9.32843 11 10 11.6716 10 12.5C10 13.3284 9.32843 14 8.5 14C7.67157 14 7 13.3284 7 12.5C7 11.6716 7.67157 11 8.5 11Z"
        fill={fill}
      />
      <path
        d="M3.5 6C4.32843 6 5 6.67157 5 7.5C5 8.32843 4.32843 9 3.5 9C2.67157 9 2 8.32843 2 7.5C2 6.67157 2.67157 6 3.5 6Z"
        fill={fill}
      />
      <path
        d="M8.5 6C9.32843 6 10 6.67157 10 7.5C10 8.32843 9.32843 9 8.5 9C7.67157 9 7 8.32843 7 7.5C7 6.67157 7.67157 6 8.5 6Z"
        fill={fill}
      />
      <path
        d="M3.5 1C4.32843 1 5 1.67157 5 2.5C5 3.32843 4.32843 4 3.5 4C2.67157 4 2 3.32843 2 2.5C2 1.67157 2.67157 1 3.5 1Z"
        fill={fill}
      />
      <path
        d="M8.5 1C9.32843 1 10 1.67157 10 2.5C10 3.32843 9.32843 4 8.5 4C7.67157 4 7 3.32843 7 2.5C7 1.67157 7.67157 1 8.5 1Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconPath;
