import {ThemeProvider, createMuiTheme} from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "./index.css"
import {ChatPage} from "./pages";
import {store} from "./store";

const dark = {
  color: "red",
}

const theme = createMuiTheme(dark)

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/chat" component={() => <ChatPage/>}/>
            <Route path="*" component={() => <h1>404</h1>}/>
          </Switch>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root"),
)
