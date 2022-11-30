import { AppBar, MenuItem, Toolbar, Typography, Select, createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import './Header.css'


function Header() {
  const navigate = useNavigate();
  const {currency,setCurrency} = CryptoState();
  const darkTheme = createTheme({
    palette:{
      primary:{
        main:"#fff",
      },
      type: "dark",
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>

    <AppBar color="primary" position="static">
      <Container>
        <Toolbar>
          <Typography className="main-lg
          " onClick={() => navigate("/") }>Crypto Price Tracker</Typography>
          <Select
            varient="outlined"
            style= {{ width: 100, height: 40, marginLeft: 15 }}
            value = {currency}
            onChange={(e)=>setCurrency(e.target.value) }
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header;
