// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import Button from "@mui/material/Button";
import Homepage from "./components/Homepage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { FormGroup, Paper } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { light } from "@material-ui/core/styles/createPalette";
import FormControlLabel from "@mui/material/FormControlLabel";

//Test Comment
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleIconClick = (id) => {
    setClicked(true);
  };
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh" }}>
          <Homepage />
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  padding="right"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              }
              label="DarkMode Switch"
            />
          </FormGroup>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
