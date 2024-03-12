import React, { useEffect, useState } from 'react';
import { prop } from 'ramda';

import { Icon } from '@common/Icon';
import { NumberInput } from '@common/NumberInput';
import { TypeLabel } from '@common/TypeLabel';

import {
  RowContainer,
  RowGroup,
  RowColumn,
  RowButton,
  RowIcon,
  RowNumber,
} from './Draggable.styled';

const DraggableRow = ({
  callback,
  isDragging,
  onRemove,
  onCopy,
  data,
  index,
}) => {
  const id = prop('id')(data);
  const type = prop('type')(data);
  const weight = prop('weight')(data);
  const reps = prop('reps')(data);
  const rest = prop('rest')(data);

  const [localType, setLocalType] = useState(type);
  const [localWeight, setLocalWeight] = useState(weight);
  const [localReps, setLocalReps] = useState(reps);
  const [localRest, setLocalRest] = useState(rest);

  const handleType = (value) => {
    setLocalType(value);
  };

  const handleRep = (value) => {
    setLocalReps(value);
  };
  const handleWeight = (value) => {
    setLocalWeight(value);
  };
  const handleRest = (value) => {
    setLocalRest(value);
  };

  useEffect(() => {
    callback({
      type: localType,
      weight: localWeight,
      reps: localReps,
      rest: localRest,
    });
    console.log('callback item ::', {
      type: localType,
      weight: localWeight,
      reps: localReps,
      rest: localRest,
    });
  }, [localType, localWeight, localReps, localRest]);

  const handleOnRemove = () => onRemove(id);

  return (
    <RowContainer isDragging={isDragging}>
      <RowGroup>
        <RowColumn>
          <RowIcon>
            <Icon
              name="HANDLE"
              fill="#E3E5EB"
              size={20}
              viewBox="-5 -2 20 20"
            />
          </RowIcon>
          <RowNumber>{`${index}.`}</RowNumber>

          <TypeLabel callback={handleType} type={localType || 'WARMUP'} />
        </RowColumn>

        <RowColumn>
          <NumberInput max={1000} value={localWeight} callback={handleWeight} />
        </RowColumn>

        <RowColumn>
          <NumberInput max={500} value={localReps} callback={handleRep} />
        </RowColumn>

        <RowColumn>
          <NumberInput
            value={localRest}
            unit="Sec"
            step={5}
            callback={handleRest}
          />
        </RowColumn>

        <RowColumn customWidth={true}>
          <RowButton onClick={onCopy}>
            <Icon name="COPY" />
          </RowButton>
          <RowButton onClick={handleOnRemove}>
            <Icon name="TRASH" />
          </RowButton>
        </RowColumn>
      </RowGroup>
    </RowContainer>
  );
};

DraggableRow.defaultProps = {
  data: {},
  isDragging: false,
  onRemove: () => {},
  onCopy: () => {},
  callback: () => {},
};

export { DraggableRow };
