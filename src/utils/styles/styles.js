import { css } from 'styled-components';

const trackStyles = css`
  &::-webkit-scrollbar-track {
    background: #eff1f5;
    border: none;
    box-shadow: none;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e3e5eb;
    border: none;
    box-shadow: none;
    border-radius: 6px;
  }
`;

const hiddenFn = ({ isHidden }) =>
  isHidden &&
  css`
    display: none;
  `;

const trackHoverStyle = css`
  &::-webkit-scrollbar-track {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background: none;
    border: none;
    box-shadow: none;
    width: 14px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background: #eeeff1;
    border: none;
    box-shadow: none;
    border-radius: 6px;
  }
  &:hover {
    &::-webkit-scrollbar-track {
      opacity: 1;
    }
    &::-webkit-scrollbar-thumb {
      opacity: 1;
    }
  }
`;

const horizontalPushFn = ({ horizontalPush }) =>
  horizontalPush &&
  css`
    margin-left: ${horizontalPush};
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

const horizontalPullFn = ({ horizontalPull }) =>
  horizontalPull &&
  css`
    margin-right: ${horizontalPull};
  `;

const verticalPullFn = ({ verticalPull }) =>
  verticalPull &&
  css`
    margin-bottom: ${verticalPull};
  `;

const verticalPushFn = ({ verticalPush }) =>
  verticalPush &&
  css`
    margin-top: ${verticalPush};
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

const lineHeightFn = ({ lineHeight }) =>
  lineHeight &&
  css`
    line-height: ${lineHeight};
  `;

const heightFn = ({ height }) =>
  height &&
  css`
    height: ${height};
  `;

const fontSizeFn = ({ size }) =>
  size &&
  css`
    font-size: ${size};
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

const paddingFnc = ({ padding }) =>
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
  horizontalPushFn,
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
  paddingFnc,
  lineHeightFn,
  preventSelectFn,
  horizontalPullFn,
  verticalPullFn,
  verticalPushFn,
  fontSizeFn,
  trackStyles,
  trackHoverStyle,
  mtFn,
  mbFn,
  hiddenFn,
};
