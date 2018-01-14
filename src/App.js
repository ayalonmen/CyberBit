import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Main from './containers/Main/Main';

class App extends Component {
  state = {
    auth: false,
  };
  render() {
    let route1 = null;
    if (this.state.auth) {
      route1 = '';
    }
    return (
      <BrowserRouter>
        <div>
          {route1}
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Auth} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
