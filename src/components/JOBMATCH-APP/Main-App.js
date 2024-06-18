import React, { useState } from "react";
import { Grid, Button, Typography, Container } from "@mui/material";
import RankingPro from "./RankingPro";
import Degree from "./Degree";
import Major from "./Major";
import LanguagesCheckbox from "./LanguagesCheckbox ";
import StudentTable from "./StudentTable";
import {
  MainContainer,
  ScrollableTableContainer,
} from "../styles/MainAppStyles";
import Chat from "../chat/Chat";

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
  const [data, setData] = useState();

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
    return {
      programming: ranking.find((item) => item.id === "programming")?.rank || 0,
      algorithm: ranking.find((item) => item.id === "algorithm")?.rank || 0,
      cyber: ranking.find((item) => item.id === "cyber")?.rank || 0,
      math: ranking.find((item) => item.id === "math")?.rank || 0,
      order: rankings.length ? rankings.map((item) => item.id) : [], // Capture the order of rankings
    };
  };

  const getDataTable = async () => {
    const preferences = handleGetRanking();

    const url = `http://localhost:8000/api/mainAlgo?degree=${degree}&major=${major}
  &programming=${preferences.programming}&algorithm=${preferences.algorithm}
  &cyber=${preferences.cyber}&math=${preferences.math}&languages=${
      selectedLanguages.length ? selectedLanguages.join(",") : ""
    }
  &order=${preferences.order.length ? preferences.order.join(",") : ""}`;

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      data.sort((a, b) => b.finScore - a.finScore);
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <MainContainer>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Major handleChangeMajor={handleChangeMajor} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Degree handleChangeDegree={handleChangeDegree} />
          </Grid>
          <Grid item xs={12}>
            <RankingPro
              setRankings={setRankings}
              handleGetRanking={handleGetRanking}
              rankings={rankings}
            />
          </Grid>
          <Grid item xs={12}>
            <LanguagesCheckbox setSelectedLanguages={setSelectedLanguages} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={getDataTable}>
              לחץ כאן לקבל למשוך את הסטודנוטים המובילים
            </Button>
          </Grid>
        </Grid>
        <ScrollableTableContainer>
          {data ? (
            <StudentTable data={data} />
          ) : (
            <Typography variant="h6" align="center" color="textSecondary">
              No data available
            </Typography>
          )}
        </ScrollableTableContainer>
      </MainContainer>
      <Chat dataTable={data} />
    </Container>
  );
}


export default MainApp;
