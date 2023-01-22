import React from "react";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import { InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material/";

const FilterBy = () => {

  const dataFromContext = useContext(MyContext);

  const filterChange = (cat1) => {
    const temparr = dataFromContext.prodCat.filter(
      (el) => el.category === cat1
    );
    if (cat1 === "ALL") {
      dataFromContext.setProdFilter(dataFromContext.prodCat);
    } else {
      dataFromContext.setProdFilter(temparr);
    }
  };


  return (
    <div className="sort">
      <div className="collection-sort">
      <Box sx={{ minWidth: 120, height: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By:</InputLabel>
        <Select
          defaultValue={"ALL"}
          onChange={(e) => filterChange(e.target.value)}
        >
        {dataFromContext.categories.map((option2, index) => (
            <MenuItem key={index} value={option2}>
              {option2}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
      </div>
    </div>
  );
};

export default FilterBy;
