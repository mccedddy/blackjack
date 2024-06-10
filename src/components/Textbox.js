import React from "react";

function Textbox({ placeholder, value }) {
  const isPassword = placeholder === "Password";

  return (
    <input
      className="p-2 w-full bg-textboxColor rounded-lg sh-textboxShadow outline-none shadow-textboxShadow"
      type={isPassword ? "password" : "text"}
      placeholder={placeholder}
      value={value}
    ></input>
  );
}

export default Textbox;
