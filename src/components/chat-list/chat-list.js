import {List} from "@material-ui/core"
import PropTypes from 'prop-types'
import React, {Component} from "react"
import {Link} from "react-router-dom";
import {Chat} from "./chat"

import styles from "./chat-list.module.css"

export class ChatList extends Component {

  static propTypes = {
    conversations: PropTypes.array,
    match: PropTypes.any,
  }

  render() {
    const {conversations, match} = this.props
    const chatId = match?.params.id || ""

    return (
        <List component="nav" className={styles.list}>
          {conversations.map((chat) => (
              <Link key={chat.title} to={`/chat/${chat.title}`}>
                <Chat title={chat.title} selected={chatId === chat.title} />
              </Link>
          ))}
        </List>
    )
  }
}
