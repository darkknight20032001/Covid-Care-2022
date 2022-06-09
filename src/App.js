import Home from "./Components/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CovidPage from "./Components/Pages/CovidStatus/CovidPage";
import BedPage from "./Components/Pages/BedAvailability/BedPage";
import { useState } from "react";
import BedStates from "./Components/Pages/BedAvailability/BedStates/BedStates";
import Vaccination from "./Components/Pages/Vaccination/Vaccination";
import LoginPage from "./Components/Pages/Login/LoginPage";
function App() {
  const [selectedState, setSelectedState] = useState(
    sessionStorage.getItem("state")
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/covid-statistics" element={<CovidPage />} />
          <Route
            path="/bed-availability"
            element={<BedPage setSelectedState={setSelectedState} />}
          />
          <Route
            path={`/bed-availability/${selectedState
              ?.replace(/\s+/g, "-")
              .toLowerCase()}`}
            element={<BedStates />}
          />
          <Route path="/book-your-vaccination-slot" element={<Vaccination />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
