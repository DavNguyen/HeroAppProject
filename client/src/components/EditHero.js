import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class EditHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: "",
      param: "",
      edit: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      [this.state.param]: this.state.edit,
    };

    console.log(payload);

    heroCalls.editHero(this.state.heroId, payload).then((data) => {
      console.log(data);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Edit a Hero</h1>
        <form className="flex-container">
          <TextField
            id="hero-id"
            name="heroId"
            label="Enter Hero ID"
            type="text"
            variant="outlined"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <InputLabel>What to Change</InputLabel>
          <Select
            autoWidth
            id="param"
            name="param"
            onChange={this.handleChange}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="hero_name">Hero Name</MenuItem>
            <MenuItem value="age">Age</MenuItem>
            <MenuItem value="gender">Gender</MenuItem>
            <MenuItem value="img">Image Link</MenuItem>
            <MenuItem value="description">Description</MenuItem>
            <MenuItem value="strength">Strength</MenuItem>
            <MenuItem value="speed">Speed</MenuItem>
            <MenuItem value="hp">HP</MenuItem>
            <MenuItem value="abilities">Abilities</MenuItem>
          </Select>
          <br />
          <br />
          <TextField
            id="filled-multiline-flexible"
            label="Change to make"
            name="edit"
            type="text"
            multiline
            rowsMax={4}
            variant="filled"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button variant="outlined" onClick={this.handleSubmit}>
            Submit the Edit
          </Button>
          <br />
        </form>
        <br />
      </div>
    );
  }
}
