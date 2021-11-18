// import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
// import { alpha, makeStyles } from "@material-ui/core/styles";
// import SearchIcon from "@material-ui/icons/Search";
// import InputBase from "@material-ui/core/InputBase";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

//Test Comment
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* use for menu drop down */}
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            HeroApp
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Browse Heros…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} /> */}
          <Button color="inherit">Your Heros</Button>
          <Button color="inherit">Create Hero</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/* sample button */}
      {/* <Button variant="contained" color="primary">
        Deez Nuts
      </Button> */}
      {/* past code */}
      {/* <header className="App-header-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
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
    </div>
  );
}

export default App;
