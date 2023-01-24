import React, {useContext} from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { InputLabel} from "@mui/material/";
import './FilterAndSort.css';
import {MyContext} from '../MyContext';


const SortBy = () => {

  const dataFromContext = useContext(MyContext);



  const handleChange = (event, newValue) => {
    dataFromContext.setsliderValue(newValue);
  };

  return (
    <div className="sort">
      <div className="collection-sort">
        <Box sx={{ width: 200 }}>
          {/* <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center"> */}
            {/* <VolumeDown /> */}
        <InputLabel id="demo-simple-select-label">Price Range</InputLabel>
            
            <Slider className="sortSlider" 
            getaria-label="Temperature range" 
            value={dataFromContext.sliderValue} 
            onChange={handleChange}
            // valueLabelDisplay="auto"
            min={0}
            max={1000} 
            marks={[
              {value:dataFromContext.sliderValue[0],label:dataFromContext.sliderValue[0]},
              {value:dataFromContext.sliderValue[1],label:dataFromContext.sliderValue[1]},
          ]}
            />
        </Box>
      
      </div>
    </div>
  );
};

export default SortBy;
