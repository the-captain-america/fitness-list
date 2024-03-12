/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const IconPath = (props) => {
  const { fill = 'none', stroke = '#A9AEB9' } = props;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <rect
        x="2.99988"
        y="3.01709"
        width="10.3166"
        height="10.3166"
        rx="1.25"
        stroke="#A9AEB9"
        strokeWidth="1.5"
      />
      <path
        d="M5.34277 15.0932V15.2211C5.34277 16.3257 6.2382 17.2211 7.34277 17.2211H14.9999C16.1045 17.2211 16.9999 16.3257 16.9999 15.2211V8.02893C16.9999 6.96636 16.1385 6.10498 15.076 6.10498V6.10498"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default IconPath;
