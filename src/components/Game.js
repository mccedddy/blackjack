import React, { useState, useEffect } from "react";
import Card from "./Card";
import Container from "./Container";
import Button from "./Button";

function Game({ handleForfeitClick, bet, money, setMoney }) {
  const [isActionVisible, setActionVisible] = useState(true);
  const [stack, setStack] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerValue, setPlayerValue] = useState([]);
  const [dealerValue, setDealerValue] = useState([]);
  const [stand, setStand] = useState(false);

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
    "10Jc",
    "10Js",
    "10Jd",
    "10Jh",
    "10Qc",
    "10Qs",
    "10Qd",
    "10Qh",
    "10Kc",
    "10Ks",
    "10Kd",
    "10Kh",
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

  const calculateHandValue = (hand) => {
    let value = 0;
    let aces = 0;

    hand.forEach((card) => {
      // Skip unflipped
      if (card.endsWith("0")) {
        return;
      }

      const cardValue = card.slice(0, -1);
      if (cardValue === "A") {
        value += 11;
        aces += 1;
      } else if (["K", "Q", "J"].includes(cardValue)) {
        value += 10;
      } else {
        value += parseInt(cardValue, 10);
      }
    });

    // Adjust for Aces if the value goes over 21
    while (value > 21 && aces) {
      value -= 10;
      aces -= 1;
    }

    return value;
  };

  // Initialize
  useEffect(() => {
    const initializeGame = async () => {
      const shuffledDeck = shuffle([...deck]);
      setStack(shuffledDeck);
      await new Promise((resolve) => setTimeout(resolve, 250));
      await drawCard(setPlayerHand);
      await new Promise((resolve) => setTimeout(resolve, 250));
      await drawCard(setDealerHand);
      await new Promise((resolve) => setTimeout(resolve, 250));
      await drawCard(setPlayerHand);
      await new Promise((resolve) => setTimeout(resolve, 250));
      await drawCard(setDealerHand, true);
    };

    initializeGame();
  }, []);

  useEffect(() => {
    setPlayerValue(calculateHandValue(playerHand));
    setDealerValue(calculateHandValue(dealerHand));
    console.log("Player Hand:", playerHand);
    console.log("Player Value:", playerValue);
    console.log("Dealer Hand:", dealerHand);
    console.log("Dealer Value:", dealerValue);
  }, [playerHand, dealerHand]);

  // Log stack
  useEffect(() => {
    if (stack.length !== 0) {
      console.log("Stack:", stack);
    }
  }, [stack]);

  useEffect(() => {
    const dealerDraw = async () => {
      if (stand && dealerValue < playerValue) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        await drawCard(setDealerHand);
        setDealerValue(calculateHandValue(dealerHand));
      }
    };

    if (stand) {
      dealerDraw();
    }
  }, [stand, dealerValue, playerValue]);

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
        <Container text={dealerValue} />
      </div>

      {/* Action section */}
      {isActionVisible && (
        <div className="w-auto h-auto flex gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
          <Button text="2" color="bg-orangeButton" />
          <Button
            text="+"
            color="bg-greenButton"
            onClick={() => drawCard(setPlayerHand)}
            disabled={stand}
          />
          <Button
            text="-"
            color="bg-redButton"
            onClick={() => {
              revealCards();
              setStand(true);
            }}
          />
          <Button
            text="F"
            color="bg-blackButton"
            onClick={handleForfeitClick}
          />
        </div>
      )}

      {/* Player section */}
      <div className="flex flex-col gap-2 items-center mb-4 w-full">
        <Container text={playerValue} />
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
