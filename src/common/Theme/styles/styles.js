import { css } from 'styled-components';

const hiddenFn = ({ isHidden }) =>
  isHidden &&
  css`
    display: none;
  `;

const mtFn = ({ mt }) =>
  mt &&
  css`
    margin-top: ${mt}px;
  `;

const mbFn = ({ mb }) =>
  mb &&
  css`
    margin-bottom: ${mb}px;
  `;

const pbFn = ({ pb }) =>
  pb &&
  css`
    padding-bottom: ${pb}px;
  `;

const ptFn = ({ pt }) =>
  pt &&
  css`
    padding-top: ${pt}px;
  `;

const mlFn = ({ ml }) =>
  ml &&
  css`
    margin-left: ${ml}px;
  `;

const mrFn = ({ mr }) =>
  mr &&
  css`
    margin-right: ${mr}px;
  `;

const bgColorFn = ({ bgColor }) =>
  bgColor &&
  css`
    background: ${bgColor};
  `;

const preventSelectFn = ({ preventSelect }) =>
  preventSelect &&
  css`
    user-select: none;
  `;

const borderColorFn = ({ color }) =>
  color &&
  css`
    border-color: color;
  `;

const lineHeightFn = ({ lineHeight }) =>
  lineHeight &&
  css`
    line-height: ${lineHeight}px;
  `;

const heightFn = ({ height }) =>
  height &&
  css`
    height: ${height};
  `;

const fontSizeFn = ({ size }) =>
  size &&
  css`
    font-size: ${size}px;
  `;

const weightFn = ({ weight = 500 }) =>
  weight &&
  css`
    font-weight: ${weight};
  `;

const widthFn = ({ width }) =>
  width &&
  css`
    width: ${width};
  `;

const linkFn = ({ link }) =>
  link &&
  css`
    text-decoration: underline;
    cursor: pointer;
  `;

const flipFn = ({ flip }) =>
  flip &&
  css`
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: 'FlipH';
  `;

const rotateFn = ({ rotate }) =>
  rotate &&
  css`
    transform: rotate(${rotate}deg);
  `;

const centerFn = ({ center }) =>
  center &&
  css`
    text-align: center;
  `;

const colorFn = ({ color }) =>
  color &&
  css`
    color: ${color};
  `;

const paddingFn = ({ padding }) =>
  padding &&
  css`
    padding: ${padding};
  `;

const maxHeightFn = ({ maxHeight }) =>
  maxHeight &&
  css`
    max-height: ${maxHeight};
  `;

const flexDirectionFn = ({ direction }) => css`
  flex-direction: ${direction};
`;

const justifyContentFn = ({ justifyContent }) => css`
  justify-content: ${justifyContent};
`;

export {
  weightFn,
  linkFn,
  widthFn,
  centerFn,
  colorFn,
  heightFn,
  flexDirectionFn,
  justifyContentFn,
  maxHeightFn,
  bgColorFn,
  paddingFn,
  lineHeightFn,
  preventSelectFn,
  fontSizeFn,
  mtFn,
  mbFn,
  mlFn,
  mrFn,
  pbFn,
  ptFn,
  flipFn,
  rotateFn,
  hiddenFn,
  borderColorFn,
};
