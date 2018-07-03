import React from 'react';

import { auth } from '../firebase';
import NavBar from '../components/NavBar';

class Header extends React.Component {
  constructor() {
    super();

    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut () {
    auth.doSignOut();
  }

  render() {
    return (
      <NavBar onSignOut={this.onSignOut}/>
    )
  }
}

export default Header;