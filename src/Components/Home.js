// Home element should have description from picture of the day props from setNasaImage() with this description and title positioned on center of the page some button
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
    background-color: rgb(0,0,0,0.4);
    border: 5px solid red;
`

const Title = styled.h3`
    color: #fff;
`

const Button = styled.button`
    background: none;
    border: none;
    color: #fff;
`

const Paragraph = styled.p`
    color: #fff;
`

function Home(props) {
    const [isExplanation, setExplanation] = useState(false);

    const handleClick = () => {
        setExplanation(prev => !prev);
    }

    // console.log('props from home',props)
    return (
        <Wrapper>
            <Title>{props.pictureOfDay.title} <Button onClick={handleClick}>see more ....</Button></Title>
            {isExplanation && <Paragraph>${props.pictureOfDay.explanation} <Button onClick={handleClick}>Hide</Button></Paragraph>}            
        </Wrapper>
    )
}

export default Home;