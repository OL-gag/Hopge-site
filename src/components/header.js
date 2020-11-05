import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu'
import { Container, CardHeader, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Image from 'material-ui-image';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
            <Grid item xs={2}>
                <Image src={require("../images/logo1.png")}  aspectRatio={(16/9)}/>
            </Grid>
            <Grid item xs={10}>
                    <AppBar position="static">
                        <Toolbar>
                        <Button color="inherit">New Practice</Button>
                        <Button color="inherit">My Practices</Button>
                        <Button color="inherit">Catalogs</Button>
                        <Button color="inherit">Princing</Button>
                        <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
            </Grid>
        </Grid>  
    </div>
  );
}