import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Elle", age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: "other value"
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Maxima", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };

  console.log(personState, otherState);

  return (
    <div className="App">
      <h1>Hola!</h1>
      <h2>Name's TG.</h2>
      <button onClick={switchNameHandler}>Switch me!</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default App;
