import React from "react";

function Textbox({ placeholder, value, isDisabled }) {
  var align = "";
  const isPassword =
    placeholder === "Password" || placeholder === "Confirm Password";
  if (placeholder === "Bet") {
    align = "text-center";
  }

  return (
    <input
      className={`p-2 w-full bg-textboxColor rounded-lg sh-textboxShadow outline-none shadow-textboxShadow ${align}`}
      type={isPassword ? "password" : "text"}
      placeholder={placeholder}
      value={value}
      disabled={isDisabled}
    ></input>
  );
}

export default Textbox;
