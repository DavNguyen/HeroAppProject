import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Homepage from "./Homepage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class DeleteHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ heroId: event.target.value });
    console.log(`change successful ${this.state.heroId} `);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    heroCalls.deleteHero(this.state.heroId).then((data) => {
      console.log(data);
    });
  };

  render() {
    const buttonSpacing = {
      padding: "10px",
      marginLeft: "20px",
    };

    return (
      <div className="App">
        <h1>Delete a Hero</h1>
        <form className="flex-container">
          <TextField
            id="hero-id"
            label="Enter Hero ID"
            type="text"
            variant="outlined"
            onChange={this.handleChange}
          />
          <Button
            style={buttonSpacing}
            variant="outlined"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </form>
        <br />
      </div>
    );
  }
}
