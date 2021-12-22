import React from "react";
import FourZeroFourImage from "./FourZeroFourImage.jpg";

const FourZeroFour = () => {
  return (
    <div style={{ margin: "15px", textAlign: "center" }}>
      <img
        src={FourZeroFourImage}
        alt="404 error"
        width="700px"
        height="300px"
      />
    </div>
  );
};

export default FourZeroFour;
