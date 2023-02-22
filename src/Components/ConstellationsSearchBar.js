import { useState } from "react";
import React from "react";
import DatePicker from "react-date-picker";
import { constellations } from "../constelation-data";
import Select from "react-select";
import { PulseLoader } from "react-spinners";

export default function ConstellationsSearchBar(props) {
  const [color, setColor] = useState("#fff");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const label = constellations.filter(
      (obj) => obj.value === e.target.constellationName.value
    )[0].label;
    props.setFormData({
      constellationValue: e.target.constellationName.value,
      constellationLabel: `${label}`,
      date: e.target.date.value,
    });
    props.setButtonDisabled(true);
    props.setLoading(true);
    props.setMapSelected(true);
  };

  const handleConstellationChange = () => {
    props.setButtonDisabled(false);
    props.setLoading(false);
  };

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "white" : "#fff",
      backgroundColor: state.isSelected ? "#36454F" : "rgba(33,37,41,0.8)",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      padding: "6px",
      backgroundColor: "rgba(33,37,41,0.8)",
      border: " 0.5 solid",
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

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Select
          options={constellations}
          styles={customStyles}
          onChange={handleConstellationChange}
          placeholder="Select a constellation"
          className="search-element"
          name="constellationName"
        />

        <DatePicker
          className="date-picker"
          onChange={(e) => props.setDate(e)}
          value={props.date}
          name="date"
        />

        <button
          className="btn border btn-dark"
          disabled={props.isButtonDisabled}
          type="submit"
        >
          {props.isLoading ? (
            <PulseLoader
              color={color}
              loading={props.isLoading}
              size={15}
              aria-label="Loading Spinner"
              speedMultiplier=".5"
            />
          ) : (
            "Show Map"
          )}
        </button>
      </form>
    </>
  );
}
