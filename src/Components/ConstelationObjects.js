import { useState } from "react";
import ConstelationObject from "./ConstelationObject";
import { constelationObjects } from "../constelation-objects";
import styled from "styled-components"

const ContainerDiv = styled.div`
    border: 1px solid;
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #fff;
`

const Button = styled.button`
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
`

export default function ConstelationObjects(props) {
    const constellationArray = constelationObjects.filter(obj => obj.constellation === props.constelation);
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
            <Button onClick={handlePrev}>prev</Button>
            {constelationObject[currentIndex]}
            <Button onClick={handleNext}>next</Button>
        </ContainerDiv>
    )
}