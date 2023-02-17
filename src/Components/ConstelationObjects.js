import { useState } from "react";
import ConstelationObject from "./ConstelationObject";
import { constelationPlanets } from "../constelations-planets";
import styled from "styled-components"

const ContainerDiv = styled.div`
    border: 1px solid;
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #fff;
`

export default function ConstelationObjects(props) {
    const constellationArray = constelationPlanets.filter(obj => obj.constellation === props.constelation);
    const [currentIndex,setCurrentIndex] = useState(0);
    const constelationObject = constellationArray.map(obj => {
        return <ConstelationObject name={obj.name}/>
    })

    const handleNext = () => {
        setCurrentIndex(prev => prev + 1)
    }

    const handlePrev = () => {
        setCurrentIndex(prev => prev - 1)
    }

    return (
        <ContainerDiv>
            <button onClick={handlePrev}>prev</button>
            {constelationObject[currentIndex]}
            <button onClick={handleNext}>next</button>
        </ContainerDiv>
    )
}