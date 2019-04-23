import React, { Component } from 'react';
import Todos from './components/Todos/Todos';

import './App.scss';


class App extends Component {

  state = {
    todos: [
      {
       id: 0,
        title: 'Take out the trash',
        completed: false
      },
      {
       id: 1,
        title: 'Clean the dishes',
        completed: false
      },
      {
        id: 2,
        title: 'Make coffee',
        completed: false
      },
    ]
  }

  // Toggle todo item
  toggleComplete = (id) => {
    //console.log(id);
    this.setState( { todos: this.state.todos.map( todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }
    ) } );
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <ul>
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
        </ul>
      </div>
    );
  }
}

export default App;
