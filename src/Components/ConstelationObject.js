import { useState } from "react";
import styled from "styled-components";
import PicturesModal from "./PicturesModal";
import StarPhoto from "./StarPhoto";

const PlanetHeader = styled.div`
  // border: 1px solid #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  // align-content: center;
  color: #fff;
  padding: 10px;
`;

const PlanetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

const Paragraph = styled.p`
  // border: 1px solid #fff;
  // height: 100%;
  // width: 100%;
  margin: 0;
`;

const Button = styled.button`
  background: none;
  border: none;
  // border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
`;

export default function ConstelationObject(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(true);
  };
  //props.objectData.constellation

  return (
    <>
      {!props.isLoading && (
        <>
          {props.objectData.constellation && (
            <>
              <PlanetHeader>
                <Button onClick={props.handlePrev}>&lt; prev</Button>
                <Paragraph>{props.objectData.name}</Paragraph>
                <Button onClick={props.handleNext}>next &gt;</Button>
              </PlanetHeader>
              <PlanetInfo>
                <StarPhoto
                  Ra={props.objectData.right_ascension}
                  Dec={props.objectData.declination}
                />
                <p>Constellation: {props.objectData.constellation}</p>
                <p>Right ascension: {props.objectData.right_ascension}</p>
                <p>Declination: {props.objectData.declination}</p>
                <p>Absolute magnitude: {props.objectData.absolute_magnitude}</p>
                <p>Apparent magnitude: {props.objectData.apparent_magnitude}</p>
                <p>
                  Distance in light years {props.objectData.distance_light_year}
                </p>
                <p>Spectral class {props.objectData.spectral_class}</p>
              </PlanetInfo>
            </>
          )}
        </>
      )}
      {!isModalOpen && <button onClick={handleButtonClick}>show more</button>}
      <PicturesModal
        isOpen={isModalOpen}
        setModal={setModalOpen}
        obj={props.objectData}
        nameOfObject={props.objectData.name}
        nameOfConstelation={props.constellation}
      />
    </>
  );
}
