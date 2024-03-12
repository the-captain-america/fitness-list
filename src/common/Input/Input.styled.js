import styled from 'styled-components';

const FieldLabel = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  line-height: 20px;
  span {
    font-size: 11px;
    color: white;
  }
`;

const InputContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const InputClose = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  outline: none;
  border: 1px solid transparent;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: grey;
    border: 1px solid #a9aeb9;
  }
`;

export { FieldLabel, InputClose, InputContainer };
