import React, { Component } from 'react';

import './StatusMessage.scss';

export class StatusMessage extends Component {


  render() {

    var isMessage = false;
    if (this.props.changedItemTitle !== "") {
      isMessage = true;
    }

    return (
      <div className="status-message__message-wrapper">
        {this.props.changedItemTitle}
        {isMessage ? (
          " was "
        ) : ""
        }
        {this.props.messageType}
      </div>
    )
  }
}

export default StatusMessage;
