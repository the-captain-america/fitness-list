import React from "react";

const IconPath = (props) => {
  const { fill = "#A9AEB9", stroke = "#adabbd" } = props;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="6" y="2" width="3" height="3" fill={fill} />
      <rect x="6" y="8" width="3" height="3" fill={fill} />
      <rect x="6" y="14" width="3" height="3" fill={fill} />
      <rect x="12" y="2" width="3" height="3" fill={fill} />
      <rect x="12" y="8" width="3" height="3" fill={fill} />
      <rect x="12" y="14" width="3" height="3" fill={fill} />
    </svg>
  );
};

export default IconPath;
