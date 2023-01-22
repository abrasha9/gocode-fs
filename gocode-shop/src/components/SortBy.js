import React, {useState,useContext} from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import {MyContext} from '../MyContext';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';


const SortBy = () => {


    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  const options = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date,old to new",
  ];
  return (
    <div className="sort">
      <div className="collection-sort">
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            {/* <VolumeDown /> */}
            <Slider aria-label="Temperature" value={value} onChange={handleChange} />
            {/* <VolumeUp /> */}
          </Stack>
          {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
        </Box>
        );
        {/* <label>{labelName}</label>
        <select>
          {options.map((option2, index) => (
            <option key={index} value="/">
              {option2}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  );
};

export default SortBy;
