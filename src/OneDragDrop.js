import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FakeCard from './FakeCard';
function OneDragDrop() {
 
 return (
   <div>
     <DragDropContext
       onDragEnd={(result) => console.log("mnfvbg", result)}
     >
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
                     <Draggable key={3} draggableId={"3"} index={3}>
                       {(provided, snapshot) => {
                         return (
                           <div
                             ref={provided.innerRef}
                             {...provided.draggableProps}
                             {...provided.dragHandleProps}
                           >
                             <FakeCard />
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
