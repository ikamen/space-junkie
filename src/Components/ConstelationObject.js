import styled from "styled-components";
import { getSpaceObjectInfo } from "../nasaData";

const PlanetHeader = styled.div`
    border: 1px solid #fff;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;    
    // align-content: center;
    color: #fff;
    padding: 10px;
`

const PlanetInfo = styled.div`

`

const Paragraph = styled.p`
    // border: 1px solid #fff;
    // height: 100%;
    // width: 100%;
    margin: 0;
`

const Button = styled.button`
    background: none;
    border: none;
    // border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
`



export default function ConstelationObject(props) {
    console.log('props form Constelation object',props)
    console.log(getSpaceObjectInfo(props.objectData.name));
    return (
        <>
            <PlanetHeader>
                <Button onClick={props.handlePrev}>&lt; prev</Button>
                <Paragraph>{props.objectData.name}</Paragraph>
                <Button onClick={props.handleNext}>next &gt;</Button>
            </PlanetHeader>
            <PlanetInfo>
                <p>Constellation: {props.objectData.constellation}</p>
                <p>Right ascension: {props.objectData.right_ascension}</p>
                <p>Declination: {props.objectData.declination}</p>
                <p>Absolute magnitude: {props.objectData.absolute_magnitude}</p>
                <p>Apparent magnitude: {props.objectData.apparent_magnitude}</p>
                <p>Distance in light years {props.objectData.distance_light_year}</p>
                <p>Spectral class {props.objectData.spectral_class}</p>
            </PlanetInfo>
        </>
    )
}