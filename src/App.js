import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import { AppContainer, Header, Main as MainStyled } from "./AppStyles";

function App() {
  return (
    <AppContainer>
      <Header>
        <NavBar />
      </Header>
      <MainStyled>
        <Main />
      </MainStyled>
    </AppContainer>
  );
}

export default App;
