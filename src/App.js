import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Game from "./components/Game";

function App() {
  const [modalType, setModalType] = useState("login");
  const [isModalVisible, setModalVisible] = useState(true);
  const [isPlaying, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
    setModalType("action2");
    setModalVisible(true);
  };

  const handleForfeitClick = () => {
    setPlaying(false);
    setModalType("menu");
    setModalVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-boardColor shadow-boardShadow">
        {isPlaying && <Game handleForfeitClick={handleForfeitClick} />}

        {isModalVisible && (
          <Modal
            type={modalType}
            setModalType={setModalType}
            setModalVisible={setModalVisible}
            setPlaying={setPlaying}
            handlePlayClick={handlePlayClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
