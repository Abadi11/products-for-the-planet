import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FakeCard from "./FakeCard";
import OneDragDrop from "./OneDragDrop";

const cardsFromBackend = [
  [
    { id: "card-1", content: "asdads" },
    { id: "card-2", content: "BBBBBB" },
  ],
  [{ id: "card-3", content: "CCCCC" }],
  //[{id: "card-4", content: ""}]
];

function DregDrop() {
  const [cards, setCards] = useState(cardsFromBackend);
  function onDragEnd(result) {
    console.log("columns: ", result);
    if (!result.destination) return;
    const oldColumnIndex = result.source.droppableId;
    const newColumnIndex = result.destination.droppableId;
    const draggedCardId = result.draggableId;
    // console.log({ newColumnIndex, draggedCardId });
    const { source, destination } = result;
    const oldColumn = cards[oldColumnIndex];
    // console.log("column", column);
    // const copiedItems = [...newColumn];
    const [removed] = oldColumn.splice(source.index, 1);
    const newColumn = cards[newColumnIndex];
    newColumn.splice(destination.index, 0, removed);
    //setCards([...cards, newColumn]);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <DragDropContext
        onDragEnd={(result) => {
          return console.log(result), onDragEnd(result);
        }}
      >
        {cards.map((column, columnIndex) => {
          return (
            <div style={{ margin: 10 }}>
              <Droppable key={columnIndex} droppableId={columnIndex.toString()}>
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
                      {cards[columnIndex].map((card, index) => {
                        return (
                          // key and draggable can be depended on id
                          <Draggable
                            key={card.id}
                            draggableId={card.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <FakeCard
                                    id={card.id}
                                    content={card.content}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
        {/*  */}
      </DragDropContext>
      <OneDragDrop onDragEnd={onDragEnd} />
    </div>
  );
}

export default DregDrop;
