import React from "react";

const Degree = ({ handleChangeDegree }) => {
  return (
    <select onChange={handleChangeDegree} defaultValue="">
      <option value="" disabled>
        בחר תואר
      </option>
      <option value="B.Sc במדעי המחשב">B.Sc במדעי המחשב</option>
      <option value="B.A בכלכלה וחשבונאות">B.A בכלכלה וחשבונאות</option>
      <option value="B.A בלוגיסטיקה">B.A בלוגיסטיקה</option>
      <option value="B.A בעבודה סוציאלית">B.A בעבודה סוציאלית</option>
      <option value="B.A בניהול המשאב האנושי">B.A בניהול המשאב האנושי</option>
      <option value="B.A בשיווק טכנולוגי">B.A בשיווק טכנולוגי </option>
      <option value="B.A בתקשורת">B.A בתקשורת</option>
    </select>
  );
};

export default Degree;
