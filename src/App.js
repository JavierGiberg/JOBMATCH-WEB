import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar />
      </header>
      <br />
      <Main />
      <br />
      <foooter className="footer">
        <Footer />
      </foooter>
    </div>
  );
}

export default App;
