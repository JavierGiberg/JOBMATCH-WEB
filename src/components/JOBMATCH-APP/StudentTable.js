import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Box, useTheme, Button } from "@mui/material";
import Popup from "./Popup";

const StudentTable = ({ data }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleButtonClick = async (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      name: "Select",
      cell: (row) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleButtonClick(row)}
        >
          Select
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
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
      sortable: true,
    },
    {
      name: "Algorithm",
      selector: (row) => row.algorithm,
      sortable: true,
    },
    {
      name: "Cyber",
      selector: (row) => row.cyber,
      sortable: true,
    },
    {
      name: "Math",
      selector: (row) => row.math,
      sortable: true,
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
      <Popup
        open={open}
        handleClose={handleClose}
        rowData={selectedRow}
        handleButtonClick={handleButtonClick}
      />
    </Box>
  );
};

export default StudentTable;
