import React, { useState } from "react";
import "../RegisterStudent/RegisterStudent.css";

const RegisterApp = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const handlePasswordChange1 = (e) => {
    setPassword1(e.target.value);
  };

  const handlePasswordChange2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: password1 }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`email: ${email}, password: ${password1}`);
        console.log(`from api: ${JSON.stringify(data)}`);
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
        <h1>Register-App</h1>
        <form onSubmit={handleSubmit}>
          <div className="RegisterStudent-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="RegisterStudent-form-group">
            <label htmlFor="password1">Password</label>
            <input
              type="password"
              id="password1"
              value={password1}
              onChange={handlePasswordChange1}
            />
          </div>
          <div className="RegisterStudent-form-group">
            <label htmlFor="password2">Confirm Password</label>
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
