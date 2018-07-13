import React, { Component } from 'react';
import {
  Button,
  TextField
} from '@material-ui/core';

export class StandardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
  }

  handleChange = field => event => {
    this.setState({
      ...this.state,
      [field]: event.target.value
    });
  }
  /*
  handleSubmit = () => {
    console.log(this.state);
  }
  */
  render() {
    const { name, email, password, passwordConfirm } = this.state;
    const { showName, showEmail, showPassword, showPWC, onSubmit } = this.props;

    return (
      <form>
        {showName &&
        <TextField
          autoFocus
          id="name"
          label="Name"
          type="text"
          value={name}
          onChange={this.handleChange('name')}
        />
        }
        {showEmail &&
        <TextField
          autoFocus
          id="email"
          label="Email"
          type="text"
          value={email}
          onChange={this.handleChange('email')}
        />
        }
        {showPassword &&
        <TextField
          autoFocus
          id="password"
          label="Password"
          type="text"
          value={password}
          onChange={this.handleChange('password')}
        />
        }
        {showPWC &&
        <TextField
          autoFocus
          id="passwordConfirm"
          label="Confirm Password"
          type="text"
          value={passwordConfirm}
          onChange={this.handleChange('passwordConfirm')}
        />
        }
        <Button onClick={() => onSubmit(this.state)} color="primary">
          Submit
        </Button>
      </form>
    )
  }
}

export default StandardForm;
