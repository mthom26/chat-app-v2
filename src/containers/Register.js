import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { register } from '../store/actions/auth';
import StandardForm from '../components/StandardForm';

class Register extends React.Component {
  constructor(props) {
    super(props);
    
    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(data) {
    this.props.onRegister(data);
  }

  render() {
    return (
      <StandardForm
        showName
        showEmail
        showPassword
        onSubmit={this.onRegister}
      />
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