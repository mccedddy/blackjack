import React from "react";

function Container({ text }) {
  return (
    <div className="p-2 w-full bg-orangeButton rounded-lg outline-none text-white">
      <p>{text}</p>
    </div>
  );
}

export default Container;
