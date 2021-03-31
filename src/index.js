// import { Test } from "@components/app"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { MessageList, Layout, ChatList, Header } from "./components"
// import styles from "./index.module.css"

import "./index.css"

const dark = {
  color: "red",
}

const theme = createMuiTheme(dark)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Layout header={<Header/>} chatList={<ChatList />} messageList={<MessageList/>}/>
  </ThemeProvider>,
  document.getElementById("root"),
)
