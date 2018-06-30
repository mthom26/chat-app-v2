import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Typography,
  Toolbar,
  withStyles,
  Drawer
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
  },
  button: {

  },
  fullWidth: {
    width: '250px'
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false
    };
  }

  handleDrawerOpen = () => {
    this.setState({ openDrawer: true });
  }

  handleDrawerClose = () => {
    this.setState({ openDrawer: false});
  }
  
  render() {
    const { classes } = this.props;
    const { openDrawer } = this.state;

    const buttonList = (
      <div className={classes.fullWidth}>
        <Button color="inherit" className={classes.button}>Sign Up</Button>
        <Button color="inherit" className={classes.button}>Log In</Button>
        <Button color="inherit" className={classes.button}>Profile</Button>
        <Button color="inherit" className={classes.button}>Log Out</Button>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" className={classes.title} color="inherit">
              ChatApp
            </Typography>
            <IconButton color="inherit" onClick={this.handleDrawerOpen}><Menu /></IconButton>
            <Button color="inherit" className={classes.button}>Sign Up</Button>
            <Button color="inherit" className={classes.button}>Log In</Button>
            <Button color="inherit" className={classes.button}>Profile</Button>
            <Button color="inherit" className={classes.button}>Log Out</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={openDrawer} onClose={this.handleDrawerClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleDrawerClose}
            onKeyDown={this.handleDrawerClose}
          >
            <Button color="inherit" className={classes.button}>Sign Up</Button>
            <Button color="inherit" className={classes.button}>Log In</Button>
            <Button color="inherit" className={classes.button}>Profile</Button>
            <Button color="inherit" className={classes.button}>Log Out</Button>
          </div>

        </Drawer>
      </div>
    );
  }
  
};

export default withStyles(styles)(NavBar);