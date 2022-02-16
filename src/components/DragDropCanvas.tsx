import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import {
  setPopUp,
  setEditApp,
  setItemData,
} from '../Redux/slice/dashBoardSlice';

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
    name: 'Applied',
    value: 'applied',
    items: [],
  },
  [uuidv4()]: {
    name: 'Phone Interview',
    value: 'phone',
    items: [],
  },
  [uuidv4()]: {
    name: 'On-Site Interview',
    value: 'interview',
    items: [],
  },
  [uuidv4()]: {
    name: 'Offer',
    value: 'offer',
    items: [],
  },
  [uuidv4()]: {
    name: 'Reject',
    value: 'rejected',
    items: [],
  },
};

// style for drag
const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  margin: `0 50px 15px 50px`,
  background: isDragging ? '#4a2975' : 'white',
  color: isDragging ? 'white' : 'black',
  border: `1px solid black`,
  fontSize: `20px`,
  borderRadius: `5px`,
  ...draggableStyle,
});

function DragDropCanvas() {
  const dashboardState = useAppSelector((state) => state.dashboard.data);
  const itemData = useAppSelector((state) => state.dashboard.itemData);
  const dispatch = useAppDispatch();
  const [columns, setColumns] = useState<React.SetStateAction<any>>(
    mapAppsToColumns(appColumns, dashboardState)
  );

  const [todo, setTodo] = useState(listItems);

  useEffect(() => {
    // console.log('dashboardState appcolumns useeffect', dashboardState);
    setColumns(mapAppsToColumns(appColumns, dashboardState));
  }, [dashboardState]);

  function mapAppsToColumns(appColumns: any, userApps: any) {
    for (const column in appColumns) {
      appColumns[column].items = userApps[appColumns[column].value];
    }
    return appColumns;
  }

  function handleAppClick(app: any) {
    console.log('from card click', app);
    dispatch(setItemData(app));
    dispatch(setEditApp(true));
    dispatch(setPopUp(true));
  }
  useEffect(() => {
    console.log('itemData', itemData);
  }, [itemData]);

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
        padding: '1em',
        margin: '10px',
        marginTop: '10%',
      }}
    >
      <div
        className='list'
        style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(
            (
              [columnId, column]: [columnId: any, column: any],
              index: number
            ) => {
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
                                ? 'lightpink'
                                : 'lightgrey',
                              padding: 4,
                              width: 250,
                              minHeight: 500,
                            }}
                          >
                            {column.items.map((item: any, index: number) => {
                              return (
                                <Draggable
                                  key={item.app_id.toString()}
                                  draggableId={item.app_id.toString()}
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
                                          padding: 16,
                                          margin: '0 0 8px 0',
                                          minHeight: '50px',
                                          borderRadius: '15px',
                                          backgroundColor: snapshot.isDragging
                                            ? '#456C86'
                                            : 'rgb(' +
                                              Math.floor(Math.random() * 200) +
                                              ',' +
                                              Math.floor(Math.random() * 200) +
                                              ',' +
                                              Math.floor(Math.random() * 200) +
                                              ')',
                                          color: 'white',
                                          ...provided.draggableProps.style,
                                        }}
                                        onClick={() => handleAppClick(item)}
                                      >
                                        {item.company_name}
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
            }
          )}
        </DragDropContext>
      </div>
    </div>
  );
}
export default DragDropCanvas;
