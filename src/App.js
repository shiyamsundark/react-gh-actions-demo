import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
           Data Extractor Form
        </p>
        <label for="version">Release_Version</label>
        <input type="text" name="Release-Version" id="version" placeholder="Enter Artifact's Version">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button type="button" class="build-button">BUILD</button>
        </a>
      </header>
    </div>
  );
}

export default App;
