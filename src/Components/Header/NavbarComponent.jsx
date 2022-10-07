import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";

export default function NavbarComponent() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar} float="right">
        <Box style={{ display: "flex"}}>
          <Box
            component="img"
            src="./logo.png"
            style={{ width: "auto", height: "4rem", margin: '0.313rem', padding: '0.313rem'}}
          />
          <Typography variant="h6" className={classes.logo}>
            Welcome, Admin
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
