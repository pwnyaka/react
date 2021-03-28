import PropTypes from 'prop-types'
import React from "react";

// eslint-disable-next-line import/no-default-export
export default class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  render() {
    return (
        <div><b>{this.props.name}:</b>{this.props.text}</div>
    );
  }
}