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


  sendMessage = ({ author, value }) => {
    const { messages } = this.state

    this.setState({
      messages: [...messages, { author, value }],
      value: "",
    })
  }


  render() {
    const { children, match } = this.props
    const {messages, conversations } = this.state

    const {id} = match.params ?? {}

    const state = {
      conversations,
      messages: messages[id] ?? [],
      value: conversations.find(conversation => conversation.title === id)?.value ?? ""
    }

    const actions = {}

    return children(state, actions)
  }
}