import React, { useState, useEffect } from 'react';
import { pipe, insert, remove } from 'ramda';
import { DraggableRow } from './DraggableRow';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DraggableContainer } from './DraggableExercise.styled';
import { DraggableHeader } from './DraggableHeader';

const reorder = (list, start, end) => {
  const movedItem = list[start.index];
  const result = pipe(
    remove(start.index, 1),
    insert(end.index, movedItem)
  )(list);

  return result;
};

const DraggableExercise = ({ collection, onRemove }) => {
  const [dragCollection, setDragCollection] = useState(collection);

  const onDragEnd = (result) => {
    const source = result.source;
    const destination = result.destination;

    const currentCollection = dragCollection;

    const nextCollection = reorder(currentCollection, source, destination);

    setDragCollection(nextCollection);
  };

  useEffect(() => {
    setDragCollection(collection);
  }, [collection]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(droppableProvided, droppableSnapshot) => (
          <DraggableContainer
            ref={droppableProvided.innerRef}
            isDraggingOver={droppableSnapshot.isDraggingOver}
          >
            <DraggableHeader
              disabled
              data={{
                type: {
                  label: 'SET/TYPE',
                  id: 'type',
                },
                weight: {
                  label: 'WEIGHT (KG)',
                  id: 'weight',
                },
                reps: {
                  label: 'REPS',
                  id: 'reps',
                },
                rest: {
                  label: 'REST PERIOD',
                  id: 'rest',
                },
                actions: {
                  label: 'ACTIONS',
                  id: 'actions',
                },
              }}
            />

            {dragCollection.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    style={draggableProvided.draggableProps.style}
                    isDragging={draggableSnapshot.isDragging}
                  >
                    <DraggableRow
                      data={item}
                      onRemove={onRemove}
                      index={index + 1}
                      isDragging={draggableSnapshot.isDragging}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </DraggableContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { DraggableExercise };
