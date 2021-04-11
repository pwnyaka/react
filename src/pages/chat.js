import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom'
import {ChatList, Header, Layout, MessageList} from "../components";

export class ChatPage extends Component {
  render() {
    return (
        <Switch>
          <Route path={["/chat/:id", "/chat"]}>
            {(params) => (
                <>
                  {/* @TODO удалили провайдер, потому что вся логика в redux */}
                  <Layout header={<Header />} chats={<ChatList {...params} />}>
                    <Route path="/chat/:id">
                      <MessageList {...params} />
                    </Route>
                  </Layout>
                </>
            )}
          </Route>
          <Route path="*" component={() => <h1>Такого чата нет</h1>}/>
        </Switch>
    );
  }
}