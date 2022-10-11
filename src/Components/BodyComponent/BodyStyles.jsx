import { makeStyles } from "@material-ui/core";
import { colors } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  //! Whole Page Style
  wholePage: {
    backgroundColor: '#B1B2FF'
  },

  //! Card Section Style
  section: {
    margin: theme.spacing(1, 0),
    marginTop: "10px",
    marginBottom: "10px",
    padding: "10px",
  },
  pageLabel: {
    paddingTop: "40px !important",
    color: colors.baselight,
    textTransform: "uppercase",
  },
  pageHeader: {
    padding: "40px !important",
    paddingBottom: "10px",
    color: colors.baseDark,
    textTransform: "capitalize",
    fontSize: "37px",
    fontWeight: "600",
    textDecoration: `underline`,
  },
  responsiveImg: {
    width: "100%",
    height: "auto",
  },
  cardImage: {
    maxHeight: "150px !important",
    overflowY: "hidden",
  },

  //! Graph
  graphStyle: {
    borderRadius: "25px !important",
  },

  //! Master Graph Style
  // masterCard: {
  //   height: 'auto',
  //   width: '31.25rem !important',
  // },

  //! dashboard
  cardLabel: {
    color: colors.baseDark,
    margin: theme.spacing(2, 0),
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      margin: theme.spacing(1, 0),
    },
    textDecoration: "underline",
    fontSize: `1.5rem`,
  },
  cardHeader: {
    color: colors.baseDark,
    margin: theme.spacing(2, 0),
    textTransform: "capitalize",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      margin: theme.spacing(1, 0),
    },
  },

  dashboardCardsStyles: {
    borderRadius: "2rem",
  },
  cardDetails: {
    color: colors.baselight
  },

  displayCard: {
    position: "relative",
    padding: "0px !important",
    minHeight: "140px",
    height: "auto",
  },
  displayCardGraph: {
    width: "100%",
    height: "60px !important",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    [theme.breakpoints.down("xs")]: {
      height: "45px !important",
    },
  },
  ratio: {
    position: "absolute",
    top: "50%",
    left: "33%",
    [theme.breakpoints.down("xs")]: {
      top: "45%",
      left: "25%",
    },
  },
  progressbarContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "250px",
  },

  //!userOverview section
  cardTitle: {
    color: colors.baseDark,
  },
  generalGraph: {
    width: "100%",
    height: "300px",
  },
  bigGraph: {
    width: "100%",
    height: "500px",
    marginBottom: '10px'
  },
  stagedColumn: {
    width: "100%",
    height: "300px",
  },

  //! Master Graph Styles for alignment

  // masterGraph:{
  //   margin: '5px'
  // },

  //!footer
  footer: {
    padding: "8px 24px 16px 270px",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 24px 16px 24px",
    },
  },
  //! List Style
  listStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
  },

  //! Dashboard Button sytle
  buttonStyle: {
    margin: '5px',
    padding: '5px'
  }
}));
