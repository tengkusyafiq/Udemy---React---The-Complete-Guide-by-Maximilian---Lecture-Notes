import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "rgvstc2343", name: "Max", age: 28 },
      { id: "3cr24rf43r", name: "Manu", age: 29 },
      { id: "ewrc44y65y", name: "Elle", age: 26 }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
                key={person.id}
                change={event => this.nameChangedHandler(event, person.id)}
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
