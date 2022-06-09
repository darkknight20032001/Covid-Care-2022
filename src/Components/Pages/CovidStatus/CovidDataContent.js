import React, { useState, useEffect } from "react";
import AnimatedNumber from "animated-number-react";
import "./CovidDataContent.css";
const CovidDataContent = ({ content, data, image }) => {
  let [counter, setCounter] = useState(0);
  const counterChange = () => {
    counter = 0;
    setCounter(counter + data);
  };
  useEffect(() => {
    counterChange();
  }, [data]);
  return (
    <div className="covidDataContent">
      <img src={image} alt={content} />
      <AnimatedNumber
        value={counter}
        duration="1000"
        formatValue={(value) => value.toFixed(0)}
        style={{ color: "blue" }}
      />
      <p>{content}</p>
    </div>
  );
};

export default CovidDataContent;
