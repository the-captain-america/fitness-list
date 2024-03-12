import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { keys } from 'ramda';

import {
  TypeLabelContainer,
  TypeLabelItem,
  TypeLabelBlock,
} from './TypeLabel.styled';

const betterIndexOf = (needle, haystack, defaultIndex) => {
  const result = haystack.indexOf(needle);

  if (result !== -1) return result;
  if (typeof defaultIndex !== 'undefined') return defaultIndex;
};

const TypeLabel = ({ types, callback, activeId }) => {
  const idsInOrder = keys(types);
  const [selectedIndex, setSelectedIndex] = useState(
    betterIndexOf(activeId, idsInOrder, 0)
  );

  const currentType = idsInOrder[selectedIndex];
  const currentItem = types?.[currentType];

  const onSelect = (e) => {
    const nextStep = selectedIndex + 1;
    if (nextStep < idsInOrder.length) return setSelectedIndex(nextStep);
    setSelectedIndex(0);
    return;
  };

  useEffect(() => {
    console.log('activeId', activeId);
    callback(currentItem);
    // eslint-disable-next-line
  }, [selectedIndex, activeId]);

  useEffect(() => {
    callback(currentItem);
    // eslint-disable-next-line
  }, []);

  if (idsInOrder.length <= 0) return null;

  return (
    <TypeLabelContainer>
      <TypeLabelItem onClick={onSelect}>
        <TypeLabelBlock type={currentItem.id}>
          {currentItem.label}
        </TypeLabelBlock>
      </TypeLabelItem>
    </TypeLabelContainer>
  );
};

TypeLabel.defaultProps = {
  callback: () => {},
  activeId: 'NORMAL',
  types: {
    WARMUP: { id: 'WARMUP', label: 'WARMUP' },
    DROP_SET: { id: 'DROP_SET', label: 'DROP SET' },
    NORMAL: { id: 'NORMAL', label: 'NORMAL' },
    COOL_DOWN: { id: 'COOL_DOWN', label: 'COOL DOWN' },
  },
};

TypeLabel.propTypes = {
  callback: PropTypes.func,
  activeId: PropTypes.string,
};

export { TypeLabel };
