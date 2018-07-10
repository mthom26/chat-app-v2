import React from 'react';

import { authApp } from '../firebase';

const withAuthentcation = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      // Check if the user is already logged in (firebase authUser persistence)
      authApp.onAuthStateChanged(authUser => {
        // Update redux store user here
        if(authUser) {
          console.log(authUser.email)
        } else console.log('No current User')
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  return WithAuthentication;
};

export default withAuthentcation;