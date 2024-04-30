import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <br />
      <Main />
      <br />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
