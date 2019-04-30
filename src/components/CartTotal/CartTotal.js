import React, { Component } from 'react';

import './CartTotal.scss';

export class CartTotal extends Component {

  /*
  ToDos:
  - make totals happen
  - aria live region
  */



  render() {


    if (this.props.emptyMessage) {
      return (
        <div className="cart-total__total-wrapper">
          <p>Subtotal (0 items): $0.00</p>

          <button className="cart-total__checkout-button" disabled="disabled">Proceed to checkout</button>
        </div>
      )
    }

    else {
      return (
        <div className="cart-total__total-wrapper">
          <p>Subtotal (4 items): $44.00</p>

          <button className="cart-total__checkout-button">Proceed to checkout</button>
        </div>
      )
    }

  }
}

export default CartTotal;
