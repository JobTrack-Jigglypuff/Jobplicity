import * as React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

//need to fetch list data from database
const listItems = [
  {
    id: '1',
    content: 'facebook',
    title: 'Software Engineer',
  },
  {
    id: '2',
    content: 'whatsapp',
    title: 'Software Engineer',
  },
  {
    id: '3',
    content: 'viber',
    title: 'Software Engineer',
  },
  {
    id: '4',
    content: 'instragram',
    title: 'Software Engineer',
  },
];

const appColumns = {
  [uuidv4()]: {
    name: 'List',
    items: listItems,
  },
  [uuidv4()]: {
    name: 'Applied',
    items: [],
  },
  [uuidv4()]: {
    name: 'Phone Interview',
    items: [],
  },
  [uuidv4()]: {
    name: 'On-Site Interview',
    items: [],
  },
  [uuidv4()]: {
    name: 'Offer',
    items: [],
  },
  [uuidv4()]: {
    name: 'Reject',
    items: [],
  },
};

//style for drag
const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
	padding: 10,
	margin: `0 50px 15px 50px`,
	background: isDragging ? "#4a2975" : "white",
	color: isDragging ? "white" : "black",
	border: `1px solid black`,
	fontSize: `20px`,
	borderRadius: `5px`,
	...draggableStyle
})

function VerticalDragDrop() {
  const [todo, setTodo] = useState(listItems);
  const [columns, setColumns] = useState(appColumns);

  const onDragEnd = (result: DropResult, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  // 	setTodo(items)
  //       console.log(todo);
  // }
  //return each items
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        padding: '10px',
        margin: '10px',
      }}
    >
      <div
        className='list'
        style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? 'lightblue'
                              : 'lightgrey',
                            padding: 4,
                            width: 200,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: 'none',
                                        padding: 10,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging
                                          ? '#263B4A'
                                          : '#456C86',
                                        color: 'white',
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>

    
  );
}
export default VerticalDragDrop;
