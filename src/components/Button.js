import React from "react";

function Button({ text, color, onClick }) {
  var activeColor;
  if (color === "bg-greenButton") {
    activeColor = "active:bg-green-600";
  } else if (color === "bg-redButton") {
    activeColor = "active:bg-red-700";
  } else if (color === "bg-orangeButton") {
    activeColor = "active:bg-yellow-600";
  } else {
    activeColor = "active:bg-neutral-800";
  }

  return (
    <button
      className={`p-2 w-full ${color} rounded-lg outline-none text-white ${activeColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
