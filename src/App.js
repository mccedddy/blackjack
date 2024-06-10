import React from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-boardColor shadow-boardShadow">
        <Modal type="menu" />
      </div>
    </div>
  );
}

export default App;
