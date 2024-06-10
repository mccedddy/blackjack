import React from "react";

function Button({ text, color }) {
  console.log(color);
  if (color === "greenButton") {
    return (
      <button className="p-2 w-full bg-greenButton text-white rounded-lg outline-none active:bg-green-600">
        {text}
      </button>
    );
  } else if (color === "redButton") {
    return (
      <button className="p-2 w-full bg-redButton text-white rounded-lg outline-none active:bg-red-700">
        {text}
      </button>
    );
  } else if (color === "orangeButton") {
    return (
      <button className="p-2 w-full bg-orangeButton text-white rounded-lg outline-none active:bg-yellow-600">
        {text}
      </button>
    );
  } else {
    return (
      <button className="p-2 w-full bg-blackButton text-white rounded-lg outline-none active:bg-gray-800">
        {text}
      </button>
    );
  }

  // return (
  //   <button className={`p-2 w-full bg-${color} rounded-lg outline-none`}>
  //     {text}
  //   </button>
  // );
}

export default Button;
