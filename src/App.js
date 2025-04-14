import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Psp from "./pages/Psp.js";
import Cspp from "./pages/Cspp.js";
import Fim from "./pages/Fim.js";
import Barracarremento from "./components/layout/Barracarremento.js";
import logo from "./assets/logo-prime-coaching.svg";

function App() {
  return (
    <Router>
      <div className="a">
        <div className="container">
          <img src={logo} alt="logo-prime-coaching" className="logo" />
          <div className="quadrado">
            <Routes>
              <Route path="/" element={<Navigate to="/psp" replace />} />
              <Route path="/psp" element={<Psp />} />
              <Route path="/cspp" element={<Cspp />} />
              <Route path="/fim" element={<Fim />} />
            </Routes>
          </div>
        </div>
        <Barracarremento />
      </div>
    </Router>
  );
}

export default App;
