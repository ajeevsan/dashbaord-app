import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function NavbarComponent() {
  const classes = useStyles();

  //! With PDFjs API
  function generatePDF() {
    const input = document.getElementById("pdf");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      scale: 2,
      windowWidth: 1440,
      useCORS: true
    }).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm");
      var position = 0;
      doc.addImage(imgData, "jpeg", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "jpeg", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const pages = doc.internal.getNumberOfPages();

      for (let j = 1; j < pages + 1; j++) {
        let horizontalPos = imgWidth / 3;
        let verticalPos = pageHeight - 1;
        doc.setPage(j);
        doc.setFontSize(10);

        doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, {
          align: "center"
        });
      }

      doc.save("dashboard.pdf");
      console.log("Pdf generated");
    });
  }

  return (
    <AppBar>
      <Toolbar className={classes.toolbar} float="right">
        <Box style={{ display: "flex" }}>
          <Box
            component="img"
            src="https://www.deevia.pw/assets/img/logo.png"
            style={{ width: "auto", height: "3rem" }}
          />
          <Typography variant="h6" className={classes.logo}>
            Welcome, Admin
          </Typography>
        </Box>
        <Grid float="left">
          <Box>
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonStyle}
              onClick={generatePDF}
            >
              With framework
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonStyle}
              onClick={() => window.print()}
            >
              Ctrl + P
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
