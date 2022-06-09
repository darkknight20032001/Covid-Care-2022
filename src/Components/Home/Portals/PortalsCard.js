import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PortalsCard.css";
import Aos from "aos";
import "aos/dist/aos.css";

const PortalsCard = ({ id, portalName, portalImage, portalDescription }) => {
  const navigate = useNavigate();
  const onClickPortalHandler = (name) => {
    name = name.replace(/\s+/g, "-");
    navigate(`/${name.toLowerCase()}`);
  };
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div
      className={`portalsCard ${id % 2 === 0 && "portalsCard_reverse"}`}
      data-aos={`${id % 2 === 0 ? "fade-right" : "fade-left"}`}
    >
      <div
        className="portalsCard_image"
        onClick={() => onClickPortalHandler(portalName)}
      >
        <img src={portalImage} alt={portalName} />
      </div>
      <div className="portalsCard_details">
        <h1>{portalName}</h1>
        <p>
          <i>{portalDescription}</i>
        </p>
      </div>
    </div>
  );
};

export default PortalsCard;
