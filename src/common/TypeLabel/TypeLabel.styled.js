import styled, { css } from 'styled-components';

const TypeLabelContainer = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypeLabelItem = styled.div`
  cursor: pointer;
  padding: 0;
  user-select: none;
`;

const TypeLabelBlock = styled.div`
 padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 600;
  ${(props) =>
    props.type === 'YEARLY' &&
    css`
      color: white;
      background: orange;
    `}
  ${(props) =>
    props.type === 'MONTHLY' &&
    css`
      color: #f59e0b;
      background: #fef3c7;
    `}
  ${(props) =>
    props.type === 'FORTNIGHTLY' &&
    css`
      color: #a9aeb9;
      background: #f4f5f8;
    `}
  ${(props) =>
    props.type === 'WEEKLY' &&
    css`
      color: white;
      background: #42a4ff;
    `}
`;

export { TypeLabelContainer, TypeLabelBlock, TypeLabelItem };
