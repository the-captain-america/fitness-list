import React from 'react';
import { prop } from 'ramda';
import { FieldElement } from './FieldGroup.styled';
import { Col } from '@common/Grid';

const getVariant = (variant, col) => {
  const hasCol = col && col.length > 1 && col[0] > 1;
  if (hasCol) return 'COL';
  return variant ? variant.toUpperCase() : 'FRAGMENT';
};

const FieldGroup = ({ variant, col = [1], children, ...props }) => {
  const { layout: layoutStyle } = prop('config')(props) || {};
  const type = getVariant(variant, col);

  return {
    FRAGMENT: <>{children}</>,
    ELEMENT: (
      <FieldElement style={layoutStyle} {...props}>
        {children}
      </FieldElement>
    ),
    COL: (
      <Col xs={col[0]} sm={col[1]}>
        <FieldElement style={layoutStyle} {...props}>
          {children}
        </FieldElement>
      </Col>
    ),
  }[type];
};

export { FieldGroup };
