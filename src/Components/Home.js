// Home element should have description from picture of the day props from setNasaImage() with this description and title positioned on center of the page some button
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
    background-color: rgb(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: calc(100vh - 80vh);
    padding: 1em;
    font-size: 1.2em;
    border-radius: 10px;
    // border: 5px solid red;
    fonct-size: 1.2rem;
`

const Title = styled.h3`
    color: #fff;
    font-size: 1.5em;
    text-align: center;
`

const Button = styled.button`
    position: absolute;
    // top: clamp(50rem, 60vw, 75rem);
    bottom: clamp(1rem, 3vw, 4rem);
    right: 20px;
    background: none;
    border: none;
    color: #fff;
`

const Paragraph = styled.p`
    color: #fff;
`

function Home(props) {
    const [isExplanation, setExplanation] = useState(true);

    const handleClick = () => {
        setExplanation(prev => !prev);
    }

    return (
        <>
        { (props.isPictureOfDayLoaded && isExplanation) &&
            <Wrapper>
                <Title>{props.pictureOfDay.title}</Title>
                <Paragraph>{props.pictureOfDay.explanation}</Paragraph>
                <button onClick={handleClick}>Hide</button>            
            </Wrapper>
        }  
        {!isExplanation &&
            <Button onClick={handleClick}>{props.pictureOfDay.title} see more ...</Button>} 

        </>
    )
}

export default Home;