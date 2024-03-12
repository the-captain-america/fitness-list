import styled, { css } from 'styled-components';
import { mbFn, mtFn } from '@common/Theme/styles';

const SelectOuterContainer = styled.div`
  background: #282e33;
  position: absolute;
  top: calc(100% + 8px);
  z-index: 999;
  width: 100%;
  border: 1px solid rgb(51, 59, 68);
  border-radius: 8px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  }
`;

const SelectOuter = styled.div`
  max-height: 250px;
  overflow-y: auto;
  width: 100%;
  margin-right: 4px;
  margin-bottom: 4px;

  &::-webkit-scrollbar-track {
    background: #3d3c40;
    border: none;
    border-radius: 4px;
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #58575b;
    border-radius: 4px;
    border: none;
    box-shadow: none;
  }
`;

const SelectContainerGroup = styled.ul`
  margin: 0;
  padding: 0;
  margin-right: 4px;
  list-style: none;
  background: #282e33;
  border-radius: 8px;
  padding: 11px 3px 13px 7px;
  box-sizing: border-box;
`;

const SelectStyle = styled.div`
  width: 100%;
  ${mbFn};
  ${mtFn};
  border: 1px solid #333b44;
  border-radius: 8px;
  cursor: pointer;
`;

const SelectOption = styled.li`
  margin: 0;
  list-style: none;
  display: block;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-top: 8px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  padding: 10px 15px;
  color: #909090;
  span.label {
    user-select: none;
    display: block;
    font-size: 15px;
    line-height: 21px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    background: #1f2428;
    border: 1px solid #1f2428;
    span.label {
      color: white;
    }
  }
  &:nth-child(1) {
    margin-top: 0px;
  }

  ${(props) =>
    props.isActive &&
    css`
      background: #1f2428;
      border: 1px solid #1f2428;
      span.label {
        max-width: calc(100% - 20px);
      }
      &:hover {
        background: #1f2428;
        border: 1px solid #1f2428;
      }
      span.label {
        color: white;
      }
    `}
`;

const Chevron = styled.span`
  position: absolute;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  pointer-events: inherit;
  margin: 0;
  padding: 0;
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  border-radius: 4px;
  border: 1px solid transparent;
  &:focus {
    outline: none;
    border: none;
  }
  span.label {
    padding-left: 14px;
    text-align: left;
    font-size: 15px;
    line-height: 21px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 25px);
  }
  ${(props) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      user-select: none;
      span.label {
        color: white;
        font-style: normal;
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
      ${Chevron} {
        svg {
          path {
            stroke: #dcdcdc;
            fill: #dcdcdc;
          }
        }
      }
    `}

  ${(props) =>
    props.isActive &&
    css`
      span.label {
        color: white;
        user-select: none;
        font-style: normal;
      }
    `}
`;

const SelectIcon = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  svg {
    circle {
      fill: rgb(25, 178, 68);
      stroke: white;
    }
    path {
      stroke: white;
    }
    rect {
      stroke: white;
    }
  }
`;

const SelectLabel = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  line-height: 20px;
`;

const SelectContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  background: #1f2428;
  min-width: 162px;
  height: 48px;
  display: block;
  width: 100%;
  border-radius: 8px;
  ${(props) => props.isActive && css``}
`;

export {
  Chevron,
  SelectContainerGroup,
  SelectOuter,
  SelectStyle,
  SelectOption,
  SelectedItem,
  SelectIcon,
  SelectContainer,
  SelectOuterContainer,
  SelectLabel,
};
