import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../firebase';
import NavBar from '../components/NavBar';

import { logout } from '../store/actions/auth';

class Header extends React.Component {
  constructor() {
    super();

    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut () {
    this.props.onLogout();
  }

  render() {
    return (
      <NavBar onSignOut={this.onSignOut} />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Header);