import React from 'react';
import * as icons from './icons';
import styled from 'styled-components';

const Svg = styled.svg.attrs({ className: 'icon-svg' })`
  ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`}
  transition: all .2s;
`;

const Icon = ({
  name = '',
  size = 24,
  rotate = 0,
  fill = 'default',
  stroke = 'default',
  viewBox = '0 0 20 20',
  ...props
}) => {
  const matchedIcon = Object.keys(icons).includes(name.toUpperCase());

  if (!matchedIcon) {
    return <>Icon not found</>;
  }

  const Path = icons[name.toUpperCase()];
  const normalizedFill = fill === 'default' ? undefined : fill;
  const normalizedStroke = stroke === 'default' ? undefined : stroke;
  return (
    <Svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox={viewBox}
      rotate={rotate}
      className={name}
    >
      <Path
        size={size}
        fill={normalizedFill}
        stroke={normalizedStroke}
        {...props}
      />
    </Svg>
  );
};

export { Icon };
