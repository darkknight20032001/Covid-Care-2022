import { TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import VaccinationImage from "../../../assets/images/vaccine-page.jpg";
import "./Vaccination.css";
import VaccinationForm from "./Register/VaccinationForm";
import FormSubmitMessage from "./FormSubmitMessage";
const Vaccination = () => {
  const [date, setDate] = useState(null);
  const [area, setArea] = useState("");
  const [pin, setPin] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const navigate = useNavigate();
  const onFillDetailsClickHandler = () => {
    if (!date || !area || !pin) {
      setShowErrorMsg(true);
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowErrorMsg(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  }, [showErrorMsg]);

  const loginUser = JSON.parse(localStorage.getItem("loginUser"));

  return (
    <>
      {showModal && (
        <VaccinationForm
          setShowModal={setShowModal}
          setFormSubmit={setFormSubmit}
        />
      )}
      {formSubmit && (
        <>
          <FormSubmitMessage setShowModal={setShowModal} />
          <p style={{ display: "none" }}>
            {setTimeout(() => {
              navigate("/home");
            }, 2000)}
          </p>
        </>
      )}
      {loginUser.vaccineBooked ? (
        <h1>vaccine booked</h1>
      ) : (
        <div className="vaccination-container">
          {showErrorMsg && (
            <Alert severity="error" style={{ width: "100%" }}>
              Fill all details
            </Alert>
          )}
          <h1>Book Your Vaccination Slot</h1>
          <div className="vaccination-container__content">
            <div className="vaccination-container__image">
              <img src={VaccinationImage} alt="VaccinationImage" />
            </div>
            <div className="vaccination-container__inputs">
              <TextField
                id="outlined-basic"
                label="Area"
                variant="outlined"
                style={{ marginBottom: "15px" }}
                onChange={(event) => setArea(event.target.value)}
              />
              <Calendar
                value={date}
                setValue={setDate}
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="outlined-basic"
                label="Pin-Code"
                variant="outlined"
                style={{ marginTop: "15px" }}
                onChange={(event) => setPin(event.target.value)}
              />
              <Button
                style={{
                  width: "20rem",
                  marginTop: "1rem",
                  backgroundColor: "#309180",
                  color: "white",
                  fontWeight: "bold",
                }}
                type="submit"
                onClick={onFillDetailsClickHandler}
              >
                Fill Your Details
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Vaccination;
