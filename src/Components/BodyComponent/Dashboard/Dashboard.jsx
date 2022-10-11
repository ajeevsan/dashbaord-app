import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "../BodyStyles";
import BlogGraph from "./WholeGraph";
import { PageHeader } from "../../../Common/Components";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function Dashboard() {
  const classes = useStyles();

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

  //! With PDFjs API
  function generatePDF(event) {
    const input = document.getElementById("pdf");

    console.log(event);

    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      scale: 2,
      windowWidth: event.view.screen.availWidth,
      windowHeight: event.view.screen.availHeight,
      useCORS: true,
    }).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm", 'A4', true);
      var position = 0;
      doc.addImage(imgData, "jpeg", 0, position, imgWidth, imgHeight,'','FAST');
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "jpeg", 0, position, imgWidth, imgHeight,'','FAST');
        heightLeft -= pageHeight;
      }

      doc.save("dashboard.pdf");
      console.log("Pdf generated");
    });
  }

  return (
    <Box mt={2} className={classes.wholePage}>
      {/* //title section  */}

      <Grid style={{display: 'float'}}>
        <PageHeader
          label="Vehical Inspection"
          title="Dashboard"
          className={classes.pageHeader}
        />
        <Box style={{float: 'right', flexDirection: 'row'}}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttonStyle}
            onClick={() => window.print()}
          >
            Ctrl + P
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttonStyle}
            onClick={generatePDF}
          >
            With framework
          </Button>
        </Box>
      </Grid>

      <Grid container spacing={1} className={classes.section}>
        {DisplayData.map((item, i) => (
          <Grid key={i} item xs={6} sm={3} md={3}>
            <Card className={classes.dashboardCardsStyles}>
              <CardContent className={classes.displayCard}>
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
