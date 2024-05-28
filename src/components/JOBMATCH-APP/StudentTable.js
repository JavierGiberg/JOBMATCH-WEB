import React from "react";
import DataTable from "react-data-table-component";
import "./StudentTable.css";

const StudentTable = ({ data }) => {
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
      desc: true,
    },
  ];

  return (
    <div className="dataTable-container">
      <DataTable
        columns={columns}
        data={data}
        pagination
        defaultSortFieldId="finScore"
        defaultSortAsc={true}
      />
    </div>
  );
};

export default StudentTable;
