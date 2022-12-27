import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
           Data Extractor Form
        </p>
        <form>
         <div className="input-container">
           <label for="releaseversion">Release Version </label>
           <input type="text" name="release-version" id="releaseversion" placeholder="Enter Artifact's Releaseversion" required />
         </div>
         <div className="input-container">
           <label>Model Type </label>
           <option value="">Tata</option>
           <option value="">Hyundai</option>
           <option value="">Honda</option>
         </div>
         <button onclick="location.href='https://www.google.com'">Build</button>
        </form>
      </header>
    </div>
  );
}
