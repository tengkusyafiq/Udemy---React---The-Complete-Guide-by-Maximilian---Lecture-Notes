import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Elle", age: 26 }
    ],
    otherState: "other value",
    showPerson: "false"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };

  userNameHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    return (
      <div className="App">
        <h1>Hola!</h1>
        <h2>Name's TG.</h2>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle me!
        </button>
        {this.state.showPerson === true ? (
          <div>
            <Person
              click={this.switchNameHandler.bind(this, "Max!!!!!!")}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              click={this.switchNameHandler}
              change={this.userNameHandler}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Person
              click={this.switchNameHandler}
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
