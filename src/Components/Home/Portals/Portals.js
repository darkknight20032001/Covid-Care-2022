import React from "react";
import DatabasePortal from "../../Database/DatabasePortal";
import PortalsCard from "./PortalsCard";

const Portals = () => {
  return (
    <>
      {DatabasePortal.map((data) => (
        <PortalsCard
          key={data.id}
          id={data.id}
          portalName={data.portalName}
          portalImage={data.portalImage}
          portalDescription={data.portalDescription}
        />
      ))}
    </>
  );
};

export default Portals;
