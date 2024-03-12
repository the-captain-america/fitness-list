import React from 'react';
import { values } from 'ramda';
import styled from 'styled-components';

const RowContainer = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding-left: 12px;
  padding-right: 12px;
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    color: #a9aeb9;
    margin-left: 8px;
    font-weight: 500;
    font-size: 10px;
    min-width: 150px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const DraggableHeader = ({ data = {}, disabled }) => {
  const items = values(data);
  if (disabled) {
    return null;
  }
  if (!items || items.length <= 0) return null;
  return (
    <RowContainer>
      {items.map((item) => (
        <li key={item.label}>{item.label}</li>
      ))}
    </RowContainer>
  );
};

export { DraggableHeader };
