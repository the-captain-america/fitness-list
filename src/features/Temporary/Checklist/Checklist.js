// callback function that will pass back an array of items containing a structure like so:
import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Icon } from '@common/Icon';
import { Button } from '@common/Button';
import { prop, length, map, propEq, toUpper, pipe, find, isEmpty } from 'ramda';
import {
  IndicatorContainer,
  IconContainer,
  Container,
  CheckItemContainer,
  CheckControl,
  CheckCount,
  CheckGroup,
  CheckLabelSpan,
  CheckStyle,
} from './Checklist.styled';
import { alter, alterLabel, alterCount } from './utils';
import { green } from '@common/Theme';
import { CheckLabel } from './CheckLabel';
import { data } from './data';
// import { AdvancedLabel } from '@common/AdvancedLabel';
import { themeOptions } from './themes';

const cbTypes = {
  REORDER: 'REORDER',
  SELECT: 'SELECT',
  REMOVE: 'REMOVE',
  EDIT: 'EDIT',
  OPEN_ALL: 'OPEN_ALL',
  OPEN: 'OPEN',
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  display: 'flex',
  // change background colour if dragging
  border: isDragging && '1px solid darkgray',
  borderRadius: isDragging && '6px',
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getGroupStyle = (isDraggingOver, height) => ({
  transition: 'all .3s ease-in-out',
  minHeight: height || 'auto',

  background: isDraggingOver ? '#1f2428' : '#282e32',
});

// Ability to edit on selection
const applySequenceByMap =
  (key = 'sequence') =>
  (items = []) =>
    items.map((m, i) => ({ ...m, [key]: i + 1 }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const CheckItem = ({
  onSelect = () => {},
  onEdit = () => {},
  onRemove = () => {},
  onOpen = () => {},
  dragProps = {},
  isHoldingShift = false,
  copyValue = false,
  hideControls = false,
  length,
  isDragging = false,
  showCount,
  showIcon,
  theme = 'primary',
  ...props
}) => {
  const label = props.label;
  const active = props.active;
  const id = props.id;
  const preventNavigation = props.preventNavigation;
  const editable = props.editable;
  const count = props.count || 0;
  const getLength = typeof length === 'number' ? Number(length) : 0;
  const textAreaRef = useRef();
  const [isLocalCopied, setLocalCopied] = useState(false);
  const [localEdit, setLocalEdit] = useState(false);

  useEffect(() => {
    if (!isLocalCopied) return;
    delay(1000).then(() => {
      setLocalCopied(false);
    });
  }, [isLocalCopied]);

  const handleCallback = ({ type, id, data }) => {
    if (type === 'CHANGE_VALUE') {
      onEdit({ id, data });
      setLocalEdit(false);
      return;
    }
    if (type === 'CHANGE_MODE') {
      if (data === false) {
        setLocalEdit(false);
      }
    }
  };

  const onLocalEdit = (e, id) => {
    e.stopPropagation();
    onEdit({ id, data: label });
    setLocalEdit(true);
  };

  const onLocalRemove = (e, id) => {
    e.stopPropagation();
    onRemove(id);
  };

  const onLocalOpen = (e, id) => {
    // shiftHeld
    e.stopPropagation();
    if (!isHoldingShift && !preventNavigation) {
      onOpen({ id });
    }
    if (copyValue && textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
      setLocalCopied(true);
    } else {
      onSelect(e, id);
    }
  };

  return (
    <CheckItemContainer
      id={id}
      onClick={(e) => onLocalOpen(e, id)}
      opacity={count / getLength}
      isDragging={isDragging}
      bgColor={themeOptions[theme][count]}
      isActive={isLocalCopied}
    >
      <CheckControl>
        <IconContainer className="IconCheck" onClick={(e) => onSelect(e, id)}>
          <Icon
            stroke="black"
            fill={green}
            name={active ? 'CHECKBOX_FILLED' : 'CHECKBOX'}
            size={20}
          />
        </IconContainer>
        {showIcon && (
          <IconContainer className="IconDrag" {...dragProps}>
            <Icon name="DRAG" size={20} />
          </IconContainer>
        )}
      </CheckControl>
      {label && !editable && <CheckLabelSpan>{label}</CheckLabelSpan>}
      {label && editable && (
        <CheckLabel
          label={label}
          id={id}
          isActive={localEdit}
          callback={handleCallback}
        />
      )}
      <textarea
        className="Checklist__Textarea"
        ref={textAreaRef}
        value={label}
        readOnly
      />
      {showCount && <CheckCount>{count}</CheckCount>}
      {!hideControls && (
        <CheckControl absolute className="Controls">
          <IconContainer
            className="IconEdit"
            onClick={(e) => onLocalEdit(e, id)}
          >
            <Icon name="EDIT" size={20} />
          </IconContainer>
          <IconContainer
            className="IconDelete"
            onClick={(e) => onLocalRemove(e, id)}
          >
            <Icon name="TRASH" size={20} />
          </IconContainer>
        </CheckControl>
      )}
    </CheckItemContainer>
  );
};

/**
 *
 * @param {*} items should be array of strings / urls
 * @returns undefined
 */
const openList = (items = []) => {
  if (isEmpty(items)) return;
  items.forEach((child) => window.open(child, '_blank', 'noopener,noreferrer'));
};

const getActiveLength = (items = []) =>
  (!items || items.length <= 0 ? [] : items).filter((item) => item.active)
    .length;

const getName = (name, options) => {
  if (!name || name.length <= 0)
    return map(pipe(prop('label'), toUpper))(options.slice(0, 2)).join('_');
  return name;
};

const Checklist = ({
  data = [],
  name: rawName = '',
  title = '',
  callback = () => {},
  mb,
  mt,
  config = {},
}) => {
  const name = getName(rawName, data);
  // previous
  const [state, setState] = useState({
    items: [],
  });

  const [shiftHeld, setShiftHeld] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(100);

  const checkItemRefs = useRef([]);

  checkItemRefs.current = data.map((val, index) =>
    checkItemRefs.current[index] ? checkItemRefs.current[index] : createRef(),
  );

  function downHandler({ key }) {
    if (key === 'Shift') {
      setShiftHeld(true);
    }
  }

  function upHandler({ key }) {
    if (key === 'Shift') {
      setShiftHeld(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  // Setting initialised state
  useEffect(() => {
    if (!data || data.length <= 0) {
      setState((state) => ({ ...state, items: [] }));
      return;
    }
    setState((state) => ({ ...state, items: data }));
  }, [data]);

  const onDragEnd = (result) => {
    // Item has been dropped outside the available list
    if (!result.destination) {
      return;
    }
    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;

    if (result.type === name) {
      const items = reorder(state.items, sourceIndex, destIndex);
      const reorderedItems = applySequenceByMap('sequence')(items);
      setState({
        items: reorderedItems,
      });
      callback({ type: cbTypes.REORDER, data: { items: reorderedItems } });
    }
  };

  const onSelect = (e, id) => {
    e.stopPropagation();
    const activeState = prop('active')(find(propEq('id', id))(state.items));
    const updatedActiveItems = alter(id, !activeState, state.items);
    setState((state) => ({ ...state, items: updatedActiveItems }));
    callback({
      type: cbTypes.SELECT,
      data: { items: updatedActiveItems },
    });
  };

  const onRemove = (id) => {
    const items = data.filter((item) => item.id !== id);
    callback({
      type: cbTypes.REMOVE,
      data: { items: items },
    });
  };

  const onEdit = ({ id, data }) => {
    // callback({ type: cbTypes.EDIT, data: { id, value: data } });
    console.log({ id, data });
    const result = alterLabel(id, data, state.items);
    // const result = setValueByKey(id, 'label', data)(state.items);
  };

  const localOpen = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const onOpen = ({ id }) => {
    if (!id) {
      const activeItems = state.items.filter((k) => prop('active')(k) === true);
      const collatedItems = activeItems.map((item) => item.value);
      openList(collatedItems);

      callback({ type: cbTypes.OPEN_ALL, data: { items: state.items } });
      return;
    }

    const foundItem = find(propEq('id', id))(state.items);
    // Get current count state prior to update
    const countState = prop('count')(foundItem);
    const updatedCountState = countState + 1;
    const updatedItemsByCount = alterCount(id, updatedCountState, state.items);
    setState((state) => ({
      ...state,
      items: updatedItemsByCount,
    }));

    localOpen(foundItem.value);
  };

  const simpleLength = length(state.items);
  const activelength = getActiveLength(state.items);
  const baseHeights = 64;
  const height =
    simpleLength > 0 ? simpleLength * 45 + baseHeights : baseHeights;

  const renderItems = () => {
    if (!state.items || state.items.length <= 0) return null;
    return state.items.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <>
            <CheckStyle
              {...provided.draggableProps}
              ref={provided.innerRef}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
              )}
            >
              <CheckItem
                onEdit={onEdit}
                onSelect={onSelect}
                onRemove={onRemove}
                onOpen={onOpen}
                isHoldingShift={shiftHeld}
                length={simpleLength}
                showCount={config.showCount}
                editable={config.editable}
                theme={config.theme}
                hideControls={config.hideControls}
                copyValue={config.copyValue}
                preventNavigation={config.preventNavigation}
                style={getItemStyle(snapshot.isDragging)}
                dragProps={provided.dragHandleProps}
                {...item}
              />
            </CheckStyle>
            {provided.placeholder}
          </>
        )}
      </Draggable>
    ));
  };

  const renderIndicator = (activeLength) => (
    <IndicatorContainer maxHeight={activeLength > 0}>
      <Button variant="tertiary" onClick={onOpen}>
        Open {activeLength > 0 ? activeLength : 0}{' '}
        {activeLength === 1 ? `item` : `items`}
      </Button>
    </IndicatorContainer>
  );

  const div = useCallback((node) => {
    if (node !== null) setCurrentHeight(node.getBoundingClientRect().height);
    // eslint-disable-next-line
  }, []);

  const calculation = state.items.length ? state.items.length * 43 : 0;
  return (
    <Container
      ref={div}
      maxHeight={`${currentHeight + calculation}px`}
      mb={mb}
      mt={mt}
    >
      {title && <h2>{title}</h2>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={`droppable_${name}`} type={name}>
          {(provided, snapshot) => (
            <>
              <CheckGroup
                ref={provided.innerRef}
                maxHeight={config.maxHeight}
                style={getGroupStyle(snapshot.isDraggingOver, `${height}px`)}
              >
                {renderItems()}
              </CheckGroup>
              {!config.hideIndicator && renderIndicator(activelength)}
              {provided.placeholder}
            </>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

Checklist.defaultProps = {
  data,
  config: {
    showCount: false,
    theme: 'secondary',
    hideIndicator: true,
    showIcon: false,
    hideControls: false,
    maxHeight: 800,
    preventNavigation: false,
  },
};

Checklist.propTypes = {
  config: PropTypes.shape({
    showCount: PropTypes.bool,
    theme: PropTypes.string,
    hideControls: PropTypes.bool,
    hideIndicator: PropTypes.bool,
    maxHeight: PropTypes.number,
    showIcon: PropTypes.bool,
    preventNavigation: PropTypes.bool,
  }),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      sequence: PropTypes.number,
      count: PropTypes.number,
      active: PropTypes.bool,
    }),
  ),
};

export { Checklist };
