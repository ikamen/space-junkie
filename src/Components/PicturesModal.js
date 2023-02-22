import { createPortal } from "react-dom";
import { useState } from "react"
import styled from "styled-components";
import { getSpaceObjectInfo } from "../nasaData";
import Picture from "./Picture";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    rigth: 0;
    bottom: 0;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    border: 10px solid #fff;
    padding-top: 60px;
    background-color: rgba(50,50,50,0.6);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
`

const ModalContainer = styled.div`
    border:1px solid black;
    width: 100%;
    // margin: 0 auto; 
    padding: 25px;
    position: relative;
`

const ModalTitle = styled.h1`
    font-size: 2rem;
    color: #fff;
`

const ModalButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
`

function PicturesModal(props) {
    const [currentPictureIndex,setCurrentPictureIndex] = useState(0);
    let objectInfo = []

    if(getSpaceObjectInfo(props.nameOfObject).length) {
        objectInfo = getSpaceObjectInfo(props.nameOfObject)
    } else {
        objectInfo = getSpaceObjectInfo(props.nameOfConstelation)
    }
  
    const handleButtonClick = () => {
        props.setModal(false);
    }

    const handleNextPicture = () => {
        if(currentPictureIndex < objectInfo.length-1) {
            setCurrentPictureIndex(prev => prev + 1);
        }
    }
    
    const handlePrevPicture = () => {
        if(currentPictureIndex > 0) {
            setCurrentPictureIndex(prev => prev - 1);
        }
    }

    const picture = objectInfo.map(obj => {
        return <Picture key={obj.title} explanation={obj.explanation} url={obj.url} nextPicture={handleNextPicture} prevPicture={handlePrevPicture} />
    })


    return (
        <>
            {
                props.isOpen && 
                    createPortal((
                        <ModalOverlay style={{backgroundImage: `url(${objectInfo[currentPictureIndex].url})`}}>
                            <ModalContainer>
                                <ModalTitle>{props.nameOfObject}</ModalTitle>
                                {picture[currentPictureIndex]}
                                <ModalButton onClick={handleButtonClick}>X</ModalButton>
                            </ModalContainer>
                        </ModalOverlay>

                    ),
                    document.getElementById('portal'))
            }
        </>
    )
}

export default PicturesModal