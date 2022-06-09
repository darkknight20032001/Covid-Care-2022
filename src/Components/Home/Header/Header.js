import React from "react";
import "./Header.css";
import HomeImage from "../../../assets/images/home-image.png";
import CovidImage from "../../../assets/images/covid-cartoon.png";
import CovidPrecaution from "./CovidPrecaution";
import Mask from "../../../assets/icons/mask.png";
import Hand from "../../../assets/icons/hand.png";
import Distancing from "../../../assets/icons/distancing.png";
import Vaccination from "../../../assets/icons/vaccination.png";
import Virus from "../../../assets/icons/virus.png";
import Shield from "../../../assets/icons/covid-19.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header_random_image">
        <img src={CovidImage} className="covid_random_1" alt="covid_logo" />
        <img src={CovidImage} className="covid_random_2" alt="covid_logo" />
        <img src={Virus} className="covid_random_3" alt="covid_logo" />
        <img src={Shield} className="covid_random_4" alt="covid_logo" />
      </div>
      <div className="header_description">
        <h1>
          COVID
          <img src={CovidImage} alt="covid_logo"/>
          CARE
        </h1>
        <div className="header_precaution">
          <CovidPrecaution content="Wear a mask." image={Mask} />
          <CovidPrecaution content="Clean your hands." image={Hand} />
          <CovidPrecaution
            content="Maintain safe distance."
            image={Distancing}
          />
          <CovidPrecaution content="Get vaccinated." image={Vaccination} />
        </div>
      </div>
      <div className="header_image">
        <img src={HomeImage} alt="doctor"/>
      </div>
    </div>
  );
};

export default Header;
