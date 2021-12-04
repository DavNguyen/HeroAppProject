import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class AddHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hero_name: "",
      age: 0,
      gender: "",
      img: "",
      description: "",
      speed: 0,
      strength: 0,
      hp: 0,
      abilities: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit successful");

    const hero = {
      name: this.state.name,
      hero_name: this.state.hero_name,
      age: this.state.age,
      gender: this.state.gender,
      img: this.state.img,
      description: this.state.description,
      strength: this.state.strength,
      speed: this.state.speed,
      hp: this.state.hp,
      abilities: this.state.abilities,
    };
    console.log({ hero });

    heroCalls.addHero({ hero }).then((data) => {
      console.log(data);
    });
  };

  confirmSubmit = () => {
    return <h2>Hero Added!</h2>;
  };

  render() {
    return (
      <div className="App">
        <h1>Add a Hero</h1>
        <form className="flex-container" onSubmit={this.handleSubmit}>
          <TextField
            label="Name"
            name="name"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <TextField
            label="Superhero Name"
            name="hero_name"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <TextField
            label="Age"
            name="age"
            type="number"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <TextField
            label="Gender"
            name="gender"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <TextField
            label="Image URL"
            name="img"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <TextField
            id="filled-multiline-flexible"
            label="Description"
            name="description"
            type="text"
            multiline
            rowsMax={4}
            variant="outlined"
            onChange={this.handleChange}
          />
          <br />
          <h3>Hero Attributes:</h3>
          <TextField
            label="Strength"
            name="strength"
            type="number"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <TextField
            label="Speed"
            name="speed"
            type="number"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <TextField
            label="HP"
            name="hp"
            type="number"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <TextField
            label="Abilities"
            name="abilities"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <Button type="submit" variant="outlined">
            Submit to Database
          </Button>
          <br />
          <br />
          {this.handleSubmit && this.confirmSubmit}
        </form>
      </div>
    );
  }
}
