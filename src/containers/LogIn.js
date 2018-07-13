import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { login } from '../store/actions/auth';
import StandardForm from '../components/StandardForm';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.onLogIn = this.onLogIn.bind(this);
  }

  onLogIn(data) {
    this.props.onLogIn(data);
  }

  render() {
    return (
      <StandardForm
        showEmail
        showPassword
        onSubmit={this.onLogIn}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);