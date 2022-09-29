import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
// import { green, red } from "@material-ui/core/colors";
// import { blue, lightBlue, teal} from '@material-ui/core/colors'
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useStyles } from "../BodyStyles";
// import GraphComponent from "../../../Common/GraphComponent";
import BlogGraph from "./BlogGraph";
// import Section3 from "./Section3";
// import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
import { PageHeader } from "../../../Common/Components";

export default function Dashboard() {
  const classes = useStyles();
  // const [hasFetched, setHasFetched] = useState(false);

  const DisplayData = [
    {
      label: "Total DPV",
      value: "6.86",
    },
    {
      label: "Surface DPV",
      value: "4.57",
    },
    {
      label: "Total No. of Vehicals",
      value: "213",
    },
    {
      label: "Total No. of defects",
      value: "192",
    },
  ];

  // const GraphData = [
  //   {
  //     label: "Total DPV",
  //     data: fakeArrayGenrator({ length: 10, digit: 100 }),
  //     bgColor: lightBlue[50],
  //     brColor: blue["A200"],
  //   },
  //   {
  //     label: "Surface DPV",
  //     data: fakeArrayGenrator({ length: 10, digit: 100 }),
  //     bgColor: blue[50],
  //     brColor: blue["A700"],
  //   },
  //   {
  //     label: "Total No. of Vehicals",
  //     data: fakeArrayGenrator({ length: 10, digit: 100 }),
  //     bgColor: green[50],
  //     brColor: green["A400"],
  //   },
  //   {
  //     label: "Total No. of Defects",
  //     data: fakeArrayGenrator({ length: 10, digit: 100 }),
  //     bgColor: teal[50],
  //     brColor: teal["A400"],
  //   },
  // ];

  //updating the graph
  // useEffect(() => {
  //   if (!hasFetched) {
  //     GraphData.map((item) =>
  //       GraphComponent({
  //         id: item.label,
  //         data: item.data,
  //         bgColor: item.bgColor,
  //         brColor: item.brColor,
  //       })
  //     );
  //     setHasFetched(true);
  //   }
  // }, [DisplayData]);

  return (
    <Box mt={2} className={classes.wholePage}>
      {/* //title section  */}
      <PageHeader
        label="Vehical Inspection"
        title="Dashboard"
        className={classes.pageHeader}
      />

      <Grid container spacing={1} className={classes.section}>
        {DisplayData.map((item, i) => (
          <Grid key={i} item xs={6} sm={3} md={3}>
            <Card className={classes.dashboardCardsStyles}>
              <CardContent className={classes.displayCard}>
                <canvas
                  id={item.label}
                  className={classes.displayCardGraph}
                ></canvas>
                <Box className={classes.cardDataContent}>
                  <Typography
                    variant="subtitle2"
                    className={classes.cardLabel}
                    gutterBottom={true}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.cardHeader}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* section blog graph  */}
      <BlogGraph className={classes.graphStyle} />
      {/* <Section3 />z */}
    </Box>
  );
}
