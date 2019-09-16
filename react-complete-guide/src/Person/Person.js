import React from "react";

const person = () => {
  return (
    <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old.</p>
  ); //Math.floor= to round up
};

export default person;
