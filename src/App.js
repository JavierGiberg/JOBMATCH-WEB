import "./App.css";

import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="header"></div>
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
