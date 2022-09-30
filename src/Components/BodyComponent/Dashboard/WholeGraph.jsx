import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { blue, green, red, yellow } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
import { lineGraphComponent } from "../../../Common/GraphComponent";
import { useStyles } from "../BodyStyles";

export default function WholeGraph() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);

  const GraphData = [
    {
      id: "userOverViewGraph",
      options: {
        scales: { x: { title: { display: true, text: "seconds" } } },
      },
      dataSets: [
        {
          label: "Surface",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: red[500],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Body Fitting",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: green[500],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Missing & Wrong Part",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          // indexLable:{} ,
          borderColor: yellow[500],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Welding",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: blue[200],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Water Leaks",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: green[200],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["UB", "MB", "SB SA", "SB ML", "SM"],
    },
    {
      id: "deviceOverViewGraph",
      type: "doughnut",
      dataSets: [
        {
          label: "DeskTop",
          data: fakeArrayGenrator({ length: 5, digit: 100 }),
          backgroundColor: [
            blue["A200"],
            blue[400],
            blue[200],
            red[200],
            green[400],
            yellow[300],
          ],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: [
        "Surface",
        "Body Fitting",
        "Missing & Wrong Part",
        "Welding",
        "Water Leak",
      ],
    },

    {
      id: "testViewGraph",
      type: "bar",
      options: {
        scales: { x: { title: { display: true, text: "seconds" } } },
      },
      dataSets: [
        {
          label: "Surface",
          data: fakeArrayGenrator({ length: 5, digit: 500 }),
          borderColor: red[500],
          backgroundColor: red[500],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Body Fitting",
          data: fakeArrayGenrator({ length: 5, digit: 500 }),
          borderColor: green[500],
          backgroundColor: green[500],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Missing & Wrong Parts",
          data: fakeArrayGenrator({ length: 5, digit: 500 }),
          // indexLable:{} ,
          borderColor: yellow[500],
          backgroundColor: yellow[500],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Welding",
          data: fakeArrayGenrator({ length: 5, digit: 500 }),
          borderColor: blue[200],
          backgroundColor: blue[200],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Water Leaks",
          data: fakeArrayGenrator({ length: 5, digit: 500 }),
          borderColor: green[200],
          backgroundColor: green[200],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["UB", "MB", "SB SA", "SB ML", "SM"],
    },
    {
      id: "testViewGraph1",
      options: {
        scales: { x: { title: { display: true, text: "seconds" } } },
      },
      dataSets: [
        {
          label: "Surface",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: red[500],
          fill: true,
          tension: 0.5,
          pivotRadius: 16,
        },
        {
          label: "Body Fitting",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: green[500],
          fill: true,
          tension: 0.5,
          pivotRadius: 16,
        },
        {
          label: "Missing & Wrong Part",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: yellow[500],
          fill: true,
          tension: 0.5,
          pivotRadius: 16,
        },
        {
          label: "Welding",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: blue[200],
          fill: true,
          tension: 0.5,
          pivotRadius: 16,
        },
        {
          label: "Water Leaks",
          data: fakeArrayGenrator({ length: 30, digit: 100 }),
          borderColor: green[200],
          fill: true,
          tension: 0.5,
          pivotRadius: 16,
        },
      ],
      xAxisLabels: ["UB", "MB", "SB SA", "SB ML", "SM"],
    },
  ];

  useEffect(() => {
    if (!fetched) {
      GraphData.map((item, i) =>
        lineGraphComponent({
          id: item.id,
          type: item.type,
          dataSets: item.dataSets,
          xAxisLabels: item.xAxisLabels,
        })
      );
    }
    setFetched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);
  return (
    <Grid container className={classes.section} spacing={1}>
      {/* DPV Report */}
      <Grid item xs={12} sm={7} md={7} className={classes.graphStyle}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant="h6" className={classes.cardTitle} align="left">
              DPV (Defects Per Vehicle) Report
            </Typography>
            <Typography variant="p" className={classes.cardDetails}>
              Total Category defects
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <canvas
              id="userOverViewGraph"
              className={classes.generalGraph}
            ></canvas>
          </CardContent>
        </Card>
      </Grid>
      {/* DPV by Category  */}
      <Grid item xs={12} sm={5} md={5}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant="h6" className={classes.cardTitle} align="left">
              DPV by Category Reports
            </Typography>
            <Typography varient="p" className={classes.cardDetails}>
              Category DPV
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <canvas
              id="deviceOverViewGraph"
              className={classes.generalGraph}
            ></canvas>
          </CardContent>
        </Card>
      </Grid>
      {/* Master Report */}
      <Grid item xs={12} sm={7} md={12}>
        <Card component={Paper}>
          <CardContent>
            <Typography
              variant="h6"
              className={classes.cardTitle}
              align="center"
            >
              Master Report
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <canvas id="testViewGraph" className={classes.bigGraph}></canvas>
          </CardContent>
        </Card>
      </Grid>
      {/* Parato Report  */}
      <Grid item xs={12} sm={7} md={8}>
        <Card component={Paper}>
          <CardContent>
            <Typography
              variant="h6"
              className={classes.cardTitle}
              align="center"
            >
              Test Report
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <canvas id="testViewGraph1" className={classes.bigGraph}></canvas>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={7} md={4}>
        <Card component={Paper}>
          <CardContent>
            <Typography
              variant="h6"
              className={classes.cardTitle}
              align="center"
            >
              Top 10 Defects Contributors
            </Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              aria-label="contacts"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chelsea Otakan" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText inset primary="Eric Hoffman" />
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
