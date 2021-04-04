import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from './layout.module.css'

export class Layout extends Component {
  static propTypes = {
    header: PropTypes.node.isRequired,
    chatList: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  }

  render() {
    const {header, chatList, children} = this.props
    return <div className={styles.layout}>
      {header}
      <div className={styles.content}>
        {chatList}
        {children}
      </div>
    </div>
  }
}
