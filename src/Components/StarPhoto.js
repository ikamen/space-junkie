import { useState, useEffect } from "react";
import starIcon from "../images/star.svg";

const styles = {
  img: { height: "5rem", width: "5rem", borderRadius: "50%" },
};

//Get a Photo of the Stellar Object using Right Ascension and Declination
// Right Ascension example: "08h 52m 34.62s"
// Declination example: "+32° 28′ 26.8″"
const StarPhoto = ({ Ra, Dec }) => {
  const [imageData, setImageData] = useState(null);

  //Remove all letters and replace spaces with + symbol
  const ra = Ra.replace(/[^\d.\s]/g, "").replace(/\s+/g, "+");
  const dec = Dec.replace(/[^\d.\s]/g, "").replace(/\s+/g, "+");
  const imageUrl = `https://archive.stsci.edu/cgi-bin/dss_search?v=quickv&r=${ra}&d=%2B${dec}&e=J2000&h=10&w=10&f=gif&c=none&fov=NONE&v3=`;

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
    <div>
      {imageData ? (
        <img style={styles.img} src={imageData} alt="example" />
      ) : (
        <img style={styles.img} src={starIcon} alt="star icon" />
      )}
    </div>
  );
};

export default StarPhoto;
