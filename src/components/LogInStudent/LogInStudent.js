import React, { useState } from "react";
import "./LogInStudent.css";

const LogInStudent = () => {
  const [academiclist, setAcademiclist] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [githubUsername, setGithubUsername] = useState("");

  const handleAcademiclistChange = (e) => {
    setAcademiclist(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGithubUsernameChange = (e) => {
    setGithubUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    fetch(
      `http://localhost:8000/api/login?academic=${academiclist}&username=${username}&password=${password}&gitgubUsername=${githubUsername}`
    )
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      });
  };

  return (
    <div className="login-container">
      <h2>Student Register To Jobmatch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="academic">chose Academic</label>
          <select
            id="academic"
            value={academiclist}
            onChange={handleAcademiclistChange}
          >
            <Chose />
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username of Academic</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password Academic </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gitgubUsername">GitHub Username</label>
          <input
            type="text"
            id="gitgubUsername"
            value={githubUsername}
            onChange={handleGithubUsernameChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

function Chose() {
  const list = [
    {
      collection: "Choose your Academic",
    },
    {
      collection: "Ben Gurion University",
    },
    {
      collection: "Sapir College",
    },
    {
      collection: "Tel Aviv University",
    },
    {
      collection: "Technion University",
    },
    {
      collection: "Bar Ilan University ",
    },
  ];
  return list.map((colle, index) => (
    <option key={index} value={colle.collection}>
      {colle.collection}
    </option>
  ));
}
export default LogInStudent;
