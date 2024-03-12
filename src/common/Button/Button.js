import React from 'react';
import PropTypes from 'prop-types';
import { prop, isEmpty, toLower } from 'ramda';
import {
  Primary,
  Secondary,
  Copy,
  Tertiary,
  Small,
  Error,
  Save,
  Text,
  ErrorOutline,
  White,
  Children,
} from './Button.styled';

const buttons = {
  primary: Primary,
  secondary: Secondary,
  tertiary: Tertiary,
  error: Error,
  small: Small,
  copy: Copy,
  text: Text,
  white: White,
  save: Save,
  outline: ErrorOutline,
};

// cy.get('span[data-testid="interaction-outcomes-toggle"]').then((elem) => {
//   //toggle on interaction Outcomes
//   adminToggleOn(elem);
// });

// //assertion -interaction outcomes should be enabled

// cy.get('span[data-testid="interaction-outcomes-toggle"]').should(
//   "have.class",
//   "Mui-checked"
// );
// //toggel on can't skip-YES
// cy.get('span[data-testid="skip-acw-toggle"]').then(($span) => {
//   adminToggleOn($span);
// });

// //toggle off interaction outcomes- NO
// cy.get('span[data-testid="interaction-outcomes-toggle"]').then(($span) => {
//   adminToggleOff($span);
// });

// const genericFunction = (identifier) => (cb = () => {}) =>
//   cy.get(identifier).then((elem) => {
//     cb(elem);
//   });

//   console.log(genericFunction('span[data-testid="interaction-outcomes-toggle"]')(
//     adminToggleOn
//   )

const validateButton = (givenCode, defaultCode) => {
  const code =
    givenCode && givenCode.length > 0 ? toLower(givenCode) : defaultCode;
  const isCodeValid = code in buttons;

  if (isCodeValid) return code;
  return toLower(defaultCode);
};

const Button = ({ variant, ml, label, children, ...props }) => {
  const { layout: layoutStyle } = prop('config')(props) || {};
  const { center } = prop('config')(props);

  const defaultCode = 'primary';
  const code = validateButton(variant, defaultCode);

  const Component = buttons[code];
  return (
    <Component
      ml={ml}
      buttonLabel={!!isEmpty(label)}
      style={layoutStyle}
      center={center}
      {...props}
    >
      {!center && (
        <>
          {label && <span>{label}</span>}
          {children}
        </>
      )}

      {center && (
        <Children>
          {label && <span>{label}</span>}
          {children}
        </Children>
      )}
    </Component>
  );
};

Button.defaultProps = {
  mt: 0,
  mb: 0,
  underline: false,
  config: {},
  variant: 'primary',
};

Button.propTypes = {
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  underline: PropTypes.bool,
  config: PropTypes.object,
  variant: PropTypes.string,
};

export { Button, buttons };
