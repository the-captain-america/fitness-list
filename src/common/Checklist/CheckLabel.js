import React, { forwardRef, useEffect, useRef, useState } from 'react';
import ClickOutside from '@hooks/useClickOutside';
import PropTypes from 'prop-types';
import { useEscape } from '@hooks/useEscape';
import { colorFn, lineHeightFn } from '@utils/styles';
import styled, { css } from 'styled-components';

const widthFnPx = ({ width }) =>
  width &&
  css`
    width: ${width}px;
  `;

const sizeFnPx = ({ size }) =>
  size &&
  css`
    font-size: ${size}px;
  `;

const configStyles = css`
  ${colorFn};
  ${widthFnPx}
  ${sizeFnPx};
  ${lineHeightFn};
`;

const EditInputGroup = styled.div``;

const EditInputField = styled.input`
  font-size: 16px;
  font-weight: inherit;
  line-height: 20px;
  padding: 0;
  font-weight: 500;
  border: none;
  outline: none;
  width: 100px;
  background: transparent;
  &::selection {
    background: black;
    color: white;
  }
  ${configStyles};
`;

const EditContainer = styled.div`
  width: 100%;
`;

const EditHeading = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${configStyles}
`;

const InputField = forwardRef(
  ({ onChange, value, size, focus, id, width, ...props }, ref) => (
    <EditInputGroup className="EditInputGroup">
      <EditInputField
        className="EditInputField"
        type="text"
        ref={ref}
        id={id}
        onChange={onChange}
        value={value}
        focus={focus}
        width={width}
        size={size}
        {...props}
      />
    </EditInputGroup>
  ),
);

const keyCodes = {
  ENTER: 'Enter',
};

const Types = {
  CHANGE_VALUE: 'CHANGE_VALUE',
  CHANGE_MODE: 'CHANGE_MODE',
};

const CheckLabel = ({
  label = '',
  callback = () => {},
  defaultValue = '',
  isActive,
  id,
  config = {},
}) => {
  const refClickOutside = useRef();
  const ref = useRef();
  const [isEditMode, setEditMode] = useState(false);
  const [state, setState] = useState({ value: '' });
  const inputId = `Input_${id}`;
  const handleValue = (value) => {
    if (!id) return;
    callback({ type: Types.CHANGE_VALUE, id, data: value });
  };

  const handleValidation = (arg) => {
    if (!arg || arg.length <= 0) {
      handleValue(defaultValue);
      return;
    }
    handleValue(arg);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setState((state) => ({ ...state, value }));
  };

  const onFocus = () => {
    console.log('ref >>>>', ref);
    if (ref.current) {
      console.log('yup', ref.current);
      // const foundInput = document.getElementById(id);
      // return;
      // ref.focus();
      // ref.current.select();
    }
  };

  const handleFocus = () => {
    setEditMode(true);
    onFocus();
  };

  useEffect(() => {
    if (!isActive) {
      setEditMode(false);
      return;
    }
    handleFocus();
  }, [isActive]);

  const onKeyPress = (e) => {
    const key = e.keyCode || e.charCode;
    if (key === keyCodes.ENTER || key === 13) {
      setEditMode(false);
      handleValidation(state.value);
      callback({ type: Types.CHANGE_MODE, id, data: false });
    }
  };

  useOnClickOutside(refClickOutside, () => {
    if (!isEditMode) return;
    setEditMode(false);
    callback({ type: Types.CHANGE_MODE, id, data: false });
    handleValidation(state.value);
  });

  // This edit mode is triggered by the user pressing the ESC key (but  will only work if the user is in edit mode >> not sure)
  useEscape(() => {
    if (!isEditMode) return;
    callback({ type: Types.CHANGE_MODE, id, data: false });
    setEditMode(false);
  });

  useEffect(() => {
    onFocus();
    if (label !== state.value) {
      setState((state) => ({ ...state, value: label }));
    }
    // eslint-disable-next-line
  }, [label]);

  return (
    <EditContainer className="EditContainer" tabindex={1} ref={refClickOutside}>
      {isEditMode ? (
        <InputField
          value={state.value}
          onChange={onChange}
          maxLength={config.maxLength || 90}
          onFocus={onFocus}
          onKeyPress={onKeyPress}
          focus={isEditMode}
          size={config.size}
          color={config.color}
          id={inputId}
          ref={ref}
          lineHeight={config.lineHeight}
          width={config.width}
        />
      ) : (
        <EditHeading
          size={config.size}
          lineHeight={config.lineHeight}
          width={config.width}
          color={config.color}
          className="EditHeading"
        >
          {state.value}
        </EditHeading>
      )}
    </EditContainer>
  );
};

CheckLabel.defaultProps = {
  isActive: false,
  config: { size: 16, color: 'white', lineHeight: 20 },
};

CheckLabel.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export { CheckLabel };
