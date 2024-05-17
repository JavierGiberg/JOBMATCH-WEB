import "./Main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "../context/ProdactContex";
import RegisterStudent from "../RegisterStudent/RegisterStudent";
import NavigateButton from "../NavigateButton/NavigateButton";
import LoginApp from "../Login-APP/Login-App";
import RegisterApp from "../Register-App/Register-App";

function Main() {
  return (
    <div className="Main">
      <Router>
        <UserContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<AppPage />} />
            <Route path="/StudentRegister" element={<RegisterStudent />} />
            <Route path="/Login-App" element={<LoginApp />} />
            <Route path="/Register-App" element={<RegisterApp />} />
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
      <button onClick={testserver}>Test a server</button>
    </div>
  );
};

const testserver = () => {
  fetch("https://jobmatch.world/testApi")
    .then((res) => res.text())
    .then((data) => {
      console.log("test server");
      console.log(data);
    });
};
