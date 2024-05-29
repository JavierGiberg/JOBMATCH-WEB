import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "../context/ProdactContex";
import RegisterStudent from "../RegisterStudent/RegisterStudent";
import NavigateButton from "../NavigateButton/NavigateButton";
import LoginApp from "../Login-APP/Login-App";
import RegisterApp from "../Register-App/Register-App";
import MainApp from "../JOBMATCH-APP/Main-App";
import PrivateRoute from "../Login-APP/PrivateRoute";
import Footer from "../Footer/Footer";
import { Footer as FooterStyled } from "../../AppStyles";

import { MainContainer, AppPageContainer, Logo } from "../styles/MainStyles";

function Main() {
  return (
    <MainContainer>
      <Router>
        <UserContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<AppPage />} />
            <Route path="/StudentRegister" element={<RegisterStudent />} />
            <Route path="/Login-App" element={<LoginApp />} />
            <Route element={<PrivateRoute />}>
              <Route path="/mainApp" element={<MainApp />} />
            </Route>
            <Route path="/Register-App" element={<RegisterApp />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </MainContainer>
  );
}

export default Main;

const AppPage = () => {
  return (
    <AppPageContainer>
      <br />
      <br />
      <div>
        <Logo src="logo.png" alt="logo" />

        <p>
          כניסה למאגר: סטודנטים של מדמ"ח ספיר שרוצים לקחת חלק בטסטים וביום
          פרויקטים מוזמנים להירשם כאן!{" "}
        </p>
        <NavigateButton goTo="/StudentRegister" button="Student Register" />
        <p>fכניסה ורישום למאגר המידע עבור מעסיקים</p>
        <NavigateButton goTo="/Login-App" button="Login-App" />
      </div>
      <br />

      <FooterStyled>
        <Footer />
      </FooterStyled>
    </AppPageContainer>
  );
};
