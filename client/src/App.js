// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { FormGroup, Paper } from "@material-ui/core";
import { Switch } from "@material-ui/core";
// import { light } from "@material-ui/core/styles/createPalette";
import FormControlLabel from "@mui/material/FormControlLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <IconButton color="inherit" onClick={handleClickOpen}>
              <AccountCircle />
            </IconButton>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"About The HeroApp Project:"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  The HeroApp project has been an effort to create a database
                  for fictional characters that is easy to use and navigate. The
                  Project was started September 1st, 2021 and concluded December
                  6th, 2021.
                  <br />
                  <br /> Contributers: <br />
                  David Nguyen: Created Github Repository, Created MongoDB
                  Server, Implimented PostMan functionality <br />
                  Nick Nguyen: Created hero implimentation feature in app
                  <br />
                  Karen Mendoza: Implimented search engine feature
                  <br />
                  Matthew Morgan: Implimented top navigation bar
                  <br />
                  <br /> Resources used: <br />
                  Material-UI, PostMan API, MongoDB, Visual Studios, Github
                  repository, Coded in Javascript
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </FormGroup>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
