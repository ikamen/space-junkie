import { useState, useEffect } from 'react';
import Modal from './Components/Modal';
import './App.css';

function App() {
  
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  
  return (
    <div className="App">
      <button onClick={toggleModal}>Show map</button>
      <Modal isOpen={isModalOpen} />
      {/* <h1>{starMap}</h1> */}
    </div>
  );
}

export default App;
