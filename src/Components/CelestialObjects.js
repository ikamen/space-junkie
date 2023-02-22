import { useState } from "react";
import moment from "moment";
import LocationSearchBar from "./LocationSearchBar";
import ConstellationsSearchBar from "./ConstellationsSearchBar";
import Map from "./Map";
import SearchHistory from "./SearchHistory";

function CelestialObjects(props) {
  const [isMapShown, setMapShown] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isMapSelected, setMapSelected] = useState(false);
  const [formData, setFormData] = useState({});
  const [date, setDate] = useState(new Date());

  const toggleMap = () => setMapShown(!isMapShown);

  return (
    <>
      <div id="search-wrapper" className="d-flex">
        <h2 className="search-heading">Constellation Maps</h2>
        <LocationSearchBar />
        <ConstellationsSearchBar
          toggleMap={toggleMap}
          isMapShown={isMapShown}
          date={date}
          setDate={setDate}
          setMapSelected={setMapSelected}
          isButtonDisabled={isButtonDisabled}
          setButtonDisabled={setButtonDisabled}
          isLoading={isLoading}
          setLoading={setLoading}
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      {isMapSelected && (
        <Map
          isLoading={isLoading}
          setLoading={setLoading}
          mapSelected={isMapSelected}
          isMapShown={isMapShown}
          toggleMap={toggleMap}
          formData={formData}
          date={moment(date).format("YYYY-MM-DD")}
          isButtonDisabled={isButtonDisabled}
          setButtonDisabled={setButtonDisabled}
        />
      )}
      {localStorage.getItem("searchHistory") && <SearchHistory />}
    </>
  );
}

export default CelestialObjects;
