import React, { useState, useEffect } from "react";
import Card from "./Card";
import Container from "./Container";
import Button from "./Button";

function Game({ handleForfeitClick, bet, money, setMoney }) {
  const [isActionVisible, setActionVisible] = useState(true);
  const [stack, setStack] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);

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
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  async function drawCard(handSetter, flipped = false) {
    setStack((prevStack) => {
      const newStack = [...prevStack];
      var card = newStack.shift();
      if (flipped) {
        card += "0";
      }
      console.log(card);
      handSetter((prevHand) => [...prevHand, card]);
      return newStack;
    });
  }

  function unflipCard(card) {
    if (card.endsWith("0")) {
      return card.slice(0, -1);
    }
    return card;
  }

  function revealCards() {
    setDealerHand((prevHand) => {
      const newHand = [...prevHand];
      newHand[newHand.length - 1] = unflipCard(newHand[newHand.length - 1]);
      return newHand;
    });
  }

  // Initialize
  useEffect(() => {
    const initializeGame = async () => {
      const shuffledDeck = shuffle([...deck]);
      setStack(shuffledDeck);
      await new Promise((resolve) => setTimeout(resolve, 200));
      await drawCard(setPlayerHand);
      await new Promise((resolve) => setTimeout(resolve, 200));
      await drawCard(setDealerHand);
      await new Promise((resolve) => setTimeout(resolve, 200));
      await drawCard(setPlayerHand);
      await new Promise((resolve) => setTimeout(resolve, 200));
      await drawCard(setDealerHand, true);
    };

    initializeGame();
  }, []);

  useEffect(() => {
    console.log("Player Hand:", playerHand);
    console.log("Dealer Hand:", dealerHand);
  }, [playerHand, dealerHand]);

  // Log stack
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
        <div id="dealerHand" className="flex space-x-1">
          {dealerHand.map((card, index) => (
            <Card key={index} value={card} />
          ))}
        </div>
        <Container text="0" />
      </div>

      {/* Action section */}
      {isActionVisible && (
        <div className="w-auto h-auto flex gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
          <Button text="2" color="bg-orangeButton" />
          <Button
            text="+"
            color="bg-greenButton"
            onClick={() => drawCard(setPlayerHand)}
          />
          <Button text="-" color="bg-redButton" />
          <Button
            text="F"
            color="bg-blackButton"
            onClick={handleForfeitClick}
          />
          <Button
            text="Unflip"
            color="bg-blackButton"
            onClick={() => {
              revealCards();
            }}
          />
        </div>
      )}

      {/* Player section */}
      <div className="flex flex-col gap-2 items-center mb-4 w-full">
        <Container text="0" />
        <div id="playerHand" className="flex space-x-1">
          {playerHand.map((card, index) => (
            <Card key={index} value={card} />
          ))}
        </div>
        <Container text="Player" />
      </div>
    </div>
  );
}

export default Game;
