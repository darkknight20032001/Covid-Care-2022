import React, { useState } from "react";
import "./SearchBar.css";
import TextField from "@mui/material/TextField";
const SearchBar = ({ search, setSearch }) => {
  const [clickSearch, setClickSearch] = useState(false);
  let widthSearchBar = 20;
  if (clickSearch === true) {
    widthSearchBar = 31;
  }
  return (
    <div className="Search">
      <TextField
        style={{
          filter: "drop-shadow(2px 4px 6px black)",
          width: `${widthSearchBar}rem`,
          background: "white",
          transition: "0.3s ease",
        }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onClick={() => setClickSearch(true)}
        onBlur={() => setClickSearch(false)}
      />
    </div>
  );
};

export default SearchBar;
