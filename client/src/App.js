import React, { useState } from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 600,
  },
  media: {
    height: 50,
  },
  field: {
    marginLeft: 5,
    marginRight: 5,
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
        <Grid container>
          <Grid item xs={1}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
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
                </div>
                <div>
                  <FormControl>
                    <FormLabel>Select Your Hero's Gender</FormLabel>
                    <RadioGroup
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <FormControlLabel
                        value="Male"
                        control={<Radio color="primary" />}
                        label="Male"
                        color="primary"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio color="primary" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="Other"
                        control={<Radio color="primary" />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <TextField
                  fullWidth
                  onChange={(e) => setDesc(e.target.value)}
                  label="Enter Your Hero's Description"
                  variant="outlined"
                  color="primary"
                />
                <div>
                  <TextField
                    fullWidth
                    onChange={(e) => setAb(e.target.value)}
                    label="Enter Your Hero's Ability"
                    variant="outlined"
                    color="primary"
                  />
                </div>
                <FormControl>
                  <FormLabel>Select Your Hero's Health Status</FormLabel>
                  <RadioGroup
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    className={classes.field}
                  >
                    <FormControlLabel
                      value="Alive"
                      control={<Radio color="primary" />}
                      label="Alive"
                    />
                    <FormControlLabel
                      value="Dead"
                      control={<Radio color="primary" />}
                      label="Dead"
                    />
                    <FormControlLabel
                      value="MIA"
                      control={<Radio color="primary" />}
                      label="MIA"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  fullWidth
                  onChange={(e) => setImage(e.target.value)}
                  label="Paste Your Hero's Image Link"
                  variant="outlined"
                  color="primary"
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
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              Your Heros:
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title="Hero"
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
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
