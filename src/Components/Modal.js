import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { getConstelationData } from '../apiCalls';
import Constelation from './Constelation';
import { StyledComponent } from 'styled-components';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    position: absolute;
    max-width: 960px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    // height: 90%;
    width: 90%;
    background-color: rgba(50,50,50,0.6);
`

const Img = styled.img`
    display: block;
    margin: 0 auto;
`

function Modal(props) {
    console.log(props)
    const [map, setMap] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [color, setColor] = useState('#07336d')
    const [hasLoaded, setHasLoaded] = useState(false);
    const getUserLocation = (position) => {
        const applicationId = "eca02537-5f0d-4488-b966-92971fb9735b"
        const applicationSecret = "88982040aa5a1815af1359421d028688df5b2728985734da3953e5dcc014f16f907e3f75ed723dc2feec4768eafec0f1b0f4a39c3f119dea6a74b8291adb0e6a745d26f241331bfc36fd9a5e6ec5d55cbe85fe2eec79423f537f7aa6f95a9ce926e14b5be8fb72ea56ea2ad4710c6f6e"
        const hash = btoa(`${applicationId}:${applicationSecret}`);

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log(lat);
        // console.log(lon);
        getStarMap(hash, lat, lon, props.date, props.constelation.value);

    }

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
                console.log(props.constelation.label)
                getConstelationData(props.constelation.label)
            })
    }

    useEffect(() => {
        setLoading(true)
        if (hasLoaded) {
            navigator.geolocation.getCurrentPosition(getUserLocation);
        }
        setHasLoaded(true);
    }, [props.date, props.constelation])

    return (
        <>
            {props.isOpen &&
                createPortal((
                    isLoading ? (
                        <ContainerDiv>
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
                            <button onClick={props.toggleModal}>X</button>
                            <Img src={map} alt="constellation map" />
                            <Constelation constelation={props.constelation.label} date={props.date} />
                        </ContainerDiv>
                        )
                ), document.getElementById('portal'))
            }
        </>
    )
}

export default Modal