import React, { useState, useEffect } from "react";
import CovidData from "./CovidData";
import "./CovidPage.css";
import CovidDataStates from "./CovidDataStates";
const CovidPage = () => {
  const [covidDataCountry, setCovidDataCountry] = useState({
    confirmed: 0,
    recovered: 0,
    dead: 0,
    active: 0,
  });
  const [covidDataState, setCovidDataState] = useState([]);
  const fetchData = async () => {
    const url = "https://api.rootnet.in/covid19-in/stats/latest";
    const fetchedData = await fetch(url);
    const myData = await fetchedData.json();
    const myDataItem = myData.data;
    setCovidDataCountry(() => {
      return {
        confirmed: myDataItem.summary.total,
        recovered: myDataItem.summary.discharged,
        dead: myDataItem.summary.deaths,
        active: myDataItem["unofficial-summary"][0].active,
      };
    });
    setCovidDataState(myDataItem.regional);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="covidStatus">
      <h1>
        <span style={{ color: "#FF9933" }}>I</span>
        <span style={{ color: "#FF9933" }}>N</span>
        <span style={{ color: "rgb(202 202 202)" }}>D</span>
        <span style={{ color: "#138808" }}>I</span>
        <span style={{ color: "#138808" }}>A</span>
      </h1>
      <CovidData
        confirmed={covidDataCountry.confirmed}
        recovered={covidDataCountry.recovered}
        dead={covidDataCountry.dead}
        active={covidDataCountry.active}
      />
      {covidDataState.length !== 0 && (
        <CovidDataStates covidDataState={covidDataState} />
      )}
    </div>
  );
};

export default CovidPage;
