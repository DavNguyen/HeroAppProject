import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Paper from "@mui/material/Paper";
// import SearchBar from "material-ui-search-bar";
// import SearchBar from "@material-ui/core/SearchBar";
import Heroes from "./Heroes";
import AddHero from "./AddHero";
import DeleteHero from "./DeleteHero";
import EditHero from "./EditHero";
import FindHero from "./FindHero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.setState({ open: true });
  };
  handleClick = () => {
    this.setState({ open: false });
  };

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
        <Router>
          <Routes>
            <Route path="/findhero" element={<FindHero />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/addhero" element={<AddHero />} />
            <Route path="/deletehero" element={<DeleteHero />} />
            <Route path="/edithero" element={<EditHero />} />
          </Routes>
        </Router>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              My Favorite Superheroes Database Collection
            </Typography>
            <br />
            <Button
              href="http://localhost:3000"
              targert=" "
              edge="end"
              onClick={this.handleClick}
              style={homeButtonStyle}
              type="button"
              variant="outlined"
            >
              Home / Clear Page
            </Button>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        <h1 color="secondary">My Favorite Superheroes!</h1>
        <br />
        <img src="https://c4.wallpaperflare.com/wallpaper/84/210/523/multiple-display-marvel-comics-dc-comics-spider-man-wallpaper-preview.jpg" />
        <br />
        <Button
          href="http://localhost:3000/findhero"
          targert=" "
          edge="end"
          onClick={this.handleClick}
          size="large"
          color="secondary"
          variant="contained"
        >
          Click to Search Hero by Id
        </Button>
        <br />
        <br />
        <Button
          href="http://localhost:3000/heroes"
          targert=" "
          edge="end"
          onClick={this.handleClick}
          style={buttonSpacing}
          color="primary"
          variant="contained"
        >
          View All Heroes
        </Button>
        <Button
          href="http://localhost:3000/addhero"
          targert=" "
          edge="end"
          onClick={this.handleClick}
          style={buttonSpacing}
          color="secondary"
          variant="contained"
        >
          Add Hero
        </Button>
        <Button
          href="http://localhost:3000/edithero"
          targert=" "
          edge="end"
          onClick={this.handleClick}
          style={buttonSpacing}
          color="primary"
          variant="contained"
        >
          Edit Hero
        </Button>
        <Button
          href="http://localhost:3000/deletehero"
          targert=" "
          edge="end"
          onClick={this.handleClick}
          style={buttonSpacing}
          color="secondary"
          variant="contained"
        >
          Delete Hero
        </Button>
        <br />
        <br />
      </div>
    );
  }
}
