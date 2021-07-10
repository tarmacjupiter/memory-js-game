//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardButton from "./components/CardButton";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";

//ASK USER FOR AMOUNT OF CARDS
let input = prompt("How many pairs would you like:");

//Convert input string to a number
let parseNum = parseInt(input, 10);

//Array for storing the input
var numbers = [];

//Loop that iterates each num in input
for (var i = 0; i <= input - 1; i++) {
  numbers[i] = i;
}

//Counts how many times you have matched a pair of cards
//let correctPairsNum = 0;

//Counts how many times you missed matches
//let incorrectPairsNum = 0;

let initDeck = numbers
  .concat(numbers)
  .sort(() => Math.random() - 0.5)
  .map((f) => {
    return {
      content: f,
      faceUp: false,
    };
  });

function App() {
  const [deck, setDeck] = useState(initDeck);
  console.log(initDeck);

  function showAllCards() {
    let shownDeck = deck;

    for (const obj in deck) {
      shownDeck[obj].faceUp = true;
    }

    setDeck(shownDeck);
    console.log(shownDeck);
  }

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <CardButton onShow={() => showAllCards} />
        <Board deck={deck} />
      </div>
    </div>
  );
}

export default App;
