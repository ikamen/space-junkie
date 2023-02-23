import styled from "styled-components";

const PictureExplonation = styled.div`
    display: flex;
    font-size: 1em;
    color: #fff;
    background: #000;
    // width: 30%; - for larger screens
    align-items: center;

    @media(min-width: 1100px) {
        width: 30%;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    // height: 90%;
    overflow-y: auto;

     &::-webkit-scrollbar {
         display: none;
     }

     @media(min-width: 1100px) {
        height: 90%;
     }
 `

const PictureButtonNext = styled.button`
    background-color: transparent;
    border: none;
    // color: #fff;
    color: ${props => props.hasNext ? "#fff" : "#000"};
    cursor: pointer;
    font-size: 1.5rem;
`

const PictureButtonPrev = styled(PictureButtonNext)`
     color: ${props => props.hasPrev ? "#fff" : "#000"};
`

const PictureTitle = styled.h3`
    color: #fff;
    text-align: center;
`

const PictureParagrah = styled.p`
    width: 90%;
    height: 80%;
    display: flex;
    align-items: flex-start;
    padding: 5px;
    overflow-y: auto;
`

function Picture(props) {

    return (
        <PictureExplonation>
            <PictureButtonPrev hasPrev={props.hasPrev} onClick={props.prevPicture}>&lt;</PictureButtonPrev> 
            <TextContainer>
                <PictureTitle>{ props.title}</PictureTitle>
                <PictureParagrah>{props.explanation}</PictureParagrah>
            </TextContainer>
            <PictureButtonNext hasNext={props.hasNext} onClick={props.nextPicture}>&gt;</PictureButtonNext>
        </PictureExplonation>
    )
}

export default Picture;