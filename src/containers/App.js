import React, { Component } from 'react';
import Radium from 'radium';

import CharacterDisplay from '../components/CharacterDisplay/CharacterDisplay';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Validation from '../components/Validation/Validation';

class App extends Component {
  state = {
    persons: [
      { id:'asd1', name: 'Paweł', age: 24 },
      { id:'asd2', name: 'Karolina', age: 33 },
      { id:'asd3', name: 'Gracjan', age: 40 }
    ],
    username: 'marcin',
    showPersons: true,
    userInput: '',
  };

  userInputHandler = e => {
   this.setState({username: e.target.value})
  };

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    let person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  inputChangeHandler = (event) => {
    const text = event.target.value;
    
    this.setState({
      userInput: text,
    });
  }

  charsCount = (string) => {
    return string.length;
  };

  handlerDeleteCharacter = (index) => {
    const chars = [...this.state.userInput]
    chars.splice(index, 1);

    const text = chars.join('')

    this.setState({
      userInput: text,
    })
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            changed={this.nameChangeHandler}
            persons={this.state.persons}
          />

        </div>
      )
    }

    const characters = [...this.state.userInput]
                          .map((character, index) => 
                            <CharacterDisplay 
                              character={ character } 
                              clicked={ () => this.handlerDeleteCharacter(index)}
                            />)

    return (
      <div className={classes.App}>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />

        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>

        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        {persons}

        { characters }
      </div>
    );
  }
}

export default Radium(App);
