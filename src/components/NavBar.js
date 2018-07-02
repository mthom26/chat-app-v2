import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Typography,
  Toolbar,
  withStyles,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
  },
  button: {

  },
  list: {
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

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" className={classes.title} color="inherit">
              ChatApp
            </Typography>
            <Hidden mdUp>
              <IconButton color="inherit" onClick={this.handleDrawerOpen}>
                <Menu />
              </IconButton>
            </Hidden>
            <Hidden smDown>

              <Button component={Link} to="/register" color="inherit" className={classes.button}>
                Register
              </Button>
              <Button component={Link} to="/login" color="inherit" className={classes.button}>
                Log In
              </Button>
              <Button component={Link} to="/profile" color="inherit" className={classes.button}>
                Profile
              </Button>
              <Button color="inherit" className={classes.button}>
                Log Out
              </Button>

            </Hidden>
          </Toolbar>
        </AppBar>
        <Drawer open={openDrawer} onClose={this.handleDrawerClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleDrawerClose}
            onKeyDown={this.handleDrawerClose}
          >
            <List>
              <div className={classes.list}>
                <ListItem button component={Link} to="/register">
                  <ListItemText primary="Register"/>
                </ListItem>
                <ListItem button component={Link} to="/login">
                  <ListItemText primary="Log In"/>
                </ListItem>
                <ListItem button component={Link} to="/profile">
                  <ListItemText primary="Profile"/>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Log Out"/>
                </ListItem>
              </div>
            </List>
          </div>

        </Drawer>
      </div>
    );
  }
  
};

export default withStyles(styles)(NavBar);