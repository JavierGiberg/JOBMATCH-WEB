import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Degree = ({ handleChangeDegree }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="degree-label">בחר תואר</InputLabel>
      <Select
        labelId="degree-label"
        id="degree"
        onChange={handleChangeDegree}
        defaultValue=""
      >
        <MenuItem value="" disabled>
          בחר תואר
        </MenuItem>
        <MenuItem value="B.Sc במדעי המחשב">B.Sc במדעי המחשב</MenuItem>
        <MenuItem value="B.A בכלכלה וחשבונאות">B.A בכלכלה וחשבונאות</MenuItem>
        <MenuItem value="B.A בלוגיסטיקה">B.A בלוגיסטיקה</MenuItem>
        <MenuItem value="B.A בעבודה סוציאלית">B.A בעבודה סוציאלית</MenuItem>
        <MenuItem value="B.A בניהול המשאב האנושי">
          B.A בניהול המשאב האנושי
        </MenuItem>
        <MenuItem value="B.A בשיווק טכנולוגי">B.A בשיווק טכנולוגי</MenuItem>
        <MenuItem value="B.A בתקשורת">B.A בתקשורת</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Degree;
