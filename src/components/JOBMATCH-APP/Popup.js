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

const Popup = ({ open, handleClose, rowData }) => {
  const [studentData, setStudentData] = useState({
    student: {},
    courses: [],
    github_info: {},
    github_languages: [],
  });

  useEffect(() => {
    debugger;
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
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
