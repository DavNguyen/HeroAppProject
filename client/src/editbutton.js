import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Search() {
  return (
    <div className={editbutton}>
      <Button variant="contained">Search</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button type= "Search" color "primary"> Search </Button>
    </div>
  );
}
