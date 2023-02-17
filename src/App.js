import { useState } from "react";
import Modal from "./Components/Modal";
import Map from "./Components/Map";
import moment from "moment";
import "./App.css";
import setNasaImage from "./Components/nasaImage";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Constelation from './Components/Constelation';

function App() {
  const [date,setDate] = useState(new Date());
  const [constelation,setConstelation] = useState({
    value: '',
    label: ''
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  useEffect(() => {
    setNasaImage();
  },[]);
    
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Map
        toggleModal={toggleModal}
        isOpen={isModalOpen}
        date={date}
        setDate={setDate}
        constelation={constelation}
        setConstelation={setConstelation}
      />
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
