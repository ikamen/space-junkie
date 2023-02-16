function nasaImage(props) {

    const nasaAPIKey = 'vpguNBgY5z5n0C4jP9SfnQaGB0NouzupV3pCCDq0';
    let startDate = new Date ("2022-01-01T03:24:00");
    let diff = new Date().getTime() - startDate.getTime();
    let date = new Date(Math.random() * diff + startDate.getTime());
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    date = [year, month, day].join('-');


    console.log (date);

    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${nasaAPIKey}`)
    .then(res => res.json())
    .then(data => {
        document.body.style.setProperty('background-image', `url(${data.url})`)
    })
   
  }
  
export default nasaImage;
