import React, { useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useOnClickOutside } from '../../utils/hooks';
import { Icon } from '@common/Icon';
import {
  media,
  flexDirectionFn,
  justifyContentFn,
  preventSelectFn,
  lineHeightFn,
  fontSizeFn,
  weightFn,
  widthFn,
  colorFn,
  linkFn,
  centerFn,
  horizontalPullFn,
  horizontalPushFn,
  verticalPushFn,
  verticalPullFn,
} from '../../utils/styles';

import styled, { css } from 'styled-components';

const Button = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  cursor: pointer;
  position: fixed;
  top: 16px;
  right: 16px;
  padding: 12px;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  z-index: 999;
  background: linear-gradient(
    0deg,
    rgba(113, 0, 192, 1) 0%,
    rgba(156, 46, 232, 1) 100%
  );
`;

const Portal = ({ children, selector }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};

const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  user-select: none;
  ${preventSelectFn};
  ${lineHeightFn};
  ${fontSizeFn};
  ${weightFn};
  ${widthFn};
  ${colorFn};
  ${linkFn};
  ${centerFn};
  ${horizontalPullFn};
  ${horizontalPushFn};
  ${verticalPushFn};
  ${verticalPullFn};
`;

const configLevel = {
  1: 100,
  2: 200,
  3: 300,
  9: 999,
};

const ModalContainer = styled.div.attrs({ className: 'modal-container' })`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 54px 0px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  width: 100%;
  min-width: 320px;
  max-width: 340px;
  left: 50%;
  top: 50%;
  position: fixed;
  transition: all 0.2s ease-in-out;
  transform: translate(-50%, -50%);
  .confirm-button {
    span {
      display: none;
    }
  }
  ${media.xs`
    max-width: 472px;
    min-width: 400px;
    .confirm-button {
      span {
        display: inline-block;
      }
    }
  `}
  z-index: 999;
  ${(props) =>
    props.level &&
    css`
      z-index: ${configLevel[props.level] || 9};
    `}
  ${(props) =>
    props.dev &&
    css`
      z-index: 0;
    `}
`;

const ModalContent = styled.div`
  padding: 24px 24px 0px 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    path {
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover {
    svg {
      path {
        stroke: #e0e0e0;
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 42, 67, 0.24);
  display: none;
  ${(props) =>
    props.level &&
    css`
      z-index: ${configLevel[props.level] || 9};
    `}
  ${(props) =>
    props.isActive &&
    css`
      display: block;
    `}
  ${(props) =>
    props.dev &&
    css`
      z-index: 0;
      position: relative;
    `}
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  ${flexDirectionFn};
  ${justifyContentFn};
`;

const Modal = ({ children, label, style = {} }) => {
  const [isOpen, setOpen] = useState(false);

  const refClickOutside = useRef();

  useOnClickOutside(refClickOutside, () => {
    setOpen(false);
  });

  const handleCallback = (value) => {
    if (value === 'CLOSED') setOpen(false);
  };

  const onPress = () => {
    setOpen(true);
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line
  }, []);

  const renderWrapper = () => (
    <>
      <ModalContainer ref={refClickOutside} level={9}>
        <ModalContent>
          <Block direction="row" justifyContent="space-between">
            <Text
              size="20px"
              lineHeight="24px"
              fontWeight={500}
              style={{ textAlign: 'left' }}
            >
              How does this work?
            </Text>
            <CloseButton onClick={() => setOpen(false)}>
              <Icon name="CLOSE" size={20} />
            </CloseButton>
          </Block>
          {children}
        </ModalContent>
      </ModalContainer>
      <Overlay level={1} isActive />
    </>
  );

  return (
    <>
      <Button onClick={onPress} {...style}>
        {label || <Icon name="INFO" fill="white" stroke="white" size={20} />}
      </Button>
      {isOpen && <Portal selector="#modal">{renderWrapper()}</Portal>}
    </>
  );
};

export { Modal };
