import styled, { css } from 'styled-components';
import { green, mbFn, mtFn } from '@utils/styles';

const DefaultInput = styled.input.attrs({ autoComplete: 'new-search' })`
  outline: none;
  border-radius: 6px;
  background: #282E33;
  font-size: 16px;
  padding: 12px;
  color: white;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  appearance: none;
  margin: 0;
  ${mbFn};
  ${mtFn};
  min-height: 48px;
  border: 1px solid transparent;
  border-bottom: 1px solid #333B44;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
  outline: none;
  &:focus {
    border-bottom: 1px solid #333B44;
    background: #313133;
  }
  &:-webkit-autofill {
    border-bottom:1px solid #333B44;
    background: #313133;
  }
  &:-webkit-autofill:hover {
    border-bottom:1px solid #333B44;
    background: #313133;
  }
  &:-webkit-autofill:focus {
    border-bottom:1px solid #333B44;
    background: #313133;
  }
  ${(props) =>
    props.isMatched &&
    css`
      border: 1px solid ${green};
      color: ${green};
      background: #97f1d7;
      &:focus {
        border: 1px solid ${green};
        color: ${green};
        background: #97f1d7;
      }
    `}
  ${(props) =>
    props.isCopied &&
    css`
      border: 1px solid #53b353;
      color: #53b353;
      background: #97f1d7;
      &:focus {
        border: 1px solid #53b353;
        color: #53b353;
        background: #97f1d7;
      }
    `}

  ${(props) =>
    props.variant === 'warning' &&
    css`
      font-size: 24px;
      background: transparent;
      font-weight: 700;
      border-radius: 0;
      border-radius: 20px;
      background: #ffaa4e;
      text-align: center;
      color: white;
      border: 1px solid #de974c;
      &:focus {
        border: 1px solid #d28533;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
      }
    `}
  &::active {
    background: #ffffff;
  }
  &::focus {
    background: #ffffff;
  }
`;

export { DefaultInput };
