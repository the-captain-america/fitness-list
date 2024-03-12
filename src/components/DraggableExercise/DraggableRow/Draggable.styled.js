import styled, { css } from 'styled-components';

const RowContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  padding: 4px;
  background: white;
  ${(props) =>
    props.isDragging &&
    css`
      border: 1px solid #e3e5eb;
      box-sizing: border-box;
      box-shadow: 0px 2px 4px rgba(28, 17, 44, 0.04),
        0px 5px 12px rgba(28, 17, 44, 0.06);
      border-radius: 8px;
    `}
`;

const RowGroup = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RowButton = styled.button`
  padding: 12px;
  margin: 0;
  outline: none;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 44px;
  height: 44px;
  border: 1px solid #e3e5eb;
  border-radius: 8px;
  background: white;
  margin-left: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 8px rgba(29, 42, 67, 0.2) !important;
  }
  &:focus {
    box-shadow: 0px 2px 8px rgba(29, 42, 67, 0.2) !important;
  }
  &:first-child {
    margin-left: 0;
  }
`;

const RowColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  min-width: 150px;
  flex: 1;
  margin-left: 8px;
  ${(props) =>
    props.customWidth &&
    css`
      min-width: unset;
      justify-content: flex-end;
    `}
  &:first-child {
    margin-left: 0;
  }
`;

const RowNumber = styled.div`
  line-height: 16px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  min-width: 24px;
  text-align: center;
  padding-left: 4px;
  margin-left: 6px;
  margin-right: 6px;
`;

const RowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export { RowGroup, RowButton, RowContainer, RowColumn, RowNumber, RowIcon };
