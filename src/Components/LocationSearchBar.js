import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "white" : "#fff",
    backgroundColor: state.isSelected ? "#36454F" : "rgba(33,37,41,0.8)",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    padding: '6px',
    backgroundColor: 'rgba(33,37,41,0.8)',
    border: "0.5 solid",
  }),

  input: (defaultStyles) => ({
    ...defaultStyles,
    color: "white",
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "grey",
  }),
  noOptionsMessage: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "rgba(33,37,41,0.8)",
    color: "white",
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "rgba(33,37,41,0.8)",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
};

function LocationSearchBar({ setObserverLatLong }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const loadOptions = (inputValue, callback) => {
    if (inputValue.length < 2) {
      callback([]);
      return;
    }

    const service = new window.google.maps.places.AutocompleteService();
    const options = {
      input: inputValue,
      types: ["geocode"],
    };
    service.getPlacePredictions(options, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const options = results.map((result) => ({
          value: result.place_id,
          label: result.description,
        }));
        callback(options);
      } else {
        callback([]);
      }
    });
  };

  const handleSelectedOption = (selectedOption) => {
    getPlaceLatLng(selectedOption.label);
    setSelectedOption(selectedOption);
  };

  function getPlaceLatLng(address) {
    const apiKey = "AIzaSyBb76wByxJugmpTK-Wir1NLSbsqUBknoww";
    const encodedAddress = encodeURIComponent(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
        setObserverLatLong([lat, lng]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <AsyncSelect
        className="search-element"
        cacheOptions
        defaultOptions
        styles={customStyles}
        loadOptions={loadOptions}
        value={selectedOption}
        onChange={handleSelectedOption}
        placeholder="Enter observer location"
      />
    </div>
  );
}

export default LocationSearchBar;
