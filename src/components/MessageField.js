import React from "react"
import Message from "./Message"

// eslint-disable-next-line import/no-default-export
export default class MessageField extends React.Component {
  state = {
    messages: ['hi', 'how are you?'],
  }
  handleClick = () => {
    this.setState({messages: [...this.state.messages, 'Ok']})
  }

  componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {
      setTimeout(() => {
        this.setState({messages: [...this.state.messages, 'Hello, I am BOT']})
      }, 1000)
    }
  }


  render() {
    const messageElements = this.state.messages.map((text, key) => (
        <Message name={key % 2 === 0 ? 'user' : 'bot'} key = {key} text = {text}/>)
    )
    return (
        <div>
          {messageElements}
          <button onClick={this.handleClick}>Send Message</button>
        </div>
    );
  }
}
