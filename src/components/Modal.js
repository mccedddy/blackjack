import React, { useState } from "react";
import Texbox from "./Textbox";
import Container from "./Container";
import Button from "./Button";

function Modal({
  type,
  setModalType,
  bet,
  setBet,
  money,
  setMoney,
  handlePlayClick,
  handlePlayAsGuest,
}) {
  if (type === "login") {
    return (
      <div className="w-80 h-auto flex flex-col gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/blackjack.svg`}
          alt="Blackjack"
        />
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
          onClick={() => handlePlayAsGuest()}
        />
      </div>
    );
  } else if (type === "register") {
    return (
      <div className="w-80 h-auto flex flex-col gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/blackjack.svg`}
          alt="Blackjack"
        />
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
      <div className="w-80 h-auto flex flex-col gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/blackjack.svg`}
          alt="Blackjack"
        />
        <h1 className="text-4xl">BLACKJACK</h1>
        <Container text={money} value={money} type="money" />
        <Texbox
          placeholder="Bet"
          value={bet}
          onChange={(e) => setBet(e.target.value)}
        />
        <Button text="Play" color="bg-greenButton" onClick={handlePlayClick} />
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
