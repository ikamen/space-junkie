import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import ConstellationsSearchBar from "./Components/ConstellationsSearchBar";
import moment from "moment";
import "./App.css";
import setNasaImage from "./Components/nasaImage";
import LocationSearchBar from "./Components/LocationSearchBar";
import Header from "./Components/Header";
import { Routes, Route} from "react-router-dom";
import CelestialObjects from "./Components/CelestialObjects";
import Home from "./Components/Home";

function App() {
  // const [date, setDate] = useState(new Date());
  // const [constelation, setConstelation] = useState({
  //   value: "",
  //   label: "",
  // });
  const [isPictureOfDayLoaded,setPictureOfDayLoaded] = useState(false)
  const [pictureOfDay,setPictureOfDay] = useState({})
  // const [isModalOpen, setModalOpen] = useState(false);
  // const toggleModal = () => setModalOpen(!isModalOpen);
  
  useEffect(() => {
    const nasaAPIKey = 'vpguNBgY5z5n0C4jP9SfnQaGB0NouzupV3pCCDq0';

    //Generate a random date between today and start of 2022 to use as a parameter for the NASA API
    let startDate = new Date ("2022-01-01T03:24:00");
    let diff = new Date().getTime() - startDate.getTime();
    let date = moment(Math.random() * diff + startDate.getTime()).format('YYYY-MM-DD');

    //Call the NASA api to get the image for the generated date
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${nasaAPIKey}`)
    .then(res => res.json())
    .then(data => {
        //Set the background property of the body tag to the returned image
        document.body.style.setProperty('background-image', `url(${data.url})`);
        setPictureOfDay(data)
        setPictureOfDayLoaded(true)
    })
  }, []);

  return (
    <div className="App column fx-an-cr">
      <Header />

      <div id="search-wrapper" class="d-flex bg-wrapper">
        <h2 class="search-heading">Constelation Maps </h2>
        <LocationSearchBar />
        <ConstellationsSearchBar
          toggleModal={toggleModal}
          isOpen={isModalOpen}
          date={date}
          setDate={setDate}
          constelation={constelation}
          setConstelation={setConstelation}
        />
      </div>

      <SearchHistory />

      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        date={moment(date).format("YYYY-MM-DD")}
        constelation={constelation}
      /> */}
      <Routes>
        <Route path="/" element={<Home pictureOfDay={pictureOfDay} isPictureOfDayLoaded={isPictureOfDayLoaded}/>} /> 
        <Route path="celestial" element={<CelestialObjects />}/>
          {/* <Route path="missions" element={<SpaceMissions />} /> call to space mission api ??*/}
      </Routes>
    </div>
  );
}

export default App;
