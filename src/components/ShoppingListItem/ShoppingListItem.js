import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ShoppingListItem.scss';
import ItemImage from './item-image.png';
import DeleteImage from './delete-image.svg';


export class ShoppingListItem extends Component {

  getStyle = (completed) => {
    if (completed) {
      return " shoppinglistitem__list-item_checked";
    }
    else {
      return "";
    }
  }



  render() {
    const { id, title, inStock, completed } = this.props.listitem;

    var stockMessage = "";

    if (inStock) {
      stockMessage = "In stock";
    }
    else {
      stockMessage = "Out of stock";
    }

    return (
      <li className={"shoppinglistitem__list-item" + this.getStyle(completed)}>

        {/* ToDo: make image dynamic */}
        <img src={ItemImage} alt="" className="shoppinglistitem__item-image" />
        <input type="checkbox" className="shoppinglistitem__checkbox" id={"shoppinglistitem__checkbox_checkbox-" + id} onChange={this.props.toggleComplete.bind(this, id)} />
        <label htmlFor={"shoppinglistitem__checkbox_checkbox-" + id} className="shoppinglistitem__checkbox-label">
          <span className="shoppinglistitem__checkbox-label-title">{title}</span>
          <span className="shoppinglistitem__checkbox-label-stock">({stockMessage})</span>
        </label>
        <button className="shoppinglistitem__delete-button" onClick={this.props.deleteListItem.bind(this, id)}>
          <img src={DeleteImage} alt="Delete Item" className="shoppinglistitem__delete-button-image" />
        </button>
      </li>
    )
  }
}

// PropTypes
ShoppingListItem.propTypes = {
  listitem: PropTypes.object.isRequired
}

export default ShoppingListItem;
