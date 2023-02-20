import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { getConstelationData } from "../apiCalls";
import Constelation from "./Constelation";
import styled from "styled-components";

const ContainerDiv = styled.div`
    position: absolute;
    max-width: 850px;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 100px;
    // height: 90%;
    width: 90%;
    background-color: #36454F;
`;

const Img = styled.img`
  display: block;
  width: 95%;
  margin: 10px auto;
  margin-bottom: 0;
  position: relative;
  border-radius: 8px;
  background-size: cover;
  backgorund-position: center;
`;
const Button = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.8rem;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  // font-size: .8rem;
  // padding: .2rem;
`;

function Modal(props) {
    // console.log(props)
    const [map, setMap] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [color, setColor] = useState('#07336d')
    const [hasLoaded, setHasLoaded] = useState(false);


    const getStarMap = (hash, lat, lon, date, constelation) => {
        const options = {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
                'Authorization': `Basic ${hash}`,
            },
            body: `{"observer":{"date":"${date}","latitude":${lat},"longitude":${lon}},"style":"default","view":{"parameters":{"constellation":"${constelation}"},"type":"constellation"}}`
        }
        fetch('https://api.astronomyapi.com/api/v2/studio/star-chart', options)
            .then(res => res.json())
            .then(data => {
                setMap(data.data.imageUrl)
                setLoading(false)
            })
            .then(() => {
                // console.log(props.constelation.label)
                getConstelationData(props.constelation.label)
            })
    }

    const getUserLocation = (position) => {
        const applicationId = "eca02537-5f0d-4488-b966-92971fb9735b"
        const applicationSecret = "88982040aa5a1815af1359421d028688df5b2728985734da3953e5dcc014f16f907e3f75ed723dc2feec4768eafec0f1b0f4a39c3f119dea6a74b8291adb0e6a745d26f241331bfc36fd9a5e6ec5d55cbe85fe2eec79423f537f7aa6f95a9ce926e14b5be8fb72ea56ea2ad4710c6f6e"
        const hash = btoa(`${applicationId}:${applicationSecret}`);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    getStarMap(hash, lat, lon, props.date, props.constelation.value);
  };

  useEffect(() => {
    setLoading(true);
    if (hasLoaded) {
      navigator.geolocation.getCurrentPosition(getUserLocation);
    }
    setHasLoaded(true);
  }, [props.date, props.constelation]);

 

    // useEffect(() => {
    //     setLoading(true)
    //     if (hasLoaded) {
    //         navigator.geolocation.getCurrentPosition(getUserLocation);
    //     }
    //     setHasLoaded(true);
    // }, [props.date, props.constelation])

    return (
        <>
            {props.isOpen &&
                createPortal((
                    isLoading ? (
                        <ContainerDiv>
                            <Button onClick={props.toggleModal}>X</Button>
                            <p className='pulse-loader'>
                                <PulseLoader
                                    color={color}
                                    loading={isLoading}
                                    size={20}
                                    aria-label="Loading Spinner"
                                    speedMultiplier='.5'
                                />
                            </p>
                        </ContainerDiv>)
                        : (
                        <ContainerDiv>
                            <Img src={map} alt="constellation map" />
                            <Button onClick={props.toggleModal}>X</Button>
                            <Constelation constelation={props.constelation.label} date={props.date} />
                        </ContainerDiv>
                        )
                ), document.getElementById('portal'))
            }
        </>
    )
}

export default Modal;
