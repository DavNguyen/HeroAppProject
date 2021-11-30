import React, { useState } from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    console.log(`Typed => ${e.target.value}`);
    setValue(e.target.value);
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <div className="App">
      <div className="App-header">
        <h1> Custom Hero Database Builder </h1>
        <TextField
          value={value}
          onChange={handleChange}
          label="Enter Your Hero's Name"
          variant="outlined"
          color="primary"
        />
        <TextField
          value={value}
          onChange={handleChange}
          label="Enter Your Hero's Age"
          variant="outlined"
          color="primary"
        />
        <TextField
          value={value}
          onChange={handleChange}
          label="Enter Your Hero's Gender"
          variant="outlined"
          color="primary"
        />
        <TextField
          value={value}
          onChange={handleChange}
          label="Enter Your Hero's Description"
          variant="outlined"
          color="primary"
        />
        <TextField
          value={value}
          onChange={handleChange}
          label="Enter Your Hero's Ability"
          variant="outlined"
          color="primary"
        />
        <TextField
          value={value}
          onChange={handleChange}
          label="Enter Your Hero's Health"
          variant="outlined"
          color="primary"
        />
        <TextField
          value={value}
          onChange={handleChange}
          label="Paste Your Hero's Image Link"
          variant="outlined"
          color="primary"
        />
        <Button variant="contained" color="primary" type="submit">
          Create Hero
        </Button>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {value}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
