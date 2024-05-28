import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Major = ({ handleChangeMajor }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="major-label">שנת לימודים</InputLabel>
      <Select
        labelId="major-label"
        id="major"
        onChange={handleChangeMajor}
        defaultValue=""
      >
        <MenuItem value="" disabled>
          שנת לימודים
        </MenuItem>
        <MenuItem value="א">א</MenuItem>
        <MenuItem value="ב">ב</MenuItem>
        <MenuItem value="ג">ג</MenuItem>
        <MenuItem value="ד">ד</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Major;
