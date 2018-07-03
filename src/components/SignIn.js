import React, { Fragment } from 'react';
import { FormGroup } from '@material-ui/core';

import { auth } from '../firebase';

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
    auth.doSignIn(email, password)
      .then(authUser => console.log(authUser))
      .catch(error => console.log(error));
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

export default SignIn;