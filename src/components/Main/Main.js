import "./Main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "../context/ProdactContex";
import RegisterStudent from "../RegisterStudent/RegisterStudent";
import InteractivePoster from "../InteractivePoster/InteractivePoster";
import NavigateButton from "../NavigateButton/NavigateButton";
import RegisterApp from "../Register-App/Register-App";
import NavBar from "../NavBar/NavBar";

function Main() {
  return (
    <div className="Main">
      <Router>
        <UserContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<AppPage />} />
            <Route path="/StudentRegister" element={<RegisterStudent />} />
            <Route path="/Register-App" element={<RegisterApp />} />
            <Route path="/InteractivePoster" element={<InteractivePoster />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default Main;

const AppPage = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div>
        <img src="logo.png" className="App-logo" alt="logo" />
        <p>SOON...</p>
        <p>
          כניסה למאגר: סטודנטים של מדמ"ח ספיר שרוצים לקחת חלק בטסטים וביום
          פרויקטים מוזמנים להירשם כאן!{" "}
        </p>
        <NavigateButton goTo="/StudentRegister" button="Student Register" />
      </div>
      <br />

      <NavigateButton goTo="/Register-App" button="Register-App" />
      <button onClick={testserver}>test server</button>
    </div>
  );
};

const testserver = () => {
  fetch("https://jobmatch.israelcentral.cloudapp.azure.com:443/testApi")
    .then((res) => res.text())
    .then((data) => {
      console.log("test server");
      console.log(data);
    });
};
