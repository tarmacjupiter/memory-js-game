import React from "react";
import "./css/Card.css";

function Board({ deck }) {
  return (
    <>
      {deck.map((numOfCards) => {
        return <div className="Card" />;
      })}
    </>
  );
}

export default Board;
