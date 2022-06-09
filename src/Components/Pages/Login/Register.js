import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
const Register = ({ setLoginActive }) => {
  const [registerName, setRegisterName] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState(false);
  const navigate = useNavigate();
  const onRegisterHandler = (e) => {
    e.preventDefault();
    if (
      !registerEmail ||
      !registerPassword ||
      !registerName ||
      !registerPhone
    ) {
      setRegisterError(true);
    } else {
      let users = localStorage.getItem("users");
      let userArray;
      if (users === null) {
        userArray = [];
      } else {
        userArray = JSON.parse(users);
      }
      const userObj = {
        email: registerEmail,
        password: registerPassword,
        bedBooked: false,
        vaccineBooked: false,
      };
      userArray.push(userObj);
      localStorage.setItem("loginUser", JSON.stringify(userObj));
      localStorage.setItem("users", JSON.stringify(userArray));
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterPhone("");
      setRegisterName("");
      setRegisterError(false);
      navigate("/home");
    }
  };
  return (
    <>
      {registerError && (
        <Alert severity="error" style={{ marginBottom: "10px" }}>
          Fill all the details
        </Alert>
      )}
      <form onSubmit={onRegisterHandler}>
        <TextField
          id="outlined-basic"
          label="Enter name"
          variant="outlined"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
          style={{ width: "20rem", marginTop: "1rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={registerPhone}
          onChange={(e) => setRegisterPhone(e.target.value)}
          style={{ width: "20rem", marginTop: "1rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Enter email"
          variant="outlined"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          style={{ width: "20rem", marginTop: "1rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Set password"
          variant="outlined"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          style={{ width: "20rem", marginTop: "1rem" }}
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
          Register
        </Button>
        <Button
          style={{
            width: "20rem",
            marginTop: "1rem",
            backgroundColor: "#309180",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={() => setLoginActive(true)}
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default Register;
