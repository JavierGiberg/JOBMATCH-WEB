import React, { useState } from "react";
import axios from "axios"; // ייבוא axios כאן
import "./LogInStudent.css";

const LogInStudent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [githubUsername, setGithubUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGithubUsernameChange = (e) => {
    setGithubUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://jobmatch.israelcentral.cloudapp.azure.com:8000/api/login",

        {
          params: {
            username: username,
            password: password,
            gitgubUsername: githubUsername,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="githubUsername">GitHub Username</label>
          <input
            type="text"
            id="githubUsername"
            value={githubUsername}
            onChange={handleGithubUsernameChange}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogInStudent;
