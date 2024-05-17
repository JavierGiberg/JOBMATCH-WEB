import React, { useState } from "react";
import "../RegisterStudent/RegisterStudent.css";

const RegisterApp = () => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState(""); // *
  const [email, setEmail] = useState(""); // *

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange1 = (e) => {
    console.log(e.target.value);
    setPassword1(e.target.value);
  };
  const handlePasswordChange2 = (e) => {
    console.log(e.target.value);
    setPassword2(e.target.value);
  };
  const handleEmaildChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    if (password1 !== password2) {
      alert("Passwords do not match");
      return;
    }

    fetch(
      `http://jobmatch.israelcentral.cloudapp.azure.com/app-register?username=${username}&password=${password1}&email=${email}`
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(
          `username: ${username} , password: ${password1} , email: ${email}`
        );
      });
  };
  return (
    <>
      <br />
      <br />
      <div className="RegisterStudent-login-container">
        <h1> Register-App </h1>

        <form onSubmit={handleSubmit}>
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
              id="password1"
              value={password1}
              onChange={handlePasswordChange1}
            />
          </div>
          <div className="RegisterStudent-form-group">
            <label htmlFor="password">Confirm Password </label>
            <input
              type="password"
              id="password2"
              value={password2}
              onChange={handlePasswordChange2}
            />
          </div>

          <br />
          <button className="RegisterStudent-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterApp;
