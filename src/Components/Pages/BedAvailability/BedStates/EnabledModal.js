import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "../../../UI/Modal";
import "./EnabledModal.css";
import Alert from "@mui/material/Alert";
const EnabledModal = ({
  setShowModal,
  hospitalName,
  setShowMsg,
  setHospitalBooked,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!name || !phone || !address || !age) {
      setError(true);
    } else {
      setName("");
      setAddress("");
      setAge("");
      setPhone("");
      setError(false);
      setShowModal(false);
      setShowMsg(true);
      setHospitalBooked(hospitalName);
      let userArray = JSON.parse(localStorage.getItem("users"));
      let loginUser = JSON.parse(localStorage.getItem("loginUser"));
      const updatedUserArray = userArray.map((user) => {
        if (user.email === loginUser.email) {
          user.bedBooked = true;
        }
        return user;
      });
      loginUser = { ...loginUser, bedBooked: true };
      localStorage.setItem("users", JSON.stringify(updatedUserArray));
      localStorage.setItem("loginUser", JSON.stringify(loginUser));
    }
  };
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  return (
    <Modal setShowModal={setShowModal}>
      {error && (
        <Alert severity="error" style={{ marginBottom: "10px" }}>
          Fill all the fields
        </Alert>
      )}
      {loginUser.bedBooked ? (
        <h1>Bed has been already booked from your account</h1>
      ) : (
        <div className="enabled_model">
          <h2>{hospitalName}</h2>
          <p>Register for bed</p>
          <form onSubmit={onSubmitHandler}>
            <TextField
              id="outlined-basic"
              label="Patient Name"
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
              id="outlined-basic"
              label="Address"
              variant="outlined"
              value={address}
              style={{ width: "30rem", marginTop: "1rem" }}
              onChange={(event) => setAddress(event.target.value)}
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
      )}
    </Modal>
  );
};

export default EnabledModal;
