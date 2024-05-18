import React, { useState } from "react";
import "../RegisterStudent/RegisterStudent.css";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
const LoginApp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // *
  const Navigate = useNavigate();

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleEmaildChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClickRegister = () => {
    Navigate("/Register-App");
  };

  const handleClickLogIn = () => {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`email: ${email}, password: ${password}`);
        console.log(`from api: ${JSON.stringify(data)}`);
        localStorage.setItem("token", data.token);
        console.log("the Token save in local storage!!!");
        Navigate("/MainApp");
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <br />
      <br />
      <div className="RegisterStudent-login-container">
        <h1> LogIn-App </h1>

        <form onSubmit={PrivateRoute}>
          <div className="RegisterStudent-form-group">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmaildChange}
            />
          </div>
          <div className="RegisterStudent-form-group">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button
            onClick={handleClickLogIn}
            className="RegisterStudent-button"
            type="button"
          >
            LogIn
          </button>
          <br />
          <button
            onClick={handleClickRegister}
            className="RegisterStudent-button"
            type="button"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginApp;
