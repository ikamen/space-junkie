import { useState } from "react";
import ConstelationObject from "./ConstelationObject";
import { constelationObjects } from "../constelation-objects";
import styled from "styled-components"
import { nasaData } from "../nasaData";
import { getSpaceObjectInfo } from "../nasaData";

const ContainerDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    max-width: 1200px;
    // box-sizing: border-box;
    // border: 1px solid #fff;
    border-radius: 10px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 1.2rem;
    font-size: 1.2rem;
    background-color: rgba(0,0,0,0.1)
`

export default function ConstelationObjects(props) {
    const constellationArray = constelationObjects.filter(obj => obj.constellation === props.constelation);
    const [currentIndex,setCurrentIndex] = useState(0);
    // console.log('Constelations array from constelation objects',constellationArray)
    
    const handleNext = () => {
        if(currentIndex < constellationArray.length-1) {
            setCurrentIndex(prev => prev + 1);
        }
    }
    
    const handlePrev = () => {
        if(currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }
    
    const constelationObject = constellationArray.map(obj => {
        // const objectsInConstelation = getSpaceObjectInfo(obj.name);
        return <ConstelationObject key={obj.name} objectData={obj} handleNext={handleNext} handlePrev={handlePrev} name={obj.name} isLoading={props.isLoading} />
    })

    return (
        <ContainerDiv>
            {constelationObject[currentIndex]}
        </ContainerDiv>
    )
}