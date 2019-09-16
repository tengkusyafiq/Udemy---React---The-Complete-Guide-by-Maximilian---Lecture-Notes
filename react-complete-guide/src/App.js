import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola!</h1>
        <h2>Name's TG.</h2>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" />
        <Person name="Elle" age="26" />
      </div>
    );
  }
}

export default App;
