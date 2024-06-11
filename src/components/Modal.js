import React from "react";
import Texbox from "./Textbox";
import Container from "./Container";
import Button from "./Button";
import { ReactComponent as BlackJackIcon } from "../assets/icons/blackjack.svg";

function Modal({ type, setModalType }) {
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
        <Container text="$1000" />
        <Texbox placeholder="Bet" />
        <Button text="Play" color="bg-greenButton" />
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
