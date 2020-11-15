import classes from "../Persons/Person/person.css";
import Input from "../../Input";
import React from "react";

const person = ( props ) => {
  const { name, clicked, age, changeValue } = props;

  return (
    <div className={classes.person} onClick={clicked}>
      <p>I'm {name} and I am {age} years old!</p>
      <Input change={changeValue}/>
    </div>
  )
};

export default person;