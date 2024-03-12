import React, { useRef, useState, useEffect } from 'react';

import { Icon } from '@common/Icon';
import PropTypes from 'prop-types';
import { FieldGroup } from '@common/FieldGroup';
import ClickOutside from '@hooks/useClickOutside';
import { isEitherEmpty } from '@utils/ramda';

import {
  SelectContainerGroup,
  SelectStyle,
  SelectOption,
  Chevron,
  SelectedItem,
  SelectIcon,
  SelectOuter,
  SelectOuterContainer,
  SelectContainer,
  SelectLabel,
} from './Select.styled';

const defaultOption = { label: 'Select', value: 'Select', index: 0 };

const getDefault =
  (value = '') =>
  (options = []) => {
    const foundOption = options.find((option) => option.value === value);
    const hasMatch = Boolean(foundOption);
    if (!hasMatch) return defaultOption;
    return foundOption;
  };

const Select = ({
  name,
  callback,
  options,
  disabled,
  value,
  placeholder,
  label,
  mt,
  mb,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleOpen = () => {
    if (disabled) return;
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSelect = (e, item) => {
    e.stopPropagation();
    callback({ name, value: item.value });
    setIsOpen(false);
  };

  useEffect(() => {
    const option = getDefault(value)(options);
    if (option.value === value) return;
    callback({ name, value: option.value });
    // eslint-disable-next-line
  }, [value]);

  const renderItems = (items) => {
    if (isEitherEmpty(items)) {
      return (
        <SelectOption isActive>
          <span className="label">None</span>
          <SelectIcon className="icon-container">
            <Icon name="CHECKMARK" size={20} />
          </SelectIcon>
        </SelectOption>
      );
    }
    return items.map((item) => (
      <SelectOption
        key={item.label}
        isActive={item.value === value}
        onClick={(e) => onSelect(e, item)}
      >
        <span className="label">{item.label}</span>
        {item.value === value && (
          <SelectIcon className="icon-container">
            <Icon name="CHECKMARK" size={20} />
          </SelectIcon>
        )}
      </SelectOption>
    ));
  };

  const renderSelectedOption = (value) => {
    const selectedOption = getDefault(value)(options);
    return (
      <SelectedItem
        isDisabled={disabled}
        isActive={selectedOption.value !== ''}
        className={selectedOption.value !== '' ? 'is-active' : ''}
        onClick={handleOpen}
      >
        {selectedOption.label && (
          <span className="label">{selectedOption.label}</span>
        )}
        <Chevron className="icon">
          <Icon rotate={isOpen ? 0 : 180} name="CHEVRON" size={20} />
        </Chevron>
      </SelectedItem>
    );
  };

  if (isEitherEmpty(options) || !label || !label.length) {
    return null;
  }

  return (
    <FieldGroup
      variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
      mb={mb}
      mt={mt}
    >
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectStyle isActive={isOpen} {...props}>
        <ClickOutside callback={handleClose}>
          <SelectContainer isActive={isOpen}>
            {renderSelectedOption(value)}
            {isOpen && (
              <SelectOuterContainer tabIndex={0} ref={containerRef}>
                <SelectOuter>
                  <SelectContainerGroup>
                    {renderItems(options)}
                  </SelectContainerGroup>
                </SelectOuter>
              </SelectOuterContainer>
            )}
          </SelectContainer>
        </ClickOutside>
      </SelectStyle>
    </FieldGroup>
  );
};

Select.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  options: [],
  value: '',
};

Select.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      index: PropTypes.number,
      sequence: PropTypes.number,
    }),
  ),
  callback: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export { Select };
