import React, { useState } from "react";
import "./LanguagesCheckbox.css";

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
    <div className="dropdown">
      <button
        className="dropdown-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Select Languages
      </button>
      {showDropdown && (
        <div className="dropdown-content">
          {languages.map((language) => (
            <div key={language}>
              <label>
                <input
                  type="checkbox"
                  value={language}
                  onChange={() => handleCheckboxChange(language)}
                />
                {language}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagesCheckbox;
