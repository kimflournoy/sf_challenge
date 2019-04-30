import React, { Component } from 'react';

import './EmptyMessage.scss';

export class EmptyMessage extends Component {


  render() {

    if (this.props.emptyMessage) {
      return (
        <div className="empty-message__message-wrapper">
          Empty message here 3
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
