import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Grid
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";

export default function NavbarComponent() {
  const classes = useStyles();

  function eventHandler() {
    console.log("Clicked")
  }

  return (
    <AppBar>
      <Toolbar className={classes.toolbar} float='right'>
        <Box style={{ display: "flex" }}>
          <Box component="img" src="https://www.deevia.pw/assets/img/logo.png" style={{width: 'auto', height: '3rem'}}/>
          <Typography variant='h6' className={classes.logo}>
            Welcome, Admin
          </Typography>
        </Box>
        <Grid float='left'>
          <Box>
            <Button variant='contained' color='success' className={classes.buttonStyle} onClick={eventHandler}>
              With framework
            </Button>
            <Button variant="contained" color="success" className={classes.buttonStyle} onClick={() => window.print()}>
              Ctrl + P 
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
