import React, { Component } from 'react';
import Person from './Person/Person';

export default class Persons extends Component {
  render() {
    const { clicked } = this.props;
    
    return this.props.persons.map((person, index) => {
      return (
        <Person
          age={person.age}
          changeValue={(event) => this.props.changed(event, person.id)}
          clicked={clicked}
          key={person.id}
          name={person.name}
        />
      )
    })
  }
}
