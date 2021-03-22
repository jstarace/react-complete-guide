import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Jason', age: 41},
      {name: 'Sharon', age: 38},
      {name: 'Quincy', age: 39}
    ],
    otherState: 'some other values'
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    this.setState( {
      persons: [
        {name: 'Zardoz', age: 41},
        {name: 'Sharon', age: 38},
        {name: 'Quincy', age: 40}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p>This is really working!!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies include, running </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!'));
  }
}

export default App;
