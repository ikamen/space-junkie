import { useState } from "react";
import DatePicker from "react-date-picker";
import { constellations } from "../constelation-data";
import Select from "react-select";
import styled from "styled-components";

export default function Map(props) {
    const [isInputEmpty,setInputEmpty] = useState(false)
    // console.log('props from map',props)

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
            <h1>This is map component</h1>
            <Select options={constellations} onChange={(e) => props.setConstelation({value: e.value,label: e.label})} />
            <DatePicker onChange={props.setDate} value={props.date} />
            <button onClick={handleSubmit}>{props.isOpen ? 'Hide' : 'Show'} map</button>
            {isInputEmpty && <p>Please choose from menu</p>}
        </>
    )
}