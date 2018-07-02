import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'typeface-roboto';

import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Header />

          <Route exact path="/" render={() => (
            <div><h2>Home Route</h2></div>
          )}/>
          <Route path="/login" render={() => (
            <div><h2>Log In</h2></div>
          )}/>
          <Route path="/register" render={() => (
            <div><h2>Register</h2></div>
          )}/>
          <Route path="/profile" render={() => (
            <div><h2>Profile</h2></div>
          )}/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
