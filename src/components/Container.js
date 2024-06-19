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
      <div className="p-1 w-min bg-white rounded-lg border border-black text-black text-center">
        <p>{text}</p>
      </div>
    );
  }
}

export default Container;
