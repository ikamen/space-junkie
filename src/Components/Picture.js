import styled from "styled-components";

const PictureContainer = styled.div`
    display: flex;
    color: #fff;
`

const PictureButton = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
`

function Picture(props) {

    return (
        <PictureContainer>
            <PictureButton onClick={props.prevPicture}>&lt;</PictureButton>
            <span>{props.explanation}</span>
            <PictureButton onClick={props.nextPicture}>&gt;</PictureButton>
        </PictureContainer>
    )
}

export default Picture;