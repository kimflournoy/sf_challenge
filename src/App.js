import React, { Component } from 'react';
import uuid from 'uuid';

import ShoppingList from './components/ShoppingList/ShoppingList';
import StatusMessage from './components/StatusMessage/StatusMessage';
import EmptyMessage from './components/EmptyMessage/EmptyMessage';
import AddListItem from './components/AddListItem/AddListItem';
import CartTotal from './components/CartTotal/CartTotal';

import './App.scss';


class App extends Component {

  state = {
    listitems: [
      {
        id: uuid.v4(),
        title: 'Astro Camping Hat',
        inStock: true,
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Astro Hat - Sizzling Summer Edition',
        inStock: false,
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Astro Beanie - White Winter Edition',
        inStock: true,
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Astro Beanie - Splashing Spring Edition',
        inStock: true,
        completed: false
      },
    ],

    messageType: "",
    changedItemKey: "",
    changedItemTitle: "",
    emptyMessage: false
  }


  // Toggle list item
  toggleComplete = (id) => {
    this.setState(
      {
        listitems: this.state.listitems.map(listitem => {
          if (listitem.id === id) {
            listitem.completed = !listitem.completed;

            // Update message after toggling checkbox
            if (listitem.completed === true) {
              this.updateMessage(listitem.id, listitem.title, "checked");
            }
            else {
              this.updateMessage(listitem.id, listitem.title, "unchecked");
            }

          }
          return listitem;
        }
        )
      });
  }


  // Check if there are no more items
  checkEmpty = () => {
    if (this.state.listitems.length === 0) {
      this.setState(
        {
          emptyMessage: true,
        }
      );
    }
  }


  // Delete list item
  deleteListItem = (id) => {
    var result = this.state.listitems.find(e => e.id === id);

    // update the message first before we remove the item from the array
    this.updateMessage(result.id, result.title, "deleted");

    // using a callback since setState is asynch
    this.setState(
      {
        listitems: [...this.state.listitems.filter(listitem => listitem.id !== id)],
      }, () => this.checkEmpty()
    );

  }

  // Add list item
  addListItem = (title) => {

    const newId = uuid.v4();

    const newListItem = {
      id: newId,
      title: title,
      inStock: true,
      completed: false
    }

    this.setState(
      {
        listitems: [...this.state.listitems, newListItem],
        emptyMessage: false
      });

    this.updateMessage(newId, title, "added");
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

        <h2>
          Shopping list
        </h2>

        <AddListItem addListItem={this.addListItem} />

        {/* ToDo: move <ul> tags inside of ShoppingList component */}
        <ul className="shopping-list__list">
          <ShoppingList listitems={this.state.listitems} toggleComplete={this.toggleComplete} deleteListItem={this.deleteListItem} />
        </ul>

        <StatusMessage messageType={this.state.messageType} changedItemKey={this.state.changedItemKey} changedItemTitle={this.state.changedItemTitle} />

        <EmptyMessage emptyMessage={this.state.emptyMessage} />

        <CartTotal emptyMessage={this.state.emptyMessage} />

      </div>
    );
  }
}

export default App;
