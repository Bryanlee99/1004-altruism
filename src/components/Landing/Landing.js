import React from "react";

// Image
import road from "assets/road.svg";

// Components
import { Box, Typography, Button } from "@mui/material";

// Theme
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    backgroundColor: theme.palette.common.pearlWhite,
    paddingLeft: theme.spacing(3),
    borderStyle: "solid",
    boxSizing: "border-box", // includes border in box sizing
    borderWidth: "10px",
    borderColor: theme.palette.primary.main,
    backgroundImage: `url(${road})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  titleBox: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "800 !important",
  },
  subtitleText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "500 !important",
  },
  startBox: {
    paddingTop: theme.spacing(1),
  },
  start: {
    fontFamily: "museo-sans !important",
    fontSize: "1rem !important",
    backgroundColor: theme.palette.secondary.main + "!important",
  },
}));

function Landing() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography className={classes.titleText} variant="h3">
          Choose Your Adventure: Altruism
        </Typography>
      </Box>
      <Box className={classes.titleBox}>
        <Typography className={classes.subtitleText} variant="h5">
          Journey through altruism theories from Darwin to the Present.
        </Typography>
      </Box>
      <Box className={classes.startBox}>
        <Button className={classes.start} variant="contained" href={"/rules"}>
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default Landing;
