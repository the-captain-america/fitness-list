import { css } from 'styled-components';

const basicStyles = css`
  display: inline-flex;
  flex-direction: row;
  border: none;
  box-sizing: border-box;
`;

const basicTextStyles = css`
  line-height: 14px;
  font-size: 14px;
`;

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export { basicStyles, basicTextStyles, pseudoStyles };
