import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {
  AppContainer,
  Header,
  Main as MainStyled,
  Footer as FooterStyled,
} from "./AppStyles";

function App() {
  return (
    <AppContainer>
      <Header>
        <NavBar />
      </Header>
      <MainStyled>
        <Main />
      </MainStyled>
      <FooterStyled>
        <Footer />
      </FooterStyled>
    </AppContainer>
  );
}

export default App;
