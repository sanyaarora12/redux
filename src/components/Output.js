import React from "react";
import { useSelector } from "react-redux";
import { Button, Container, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Output() {
  const firstName = useSelector((state) => state.user2.user.formData.firstName);
  const email = useSelector((state) => state.user2.user.formData.email);
  const phonenumber = useSelector((state) => state.user2.user.formData.phonenumber);
  const date = useSelector((state) => state.user2.user2.date);
  const age = useSelector((state) => state.user2.user2.age);

  const paperStyle = { padding: 20, height: "90vh", width: 400 };
  const navigate=useNavigate();

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh", marginLeft: "60px" }}
        >
          <Paper elevation={10} style={paperStyle}>
            <form>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                 
                  <h2 style={{ marginLeft: "-20px", marginBottom: "80px" }}>
                        All details
                  </h2>
            
                    <p>Name: {firstName}</p>
                    <p>Email: {email}</p>
                    <p>Phone number: {phonenumber}</p>
                    <p>Date: {date}</p>
                    <p>Place: {age}</p>
            
                </Grid>
              </Grid>
              <br/>
              <Button onClick={()=>navigate("/")} type="submit" variant="contained">
             Confirm
          </Button>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}
