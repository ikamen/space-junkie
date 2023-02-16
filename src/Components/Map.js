import { useState } from "react";
import DatePicker from "react-date-picker";

export default function Map(props) {
    return (
        <>
            <h1>This is map component</h1>
            <DatePicker onChange={props.setDate} value={props.date} />
            <button onClick={props.toggleModal}>{props.isOpen ? 'Hide' : 'Show'} map</button>
        </>
    )
}