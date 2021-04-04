import { Input, withStyles, InputAdornment } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import PropTypes from 'prop-types'
import React, { Component } from "react"


import { Message } from "./message"
import styles from "./message-list.module.css"

const StyledInput = withStyles(() => {
  return {
    root: {
      "&": {
        color: "#9a9fa1",
        position: "fixed",
        bottom: "8px",
        padding: "10px 15px",
        fontSize: "15px",
      },
    },
  }
})(Input)

export class MessageList extends Component {

  static propTypes = {
    messages: PropTypes.array,
    value: PropTypes.string,
  }

  sendMessage = ({ author, value }) => {
    const { messages } = this.state

    this.setState({
      messages: [...messages, { author, value }],
      value: "",
    })
  }

  // handleChangeInput = ({ target }) => {
  //   this.setState({
  //     value: target.value,
  //   })
  // }

  // handlePressInput = ({ code }) => {
  //   if (code === "Enter") {
  //     this.sendMessage({ author: "User", value: this.state.value })
  //   }
  // }

  componentDidUpdate(_, state) {
    // const { messages } = this.state
    //
    // const lastMessage = messages[messages.length - 1]
    //
    // if (lastMessage.author === "User" && state.messages !== messages) {
    //   setTimeout(() => {
    //     this.sendMessage({ author: "bot", value: "Как дела ?" })
    //   }, 500)
    // }
  }

  render() {
    const { messages, value } = this.props

    return (
      <div className={styles.wrapper}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
        <StyledInput
          fullWidth={true}
          value={value}
          // onChange={this.handleChangeInput}
          // onKeyPress={this.handlePressInput}
          placeholder="Введите сообщение..."
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <Send
                  className={styles.icon}
                  onClick={() => {
                    this.sendMessage({ author: "User", value })
                  }}
                />
              )}
            </InputAdornment>
          }
        />
      </div>
    )
  }
}
