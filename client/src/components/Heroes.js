import React, { useState, useEffect, Component } from "react";
import heroCalls from "../API/heroCalls";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Homepage from "./Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: ["hero 1"],
    };
  }

  componentDidMount = () => {
    heroCalls.getAllHeroes().then((data) => {
      console.log(data);
      this.setState({ heroes: data.data });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>All Heroes</h1>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {this.state.heroes.map((data) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <div>
                    <Card variant="outlined">
                      <CardMedia
                        component="img"
                        image={data.img}
                        alt="hero image"
                        width="200"
                        height="200"
                        title="hero image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {data.hero_name}
                        </Typography>
                        <Typography>
                          <li>Name = {data.name}</li>
                          <li>Description = {data.description}</li>
                          <li>Age = {data.age}</li>
                          <li>Gender = {data.gender}</li>
                          {/* <li>Strength = {data.strength}</li>
                          <li>Speed = {data.speed} </li> */}
                          <li>HP = {data.hp} </li>
                          <li>Abilities = {data.abilities}</li>
                          <li>ID = {data._id} </li>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}
