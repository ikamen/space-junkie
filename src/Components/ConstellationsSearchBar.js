import { useState } from "react";
import React from "react";
import DatePicker from "react-date-picker";
import { constellations } from "../constelation-data";
import Select from "react-select";
import styled from "styled-components";


export default function ConstellationsSearchBar(props) {
    const [isInputEmpty,setInputEmpty] = useState(false)
    console.log('props from map',props)

    const handleSubmit = () => {
        const constellationFound = constellations.filter(obj => obj.label === props.constelation.label);
        if(!constellationFound.length) {
            setInputEmpty(true)
        } else {
            props.toggleModal();
            setInputEmpty(false);
        }
    }

    const customStyles = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected ? "white" : "#fff",
          backgroundColor: state.isSelected ? '#36454F' : 'rgba(33,37,41,0.8)',
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          backgroundColor: 'rgba(33,37,41,0.8)',
          border: "none",
          boxShadow: "none"
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
      };
    

    return (
        <>
            {/* <h2 class='search-heading'>Constellation Map</h2> */}
            
            <Select
            options={constellations}
            styles={customStyles}
            onChange={(e) => props.setConstelation({value: e.value,label: e.label})}
            placeholder='Select a constellation'
            className='search-element'/>

            <DatePicker
            className = 'date-picker'
            onChange={props.setDate} 
            value={props.date}/>

            <button className="btn btn-dark" onClick={handleSubmit}>{props.isOpen ? 'Hide' : 'Show'} map</button>
            {isInputEmpty && <p>Please choose from menu</p>}
        </>
    )
}