import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@mui/material/Paper";
// import SearchBar from "material-ui-search-bar";
// import SearchBar from "@material-ui/core/SearchBar";

import Heroes from "./Heroes";
import AddHero from "./AddHero";
import DeleteHero from "./DeleteHero";
import EditHero from "./EditHero";
import FindHero from "./FindHero";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const homeButtonStyle = {
      color: "white",
      backgroundColor: "Crimson",
      padding: "10px",
      marginLeft: "20px",
    };

    const buttonSpacing = {
      padding: "10px",
      marginLeft: "20px",
    };

    return (
      <div className="App">
        {/* <Router> */}
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              My Favorite Superheroes Database Collection
            </Typography>
            <br />
            {/* <Link to="/"> */}
            <Button style={homeButtonStyle} variant="outlined">
              Home / Clear Page
            </Button>
            {/* </Link> */}
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        <h1 color="secondary">My Favorite Superheroes!</h1>
        <br />
        <img src="https://c4.wallpaperflare.com/wallpaper/84/210/523/multiple-display-marvel-comics-dc-comics-spider-man-wallpaper-preview.jpg" />
        <br />
        {/* <Route path="/findhero" component={FindHero} />
          <Link to="/findhero"> */}
        <Button size="large" color="secondary" variant="contained">
          Click to Search Hero by Id
        </Button>
        {/* </Link> */}
        <br />
        <br />
        {/* <Route path="/heroes" component={Heroes} />
          <Route path="/addhero" component={AddHero} />
          <Route path="/deletehero" component={DeleteHero} />
          <Route path="/edithero" component={EditHero} />
          <Link to="/heroes"> */}
        <Button style={buttonSpacing} color="primary" variant="contained">
          View All Heroes
        </Button>
        {/* </Link>
          <Link to="/addhero"> */}
        <Button style={buttonSpacing} color="secondary" variant="contained">
          Add Hero
        </Button>
        {/* </Link>
          <Link to="/edithero"> */}
        <Button style={buttonSpacing} color="primary" variant="contained">
          Edit Hero
        </Button>
        {/* </Link>
          <Link to="/deletehero"> */}
        <Button style={buttonSpacing} color="secondary" variant="contained">
          Delete Hero
        </Button>
        {/* </Link> */}
        <br />
        <br />
        {/* </Router> */}
      </div>
    );
  }
}
