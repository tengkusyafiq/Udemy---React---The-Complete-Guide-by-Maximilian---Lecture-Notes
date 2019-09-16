import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  ); //Math.floor= to round up
};

export default person;
