import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import State from "./State";
import SearchBar from "../../SearchBar/SearchBar";
import "./BedPage.css";

const BedPage = ({ setSelectedState }) => {
  let [statesBed, setStatesBed] = useState([]);
  const [bedData, setBedData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const bedAvailability = async () => {
    const url = `https://api.rootnet.in/covid19-in/hospitals/medical-colleges`;
    const fetchedData = await fetch(url);
    const myData = await fetchedData.json();
    const data = myData.data.medicalColleges;
    const getStates = [...new Set(data.map((item) => item.state))];
    setBedData(data);
    setStatesBed(getStates);
  };
  useEffect(() => {
    bedAvailability();
  }, []);

  if (search.trim().length > 0) {
    statesBed = statesBed.filter((state) => {
      return state.toLowerCase().includes(search.toLowerCase());
    });
  }
  const onClickStateHandler = (state) => {
    const getState = bedData.filter((item) => item.state === state);
    sessionStorage.setItem("state", state);
    const statePath = state.replace(/\s+/g, "-").toLowerCase();
    setSelectedState(state);
    navigate(`/bed-availability/${statePath}`, { state: getState });
  };
  return (
    <div className="bed_page">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="bed_page__states">
        {statesBed.map((state) => (
          <State
            key={state}
            state={state}
            onClickStateHandler={onClickStateHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default BedPage;
