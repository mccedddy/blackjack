import React from "react";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";

function Navbar() {
  return (
    <nav className="bg-navBarColor p-4">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-white text-xl">Guest</span>
          </div>
          <a
            href="https://www.github.com/mccedddy/blackjack"
            className="text-white mx-4"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
