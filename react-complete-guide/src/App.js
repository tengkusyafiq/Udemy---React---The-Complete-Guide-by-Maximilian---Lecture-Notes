import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Elle", age: 26 }
    ]
  };

  switchNameHandler = () => {
    console.log("was clicked.");
  };

  render() {
    return (
      <div className="App">
        <h1>Hola!</h1>
        <h2>Name's TG.</h2>
        <button onClick={this.switchNameHandler}>Switch me!</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
