import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Form({ covidDataState, setState, state }) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={state}
          label="States"
          onChange={handleChange}
        >
          {covidDataState.map((item) => (
            <MenuItem key={item.loc} value={item.loc}>
              {item.loc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
