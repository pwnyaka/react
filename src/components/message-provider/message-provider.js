import PropTypes from 'prop-types'
import {Component} from 'react'

export class MessageProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    match: PropTypes.any,
  }

  state = {
    conversations: [
      {
        title: "room1",
        value: "",
        lastMessage: {author: "User", message: "Hi!", createdTs: new Date()},
      },
      {
        title: "room2",
        value: "",
        lastMessage: {author: "User", message: "Hi!", createdTs: new Date()},
      }
    ],
    messages: {
      room1: [{author: "User", text: "Hi!", createdTs: new Date()}],
      room2: [{author: "User", text: "Hi!", createdTs: new Date()}],
    }
  }

  // componentDidUpdate(_, state) {
  //   const { messages } = this.state
  //
  //   const lastMessage = messages[messages.length - 1]
  //
  //   if (lastMessage.author === "User" && state.messages !== messages) {
  //     setTimeout(() => {
  //       this.sendMessage({ author: "bot", value: "Как дела ?" })
  //     }, 500)
  //   }
  // }


  sendMessage = ({ author, text, id }) => {
    const { messages } = this.state.messages[id]
    const date = new Date()
    this.setState({
      messages: {
        [id]: [...messages, { author, text, date }]
      },
      // value: "",
    })
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      value: target.value,
    })
  }

  handlePressInput = ({ code }) => {
      if (code === "Enter") {
        this.sendMessage({ author, text, id })
      }
    }


  render() {
    const { children, match } = this.props
    const {messages, conversations } = this.state

    const {id} = match.params ?? {}

    const state = {
      id,
      conversations,
      messages: messages[id] ?? [],
      // value: conversations.find(conversation => conversation.title === id)?.value ?? ""
    }

    const actions = {
      sendMessage: this.sendMessage,
      handlePressInput: this.handlePressInput,
      handleChangeInput: this.handleChangeInput
    }

    return children(state, actions)
  }
}