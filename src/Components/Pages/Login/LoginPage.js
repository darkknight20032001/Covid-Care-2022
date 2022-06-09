import React, { useState } from "react";
import covid_warrior from "../../../assets/images/covid_warrior.jpg";
import Login from "./Login";
import "./LoginPage.css";
import Register from "./Register";
const LoginPage = () => {
  const [loginActive, setLoginActive] = useState(true);

  return (
    <div className="login-page">
      <div className="login-header">
        <h1>COVID CARE</h1>
      </div>
      <div className="login-content">
         <img className="covidPic" src={covid_warrior} alt="LoginPageImage" /> 
        <div className="login-register">
          {loginActive ? (
            <Login setLoginActive={setLoginActive} />
          ) : (
            <Register setLoginActive={setLoginActive} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
