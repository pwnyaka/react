import React from "react"
import ReactDOM from "react-dom"

import "./index.css"

const messages = ["Hello"]

const Messages = () => {
  return (
      <div>
        <h1>messages</h1>
        {messages.map((message, key) => (
            <p key={key}>{message}</p>
        ))}
        <input placeholder="Введите сообщение"/>
        <button onClick={(e) => {
          e.preventDefault()
          messages.push(document.querySelector('input').value)
          ReactDOM.render(
              <>
                <Messages title="title"/>
              </>,
              document.querySelector("#root"),
          )
        }}>Отправить
        </button>
      </div>
  )
}

ReactDOM.render(
    <>
      <Messages title="title"/>
    </>,
    document.querySelector("#root"),
)
