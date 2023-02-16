import { useState, useEffect } from 'react';
import Modal from './Components/Modal';
import Map from './Components/Map';
import moment from 'moment';
import './App.css';

function App() {
  const [date,setDate] = useState(new Date());
  const [constelation,setConstelation] = useState('ori');
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  
  return (
    <div className="App">

      <Map toggleModal={toggleModal} isOpen={isModalOpen} date={date} setDate={setDate} constelation={constelation} setConstelation={setConstelation} />
      
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} date={moment(date).format('YYYY-MM-DD')} constelation={constelation} />
      {/* <h1>{starMap}</h1> */}
    </div>
  );
}

export default App;
