import {
    Card,
    CardContent,
    Divider,
    Grid,
    Paper,
    Typography,
  } from "@material-ui/core";
  import { blue, green, red, yellow } from "@material-ui/core/colors";
  import React from "react";
  import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
  // import { lineGraphComponent, paratoReport } from "../../../Common/GraphComponent";
  import { useStyles } from "../BodyStyles";

function MasterGraph() {
    const classes = useStyles();
    const GraphData = [
        {
            id: "vehicalMasterGraph",
            type: "line",
            dataSets: [
              {
                label: "Under Body DPV",
                data: fakeArrayGenrator({length:5, digit: 100 }),
                borderColor: blue["A200"],
                fill: false,
                tension: 0.5,
              },
              {
                label: "Main Body DPV",
                data: fakeArrayGenrator({length: 5, digit: 100}),
                borderColor: red[100],
                fill: false,
                tension: 0.5,
              },
              {
                label: "Shell Body Sub-Line DPV",
                data: fakeArrayGenrator({length: 5, digit: 100}),
                borderColor: blue[200],
                fill: false,
                tension: 0.5,
              },
              {
                label: "Shell Body Main-Line DPV",
                data: fakeArrayGenrator({length: 5, digit: 100}),
                borderColor: yellow[300],
                fill: false,
                tension: 0.5,
              },
              {
                label: "Side Member",
                data: fakeArrayGenrator({length: 5, digit: 100}),
                borderColor: green[400],
                fill: false,
                tension: 0.5,
              },
            ],
            XAxisLabels: ["Surface", "Body Fitting", "Missing & Wrong Parts", "Welding", "Water Leak"]
        }
    ];

    // const parato

  return (
    <Grid container className={classes.section} spacing={1}>
      <Grid item xs={12} sm={7} md={7}>
        <Card component={Paper}>
          <CardContent>
            <Typography varient='h6' className={classes.cardTitle} align='left'>
              Master Report
            </Typography>
          </CardContent>
          <Divider/>
          <CardContent>
            <canvas
            id='vehicalMasterGraph'
            className={classes.generalGraph}/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MasterGraph