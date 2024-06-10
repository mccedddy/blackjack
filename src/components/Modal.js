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
        <Button
          text="Login"
          color="greenButton"
          onClick={() => setModalType("menu")}
        />
        <Button
          text="Register"
          color="redButton"
          onClick={() => setModalType("register")}
        />
        <p>or</p>
        <Button text="Play as Guest" color="blackButton" />
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
        <Button text="Register" color="orangeButton" />
        <p>or</p>
        <Button
          text="Back to Login"
          color="blackButton"
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
        <Button text="Play" color="greenButton" />
        <p>or</p>
        <Button
          text="Log Out"
          color="blackButton"
          onClick={() => setModalType("login")}
        />
      </div>
    );
  }
  return <div className="bg-white p-4 rounded-lg"></div>;
}

export default Modal;
