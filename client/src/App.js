// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import Button from "@mui/material/Button";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    // <Router>
    <div>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh" }}>
          {/* <header className="App-header-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload - Dev Branch.
        </p> */}
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          {/* <h1>Hero Project</h1> */}
          {/* </header> */}
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
    // </Router>
  );
}

export default App;
