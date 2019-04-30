import React, { Component } from 'react';

import './AddListItem.scss';

export class AddListItem extends Component {

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
    this.props.addListItem(this.state.title);
    this.setState({ title: '' });
  }


  render() {


      return (
        <div className="add-list-item__wrapper">
          <form onSubmit={this.submitForm}>
            <label htmlFor="add-list-item__input">Add item</label>
            <input type="text" id="add-list-item__input" name="add-list-item__input" className="add-list-item__input" placeholder="Add item here" onChange={this.changeForm} value={this.state.title} />
            <button type="submit" className="add-list-item__submit" disabled={this.state.disableSubmit}>Submit</button>
          </form>
          </div>
      )
  }



}

export default AddListItem;
