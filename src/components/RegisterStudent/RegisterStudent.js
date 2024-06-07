import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import RegisterSemiprofile from "./StudentSemiProfile";
import {
  RegisterContainer,
  Form,
  SpinnerContainer,
} from "../styles/RegisterStudentStyles";

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
    { collection: "Choose Academic" },
    { collection: "Ben Gurion University", mail: "@bgu.ac.il" },
    { collection: "Sapir College", mail: "@mail.sapir.ac.il" },
    { collection: "Tel Aviv University", mail: "@tau.ac.il" },
    { collection: "Technion University", mail: "@technion.ac.il" },
    { collection: "Bar Ilan University", mail: "@biu.ac.il" },
  ];

  const handleAcademiclistChange = (e) => {
    setAcademiclist(e.target.value);
    const selectedMail = list.find(
      (item) => item.collection === e.target.value
    ).mail;
    setMail(selectedMail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "התהליך התחיל. בדקה הקרובה נאסוף מידע ממוסד האקדמאי ומחשבון הגיטהב. בסיום יבנה לך פרופיל ותיהיה חשוף למעסיקים פונטציאלים. המון בהצלחה!!!"
    );
    const email = username + mail;
    setIsLoading(true);
    fetch(
      `http://localhost:8000/api/registerStudents?academic=${academiclist}&username=${username}&password=${password}&githubUsername=${githubUsername}&email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.result === "faild") {
          alert("שגיאה בהרשמה");
          return;
        }
        if (data.result === "success") {
          fetch(
            `http://localhost:8000/api/studentSemiProfile?studentId=${data.studentId}`
          )
            .then((res1) => res1.json())
            .then((data1) => {
              setStudentData(data1);
              setSemiProfile(true);
            });
        } else if (data.result === "User already exists") {
          alert("כבר רשום במערכת!!!");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
      });
  };

  if (!semiProfile) {
    return (
      <RegisterContainer>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <Typography variant="body1" gutterBottom>
          יש לשים לב לנתונים הנבחרים כדי להשלים את התהליך. התהליך הינו אוטומטי
          וסיסמת של הלימוד אינו נשמר במערכת. בלחיצה על כפתור החיבור אתה מאשר את
          השימוש באתר
        </Typography>
        {isLoading ? (
          <SpinnerContainer>
            <CircularProgress />
            <Typography variant="body2">JOBMATCH WORK FOR YOU</Typography>
          </SpinnerContainer>
        ) : (
          <Form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="academic-label">Choose Academic</InputLabel>
              <Select
                labelId="academic-label"
                id="academic"
                value={academiclist}
                onChange={handleAcademiclistChange}
              >
                {list.map((item, index) => (
                  <MenuItem key={index} value={item.collection}>
                    {item.collection}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Username of Academic"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password Academic"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="GitHub Username"
              id="githubUsername"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Join
            </Button>
          </Form>
        )}
      </RegisterContainer>
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

export default RegisterStudent;
