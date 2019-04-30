import React, { Component } from 'react';
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";
import PropTypes from 'prop-types';

import './ShoppingList.scss';

class ShoppingList extends Component {

  render() {
    return this.props.listitems.map( (listitem) => (
      <ShoppingListItem key={listitem.id} listitem={listitem} toggleComplete={this.props.toggleComplete} deleteListItem={this.props.deleteListItem} />
    ));
  }
}


// PropTypes
ShoppingList.propTypes = {
  listitems: PropTypes.array.isRequired
}

export default ShoppingList;
