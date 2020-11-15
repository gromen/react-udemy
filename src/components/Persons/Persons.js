import React, { Component } from 'react';
import Person from './Person/Person';

export default class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                  key={person.id}
                  changeValue={(event) => this.props.changed(event, person.id)}
                  clicked={this.props.clicked}
                  name={person.name}
                  age={person.age}
                />
              )
        })
    }
}
