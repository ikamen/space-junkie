export const getConstelationData = (constelation) => {
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': '8TGkQquKKwFrtCFmxglXHw==ukEUJeqhdqE3sLjr',
        }
    };
    
    fetch(`https://api.api-ninjas.com/v1/stars?constellation=${constelation}`, options)
        .then(response => response.json())
        .then(data => {
            if(data.length) {
                console.log('data from constelation',data)}
            else {
                console.log('no data for',constelation)
            }})
        .catch(err => console.error(err));   
}


