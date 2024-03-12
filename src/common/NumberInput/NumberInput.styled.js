import styled, { css } from 'styled-components';

const FieldContainer = styled.div`
  width: 100%;
`;

const FieldInputHidden = styled.input`
  appearance: none;
  border: none;
  outline: none;
  opacity: 0;
  position: absolute;
  left: -9999;
`;

const FieldUnit = styled.span`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  color: #a9aeb9;
  width: 100%;
  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml}px;
    `}
`;

const FieldInput = styled.div`
  padding: 13px 8px;
  position: relative;
  border: 1px solid #f7f8fa;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100px;
  background: #f7f8fa;
  span {
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: #a9aeb9;
    width: 100%;
  }
  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid #ff5a45;
      background: white;
      box-shadow: 0px 0px 0px 2px rgba(255, 90, 69, 0.25);
      span {
        color: #121b2d;
      }
      .Controls {
        background: white;
        border-left: 1px solid #e3e5eb;
      }
    `}
`;

const ControlsButton = styled.button`
  outline: none;
  border: none;
  padding: 2px;
  margin: 0;
  width: 100%;
  height: 16px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    background: #e3e5eb;
  }
  &:hover {
    background: transparent;
  }
  &:active {
    background: white;
    svg {
      path {
        stroke: #121b2d;
      }
    }
  }
`;

const FieldControls = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  overflow: hidden;
  width: 32px;
  border-left: 1px solid transparent;
  right: 0;
  top: 0;
  flex-direction: column;
  height: 100%;
`;

export {
  FieldContainer,
  FieldInputHidden,
  FieldInput,
  ControlsButton,
  FieldUnit,
  FieldControls,
};
