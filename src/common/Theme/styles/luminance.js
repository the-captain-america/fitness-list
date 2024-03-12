import { css } from 'styled-components';

const applyOpacity = (hex, opacity) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
};

const shadowGenerator = (color = '', borderWidth = 1) => css`
  box-shadow: 0px 0px 0px ${borderWidth}px ${color};
`;

// This output darker/lighten shade of a hex colour
// - hex: base colour in hex (with hash)
// - lum: precentage in dicimal formate. +ve for lighter shade and -ve for darker shade.
const applyLuminance = (color, lum = 0) => {
  const luminanceCalculation = (value) => {
    const result = Math.round(
      Math.min(Math.max(0, value + value * lum), 255)
    ).toString(16);

    return result.length < 2 ? `0${result}` : result;
  };

  const getHexArray = (value) => {
    const hexArray = value.replace(/[^0-9a-f]/gi, '').split('');

    if (hexArray.length < 6) {
      return [
        hexArray[0],
        hexArray[0],
        hexArray[1],
        hexArray[1],
        hexArray[2],
        hexArray[2],
      ];
    } else {
      return hexArray;
    }
  };

  const hex = getHexArray(color);

  const getRgbLum = (startIndex) => {
    const rgb = parseInt(hex[startIndex] + hex[startIndex + 1], 16);
    const lumRgb = luminanceCalculation(rgb);

    return lumRgb;
  };

  return `#${getRgbLum(0)}${getRgbLum(2)}${getRgbLum(4)}`;
};

export { applyOpacity, shadowGenerator, applyLuminance };
