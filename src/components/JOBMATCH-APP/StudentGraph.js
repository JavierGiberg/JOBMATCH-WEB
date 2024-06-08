import React, { useState, useEffect } from "react";
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
} from "@mui/material";

const findClosestStudents = (matrix, studentId, numberOfStudents) => {
  debugger;
  if (!matrix || matrix.length === 0) return [];

  const studentRow = matrix.find((row) =>
    row.some((student) => student.id === studentId && student.distance === 0)
  );
  if (!studentRow) return [];

  const distances = studentRow
    .filter((student) => student.id !== studentId)
    .map((student) => ({
      id: student.id,
      name: student.name,
      avatar: student.avatar,
      distance: parseFloat(student.distance),
    }));

  distances.sort((a, b) => a.distance - b.distance);

  return distances.slice(0, numberOfStudents);
};

const StudentGraph = ({
  studentId,
  numberOfStudents,
  handleClose,
  handleButtonClick,
}) => {
  const [matrix, setMatrix] = useState([]);
  const [closestStudents, setClosestStudents] = useState([]);

  useEffect(() => {
    const fetchMatrix = async () => {
      const matrix = await similarStudents();
      setMatrix(matrix);
    };

    fetchMatrix();
  }, []);

  useEffect(() => {
    if (matrix.length > 0) {
      const closest = findClosestStudents(matrix, studentId, numberOfStudents);
      setClosestStudents(closest);
    }
  }, [matrix, studentId, numberOfStudents]);

  const test = (student) => {
    debugger;
    handleClose();
    debugger;
    const rowData = { id: student.id };
    handleButtonClick(rowData);
  };

  return (
    <div>
      {closestStudents.length > 0 ? (
        <List>
          {closestStudents.map((student) => (
            <ListItem key={student.id}>
              <ListItemAvatar>
                <Avatar src={student.avatar} alt={student.name} />
              </ListItemAvatar>
              <ListItemText primary={student.name} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => test(student)}
              >
                see profile
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="h6" align="center" color="textSecondary">
          No closest students found
        </Typography>
      )}
    </div>
  );
};

export default StudentGraph;

const similarStudents = async () => {
  const url = `http://localhost:8000/api/mainSimilarStudents`;

  const token = localStorage.getItem("token");
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const matrix = await response.json();
    return matrix;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
