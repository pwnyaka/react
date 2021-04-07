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

  componentDidUpdate(_, state) {
    const {match: {params}} = this.props
    const { messages } = this.state

    const lastMessage = messages[params.id][messages[params.id].length - 1]

    if (lastMessage.author === "User") {
      setTimeout(() => {
        this.sendMessage({ author: "bot", text: "Как дела ?", createdTs: new Date()})
      }, 500)
    }
  }


  sendMessage = ({author, text}) => {
    if (!text) {
      return
    }
    const {match: {params}} = this.props
    const newMessage = {author, text, createdTs: new Date()}
    this.setState({
      conversations: this.state.conversations.map((conversation) => {
        if (conversation.title === params.id) {
          return {...conversation, lastMessage: newMessage, value: ''}
        }
        return conversation
      }),
      messages: {
        ...this.state.messages,
        [params.id]: [
          ...(this.state.messages[params.id] || []), newMessage
        ]
      }
    })
  }

  handleChangeValue = (value) => {
    const {match: {params}} = this.props
    this.setState({
      conversations: this.state.conversations.map((conversation) => {
        if (conversation.title === params.id) {
          return {...conversation, value}
        }
        return conversation
      })
    })
  }

  render() {
    const {children, match} = this.props
    const {messages, conversations} = this.state

    const {id} = match.params ?? {}

    const state = {
      id,
      conversations,
      messages: messages[id] ?? [],
      value: conversations.find(conversation => conversation.title === id)?.value ?? ""
    }

    const actions = {
      sendMessage: this.sendMessage,
      handleChangeValue: this.handleChangeValue
    }

    return children(state, actions)
  }
}