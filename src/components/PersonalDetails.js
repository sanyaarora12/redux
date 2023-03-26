import {
  Container,
  Button,
  Grid,
  Paper,
  Avatar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { personalDetails2 } from "../Container/userSlice";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const paperStyle = { padding: 20, height: "90vh", width: 400 };
  const avatarStyle = { backgroundColor: "#0384fc" };

  const navigate=useNavigate();

  const [form2, setForm2] = useState({
    date: "",
    age: "",
  });

  const { date, age } = form2;

  const handleChange = (e) => {
    setForm2({ ...form2, date: e.target.value });
  };
  console.log(form2);

  const handleDropdownChange = (e) => {
    setForm2({ ...form2, age: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      personalDetails2({
        date,
        age
      })
     
    );
    navigate("/output")
    console.log(form2);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh", marginLeft: "80px" }}
        >
          <Paper elevation={10} style={paperStyle}>
            <form>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Avatar
                    style={avatarStyle}
                    sx={{
                      m: 1,
                      bgcolor: "secondary.main",
                      marginLeft: "160px",
                    }}
                  ></Avatar>
                  <h2 style={{ marginLeft: "-20px", marginBottom: "80px" }}>
                    Personal Details
                  </h2>
                  <Grid item>
                    <TextField
                      fullWidth
                      type="date"
                      value="date"
                      onChange={handleChange}
                    />
                  </Grid>
                  <br />
                  <Grid item>
                    {/* <Dropdown 
                    onChange={handleDropdownChange}
                    age={age}
                    /> */}
                    <FormControl fullWidth>
                      <InputLabel
                        style={{ color: "black" }}
                        id="demo-simple-select-label"
                      >
                        Place of birth
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={(e) => handleDropdownChange(e)}
                      >
                        <MenuItem value="chandigarh">Chandigarh</MenuItem>
                        <MenuItem value="Mohali">Mohali</MenuItem>
                        <MenuItem value="Panchkula">Panchkula</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <br />
                  <Button
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                    variant="contained"
                  >
                    Save and next
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default PersonalDetails;
