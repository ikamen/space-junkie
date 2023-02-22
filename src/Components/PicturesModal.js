import { createPortal } from "react-dom";
import { useState, useEffect } from "react"
import styled from "styled-components";
import { getSpaceObjectInfo } from "../nasaData";
import Picture from "./Picture";

const ModalOverlay = styled.div`
    // position: fixed - at larger screens;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: whitesmoke;
    width: 90%;
    // height: 90%; - for larger screen
    padding: 10px; 
    background: rgb(0,0,0,0.4)
    border-radius: 5px;
    box-shadow: 0px 0px 20px 1px #666;

    @media(min-width: 1100px) {
        position: fixed;
        height: 90%;
    }
`

const ModalContainer = styled.div`
    // border:1px solid black;
    width: 100%;
    // height: 100%;
    // margin: 0 auto; 
    // padding: 25px;
    display: flex;
    flex-direction: column;

    @media(min-width: 1100px) {
        flex-direction: row;
        height: 100%;
    }
`

const ImageContainer = styled.div`
    // width: 70%; - for large screens
    // height: 100%;
    // border: 10px solid #fff;

    @media(min-width: 1100px) {
        width: 70%;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
`

const ModalTitle = styled.h1`
    font-size: 2rem;
    color: #fff;
`

const ModalButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    border-radius: 50%;
    padding: 10px 15px;
    background: none;
    border: none;
    font-weight: bold;
    color: #fff;
`

function PicturesModal(props) {
    const [currentPictureIndex,setCurrentPictureIndex] = useState(0);
    const [hasPrev,setPrev] = useState(false);
    const [hasNext,setNext] = useState(false);
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
        return (
            <Picture 
                key={obj.title} 
                title={obj.title}
                explanation={obj.explanation}
                url={obj.url}
                nextPicture={handleNextPicture}
                prevPicture={handlePrevPicture}
                hasPrev={hasPrev}
                hasNext={hasNext}
            />
        )
    })

    useEffect(() => {
        if(objectInfo.indexOf(objectInfo[currentPictureIndex]) > 0) {
            setPrev(true)
        } else {
            setPrev(false);
        }
        if((objectInfo.indexOf(objectInfo[currentPictureIndex]) +1) === objectInfo.length) {
            setNext(false)
        } else {
            setNext(true)
        }
    },[currentPictureIndex])

    // style={{backgroundImage: `url(${objectInfo[currentPictureIndex].url})`}}

    return (
        <>
            {
                props.isOpen && 
                    createPortal((
                        <ModalOverlay>
                            <ModalContainer>
                                <ImageContainer>
                                    <Img src={objectInfo[currentPictureIndex].hdurl} />
                                </ImageContainer>
                                {/* <ModalTitle>{props.nameOfObject}</ModalTitle> */}
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