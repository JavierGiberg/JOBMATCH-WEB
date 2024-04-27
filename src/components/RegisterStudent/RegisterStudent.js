import React, { useState } from "react";
import "./RegisterStudent.css";

const RegisterStudent = () => {
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
    <div className="RegisterStudent-login-container">
      <h1> Register </h1>
      <h4>
        יש לשים לב לנתונים הנבחרים כדי להשלים את התהליך. התהליך הינו אוטומטי
        וסיסמת של הלימוד אינו נשמר במערכת. בלחיצה על כפתור החיבור אתה מאשר את
        תנאי השימוש באתר
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="RegisterStudent-form-group">
          <label htmlFor="academic">chose Academic</label>
          <select
            id="academic"
            value={academiclist}
            onChange={handleAcademiclistChange}
          >
            <Chose />
          </select>
        </div>
        <div className="RegisterStudent-form-group">
          <label htmlFor="username">Username of Academic</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="RegisterStudent-form-group">
          <label htmlFor="password">Password Academic </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="RegisterStudent-form-group">
          <label htmlFor="gitgubUsername">GitHub Username</label>
          <input
            type="text"
            id="gitgubUsername"
            value={githubUsername}
            onChange={handleGithubUsernameChange}
          />
        </div>
        <button className="RegisterStudent-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

function Chose() {
  const list = [
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
export default RegisterStudent;
