import React from "react";
import "./css/Card.css";

function Board({ deck }) {
  return (
    <>
      {deck.map((numOfCards, index) => {
        return (
          <>
            <div key={index} className="Card">
              {numOfCards.content}
            </div>
            ;
          </>
        );
      })}
    </>
  );
}

export default Board;
