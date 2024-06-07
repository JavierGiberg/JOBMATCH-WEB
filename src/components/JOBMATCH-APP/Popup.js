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
const Popup = ({ open, handleClose, rowData }) => {
  const [studentData, setStudentData] = useState({
    student: {},
    courses: [],
    github_info: {},
    github_languages: [],
  });
  const [showStudentGraph, setShowStudentGraph] = useState(false);
  const [btnStudentGraph, setBtnShowStudentGraph] =
    useState("הצג סטודנטים דומים");
  useEffect(() => {
    if (rowData) {
      fetch(
        `http://localhost:8000/api/studentSemiProfile?studentId=${rowData.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setStudentData(data);
        });
    }
  }, [rowData]);

  const handleShowStudentGraph = () => {
    if (!showStudentGraph) {
      setShowStudentGraph(true);
      setBtnShowStudentGraph("הסתר סטודנטים דומים");
    } else {
      setShowStudentGraph(false);
      setBtnShowStudentGraph("הצג סטודנטים דומים");
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
        {showStudentGraph ? (
          <StudentGraph studentId={rowData.id} numberOfStudents={5} />
        ) : null}
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
