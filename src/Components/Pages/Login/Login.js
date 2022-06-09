import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
const Login = ({ setLoginActive }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setErrorMessage("Fill all details");
      setLoginError(true);
    } else {
      let usersArray = JSON.parse(localStorage.getItem("users"));
      for (let user of usersArray) {
        if (user.email === loginEmail && user.password === loginPassword) {
          localStorage.setItem("loginUser", JSON.stringify(user));
          navigate("/home");
          console.log("hi");
          setLoginEmail("");
          setLoginPassword("");
          setLoginError(false);
        }
      }
      setErrorMessage("Entered email is wrong");
      setLoginError(true);
    }
  };
  return (
    <>
      {loginError && (
        <Alert severity="error" style={{ marginBottom: "10px" }}>
          {errorMessage}
        </Alert>
      )}
      <form onSubmit={onLoginHandler}>
        <TextField
          id="outlined-basic"
          label="Enter email"
          variant="outlined"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          style={{ width: "20rem", marginTop: "1rem" }}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Enter password"
          variant="outlined"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
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
          Login
        </Button>
        <Button
          style={{
            width: "20rem",
            marginTop: "1rem",
            backgroundColor: "#309180",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={() => setLoginActive(false)}
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default Login;
