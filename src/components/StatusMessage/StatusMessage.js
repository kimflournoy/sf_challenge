import React, { Component } from 'react';

import './StatusMessage.scss';

export class StatusMessage extends Component {


  render() {

    var isMessage = false;
    if(this.props.changedItemTitle !== "") {
      isMessage = true;
    }

    if(this.props.changedItemTitle !== "empty") {
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
      else {
        return (
          <div className="status-message__message-wrapper status-message__message-wrapper_empty">
          Empty message here
          </div>
        )
      }
  }
}

export default StatusMessage;
