import React, { Fragment } from 'react';
import { FormGroup } from '@material-ui/core';
import { connect } from 'react-redux';

import { auth } from '../firebase';

import { login } from '../store/actions/auth';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: 'timmy@testmail.com',
      password: 'password'
    };

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(email, password) {
    const data = { email, password };
    this.props.onLogIn(data);
  }

  render() {
    const { email, password } = this.state;

    return (
      <Fragment>
        <p>form will go here!</p>
        <button onClick={() => this.onSignIn(email, password)}>Sign In</button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogIn: (data) => dispatch(login(data))
});

const mapStateToProps = (state) => {
  return {
    user: state.currentUser.user,
    isPending: state.currentUser.isPending,
    error: state.currentUser.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);