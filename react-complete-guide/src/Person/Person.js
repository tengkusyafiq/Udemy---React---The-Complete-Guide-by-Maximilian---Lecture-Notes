import React from "react";

const person = props => {
  return (
    <p>
      I'm {props.name} and I'm {props.age} years old.
    </p>
  ); //Math.floor= to round up
};

export default person;
