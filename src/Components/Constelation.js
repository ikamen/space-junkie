import styled from "styled-components";
import ConstelationObjects from "./ConstelationObjects";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    color: #fff;
    font-size: 25px;
    font-weight: normal;
`

const P = styled.p`
    color: #fff;
`

function Constelation(props) {
    // console.log(props.date)

    return (
        <ContainerDiv>
            <Title>Discover the objects in {props.constelation} constellation on {props.date}</Title>
             <ConstelationObjects constelation={props.constelation} />
        </ContainerDiv>
    )
}   

export default Constelation;

