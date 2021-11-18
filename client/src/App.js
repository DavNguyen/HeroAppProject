import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    console.log(`Typed => ${e.target.value}`);
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1> Custom Hero Database Builder</h1>
        <TextField
          value={value}
          onChange={handleChange}
          label="Enter Your Hero's Name"
          variant="outlined"
          color="primary"
        />
        <TextField
          label="Enter Your Hero's Age"
          variant="outlined"
          color="secondary"
          type="email"
          required
        />
        <TextField
          label="Enter Your Hero's Gender "
          variant="outlined"
          color="secondary"
          type="email"
          required
        />
        <TextField
          label="Enter Your Hero's Description"
          variant="outlined"
          color="secondary"
          type="email"
          required
        />
        <TextField
          label="Enter Your Hero's Ability"
          variant="outlined"
          color="secondary"
          type="email"
          required
        />
        <TextField
          label="Enter Your Hero's Health"
          variant="outlined"
          color="secondary"
          type="email"
          required
        />
        <TextField
          label="Copy and Paste Your Hero's Image Link Here"
          variant="outlined"
          color="secondary"
          type="email"
          required
        />
        <Button variant="outlined">Create Hero</Button>
      </div>
    </div>
  );
}

export default App;
