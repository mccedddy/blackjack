import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Game from "./components/Game";

function App() {
  const [modalType, setModalType] = useState("login");
  const [isPlaying, setPlaying] = useState(false);
  const [bet, setBet] = useState(100);
  const [money, setMoney] = useState(1000);

  const handlePlayAsGuest = () => {
    setMoney(1000);
    setModalType("menu");
  };

  const handlePlayClick = () => {
    const betAmount = parseInt(bet, 10);
    const isWholeNumber = /^[0-9]+$/.test(bet);

    if (isWholeNumber && betAmount > 0) {
      if (betAmount <= money) {
        setMoney(money - betAmount);
        setPlaying(true);
      } else {
        alert("You don't have enough money.");
      }
    } else {
      alert("Invalid bet amount. Please enter a whole number.");
    }
  };

  const handleForfeitClick = () => {
    setPlaying(false);
    setModalType("menu");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-boardColor shadow-boardShadow">
        {isPlaying && (
          <Game
            handleForfeitClick={handleForfeitClick}
            bet={bet}
            money={money}
            setMoney={setMoney}
          />
        )}

        {!isPlaying && (
          <Modal
            type={modalType}
            setModalType={setModalType}
            handlePlayAsGuest={handlePlayAsGuest}
            handlePlayClick={handlePlayClick}
            bet={bet}
            setBet={setBet}
            money={money}
            setMoney={setMoney}
          />
        )}
      </div>
    </div>
  );
}

export default App;
