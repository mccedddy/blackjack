import React, { useState } from "react";
import Texbox from "./Textbox";
import Container from "./Container";
import Button from "./Button";
import { ReactComponent as BlackJackIcon } from "../assets/icons/blackjack.svg";

function Modal({ type, setModalType, setModalVisible }) {
  const [bet, setBet] = useState(100);
  const [currentMoney, setCurrentMoney] = useState(1000);

  const play = () => {
    const currentAmount = 1000;
    const betAmount = parseInt(bet, 10);

    const isWholeNumber = /^[0-9]+$/.test(bet);

    if (isWholeNumber && betAmount > 0) {
      if (betAmount <= currentAmount) {
        setModalVisible(false);
      } else {
        alert("You don't have enough money.");
      }
    } else {
      alert("Invalid bet amount. Please enter a whole number.");
    }
  };

  if (type === "login") {
    return (
      <div className="w-80 h-auto d-flex flex flex-col gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
        <BlackJackIcon />
        <h1 className="text-4xl">BLACKJACK</h1>
        <Texbox placeholder="Email" />
        <Texbox placeholder="Password" />
        <Button text="Login" color="bg-greenButton" />
        <Button
          text="Register"
          color="bg-redButton"
          onClick={() => setModalType("register")}
        />
        <p>or</p>
        <Button
          text="Play as Guest"
          color="bg-blackButton"
          onClick={() => setModalType("menu")}
        />
      </div>
    );
  } else if (type === "register") {
    return (
      <div className="w-80 h-auto d-flex flex flex-col gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
        <BlackJackIcon />
        <h1 className="text-4xl">BLACKJACK</h1>
        <Texbox placeholder="Email" />
        <Texbox placeholder="Password" />
        <Texbox placeholder="Confirm Password" />
        <Button text="Register" color="bg-orangeButton" />
        <p>or</p>
        <Button
          text="Back to Login"
          color="bg-blackButton"
          onClick={() => setModalType("login")}
        />
      </div>
    );
  } else if (type === "menu") {
    return (
      <div className="w-80 h-auto d-flex flex flex-col gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
        <BlackJackIcon />
        <h1 className="text-4xl">BLACKJACK</h1>
        <Container text={currentMoney} value={currentMoney} type="money" />
        <Texbox
          placeholder="Bet"
          value={bet}
          onChange={(e) => setBet(e.target.value)}
        />
        <Button text="Play" color="bg-greenButton" onClick={() => play()} />
        <p>or</p>
        <Button
          text="Log Out"
          color="bg-blackButton"
          onClick={() => setModalType("login")}
        />
      </div>
    );
  }
}

export default Modal;
