import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FakeCard from "./FakeCard";
import OneDragDrop from "./OneDragDrop";

const cardsFromBackend = [
  [
    { id: "1", content: "asdads" },
    { id: "2", content: "BBBBBB" },
    { id: "3", content: "CCCCC" },
    { id: "4", content: "" },
  ],
  [],
];

function DregDrop() {
  const [cards, setCards] = useState(cardsFromBackend);
  const [correct, setCorrect] = useState(true);
  const perfectArray = [0, 1, 2, 3];
  const [cor, setCor] = useState([]);
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
    //cor.push(result.destination.index);
    console.log("re", result.destination);

    //console.log("cor", cor);
    setCor(cor.concat(result.draggableId));
  }
  
  // if (ali) {
  //   setCorrect(false);
  // } else if (!ali) {
  //   setCorrect(true);
  // }
  const b = cor.map(function (item) {
    return parseInt(item, 10);
  });
  const c = [];
  b.forEach(num => {
    perfectArray.forEach(pnum => {
      if (pnum === num){
        return c.push(true)
      }else{
        return c.push(false)
      }
    })
  })
  console.log("c", c)
  //const ali = perfectArray.every(b);
  //for (let i = 0; i === perfectArray.length; i++) {
  // if (perfectArray === b) {
  //   console.log("cvghjk");
  //   setCorrect(false);
  // } else {
  //   setCorrect(true);
  // }
  //}
  console.log("b", b);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      {correct && (
        <DragDropContext
          onDragEnd={(result) => {
            return console.log(result), onDragEnd(result);
          }}
        >
          {cards.map((column, columnIndex) => {
            return (
              <div style={{ margin: 10 }}>
                <Droppable
                  key={columnIndex}
                  droppableId={columnIndex.toString()}
                >
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
                          width: "50vw",
                          height: "100vh",
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
      )}
    </div>
  );
}

export default DregDrop;
