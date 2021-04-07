import { Input, withStyles, InputAdornment } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import PropTypes from 'prop-types'
import React, {Component, createRef} from "react"


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
        width: "1050px",
      },
    },
  }
})(Input)

export class MessageList extends Component {

  static propTypes = {
    messages: PropTypes.array,
    value: PropTypes.string,
    sendMessage: PropTypes.func,
    handlePressInput: PropTypes.func,
    handleChangeValue: PropTypes.func
  }
  ref = createRef()

  handleScrollBottom = () => {
    if (this.ref.current) {
      this.ref.current.scrollTo(0, this.ref.current.scrollHeight)
    }
  }

  handlePressInput = ({ code }) => {
    if (code === "Enter") {
      this.handleSendMessage()
    }
  }

  handleSendMessage = () => {
    const { sendMessage, value } = this.props
    sendMessage({author: 'User', text: value})
  }

  componentDidUpdate(_, state) {
    this.handleScrollBottom()
  }

  render() {
    const { value, messages } = this.props
    console.log(value);

    return (
      <div ref={this.ref} className={styles.wrapper}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
        <StyledInput
          fullWidth={true}
          value={value}
          onChange={(e) => this.props.handleChangeValue(e.target.value)}
          onKeyPress={this.handlePressInput}
          placeholder="Введите сообщение..."
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <Send
                  className={styles.icon}
                  onClick={this.handleSendMessage}
                />
              )}
            </InputAdornment>
          }
        />
      </div>
    )
  }
}
