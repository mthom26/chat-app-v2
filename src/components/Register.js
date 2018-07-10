import React, { Fragment } from 'react';
import { FormGroup } from '@material-ui/core';
import { connect } from 'react-redux';

import { register } from '../store/actions/auth';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      email: 'testnoob@testmail.com',
      password: 'password'
    };

    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(email, password) {
    const data = { email, password };
    this.props.onRegister(data);
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

const mapDispatchToProps = (dispatch) => ({
  onRegister: (data) => dispatch(register(data))
});

const mapStateToProps = (state) => {
  return {
    user: state.currentUser.user,
    isPending: state.currentUser.isPending,
    error: state.currentUser.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);