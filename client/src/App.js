import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
import { MenuAppBar } from "./topnav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuAppBar></MenuAppBar>
    </div>
  );
}

export default App;
