import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FakeCard from './FakeCard';
function OneDragDrop(props) {
 const card = [{ id: "card-4", content: "sxcdv" }];
 return (
   <div>
     <DragDropContext onDragEnd={props.onDragEnd}>
       <div style={{ margin: 10 }}>
         <Droppable key={3} droppableId={"3"}>
           {(provided, snapshot) => {
             return (
               <div
                 {...provided.droppableProps}
                 ref={provided.innerRef}
                 style={{
                   background: snapshot.isDraggingOver
                     ? "lightblue"
                     : "lightgrey",
                   padding: 4,
                   width: "250",
                   height: "500",
                 }}
               >
                 {/* // key and draggable can be depended on id */}
                 <Draggable key={card[0].id} draggableId={"3"} index={0}>
                   {(provided, snapshot) => {
                     return (
                       <div
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                       >
                         <FakeCard id={card[0].id} content={card[0].content} />
                       </div>
                     );
                   }}
                 </Draggable>
               </div>
             );
           }}
         </Droppable>
       </div>
     </DragDropContext>
   </div>
 );
}

export default OneDragDrop
