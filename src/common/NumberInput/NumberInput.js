import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@common/Icon';
import { useOnClickOutside } from '../../hooks';

import {
  FieldContainer,
  FieldInputHidden,
  FieldInput,
  ControlsButton,
  FieldControls,
  FieldUnit,
} from './NumberInput.styled';

const NumberInput = ({
  onFocus,
  value,
  id,
  step,
  min,
  max,
  unit,
  hideButtons,
  callback,
  ...props
}) => {
  const ref = useRef();
  const refClickOutside = useRef();
  const [isFocus, setFocus] = useState(false);
  const [state, setState] = useState(0);

  useOnClickOutside(refClickOutside, () => {
    setFocus(false);
  });

  const validateNumber = (input) => {
    if (input > max) {
      return false;
    } else {
      return true;
    }
  };

  const onChange = (e) => {
    const { value } = e.target;

    if (!validateNumber(value)) {
      e.preventDefault();
      setState(max);
      return;
    }

    if (value.startsWith('0')) {
      e.preventDefault();
      setState(state);
      return;
    }
    setState(value);
  };

  const onKeyPress = (e) => {
    const { value } = e.target;

    const key = e.keyCode || e.charCode;
    if (key === 8 || key === 46) {
      e.preventDefault();
      setState(0);
      return;
    }

    if (value.startsWith('0')) {
      e.preventDefault();
      setState(0);
      return;
    }

    setState(value);
  };

  const _onFocus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const increment = () => {
    const incrementValue = Number(state) + step;
    setState(incrementValue);
  };

  const decrement = () => {
    if (state <= 0) {
      setState(0);
      return;
    }
    setState((state) => state - step);
  };

  const handleFocus = (e) => {
    setFocus(true);
    _onFocus();
  };

  useEffect(() => {
    if (value) {
      setState(value);
    }
  }, [value]);

  useEffect(() => {
    _onFocus();
  }, []);

  return (
    <FieldContainer tabindex={1} ref={refClickOutside} onClick={handleFocus}>
      <FieldInput isFocused={isFocus}>
        <span>
          {state || 0}
          {unit && <FieldUnit ml={4}>{unit}</FieldUnit>}
        </span>
        {isFocus && hideButtons && (
          <FieldControls className="Controls">
            <ControlsButton
              className="ControlsButton"
              tabindex="-1"
              onClick={increment}
            >
              <Icon name="UP_ARROW" size={16} viewBox="0 0 16 16" />
            </ControlsButton>
            <ControlsButton
              className="ControlsButton"
              tabindex="-1"
              onClick={decrement}
            >
              <Icon
                rotate={180}
                name="UP_ARROW"
                size={16}
                viewBox="0 0 16 16"
              />
            </ControlsButton>
          </FieldControls>
        )}
      </FieldInput>
      <FieldInputHidden
        value={state}
        ref={ref}
        onChange={onChange}
        type="number"
        step={step}
        onFocus={onFocus}
        min={0}
        max={max}
        onKeyPress={onKeyPress}
        {...props}
      />
    </FieldContainer>
  );
};

NumberInput.defaultProps = {
  step: 1,
  max: 100,
  min: 0,
  id: 'xyz123',
  unit: '',
  hideButtons: false,
  callback: () => {},
};

NumberInput.propTypes = {
  step: PropTypes.number,
  max: PropTypes.number,
  callback: PropTypes.func,
  min: PropTypes.number,
  id: PropTypes.string,
  unit: PropTypes.string,
  hideButtons: PropTypes.bool,
};

export default NumberInput;
