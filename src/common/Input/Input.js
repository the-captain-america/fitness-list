import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FieldGroup } from '@common/FieldGroup';
import { Icon } from '@common/Icon';
import { toUpper } from 'ramda';
import { DefaultInput } from './DefaultInput';
import { FieldLabel, InputClose, InputContainer } from './Input.styled';
import { useEscape } from '@hooks/useEscape';

const InputElement = {
  PRIMARY: DefaultInput,
};

const getVariant = (variant = '') => {
  if (!variant || variant.length <= 0) return InputElement['PRIMARY'];
  const type = toUpper(variant);
  return InputElement[type] || InputElement['PRIMARY'];
};

const Input = forwardRef((props, ref) => {
  const {
    variant,
    label,
    mb,
    mt,
    config,
    icon,
    onClear,
    hasClear,
    value,
    ...rest
  } = props;
  const { inputStyles, containerStyles } = config || {};
  const InputField = getVariant(variant);

  useEscape(() => (hasClear ? onClear(rest.name) : () => {}));

  const renderIcon = () => {
    if (!hasClear || !value || value.length <= 0) {
      if (!icon) return null;
      return (
        <InputClose>
          <Icon name={icon} stroke="#A9AEB9" size={20} />
        </InputClose>
      );
    }
    if (!icon) return null;
    return (
      <InputClose onClick={onClear}>
        <Icon
          name="CLOSE_SMALL"
          stroke="#A9AEB9"
          viewBox={`-1 -1 20 20`}
          size={20}
        />
      </InputClose>
    );
  };

  return (
    <FieldGroup
      className={`FieldGroup ${variant}`}
      variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
      mb={mb}
      mt={mt}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      <InputContainer style={containerStyles}>
        <InputField style={inputStyles} ref={ref} value={value} {...rest} />
        {renderIcon()}
      </InputContainer>
    </FieldGroup>
  );
});

Input.defaultProps = {
  variant: 'primary',
  label: '',
  config: {},
  onChange: () => {},
  onClear: () => {},
};

Input.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  config: PropTypes.object,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  hasClear: PropTypes.bool,
};

export { Input };
