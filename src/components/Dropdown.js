import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(age,handleDropdownChange) {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
    
  // };
  // console.log(age)

  return (
    <Box sx={{ minWidth: 120,color:"black" }}>
      <FormControl fullWidth>
        <InputLabel style={{color:"black" }} id="demo-simple-select-label">Place of birth</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={(e)=>handleDropdownChange(e)}
        >
          <MenuItem value="chandigarh">Chandigarh</MenuItem>
          <MenuItem value="Mohali">Mohali</MenuItem>
          <MenuItem value="Panchkula">Panchkula</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
