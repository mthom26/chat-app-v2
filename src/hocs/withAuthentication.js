import React from 'react';
import { connect } from 'react-redux';

import { authApp } from '../firebase';
import { setUser } from '../store/actions/auth';

/*
  ToDo: onAuthStateChanged gets called after registering/login which sets the 
  user twice in redux. Also onAuthStateChanged does not return credential, 
  additionalUserInfo and operationType (this may not matter). In any case 
  should make sure that the user object in redux is always the same format.
*/
const withAuthentcation = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log('Mounting....');
      // Check if the user is already logged in (firebase authUser persistence)
      authApp.onAuthStateChanged(authUser => {
        // Update redux store user here
        if(authUser) {
          this.props.onStartup(authUser);
        } else console.log('No current User')
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onStartup: (data) => dispatch(setUser(data))
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentcation;