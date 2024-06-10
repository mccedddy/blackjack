import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [modalType, setModalType] = useState("login");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-boardColor shadow-boardShadow">
        <Modal type={modalType} setModalType={setModalType} />
      </div>
    </div>
  );
}

export default App;
