import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "../../../UI/Modal";
import Alert from "@mui/material/Alert";
import "./VaccinationForm.css";
const VaccinationForm = ({ setShowModal, setFormSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!name || !phone || !age) {
      setError(true);
    } else {
      setName("");
      setAge("");
      setPhone("");
      setError(false);
      setShowModal(false);
      setFormSubmit(true);
      let userArray = JSON.parse(localStorage.getItem("users"));
      let loginUser = JSON.parse(localStorage.getItem("loginUser"));
      const updatedUserArray = userArray.map((user) => {
        if (user.email === loginUser.email) {
          user.vaccineBooked = true;
        }
        return user;
      });
      loginUser = { ...loginUser, vaccineBooked: true };
      localStorage.setItem("users", JSON.stringify(updatedUserArray));
      localStorage.setItem("loginUser", JSON.stringify(loginUser));
    }
  };

  return (
    <Modal setShowModal={setShowModal}>
      {error && (
        <Alert severity="error" style={{ marginBottom: "10px" }}>
          Fill all the fields
        </Alert>
      )}
      <div className="vaccination-form">
        <h1>Fill your details</h1>
        <form onSubmit={onSubmitHandler}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            style={{ width: "30rem", marginTop: "1rem" }}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Patient Age"
            variant="outlined"
            value={age}
            style={{ width: "30rem", marginTop: "1rem" }}
            onChange={(event) => setAge(event.target.value)}
          />
          <TextField
            label="Phone number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            style={{ width: "30rem", marginTop: "1rem" }}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
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
          >
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default VaccinationForm;
