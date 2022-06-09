import React from "react";
import Header from "./Header/Header";
import Portals from "./Portals/Portals";
import { Button } from "@mui/material";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("loginUser");
    navigate("/");
  };
  return (
    <div>
      <div className="logout-btn">
        <Button
          style={{
            zIndex: 10,
            top: "2rem",
            width: "5rem",

            position: "absolute",
            right: "1rem",
            backgroundColor: "#309180",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={logOutHandler}
        >
          Logout
        </Button>
      </div>
      <Header />
      <Portals />
    </div>
  );
};

export default Home;
