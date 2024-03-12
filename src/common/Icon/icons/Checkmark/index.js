/* eslint-disable react/prop-types */
import React from 'react';

const IconPath = (props) => {
  const { stroke = '#19B244', fill = '#E8F7EC' } = props;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path
        d="M7 10.7632L8.36842 12.1316L13.5 7"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPath;
