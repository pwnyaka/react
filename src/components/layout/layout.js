import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from './layout.module.css'

export class Layout extends Component {
  static propTypes = {
    header: PropTypes.node.isRequired,
    chatList: PropTypes.node.isRequired,
    messageList: PropTypes.node.isRequired,
  }

  render() {
    const {header} = this.props
    const {chatList} = this.props
    const {messageList } = this.props
    return <div className={styles.layout}>
      {header}
      <div className={styles.content}>
        {chatList}
        {messageList}
      </div>
    </div>
  }
}
