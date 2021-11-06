import { flexbox } from "@chakra-ui/styled-system";
import React from "react";

function FakeCard({ id, content }) {
  //const id = []
  return (
    <div
      style={{
        display: "flex",
        userSelect: "none",
        padding: 16,
        margin: "0 0 8px 0",
        minHeight: "50px",
        backgroundColor: "black",
        color: "green",
      }}
    >
      <h3>Id: {id}</h3>

      <p>{content}</p>
    </div>
  );
}

export default FakeCard;
