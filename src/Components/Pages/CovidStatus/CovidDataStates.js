import React, { useState } from "react";
import CovidPageImage from "../../../assets/images/covidPage-doctor.jpg";
import CovidData from "./CovidData";
import Form from "./Form";
const CovidDataStates = ({ covidDataState }) => {
  const [state, setState] = useState("");
  const [stateData] = covidDataState.filter((item) => item.loc === state);

  return (
    <div className="covidStatusStates">
      <img src={CovidPageImage} alt="covid-status" className="covidImg" />
      <div className="covidStatusStates_select">
        <p>Select states to get covid statistics by states</p>
        <Form
          covidDataState={covidDataState}
          setState={setState}
          state={state}
        />
        {state && (
          <CovidData
            confirmed={stateData.confirmedCasesIndian}
            recovered={stateData.discharged}
            dead={stateData.deaths}
            active={stateData.confirmedCasesIndian - stateData.discharged}
          />
        )}
      </div>
    </div>
  );
};

export default CovidDataStates;
