import React, { useState } from "react";
import "./css/Card.css";

function Board({ deck }) {
  const [showResults, setShowResults] = useState(true);
  const onClick = () => setShowResults(showResults ? false : true);

  return (
    <>
      {deck.map((numOfCards, index) => {
        return (
          <>
            <div key={index} className="Card" onClick={onClick}>
              {showResults ? numOfCards.content : null}
            </div>
          </>
        );
      })}
    </>
  );
}

export default Board;
