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

  deletePersonHandler = personIndex => {
    //name an argument as personIndex to keep index value got.
    //const persons = [...this.state.persons]; //temporarily copy the persons list
    //or to copy, you also can use the old way like below
    //const persons = this.state.persons.slice();
    const persons = this.state.persons; //this is a bad way to do it
    //KIV: why other ways are not working but the bad way's working haha

    persons.splice(personIndex, 1); //to remove 1 element from the array. Which one? The personIndex.
    this.setState({ person: persons }); //update list
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

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            //add second argument 'index' to know which person we're looking right now.
            return (
              <Person
                click={() => this.deletePersonHandler(index)} //link to the function, pass index with arrow function instead of using bind(in older topic)
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hola!</h1>
        <h2>Name's TG.</h2>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle me!
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
