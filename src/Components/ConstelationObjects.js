import { useState } from "react";
import ConstelationObject from "./ConstelationObject";
import { constelationObjects } from "../constelation-objects";
import styled from "styled-components"
import { nasaData } from "../nasaData";

const ContainerDiv = styled.div`
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #fff;
    padding: 10px;
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
            setCurrentIndex(prev => prev - 1)
        }
    }
    
    const constelationObject = constellationArray.map(obj => {
        return <ConstelationObject key={obj.name} objectData={obj} handleNext={handleNext} handlePrev={handlePrev}/>
    })

    return (
        <ContainerDiv>
            {constelationObject[currentIndex]}
        </ContainerDiv>
    )
}