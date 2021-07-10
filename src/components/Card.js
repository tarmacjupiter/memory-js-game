import React, { useState } from "react";
import "./css/Card.css";

function Card({ cardNum }) {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);

  return (
    <>
      <div className="Card" onClick={onClick}>
        {showResults ? cardNum : null}
      </div>
    </>
  );
}

export default Card;
