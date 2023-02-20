import { useState, useEffect } from "react";

import styled from "styled-components";
import { getConstelationData } from "../apiCalls";


const ContainerDiv = styled.div`
    // position: absolute;
    max-width: 850px;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    // margin-top: 0;
    // height: 90%;
    width: 90%;
    background-color: #36454F;
`;

const Img = styled.img`
  display: block;
  max-width: 1200px;
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

function Map(props) {
    console.log('props from map component', props);
    const [mapUrl, setMapUrl] = useState('');
    const [isLoading, setLoading] = useState(false);
    // const [color, setColor] = useState('#07336d')
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
                setMapUrl(data.data.imageUrl);
                props.setButtonDisabled(true);
                props.setLoading(false);
            })
            .then(() => {
                // console.log(props.constelation.label)
                getConstelationData(props.formData.constelationLabel)
            })
    }

    const getUserLocation = (position) => {
        const applicationId = "eca02537-5f0d-4488-b966-92971fb9735b"
        const applicationSecret = "88982040aa5a1815af1359421d028688df5b2728985734da3953e5dcc014f16f907e3f75ed723dc2feec4768eafec0f1b0f4a39c3f119dea6a74b8291adb0e6a745d26f241331bfc36fd9a5e6ec5d55cbe85fe2eec79423f537f7aa6f95a9ce926e14b5be8fb72ea56ea2ad4710c6f6e"
        const hash = btoa(`${applicationId}:${applicationSecret}`);

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        getStarMap(hash, lat, lon, props.formData.date, props.formData.constellationValue);
    };

    useEffect(() => {
        if(hasLoaded) {
            navigator.geolocation.getCurrentPosition(getUserLocation)
            console.log('effect form map')
        }
        setHasLoaded(true)
    },[props.formData,hasLoaded]);

    return (
        <>  
            <Img src={mapUrl} />
        </>
    )
}

export default Map;