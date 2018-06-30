import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
