import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

//Test Comment
function App() {
  return (
    <div className="App">
      <header className="App-header-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload - Dev Branch.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <h1>Hero Project</h1> */}
      </header>
    </div>
  );
}

export default App;
