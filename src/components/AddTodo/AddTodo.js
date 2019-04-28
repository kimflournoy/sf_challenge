import React, { Component } from 'react';

import './AddTodo.scss';

export class AddTodo extends Component {

  state = {
    title: '',
    disableSubmit: true
  }

  changeForm = (e) => {
    this.setState({ title : e.target.value });
    if(e.target.value !== '') {
      this.setState({ disableSubmit : false });
    }
    else {
      this.setState({ disableSubmit : true });
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }


  render() {


      return (
        <div className="add-todo__wrapper">
          <form onSubmit={this.submitForm}>
            <label htmlFor="add-todo__input">Add item</label>
            <input type="text" id="add-todo__input" name="add-todo__input" className="add-todo__input" placeholder="Add item here" onChange={this.changeForm} value={this.state.title} />
            <button type="submit" value="add-todo__submit" disabled={this.state.disableSubmit}>Submit</button>
          </form>
          </div>
      )
  }



}

export default AddTodo;
