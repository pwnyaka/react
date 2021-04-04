import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom'
import {ChatList, Header, Layout, MessageList, MessageProvider} from "../components";

export class ChatPage extends Component {
  render() {
    return (
        <Switch>
          <Route path={["/chat/:id", "/chat"]}>
            {(params) => {
              return (
                  <MessageProvider {...params}>
                    {(state, actions) => (
                        <Layout header={<Header/>} chatList={<ChatList {...params} conversations={state.conversations} />}>
                          <Route path="/chat/:id">
                            <MessageList {...state} {...actions} />
                          </Route>

                        </Layout>
                    )}
                  </MessageProvider>
              )
            }}
          </Route>
          <Route path="*" component={() => <h1>Такого чата нет</h1>}/>
        </Switch>
    );
  }
}