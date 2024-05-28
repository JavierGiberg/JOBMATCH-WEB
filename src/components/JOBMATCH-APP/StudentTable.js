import React from "react";
import DataTable from "react-data-table-component";
import { Box, useTheme } from "@mui/material";

const StudentTable = ({ data }) => {
  const theme = useTheme();

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: false,
    },
    {
      name: "Degree",
      selector: (row) => row.degree,
      sortable: false,
    },
    {
      name: "Major",
      selector: (row) => row.major,
      sortable: false,
    },
    {
      name: "Programming",
      selector: (row) => row.programming,
      sortable: false,
    },
    {
      name: "Algorithm",
      selector: (row) => row.algorithm,
      sortable: false,
    },
    {
      name: "Cyber",
      selector: (row) => row.cyber,
      sortable: false,
    },
    {
      name: "Math",
      selector: (row) => row.math,
      sortable: false,
    },
    {
      name: "Final Score",
      selector: (row) => row.finScore,
      sortable: true,
      sortFunction: (a, b) => b.finScore - a.finScore,
    },
  ];

  return (
    <Box className="dataTable-container" sx={{ marginTop: theme.spacing(2) }}>
      <DataTable
        columns={columns}
        data={data}
        pagination
        defaultSortFieldId="finScore"
        defaultSortAsc={false}
      />
    </Box>
  );
};

export default StudentTable;
