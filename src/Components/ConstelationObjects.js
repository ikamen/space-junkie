import { useState } from "react";
import ConstelationObject from "./ConstelationObject";
import { constelationObjects } from "../constelation-objects";
import styled from "styled-components";
// import { nasaData } from "../nasaData";
import { getSpaceObjectInfo } from "../nasaData";
// import PicturesModal from "./PicturesModal";

const ContainerDiv = styled.div`
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  max-width: 1200px;
  // box-sizing: border-box;
  // border: 1px solid #fff;
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  color: #fff;
  // padding: 1.2rem;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default function ConstelationObjects(props) {
  let constellationArray = constelationObjects.filter(
    (obj) => obj.constellation === props.constelation
  );
  const [isConstellationData, setConstellationData] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!constellationArray.length) {
    constellationArray = getSpaceObjectInfo(props.constelation);
  }

  const handleNext = () => {
    if (currentIndex < constellationArray.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const constelationObject = constellationArray.map((obj) => {
    // const objectsInConstelation = getSpaceObjectInfo(obj.name);
    return (
      <ConstelationObject
        key={obj.name}
        objectData={obj}
        constellation={props.constelation}
        handleNext={handleNext}
        handlePrev={handlePrev}
        name={obj.name}
        isLoading={props.isLoading}
      />
    );
  });

  return <ContainerDiv>{constelationObject[currentIndex]}</ContainerDiv>;
}
