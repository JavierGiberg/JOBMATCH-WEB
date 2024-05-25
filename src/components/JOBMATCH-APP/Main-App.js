import React, { useState } from "react";
import RankingPro from "./RankingPro";
import Degree from "./Degree";
import Major from "./Major";
import "./MainApp.css";
import LanguagesCheckbox from "./LanguagesCheckbox ";
import StudentTable from "./StudentTable";

function MainApp() {
  const initialItems = [
    { id: "programming", content: "Programming" },
    { id: "algorithm", content: "Algorithm" },
    { id: "cyber", content: "Cyber" },
    { id: "math", content: "Math" },
  ];
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [rankings, setRankings] = useState(initialItems);
  const [data, satData] = useState();

  let programming;
  let algorithm;
  let cyber;
  let math;

  const handleChangeDegree = (event) => {
    const selectedOption = event.target.value;
    setDegree(selectedOption);
  };

  const handleChangeMajor = (event) => {
    const selectedOption = event.target.value;
    setMajor(selectedOption);
  };

  const handleGetRanking = () => {
    const ranking = rankings.map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

    programming = ranking.find((item) => item.id === "programming").rank;
    algorithm = ranking.find((item) => item.id === "algorithm").rank;
    cyber = ranking.find((item) => item.id === "cyber").rank;
    math = ranking.find((item) => item.id === "math").rank;
  };

  const getDataTable = async () => {
    handleGetRanking();

    const preferences = {
      gpa: {
        programming: programming,
        algorithm: algorithm,
        cyber: cyber,
        math: math,
      },
      languages: selectedLanguages,
    };
    const url = `http://localhost:8000/api/mainAlgo?degree=${degree}&major=${major}
    &programming=${preferences.gpa.programming}&algorithm=${preferences.gpa.algorithm}
    &cyber=${preferences.gpa.cyber}&math=${preferences.gpa.math}&languages=${preferences.languages}`;
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      satData(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="ranking-section">
        <div>
          <Major handleChangeMajor={handleChangeMajor} />
        </div>
        <div>
          <Degree handleChangeDegree={handleChangeDegree} />
        </div>
        <div className="RankingPro-container">
          <div className="RankingPro-item1">
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
            <p>4.</p>
          </div>
          <div className="RankingPro-item2">
            <RankingPro
              setRankings={setRankings}
              handleGetRanking={handleGetRanking}
              rankings={rankings}
            />
          </div>
        </div>
        <div>
          <LanguagesCheckbox setSelectedLanguages={setSelectedLanguages} />
        </div>
        <button onClick={getDataTable}>Get Ranking</button>
      </div>
      <div className="table-section">
        <StudentTable data={data} />
      </div>
    </div>
  );
}

export default MainApp;
