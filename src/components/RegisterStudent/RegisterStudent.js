import React, { useState } from "react";
import "./RegisterStudent.css";
import RegisterSemiprofile from "./StudentSemiProfile";

const RegisterStudent = () => {
  const [academiclist, setAcademiclist] = useState("");
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [semiProfile, setSemiProfile] = useState(false);
  const [studentData, setStudentData] = useState({
    student: {},
    courses: [],
    github_info: {},
    github_languages: [],
  });
  const list = [
    {
      collection: "Choose Academic",
    },
    {
      collection: "Ben Gurion University",
      mail: "@bgu.ac.il",
    },
    {
      collection: "Sapir College",
      mail: "@mail.sapir.ac.il",
    },
    {
      collection: "Tel Aviv University",
      mail: "@tau.ac.il",
    },
    {
      collection: "Technion University",
      mail: "@technion.ac.il",
    },
    {
      collection: "Bar Ilan University ",
      mail: "@biu.ac.il",
    },
  ];
  const handleAcademiclistChange = (e) => {
    setAcademiclist(e.target.value);
    setMail(list.find((item) => item.collection === e.target.value).mail);
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
    alert(
      "התהליך התחיל. בדקה הקרובה נאסוף מידע ממוסד האקדמאי ומחשבון הגיטהב. בסיום יבנה לך פרופיל ותיהיה חשוף למעסיקים פונטציאלים. המון בהצלחה!!!"
    );
    const email = username + mail;
    debugger;
    setIsLoading(true);
    fetch(
      `http://localhost:8000/api/registerStudents?academic=${academiclist}&username=${username}&password=${password}&githubUsername=${githubUsername}&email=${email}`
    )
      .then((res) => res.text())
      .then((data) => {
        const dataObject = JSON.parse(data);
        setIsLoading(false);
        if (dataObject.result === "faild") {
          alert("שגיאה בהרשמה");
          return;
        }
        debugger;
        if (dataObject.result === "success") {
          fetch(
            `http://localhost:8000/api/studentSemiProfile?studentId=${dataObject.studentId}`
          )
            .then((res1) => res1.text())
            .then((data1) => {
              const dataObject1 = JSON.parse(data1);
              console.log(dataObject1);
              setStudentData(dataObject1);
              debugger;
              setSemiProfile(true);
            });

          debugger;
        } else if (dataObject.result === "User already exists") {
          alert("כבר רשום במערכת!!!. ");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
      });
  };
  if (!semiProfile) {
    return (
      <>
        <br />
        <br />
        <div className="RegisterStudent-login-container">
          <h1> Register </h1>
          <h4>
            יש לשים לב לנתונים הנבחרים כדי להשלים את התהליך. התהליך הינו אוטומטי
            וסיסמת של הלימוד אינו נשמר במערכת. בלחיצה על כפתור החיבור אתה מאשר
            את השימוש באתר
          </h4>
          {isLoading ? (
            <div className="spinner-container">
              <div className="spinner">
                <p>JOBMATCH</p>
                <p>WORK FOR YOU</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="RegisterStudent-form-group">
                <label htmlFor="academic">chose Academic</label>
                <select
                  id="academic"
                  value={academiclist}
                  onChange={handleAcademiclistChange}
                >
                  <Chose list={list} />
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
                <label htmlFor="githubUsername">GitHub Username</label>
                <input
                  type="text"
                  id="gitgubUsername"
                  value={githubUsername}
                  onChange={handleGithubUsernameChange}
                />
              </div>
              <button className="RegisterStudent-button" type="submit">
                Join
              </button>
            </form>
          )}
          <br />
        </div>
      </>
    );
  } else {
    return (
      <RegisterSemiprofile
        setStudentData={setStudentData}
        studentData={studentData}
      />
    );
  }
};

function Chose(list) {
  return list.list.map((colle, index) => (
    <option key={index} value={colle.collection}>
      {colle.collection}
    </option>
  ));
}

export default RegisterStudent;

// const dummyData = {
//   student: {
//     id: "S1001",
//     name: "Joni Javier",
//     address: "123 Tech Drive, Innovation City",
//     phone: "054-7331429",
//     email: "Jango117@mail.sapir.ac.il",
//     major: "Computer Science",
//     status: "Senior",
//     degree: "B.Sc.",
//     english: "Fluent",
//   },
//   courses: [
//     { id: 1, student_id: "S1001", course_name: "Algorithms", grade: "90" },
//     {
//       id: 2,
//       student_id: "S1001",
//       course_name: "Data Structures",
//       grade: "88",
//     },
//     { id: 3, student_id: "S1001", course_name: "Databases", grade: "85" },
//     // Add more courses as needed
//   ],
//   github_info: {
//     id: "S1001",
//     name: "JavierGberg",
//     avatar_url: "https://avatars.githubusercontent.com/u/92457719?v=4",
//     followers: 120,
//     following: 75,
//     public_repos: 30,
//   },
//   github_languages: [
//     { student_id: "S1001", language: "JavaScript", projects_count: 10 },
//     { student_id: "S1001", language: "Python", projects_count: 8 },
//     // Add more languages and project counts as needed
//   ],
// };
