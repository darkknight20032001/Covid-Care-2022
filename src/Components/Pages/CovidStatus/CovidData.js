import React from "react";
import CovidDataContent from "./CovidDataContent";
import Recovered from "../../../assets/icons/recovered.png";
import Confirmed from "../../../assets/icons/confirmed.png";
import Active from "../../../assets/icons/active.png";
import Dead from "../../../assets/icons/dead.png";
import "./CovidData.css";
const CovidData = ({ confirmed, recovered, dead, active }) => {
  return (
    <div className="covidData">
      <CovidDataContent
        content="Confirmed"
        data={confirmed}
        image={Confirmed}
      />
      <CovidDataContent
        content="Recovered"
        data={recovered}
        image={Recovered}
      />
      <CovidDataContent
        content="Active"
        data={active}
        image={Active}
      />
      <CovidDataContent
        content="Dead"
        data={dead}
        image={Dead}
      />
    </div>
  );
};

export default CovidData;
