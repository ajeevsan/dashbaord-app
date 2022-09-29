import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
// import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box style={{ display: "flex" }}>
          <Typography variant='h6' className={classes.logo}>
            {"Welcome, Admin"}
          </Typography>
        </Box>
       
      </Toolbar>
    </AppBar>
  );
}
