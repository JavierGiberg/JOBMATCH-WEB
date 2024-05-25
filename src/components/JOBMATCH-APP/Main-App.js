import React, { useState, useEffect } from "react";
import RankingPro from "./RankingPro";
import Degree from "./Degree";
import Major from "./Major";
import "./MainApp.css";

function MainApp() {
  const initialItems = [
    { id: "programming", content: "Programming" },
    { id: "algorithm", content: "Algorithm" },
    { id: "cyber", content: "Cyber" },
    { id: "math", content: "Math" },
  ];

  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [rankings, setRankings] = useState(initialItems);

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
    console.log(ranking);
  };

  return (
    <div className="main-container">
      <div className="ranking-section">
        <RankingPro
          setRankings={setRankings}
          handleGetRanking={handleGetRanking}
          rankings={rankings}
        />
        <Major handleChangeMajor={handleChangeMajor} />
        <Degree handleChangeDegree={handleChangeDegree} />
        <button
          onClick={() => {
            handleGetRanking();
            console.log(`Degree: ${degree}, Major: ${major}`);
          }}
        >
          Get Ranking
        </button>
      </div>
      <div className="table-section">
        <div className="select-container"></div>
      </div>
    </div>
  );
}

export default MainApp;
