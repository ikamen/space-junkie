import { useEffect } from "react";
import styled from "styled-components";
import { getSpaceObjectInfo } from "../nasaData";

const PlanetHeader = styled.div`
    // border: 1px solid #fff;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;    
    // align-content: center;
    color: #fff;
    padding: 10px;
`

const PlanetInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
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
    console.log('is loading from constelation object component', props.isLoading)
    console.log(getSpaceObjectInfo(props.objectData.name))
    return (
            <>
            {!props.isLoading &&
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
                    <button>show more</button>
                </PlanetInfo>
                </>
            }
            </>

    )
}