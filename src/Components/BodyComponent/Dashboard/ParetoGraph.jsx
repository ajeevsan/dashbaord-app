import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { blue, green, red, yellow } from "@material-ui/core/colors";
import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
import { useStyles } from "../BodyStyles";

export function ParatoGraph() {
  const classes = useStyles();

  // const [fetched, setFetched] = useState(false);

  const GraphData = [
    {
      id: "vehicalParatoGraph",
      type: "line",
      dataSets: [
        {
          label: "",
        },
      ],
    },
  ];
  return;
}
