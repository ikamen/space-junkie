import { useState, useEffect } from "react";
import starIcon from "../images/star.svg";

const styles = {
  img: { height: "10rem", width: "10rem" },
};

//Get a Photo of the Stellar Object using Right Ascension and Declination
// Right Ascension example: "08h 52m 34.62s"
// Declination example: "+32° 28′ 26.8″"
const StarPhoto = ({ Ra, Dec }) => {
  const [imageData, setImageData] = useState(null);

  if (Ra && Dec) {
    Ra = Ra.replace(/[^−\d.\s]+/g, "")
      .replace(/\s+/g, "+")
      .replace("−", "-");

    Dec = Dec.replace(/[^−\d.\s]+/g, "")
      .replace(/\s+/g, "+")
      .replace("−", "-");
  }

  const imageUrl = `https://archive.stsci.edu/cgi-bin/dss_search?v=poss2ukstu_ir&r=${Ra}&d=${Dec}&e=J2000&h=12.0&w=12.0&f=gif&c=none&fov=NONE&v3=`;

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
