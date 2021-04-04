import PropTypes from "prop-types"
import React, { Component } from "react"

export class Message extends Component {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  }

  render() {
    const {
      message: { text, author },
    } = this.props

    return (
      <div>
        <h3>{text}</h3>
        <p>{author}</p>
      </div>
    )
  }
}
