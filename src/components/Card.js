import React from "react";

function Card({ value }) {
  // const cardImage = value
  //   ? `${process.env.PUBLIC_URL}/assets/cards/${value}.png`
  //   : `${process.env.PUBLIC_URL}/assets/cards/cardBack.png`;

  var cardImage = `${process.env.PUBLIC_URL}/assets/cards/cardBack.png`;

  if (value && !value.endsWith("0")) {
    cardImage = `${process.env.PUBLIC_URL}/assets/cards/${value}.png`;
  }

  return (
    <img
      src={cardImage}
      alt={value ? `Card ${value}` : "Card Back"}
      className="h-20"
    />
  );
}

export default Card;
