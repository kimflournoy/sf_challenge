import React, { Component } from 'react';

import './EmptyMessage.scss';

import EmptyImage from './empty-image.png';

export class EmptyMessage extends Component {


  // ToDo: add aria-live region here so users are notified when this message appears/disappears. (Requires div to be in the DOM the entire time.)

  render() {

    if (this.props.emptyMessage) {
      return (
        <div className="empty-message__message-wrapper">

          {/* Decorative image, no alt text required */}
          <img src={EmptyImage} alt="" />
        
          <p>There are currently no items in your shopping cart.</p>

          <p><a href="http://www.google.com">Continue shopping?</a></p>
          </div>
      )
    }

    else {
      return (
        ""
      )
    }
  }

}

export default EmptyMessage;
