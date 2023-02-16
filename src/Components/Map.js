import { useState } from "react";
import DatePicker from "react-date-picker";
import { constellations } from "../constelation-data";
import Select from "react-select";

export default function Map(props) {

    return (
        <>
            <h1>This is map component</h1>
            <Select options={constellations} onChange={(e) => props.setConstelation(e.value)}/>
            <DatePicker onChange={props.setDate} value={props.date} />
            <button onClick={props.toggleModal}>{props.isOpen ? 'Hide' : 'Show'} map</button>
        </>
    )
}