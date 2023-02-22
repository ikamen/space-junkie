import { useState, useEffect } from "react";
import starIcon from "../images/star.svg";

const styles = {
  wrapper: { "border": "1px solid red !important"},
  img: { height: "10rem", width: "10rem" },
  loading: {
    height: "10rem",
    width: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

//Get a Photo of the Stellar Object using Right Ascension and Declination
// Right Ascension example: "08h 52m 34.62s"
// Declination example: "+32° 28′ 26.8″"
const StarPhoto = ({ Ra, Dec }) => {
  const [imageData, setImageData] = useState(null);
  const [zoom, setZoom] = useState(12);
  const [photoMode, setPhotoMode] = useState("Standart");

  function handleChange(event) {
    setPhotoMode(event.target.value);
  }

  if (Ra && Dec) {
    Ra = Ra.replace(/[^−\d.\s]+/g, "")
      .replace(/\s+/g, "+")
      .replace("−", "-");

    Dec = Dec.replace(/[^−\d.\s]+/g, "")
      .replace(/\s+/g, "+")
      .replace("−", "-");
  }

  const zoomOut = () => {
    setZoom(zoom + 2);
  };

  const zoomIn = () => {
    setZoom(zoom - 2);
  };

  const imageUrl =
    photoMode === "Standart"
      ? `https://archive.stsci.edu/cgi-bin/dss_search?v=phase2_gsc2&r=${Ra}&d=${Dec}&e=J2000&h=${zoom}.0&w=${zoom}.0&f=gif&c=none&fov=NONE&v3=`
      : `https://archive.stsci.edu/cgi-bin/dss_search?v=poss2ukstu_ir&r=${Ra}&d=${Dec}&e=J2000&h=${zoom}.0&w=${zoom}.0&f=gif&c=none&fov=NONE&v3=`;

  useEffect(() => {
    async function fetchImageData() {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
      setImageData(objectURL);
    }
    fetchImageData();
  }, [imageUrl]);

  return (
    <div style={{"display": "flex", "justifyContent": "center", "alignContent": "center", "margin-right": "100px"}}>
      <div style={{"display": "flex", "flexDirection": "column", "padding": "10px"}}>

      {imageData ? (
        <img style={styles.img} src={imageData} alt="example" />
        ) : (
          <div style={styles.loading}>Loading...</div>
          )}
      <button styles={{ display: "block" }} onClick={zoomIn}>
        +
      </button>
      <button onClick={zoomOut}>-</button>
      <select value={photoMode} onChange={handleChange}>
        <option value="Standart">Standart</option>
        <option value="Infrared">Infrared</option>
      </select>
      </div>
    </div>
  );
};

export default StarPhoto;
