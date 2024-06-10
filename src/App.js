import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen min-w-screen flex items-center justify-center bg-boardColor shadow-boardShadow">
        <h1 className="text-4xl font-bold text-white font-cardo">BLACKJACK</h1>
      </div>
    </div>
  );
}

export default App;
