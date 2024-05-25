import React from "react";
import DataTable from "react-data-table-component";
import "./StudentTable.css"; // ייבוא קובץ ה-CSS

const StudentTable = ({ data }) => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Degree",
      selector: (row) => row.degree,
      sortable: true,
    },
    {
      name: "Major",
      selector: (row) => row.major,
      sortable: true,
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
      sortField: "finScore",
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
