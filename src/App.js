import React, { Component } from 'react';

import Todos from './components/Todos/Todos';
import StatusMessage from './components/StatusMessage/StatusMessage';
import EmptyMessage from './components/EmptyMessage/EmptyMessage';

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

    messageType: "",
    changedItemKey: "",
    changedItemTitle: "",
    emptyMessage: false
  }


  // Toggle todo item
  toggleComplete = (id) => {
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;

            // Update message after toggling checkbox
            if (todo.completed === true) {
              this.updateMessage(todo.id, todo.title, "checked");
            }
            else {
              this.updateMessage(todo.id, todo.title, "unchecked");
            }

          }
          return todo;
        }
        )
      });
  }


  // Check if there are no more todos
  checkEmpty = () => {
    if (this.state.todos.length === 0) {
      this.setState(
        {
          emptyMessage: true,
        }
      );
    }
  }


  // Delete todo item
  deleteTodo = (id) => {
    var result = this.state.todos.find(e => e.id === id);

    // update the message first before we remove the item from the array
    this.updateMessage(result.id, result.title, "deleted");

    // using a callback since setState is asynch
    this.setState(
      {
        todos: [...this.state.todos.filter(todo => todo.id !== id)],
      }, () => this.checkEmpty()
    );

  }


  // update the message as needed. Probably can make this more streamlined.
  updateMessage = (messageId, messageTitle, messageType) => {

    this.setState(
      {
        messageType: messageType,
        changedItemKey: messageId,
        changedItemTitle: messageTitle,
      }
    );

  }



  render() {
    return (
      <div className="App">
        <ul>
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
        </ul>

        <StatusMessage messageType={this.state.messageType} changedItemKey={this.state.changedItemKey} changedItemTitle={this.state.changedItemTitle} />

      <EmptyMessage emptyMessage={this.state.emptyMessage} />
        {/* {
          // TODO - pull this into a component
          this.state.emptyMessage ? (
            " Empty message here "
          ) : ""
        } */}

      </div>
    );
  }
}

export default App;
