import * as React from 'react';
import { Component, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import VerticalList from "./VerticalDragDrop";


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

const HorizontalDragDrop = () => {

  return(
    <div>
      {/* <VerticalList /> */}
      {/* <VerticalList /> */}
    </div>
  );
};

export default HorizontalDragDrop;
