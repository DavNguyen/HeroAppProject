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

const useStyles = makeStyles({
  root: {
    width: 600,
  },
  media: {
    height: 50,
  },
  field: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7,
    marginBottom: 7,
  },
});

function App() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [desc, setDesc] = useState("");
  const [ab, setAb] = useState("");
  const [hp, setHp] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && gender && desc && ab && hp) {
      console.log(name, age, gender, desc, ab, hp);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1> Custom Hero Database Builder </h1>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField
              onChange={(e) => setName(e.target.value)}
              label="Enter Your Hero's Name"
              variant="outlined"
              color="primary"
              className={classes.field}
            />
            <TextField
              onChange={(e) => setAge(e.target.value)}
              label="Enter Your Hero's Age"
              variant="outlined"
              color="primary"
              className={classes.field}
            />
            <TextField
              onChange={(e) => setGender(e.target.value)}
              label="Enter Your Hero's Gender"
              variant="outlined"
              color="primary"
              className={classes.field}
            />
          </div>
          <TextField
            fullWidth
            onChange={(e) => setDesc(e.target.value)}
            label="Enter Your Hero's Description"
            variant="outlined"
            color="primary"
            className={classes.field}
          />
          <div>
            <TextField
              onChange={(e) => setAb(e.target.value)}
              label="Enter Your Hero's Ability"
              variant="outlined"
              color="primary"
              className={classes.field}
            />
            <TextField
              onChange={(e) => setHp(e.target.value)}
              label="Enter Your Hero's Health"
              variant="outlined"
              color="primary"
              className={classes.field}
            />
          </div>
          <TextField
            fullWidth
            onChange={(e) => setImage(e.target.value)}
            label="Paste Your Hero's Image Link"
            variant="outlined"
            color="primary"
            className={classes.field}
          />
          <div>
            <Button
              className={classes.field}
              variant="contained"
              color="primary"
              type="submit"
            >
              Create Hero
            </Button>
          </div>
        </form>
        <div>Your Heros:</div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Image: {image}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Name: {name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Age: {age}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Gener: {gender}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Desc: {desc}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Ability: {ab}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                HP: {hp}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Edit Hero
            </Button>
            <Button size="small" color="primary">
              Delete Hero
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
