import { useEffect } from "react";
import { getConstelationData } from "../apiCalls";
import { constellations } from "../constelation-data";
import styled from "styled-components";
import ConstelationObjects from "./ConstelationObjects";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #fff;
    font-size: 25px;
`

const P = styled.p`
    color: #fff;
`

function Constelation(props) {

    return (
        <ContainerDiv>
                <Title>Discover the objects in {props.constelation} constellation on {props.date}</Title>
                <ConstelationObjects constelation={props.constelation} />
        </ContainerDiv>
    )
}   

export default Constelation;

