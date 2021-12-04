import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Heroes from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search Hero Here" data={Heroes} />
    </div>
  );
}

export default App;
