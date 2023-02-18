import { useState } from "react";
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

    return (
        <>
            <h2 class='search-heading'>Constellation Map</h2>
            <Select
            options={constellations} 
            onChange={(e) => props.setConstelation({value: e.value,label: e.label})}
            placeholder='Select a constellation'
            class='search-element'/>
            <DatePicker onChange={props.setDate} value={props.date} />
            <button className="btn btn-light" onClick={handleSubmit}>{props.isOpen ? 'Hide' : 'Show'} map</button>
            {isInputEmpty && <p>Please choose from menu</p>}
        </>
    )
}