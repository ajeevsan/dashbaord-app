import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
// import Sidenav from "./Sidenav";
// import Notification from "./ActionTab/Notification";
// import BlogPost from "../BodyComponent/BlogPost";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
// import Link1 from "../BodyComponent/Link1";

export default function HearderComponent() {
  const classes = useStyles();
  return (
    <div id="pdf" >
      <Fragment>
      <NavbarComponent />
      <Box className={classes.section}>
        <Switch>
          <Route exact path='/' render={() => <Dashboard />} />
        </Switch>
      </Box>
    </Fragment>
    </div>
  );
}
