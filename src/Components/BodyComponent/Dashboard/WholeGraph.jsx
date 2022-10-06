import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
//TODO import ListItemText from '@mui/material/ListItemText';
//TODO import ListItemIcon from '@mui/material/ListItemIcon';
//TODO import StarIcon from '@mui/icons-material/Star';
//TODO import ListItemButton from '@mui/material/ListItemButton';
import { blue, green, red, yellow } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
import { lineGraphComponent } from "../../../Common/GraphComponent";
import { useStyles } from "../BodyStyles";

export default function WholeGraph() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);

  const GraphData = [
    //! This is DPV Garph
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
    //! This is DPV by Category Report
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

    //! Master Report the totoal of 10 graphs
    //TODO Under Body
    {
      id: "underBodyCDPV",
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
      xAxisLabels: [
        "Surface",
        "Body Fitting",
        "Missing & Wrong Parts",
        "Welding",
        "Water Leaks",
      ],
    },
    {
      id: "underBodySurface",
      type: "bar",
      options: {
        scales: { x: { title: { display: true, text: "Category DPV" } } },
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
      xAxisLabels: ["Dent", "Bump", "Burs", "Spatters", "Others"],
    },

    //TODO Shell Body Sub-line
    {
      id: "shellBodySubLineCDPV",
      type: "bar",
      options: { x: { title: { display: true, text: "Category DPV" } } },
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
      xAxisLabels: [
        "Surface",
        "Body Fitting",
        "Missing & Wrong Parts",
        "Welding",
        "Water Leaks",
      ],
    },

    {
      id: "shellBodySubLineSDPV",
      type: "bar",
      options: { x: { title: { display: true, text: "Category DPV" } } },
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
      xAxisLabels: ["Dent", "Bump", "Burs", "Spatters", "Others"],
    },

    //TODO Main Body
    {
      id: "mainBodyCDPV",
      type: "bar",
      options: { x: { title: { display: true, text: "Category DPV" } } },
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
      xAxisLabels: [
        "Surface",
        "Body Fitting",
        "Missing & Wrong Parts",
        "Welding",
        "Water Leaks",
      ],
    },

    {
      id: "mainBodySDPV",
      type: "bar",
      options: { x: { title: { display: true, text: "Category DPV" } } },
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
      xAxisLabels: ["Dent", "Bump", "Burs", "Spatters", "Others"],
    },

    //! Test report
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
            <Typography variant="body1" className={classes.cardDetails}>
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
            <Typography varient="body1" className={classes.cardDetails}>
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

      {/* Master Report : Inside this there will multiple div  */}
      <Grid container className={classes.section} spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          {/* Master Card 1 */}
          <Card component={Paper}>
            <CardContent>
              <Typography
                variant="h6"
                className={classes.cardTitle}
                align="left"
              >
                Master Report
              </Typography>
              <Typography varient="body1" className={classes.cardDetails}>
                Under Body Category DPV
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <canvas id="underBodyCDPV" className={classes.bigGraph}></canvas>
            </CardContent>
          </Card>
        </Grid>
        {/* Master Card 2 */}
        <Grid item xs={12} sm={6} md={6}>
          <Card component={Paper}>
            <CardContent>
              <Typography
                variant="h6"
                className={classes.cardTitle}
                align="left"
              >
                Master Report
              </Typography>
              <Typography varient="body1" className={classes.cardDetails}>
                Under Body Surface DPV
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <canvas
                id="underBodySurface"
                className={classes.bigGraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Master Card 3 */}
          <Card component={Paper}>
            <CardContent>
              <Typography
                variant="h6"
                className={classes.cardTitle}
                align="left"
              >
                Master Report
              </Typography>
              <Typography varient="body1" className={classes.cardDetails}>
                Graphs with Categories and Group Wise
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <canvas
                id="shellBodySubLineCDPV"
                className={classes.bigGraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Master Card 4 */}
          <Card component={Paper}>
            <CardContent>
              <Typography
                variant="h6"
                className={classes.cardTitle}
                align="left"
              >
                Master Report
              </Typography>
              <Typography varient="body1" className={classes.cardDetails}>
                Graphs with Categories and Group Wise
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <canvas
                id="shellBodySubLineSDPV"
                className={classes.bigGraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Master Card 5 */}
          <Card component={Paper}>
            <CardContent>
              <Typography
                variant="h6"
                className={classes.cardTitle}
                align="left"
              >
                Master Report
              </Typography>
              <Typography varient="body1" className={classes.cardDetails}>
                Category DPV
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <canvas id="mainBodyCDPV" className={classes.bigGraph}></canvas>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Master Card 6 */}
          <Card component={Paper}>
            <CardContent>
              <Typography
                variant="h6"
                className={classes.cardTitle}
                align="left"
              >
                Master Report
              </Typography>
              <Typography varient="body1" className={classes.cardDetails}>
                Surface Category
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <canvas id="mainBodySDPV" className={classes.bigGraph}></canvas>
            </CardContent>
          </Card>
        </Grid>
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
              Parato Report
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
          <CardContent className={classes.listStyle}>
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
                  <ListItemText align="center" primary="No. 1 Contributor" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText align="center" primary="No. 2 Contributor" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText align="center" primary="No. 3 Contributor" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText align="center" primary="No. 4 Contributor" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText align="center" primary="No. 6 Contributor" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText align="center" primary="No. 7 Contributor" />
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
