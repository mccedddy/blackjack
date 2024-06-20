import React from "react";
import Card from "./Card";
import Container from "./Container";
import Button from "./Button";

function Game({ handleForfeitClick }) {
  return (
    <div className="h-full w-full max-w-xl p-4 flex flex-col gap-2 justify-center items-center">
      {/* Dealer section */}
      <div className="flex flex-col gap-2 items-center w-full">
        <Container text="Dealer" />
        <div className="flex space-x-1">
          <Card />
        </div>
        <Container text="0" />
      </div>

      {/* Action section */}
      <div className="w-auto h-auto flex gap-2 items-center justify-center bg-white p-4 rounded-lg shadow-modalShadow">
        <Button text="2" color="bg-orangeButton" />
        <Button text="+" color="bg-greenButton" />
        <Button text="-" color="bg-redButton" />
        <Button text="F" color="bg-blackButton" onClick={handleForfeitClick} />
      </div>

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
