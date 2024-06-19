import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [modalType, setModalType] = useState("login");
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setModalVisible={setModalVisible} />
      <div className="flex-grow flex items-center justify-center bg-boardColor shadow-boardShadow">
        {isModalVisible && (
          <Modal
            type={modalType}
            setModalType={setModalType}
            setModalVisible={setModalVisible}
          />
        )}
      </div>
    </div>
  );
}

export default App;
