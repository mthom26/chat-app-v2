import React, { Fragment } from 'react';
import { FormGroup } from '@material-ui/core';

import { auth } from '../firebase';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(email, password) {
    auth.doCreateUser(email, password)
      .then(authUser => console.log(authUser))
      .catch(error => console.log(error));
  }

  render() {
    const { email, password } = this.state;

    return (
      <Fragment>
        <p>form will go here!</p>
        <button onClick={() => this.onRegister(email, password)}>Register</button>
      </Fragment>
    );
  }
}

export default Register;