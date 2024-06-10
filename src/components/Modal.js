import React from "react";
import Texbox from "./Textbox";
import Button from "./Button";
import { ReactComponent as BlackJackIcon } from "../assets/icons/blackjack.svg";

function Modal({ type }) {
  if (type === "menu") {
    return (
      <div className="w-80 h-auto d-flex flex flex-col gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
        <BlackJackIcon />
        <h1 className="text-4xl">BLACKJACK</h1>
        <Texbox placeholder="Email" />
        <Texbox placeholder="Password" />
        <Button text="Login" color="greenButton" />
        <Button text="Register" color="redButton" />
        <p>or</p>
        <Button text="Play as Guest" color="blackButton" />
      </div>
    );
  }
  return <div className="bg-white p-4 rounded-lg"></div>;
}

export default Modal;
