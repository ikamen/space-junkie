import {createPortal} from 'react-dom';
import { useState, useEffect } from 'react';

function Modal(props) {
    const [map,setMap] = useState('');
    const [isLoading,setLoading] = useState(true);
    const [hasLoaded,setHasLoaded] = useState(false);
    const getUserLocation = (position) => {
        const applicationId = "eca02537-5f0d-4488-b966-92971fb9735b"
        const applicationSecret = "88982040aa5a1815af1359421d028688df5b2728985734da3953e5dcc014f16f907e3f75ed723dc2feec4768eafec0f1b0f4a39c3f119dea6a74b8291adb0e6a745d26f241331bfc36fd9a5e6ec5d55cbe85fe2eec79423f537f7aa6f95a9ce926e14b5be8fb72ea56ea2ad4710c6f6e"
        const hash = btoa(`${applicationId}:${applicationSecret}`);
    
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log(lat);
        // console.log(lon);
        getStarMap(hash,lat,lon);
    
    }
    
    const getStarMap = (hash,lat,lon) => {
        const options = {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
                'Authorization': `Basic ${hash}`,
                },
                body: `{"observer":{"date":"2023-02-28","latitude":${lat},"longitude":${lon}},"style":"default","view":{"parameters":{"constellation":"ori"},"type":"constellation"}}`
        }
        fetch('https://api.astronomyapi.com/api/v2/studio/star-chart', options)
            .then(res => res.json())
            .then(data => {
                setMap(data.data.imageUrl)
                setLoading(false)
            })
    }

    useEffect(() => {
        if(hasLoaded) {
          navigator.geolocation.getCurrentPosition(getUserLocation);
        }
        setHasLoaded(true);
      },[props.isOpen])

    return (
        <>
            {props.isOpen && 
                createPortal((
                    isLoading ? <p>Loading...</p> : <div className='portalOverlay' style={{backgroundImage: `url(${map})`}}>
                    </div>
                ),document.getElementById('portal'))
            }
        </>
    )
}

export default Modal