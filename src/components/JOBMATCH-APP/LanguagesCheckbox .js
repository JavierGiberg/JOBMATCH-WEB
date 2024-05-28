import React, { useState } from "react";
import {
  DropdownButton,
  DropdownContent,
} from "../styles/LanguagesCheckboxStyles";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";

const languages = [
  "JavaScript",
  "Python",
  "Java",
  "TypeScript",
  "C#",
  "PHP",
  "C++",
  "Shell",
  "C",
  "Ruby",
  "Go",
  "HTML",
  "CSS",
  "Swift",
  "Kotlin",
  "R",
  "Dart",
  "Scala",
  "Rust",
  "Objective-C",
];

const LanguagesCheckbox = ({ setSelectedLanguages }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (language) => {
    const newSelected = selected.includes(language)
      ? selected.filter((lang) => lang !== language)
      : [...selected, language];
    setSelected(newSelected);
    setSelectedLanguages(newSelected);
  };

  return (
    <div>
      <DropdownButton
        variant="contained"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Select Languages
      </DropdownButton>
      {showDropdown && (
        <DropdownContent>
          <FormGroup>
            {languages.map((language) => (
              <FormControlLabel
                key={language}
                control={
                  <Checkbox
                    checked={selected.includes(language)}
                    onChange={() => handleCheckboxChange(language)}
                    name={language}
                  />
                }
                label={language}
              />
            ))}
          </FormGroup>
        </DropdownContent>
      )}
    </div>
  );
};

export default LanguagesCheckbox;
