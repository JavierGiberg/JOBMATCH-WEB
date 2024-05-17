import React, { useState } from "react";
import "../RegisterStudent/RegisterStudent.css";
import { useNavigate } from "react-router-dom";

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
  const handleSubmit = (e) => {};

  const handleClick = () => {
    Navigate("/Register-App");
  };
  return (
    <>
      <br />
      <br />
      <div className="RegisterStudent-login-container">
        <h1> LogIn-App </h1>

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
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button className="RegisterStudent-button" type="submit">
            LogIn
          </button>
          <br />
          <button
            onClick={handleClick}
            className="RegisterStudent-button"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginApp;
