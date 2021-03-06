import React, { useState } from "react";
import Card from "./Card";
import "./css/Card.css";

function Board({ deck }) {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);

  return (
    <>
      {deck.map((cardObject, index) => {
        return <Card cardNum={cardObject.content} />;
      })}
    </>
  );
}

export default Board;
