import moment from 'moment';

function nasaImage() {

    const nasaAPIKey = 'vpguNBgY5z5n0C4jP9SfnQaGB0NouzupV3pCCDq0';

    //Generate a random date between today and start of 2022 to use as a parameter for the NASA API
    let startDate = new Date ("2022-01-01T03:24:00");
    let diff = new Date().getTime() - startDate.getTime();
    let date = moment(Math.random() * diff + startDate.getTime()).format('YYYY-MM-DD');

    //Call the NASA api to get the image for the generated date
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${nasaAPIKey}`)
    .then(res => res.json())
    .then(data => {
        //Set the background property of the body tag to the returned image
        document.body.style.setProperty('background-image', `url(${data.url})`)
    })
   
  }
  
export default nasaImage;
