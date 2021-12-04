import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Homepage from "./Homepage";
import EditHero from "./EditHero";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class FindHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: "",
      data: null,
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ heroId: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    heroCalls.findById(this.state.heroId).then((data) => {
      console.log(`Found ${this.state.heroId} `);
      console.log(data);
      this.setState({ data: data.data });
    });
  };

  viewHero = () => {
    return (
      <div>
        <Container maxWidth="md">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Card>
              <CardMedia
                component="img"
                image={this.state.data.img}
                alt="hero image"
                width="200"
                height="200"
                title="Image title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.state.data.hero_name}
                </Typography>
                <Typography>
                  <li>Name = {this.state.data.name}</li>
                  <li>Description = {this.state.data.description}</li>
                  <li>Age = {this.state.data.age}</li>
                  <li>Gender = {this.state.data.gender}</li>
                  <li>Strength = {this.state.data.strength}</li>
                  <li>Speed = {this.state.data.speed} </li>
                  <li>HP = {this.state.data.hp} </li>
                  <li>Abilities = {this.state.data.abilities}</li>
                  <li>ID = {this.state.data._id} </li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Container>
        <br />
      </div>
    );
  };

  render() {
    const buttonSpacing = {
      padding: "10px",
      marginLeft: "20px",
    };

    return (
      <div>
        <form className="flex-container">
          <TextField
            id="hero-id"
            label="Search By Hero ID"
            type="text"
            variant="outlined"
            onChange={this.handleChange}
          />
          <Button
            style={buttonSpacing}
            variant="outlined"
            onClick={this.handleSubmit}
          >
            Search
          </Button>
        </form>
        <br />
        {this.state.data && this.viewHero()}
      </div>
    );
  }
}
