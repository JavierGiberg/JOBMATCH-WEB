import React from "react";

const Major = ({ handleChangeMajor }) => {
  return (
    <select onChange={handleChangeMajor} defaultValue="">
      <option value="" disabled>
        שנת לימודים
      </option>
      <option value="א">א</option>
      <option value="ב">ב</option>
      <option value="ג">ג</option>
      <option value="ד">ד</option>
    </select>
  );
};

export default Major;
