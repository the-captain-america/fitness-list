import styled, { css } from "styled-components";
import {
  mtFn,
  mbFn,
  mlFn,
  colors,
  maxHeightFn,
  applyLuminance
} from "@common/Theme";

const baseSize = {
  size: 18
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  /* ${maxHeightFn}; */
  ${mtFn};
  ${mbFn};
`;

const IndicatorContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  max-height: 0;
  overflow: hidden;
  justify-content: center;
  ${(props) =>
    props.maxHeight &&
    css`
      max-height: 100px;
    `}
`;

const ellipses = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mtFn};
  ${mbFn};
  ${mlFn};
  margin-left: 4px;
  &.IconDelete,
  &.IconEdit {
    padding: 4px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid transparent;
  }
  &.IconDelete {
    &:hover {
      border: 1px solid ${colors.red};
      background: ${colors.red};
      svg.TRASH {
        path {
          stroke: white;
        }
        line {
          stroke: white;
        }
      }
    }
  }
  &.IconEdit {
    &:hover {
      border: 1px solid ${colors.green};
      background: ${colors.green};
      svg.EDIT {
        path {
          fill: black;
        }
      }
    }
  }

  &.IconCheck {
    width: 32px;
    cursor: pointer;
    svg.CHECKBOX {
      rect {
        stroke: #aeaeae;
      }
    }
  }
  &.IconDrag {
    cursor: grabbing;
  }
`;

const CheckStyle = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 8px;
`;

const Button = styled.button`
  background: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin-right: 4px;
  padding: 12px;
  color: white;
  border-radius: 12px;
  border: 2px solid transparent;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #7ad0ef;
  }
`;

const CheckItemContainer = styled.div`
  background: #333b44;
  width: 100%;
  position: relative;
  border-radius: 6px;
  color: #909090;
  display: flex;
  padding: 10px;
  border: 1px solid transparent;
  justify-content: flex-start;
  align-items: flex-start;
  transition: background 0.3s ease-in-out;
  textarea.Checklist__Textarea {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
  background: #282e32;
  color: white;
  ${(props) =>
    props.isDragging &&
    css`
      transition: none;
      border: 1px solid darkgray;
    &:hover {
      border: 1px solid transparent;
  `}
  ${(props) =>
    props.bgColor &&
    css`
      background: ${applyLuminance(props.bgColor, 0.1)};
    `}
    ${(props) =>
      props.isActive &&
      css`
        background: ${colors.green};
        color: black;
        &:hover {
          background: ${colors.green};
          color: black;
        }
      `};
  &:hover {
    border: 1px solid darkgray;
    .IconEdit {
      opacity: 1;
    }
    .IconDelete {
      opacity: 1;
    }
  }
`;

const CheckControl = styled.div`
  display: flex;
  position: relative;
  ${(props) =>
    props.absolute &&
    css`
      top: 4px;
      right: 4px;
      position: absolute;
    `}

  .IconCheck {
  }
  .IconEdit {
    opacity: 0;
  }
  .IconDelete {
    opacity: 0;
  }
`;

const CheckCount = styled.span`
  position: absolute;
  top: 3px;
  width: ${baseSize.size}px;
  height: ${baseSize.size}px;
  max-height: ${baseSize.size}px;
  max-width: ${baseSize.size}px;
  border-radius: 50%;
  background: ${colors.red};
  border: 2px solid #a41212;
  text-align: center;
  right: 5px;
  z-index: 1;
  line-height: 14px;
  font-size: 10px;
`;

const CheckLabelSpan = styled.span`
  ${ellipses};
  cursor: pointer;
`;

const CheckGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #333b44;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 16px;
  width: 100%;
  border-radius: 8px;
  background: #282e32;
  position: relative;
  min-height: calc(100% - 16px);
  transition: all 0.3s ease-in-out;
  overflow: auto;
  ${(props) =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight}px;
    `}
`;

export {
  IndicatorContainer,
  IconContainer,
  Button,
  CheckStyle,
  Container,
  CheckControl,
  CheckGroup,
  CheckCount,
  CheckLabelSpan,
  CheckItemContainer
};
