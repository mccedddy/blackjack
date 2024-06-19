import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App() {
  const [modalType, setModalType] = useState("login");
  const [isModalVisible, setModalVisible] = useState(true);
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setModalVisible={setModalVisible} />
      <div className="flex-grow flex items-center justify-center bg-boardColor shadow-boardShadow">
        {isPlaying && <Card />}

        {isModalVisible && (
          <Modal
            type={modalType}
            setModalType={setModalType}
            setModalVisible={setModalVisible}
            setPlaying={setPlaying}
          />
        )}
      </div>
    </div>
  );
}

export default App;
