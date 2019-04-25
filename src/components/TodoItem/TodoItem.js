import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoItem.scss';


export class TodoItem extends Component {


  // markComplete = (e) => {
  //   console.log(this.props);
  // }

  getStyle = (completed) => {
    if(completed) {
      return " todoitem__list-item_checked";
    }
    else {
      return "";
    }
  }



  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <li className={"todoitem__list-item" + this.getStyle(completed) }>
        <input type="checkbox" className="todoitem__checkbox" id={"todoitem__checkbox_checkbox-" + id} onChange={this.props.toggleComplete.bind(this, id)} />
        <label htmlFor={"todoitem__checkbox_checkbox-" + id} className="todoitem__checkbox-label">{ title }</label>
        <button className="todoitem__delete-button" onClick={this.props.deleteTodo.bind(this, id)}>X</button>
      </li>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
