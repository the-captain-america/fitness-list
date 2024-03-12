/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const IconPath = (props) => {
  const { stroke = '#E3E5EB' } = props;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="9.5"
        transform="rotate(-180 10 10)"
        stroke={stroke}
      />
      <path
        d="M5.1002 10.0501L14.5338 10.0501"
        stroke="#A9AEB9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4377 7.48792L15 10.0501L12.4377 12.6124"
        stroke="#A9AEB9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPath;
