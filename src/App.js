import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Socket from './Socket';
import CreateUser from './pages/create';
import Chat from './pages/chat';

function App() {
  return (
    <Socket>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <CreateUser />
          </Route>
          <Route path="/app">
            <Chat />
          </Route>
          <Route path="*">
            <Redirect to="login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Socket>
  );
}

export default App;
