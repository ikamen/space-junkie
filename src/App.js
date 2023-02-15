import { useState, useEffect } from 'react';
import Modal from './Components/Modal';
import './App.css';
import { has } from 'lodash';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  const [starMap,setStarMap] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  const [swData,setSwData] = useState([]);
  const applicationId = "eca02537-5f0d-4488-b966-92971fb9735b";
  const applicationSecret = "88982040aa5a1815af1359421d028688df5b2728985734da3953e5dcc014f16f907e3f75ed723dc2feec4768eafec0f1b0f4a39c3f119dea6a74b8291adb0e6a745d26f241331bfc36fd9a5e6ec5d55cbe85fe2eec79423f537f7aa6f95a9ce926e14b5be8fb72ea56ea2ad4710c6f6e"
  const hash = btoa(`${applicationId}:${applicationSecret}`);
  const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'Authorization': `Basic ${hash}`
        },
    body: '{"observer":{"date":"2019-12-20","latitude":51.4637,"longitude":0.2279},"style":"default","view":{"parameters":{"constellation":"ori"},"type":"constellation"}}'
};

  useEffect(() => {
          fetch('https://api.astronomyapi.com/api/v2/studio/star-chart', options)
              .then(res => res.json())
              .then(data => setStarMap(data.data.imageUrl))
  },[])

  return (
    <div className="App">
      <button onClick={toggleModal}>Modal</button>
      <Modal isOpen={isModalOpen} starMap={starMap}/>
      {/* <h1>{starMap}</h1> */}
    </div>
  );
}

export default App;
