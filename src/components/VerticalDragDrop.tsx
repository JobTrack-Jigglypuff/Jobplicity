import * as React from 'react';
import {useState} from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

//need to fetch list data from database
const listItems = [
    {
        id:'1',
        company:'facebook'
    },
    {
        id:'2',
        company:'whatsapp'
    },
    {
        id:'3',
        company:'viber'
    },
    {
        id:'4',
        company:'instragram'
    }
]

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
    const [todo, setTodo] = useState(listItems)

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result
		if (!destination) return

		const items = Array.from(todo)
        console.log(items);
		const [ newOrder ] = items.splice(source.index, 1)
        console.log(newOrder);
		items.splice(destination.index, 0, newOrder)

		setTodo(items)
        console.log(todo);
	}
//return each items
  return (
      <div style={{display:'inline-flex', flexDirection:'row', justifyContent:'center', height:'100%', padding:'10px', margin:'10px'}}>
        <div className="list">
          <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="todo">
                  {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                          {todo.map(({ id, company }, index) => {
                              return (
                                  <Draggable key={id} draggableId={id} index={index}>
                                      {(provided, snapshot) => (
                                          <div
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                          >
                                              {company}
                                          </div>
                                      )}
                                  </Draggable>
                              );
                          })}
                      </div>
                  )}
              </Droppable>
          </DragDropContext>
        </div>
    </div>

    
  );
}
export default VerticalDragDrop;
