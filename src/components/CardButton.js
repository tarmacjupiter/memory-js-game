import React from "react";
import Button from "react-bootstrap/Button";

function CardButton({ onShow }) {
  return (
    <div>
      <Button variant="dark" onClick={onShow()}>
        Show Cards
      </Button>
    </div>
  );
}

export default CardButton;
