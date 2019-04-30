import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ShoppingListItem.scss';


export class ShoppingListItem extends Component {

  getStyle = (completed) => {
    if(completed) {
      return " shoppinglistitem__list-item_checked";
    }
    else {
      return "";
    }
  }



  render() {
    const { id, title, inStock, completed } = this.props.listitem;

    var stockMessage = "";

    if(inStock) {
      stockMessage = "In stock";
    }
    else {
      stockMessage = "Out of stock";
    }

    return (
      <li className={"shoppinglistitem__list-item" + this.getStyle(completed) }>
        <input type="checkbox" className="shoppinglistitem__checkbox" id={"shoppinglistitem__checkbox_checkbox-" + id} onChange={this.props.toggleComplete.bind(this, id)} />
        <label htmlFor={"shoppinglistitem__checkbox_checkbox-" + id} className="shoppinglistitem__checkbox-label">{ title } ({ stockMessage })</label>
        <button className="shoppinglistitem__delete-button" onClick={this.props.deleteListItem.bind(this, id)}>X</button>
      </li>
    )
  }
}

// PropTypes
ShoppingListItem.propTypes = {
  listitem: PropTypes.object.isRequired
}

export default ShoppingListItem;
