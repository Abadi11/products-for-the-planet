import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FakeCard from "./FakeCard";

const columns = [1, 2];
const cardsFromBackend = [<FakeCard />];
// for (let i=0; i<=5; i++){
//  cardsFromBackend.push(<FakeCard />)
// }
function DregDrop() {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        {columns.map((column, id) => {
          return (
            <Droppable droppableId={id}>
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
                      width: 250,
                      minHeight: 500,
                    }}
                  >
                    {cardsFromBackend.map((card, index) => {
                     return (
                      // key and draggable can be depended on id
                      <Draggable key={index} draggableId ={index} index={index}>
                       {(provided, snapshot) => {
                        return (
                         <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         style={{
                          ...provided.draggableProps.style
                         }}>
                          {card}
                         </div>
                        )
                       }}
                      </Draggable>
                     )
                    })}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default DregDrop;
