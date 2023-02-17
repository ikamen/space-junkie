import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import Map from "./Components/Map";
import moment from "moment";
import "./App.css";
import setNasaImage from "./Components/nasaImage";
import LocationSearchBar from "./Components/LocationSearchBar";
import Header from "./Components/Header";

function App() {
  const [date, setDate] = useState(new Date());
  const [constelation, setConstelation] = useState({
    value: "",
    label: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  useEffect(() => {
    setNasaImage();
  }, []);

  return (
    <div className="App">
      <Header />
      <div id='search-wrapper' class='d-flex'>
        <h2>Sky Map</h2>
        <LocationSearchBar />
      <Map
        toggleModal={toggleModal}
        isOpen={isModalOpen}
        date={date}
        setDate={setDate}
        constelation={constelation}
        setConstelation={setConstelation}
      />
      </div>
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        date={moment(date).format("YYYY-MM-DD")}
        constelation={constelation}
      />
    </div>
    
  );
}

export default App;
