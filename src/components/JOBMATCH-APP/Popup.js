import React, { useEffect, useState } from "react";
import StudentSemiProfile from "../RegisterStudent/StudentSemiProfile";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { MainContainer } from "../styles/MainAppStyles";
import StudentGraph from "./StudentGraph";

const Popup = ({ open, handleClose, rowData, handleButtonClick }) => {
  const [studentData, setStudentData] = useState({
    student: {},
    courses: [],
    github_info: {},
    github_languages: [],
    projects_count: {},
  });
  const [projectCounts, setProjectCounts] = useState({});
  const [showStudentGraph, setShowStudentGraph] = useState(false);
  const [showProjectCounts, setShowProjectCounts] = useState(false);
  const [btnStudentGraph, setBtnShowStudentGraph] = useState("Show Similar Students");
  const [btnProjectCounts, setBtnProjectCounts] = useState("Show Project Counts");

  useEffect(() => {
    if (rowData) {
      fetch(
        `http://localhost:8000/api/studentSemiProfile?studentId=${rowData.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setStudentData(data);
          setProjectCounts(data.projects_count); // Store project counts
        });
    }
  }, [rowData]);

  const handleShowStudentGraph = () => {
    if (!showStudentGraph) {
      setShowStudentGraph(true);
      setBtnShowStudentGraph("Hide Similar Students");
    } else {
      setShowStudentGraph(false);
      setBtnShowStudentGraph("Show Similar Students");
    }
  };

  const handleProjectCounts = () => {
    if (!showProjectCounts) {
      setShowProjectCounts(true);
      setBtnProjectCounts("Hide Project Counts");
    } else {
      setShowProjectCounts(false);
      setBtnProjectCounts("Show Project Counts");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>JOBMATCH - Profile</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {rowData ? (
            <StudentSemiProfile
              setStudentData={setStudentData}
              studentData={studentData}
            />
          ) : (
            "No data available"
          )}
        </DialogContentText>
      </DialogContent>

      <MainContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={handleShowStudentGraph}
        >
          {btnStudentGraph}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleProjectCounts}
        >
          {btnProjectCounts}
        </Button>
        {showStudentGraph && (
          <StudentGraph
            studentId={rowData.id}
            numberOfStudents={5}
            handleClose={handleClose}
            handleButtonClick={handleButtonClick}
          />
        )}
        {showProjectCounts && (
          <div>
            <h3>Project Counts</h3>
            <ul>
              {Object.entries(projectCounts).map(([area, count]) => (
                <li key={area}>
                  {area}: {count}
                </li>
              ))}
            </ul>
          </div>
        )}
      </MainContainer>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;