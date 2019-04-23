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
        <input type="checkbox" className="todoitem__checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
        { title }
      </li>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
