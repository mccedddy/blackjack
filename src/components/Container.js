import React from "react";

function Container({ text, type }) {
  if (type === "money") {
    return (
      <div className="p-2 w-full bg-orangeButton rounded-lg outline-none text-white text-center">
        <p>{text}</p>
      </div>
    );
  } else {
    return (
      <div className="p-2 w-min bg-black bg-opacity-25 rounded-lg sh-textboxShadow outline-none shadow-textboxShadow text-white text-center">
        <p className="font-bold">{text}</p>
      </div>
    );
  }
}

export default Container;
