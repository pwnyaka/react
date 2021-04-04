// import { Test } from "@components/app"
import {ThemeProvider, createMuiTheme} from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import styles from "./index.module.css"

import "./index.css"
import {ChatPage} from "./pages";

const dark = {
  color: "red",
}

const theme = createMuiTheme(dark)

ReactDOM.render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/chat" component={ ()=> <ChatPage/>} />
          <Route path="*" component={() => <h1>404</h1>}/>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root"),
)
