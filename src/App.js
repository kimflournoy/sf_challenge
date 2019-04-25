import React, { Component } from 'react';

import Todos from './components/Todos/Todos';
import StatusMessage from './components/StatusMessage/StatusMessage';

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
    ],
    message: "hello",
    messageType: "",
    changedItem: "",
    changedItemTitle: "",
    //changedItemTitle: this.todos[this.changedItem],
  }


  // Toggle todo item
  toggleComplete = (id) => {
    this.setState(
      {
      todos: this.state.todos.map( todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;

          this.setState({
            changedItem: todo.id,
            changedItemTitle: todo.title
          })

          if(todo.completed === true) {
            this.setState({
              messageType: "checked"
            })
          }
          else {
            this.setState({
              messageType: "unchecked"
            })
          }

        }
        return todo;
      }
    ) } );
  }



  // Delete todo item
  deleteTodo = (id) => {
    var localTodoTitle = this.state.todos[id.toString()].title;
    this.setState(
      {
      todos: [...this.state.todos.filter(todo => todo.id !== id)],

      }, () => {
        console.log("length: " + this.state.todos.length);
        this.updateMessage(localTodoTitle, "deleted");
      }
      );

      
      //this.updateMessage(id, "deleted");


      
   
  }


  updateMessage = (messageTitle, messageType) => {

    console.log("length: " + this.state.todos.length);

    
    if(this.state.todos.length > 0) {
      this.setState(
          {
          

              messageType: messageType,
              changedItemTitle: messageTitle,

        }
          );
    }

      else {
        this.setState(
          {
          

              messageType: "empty",
              changedItemTitle: "",
              changedItem: "",

        }
          );

      }
  }



  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
        <ul>
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
        </ul>
        <StatusMessage messageType={this.state.messageType} changedItem={this.state.changedItem} changedItemTitle={this.state.changedItemTitle} />
      </div>
    );
  }
}

export default App;
