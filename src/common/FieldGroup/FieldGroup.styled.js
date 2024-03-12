import styled from 'styled-components';
import { mtFn, mbFn } from '@utils/styles';

const FieldElement = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  ${mtFn};
  ${mbFn};
`;

export { FieldElement };
