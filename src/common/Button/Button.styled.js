import styled, { css } from 'styled-components';
import { mtFn, mbFn, mrFn, mlFn, colors, applyLuminance } from '@common/Theme';

const elementStyles = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
`;

const textStyles = css`
  line-height: 14px;
  font-size: 14px;
  font-weight: 400;
  color: #171717;
`;

const basicStyles = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 14px;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
`;

const basicText = css`
  line-height: 14px;
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Primary = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  background: ${colors.blue};
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: #7ad0ef;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
      span {
        color: #4e4e4e;
      }
      svg {
        path {
          stroke: #4e4e4e;
        }
      }
    `}
`;

const Secondary = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  background: ${colors.purple};
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: #a185bd;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const Small = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  background: ${colors.green};
  color: black;
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  &:hover {
    border: 2px solid ${colors.green};
    background: #50e5bb;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const Tertiary = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  color: black;
  background: ${colors.green};
  span {
    color: black;
  }
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: black;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: #50e5bb;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
      cursor: not-allowed;
      user-select: none;
      span.text {
        color: white;
        font-style: normal;
      }
      &:hover {
        background: #c8c8c8;
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
    `}
`;

const Copy = styled.button`
  background: ${colors.purple};
  ${elementStyles};
  ${textStyles};
  ${pseudoStyles};
  ${mtFn};
  ${mbFn};
  transition: all 0.2s ease-in-out;
  background: transparent;
  border: 1.5px solid ${colors.purple};
  background: transparent;
  ${(props) =>
    props.isLoading &&
    css`
      width: 115px;
    `};
  span {
    color: ${colors.purple};
  }
  svg {
    path {
      stroke: ${colors.purple};
    }
    rect {
      stroke: ${colors.purple};
    }
  }
  svg.REFRESH {
    path {
      stroke: none;
      fill: ${colors.purple};
    }
    rect {
      stroke: none;
      fill: ${colors.purple};
    }
  }
  &:hover {
    background: #b03aee8c;
    span {
      color: #b681d2;
    }
    svg {
      path {
        stroke: #b681d2;
      }
      rect {
        stroke: #b681d2;
      }
    }
    svg.REFRESH {
      path {
        stroke: ${colors.purple};
      }
      rect {
        stroke: none;
      }
    }
  }
`;

const Children = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
`;

const Error = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  background: ${colors.red};
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: ${applyLuminance(colors.red, 0.5)};
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const ErrorOutline = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  background: ${colors.red};
  border: 2px solid ${colors.red};
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: ${applyLuminance(colors.red, 0.5)};
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const White = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  border: 2px solid black;
  color: black;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const Text = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  border: 2px solid transparent;
  background: transparent;
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: transparent;
    span {
      text-decoration: underline;
    }
  }
`;

const Save = styled.button`
  background: ${colors.green};
  ${elementStyles};
  ${textStyles};
  ${pseudoStyles};
`;

export {
  Text,
  ErrorOutline,
  Children,
  Save,
  Primary,
  Error,
  Secondary,
  Small,
  Copy,
  White,
  Tertiary,
};
