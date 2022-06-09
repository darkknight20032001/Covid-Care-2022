import React from "react";
import "./CovidPrecaution.css";
const CovidPrecaution = ({ content, image }) => {
  return (
    <div className="precaution">
      <span className="precaution_img">
        <img src={image} alt={content} />
      </span>
      <span className="precaution_content">{content}</span>
    </div>
  );
};

export default CovidPrecaution;
