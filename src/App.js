import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/context/ProdactContex";

import NavigateButton from "./components/NavigateButton/NavigateButton";
import RegisterStudent from "./components/RegisterStudent/RegisterStudent";
function App() {
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{}}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <header className="App-header">
                    <img src="logo.png" className="App-logo" alt="logo" />
                    <p>SOON...</p>
                    <p>
                      כניסה למאגר: סטודנטים של מדמ"ח ספיר שרוצים לקחת חלק בטסטים
                      וביום פרויקטים מוזמנים להירשם כאן!{" "}
                    </p>
                    <NavigateButton goTo="/login" button="Student Register" />
                  </header>
                </div>
              }
            />
            <Route path="/login" element={<RegisterStudent />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
