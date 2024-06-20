import React, { useState, useEffect } from "react";
import Card from "./Card";
import Container from "./Container";
import Button from "./Button";

function Game({ handleForfeitClick, bet, money, setMoney }) {
  const [isActionVisible, setActionVisible] = useState(true);
  const [stack, setStack] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  const deck = [
    "1c",
    "1s",
    "1d",
    "1h",
    "2c",
    "2s",
    "2d",
    "2h",
    "3c",
    "3s",
    "3d",
    "3h",
    "4c",
    "4s",
    "4d",
    "4h",
    "5c",
    "5s",
    "5d",
    "5h",
    "6c",
    "6s",
    "6d",
    "6h",
    "7c",
    "7s",
    "7d",
    "7h",
    "8c",
    "8s",
    "8d",
    "8h",
    "9c",
    "9s",
    "9d",
    "9h",
    "10c",
    "10s",
    "10d",
    "10h",
    "11c",
    "11s",
    "11d",
    "11h",
    "12c",
    "12s",
    "12d",
    "12h",
    "13c",
    "13s",
    "13d",
    "13h",
  ];
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  function drawCard() {
    setStack((prevStack) => {
      const newStack = [...prevStack];
      const card = newStack.shift();
      setCurrentCard(card);
      return newStack;
    });
  }

  useEffect(() => {
    // This effect runs once on mount to shuffle deck and set stack
    const shuffledDeck = shuffle([...deck]);
    setStack(shuffledDeck);
  }, []);

  useEffect(() => {
    if (currentCard) {
      console.log("Card:", currentCard);
    }
  }, [currentCard]);

  useEffect(() => {
    if (stack.length !== 0) {
      console.log("Stack:", stack);
    }
  }, [stack]);

  return (
    <div className="h-full w-full max-w-xl p-4 flex flex-col gap-2 justify-center items-center">
      <p className="text-white">Money: {money}</p>
      <p className="text-white">Bet: {bet}</p>
      {/* Dealer section */}
      <div className="flex flex-col gap-2 items-center w-full">
        <Container text="Dealer" />
        <div className="flex space-x-1">
          <Card />
        </div>
        <Container text="0" />
      </div>

      {/* Action section */}
      {isActionVisible && (
        <div className="w-auto h-auto flex gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
          <Button text="2" color="bg-orangeButton" />
          <Button text="+" color="bg-greenButton" onClick={drawCard} />
          <Button text="-" color="bg-redButton" />
          <Button
            text="F"
            color="bg-blackButton"
            onClick={handleForfeitClick}
          />
        </div>
      )}

      {/* Player section */}
      <div className="flex flex-col gap-2 items-center mb-4 w-full">
        <Container text="0" />
        <div className="flex space-x-1">
          <Card />
        </div>
        <Container text="Player" />
      </div>
    </div>
  );
}

export default Game;
