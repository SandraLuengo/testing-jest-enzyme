import React from "react";
import { Test } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Testing with Jest and Enzyme
      </header>
      <Test color='red'/>
    </div>
  );
};

export default App;
