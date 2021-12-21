import React from "react";

// Components
import { Box, Typography, Button } from "@mui/material";

// Theme
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    maxWidth: "1440px",
    // borderStyle: "solid",
    // boxSizing: "border-box", // includes border in box sizing
    // borderWidth: "10px",
    // borderColor: theme.palette.primary.main,
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  welcomeBox: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box", // includes border in box sizing
  },
  welcomeText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "1000 !important",
    paddingRight: theme.spacing(2),
  },
  theGameText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.light,
    fontWeight: "1000 !important",
  },
  introBox: {
    flexGrow: 1,
    width: "100%",
    boxSizing: "border-box", // includes border in box sizing
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
  introText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "500 !important",
    textAlign: "center",
  },
  introSubtext: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "500 !important",
    textAlign: "center",
    paddingTop: theme.spacing(2),
  },
  nextBox: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5),
  },
  next: {
    fontFamily: "museo-sans !important",
    fontSize: "1.5rem !important",
    backgroundColor: theme.palette.secondary.main + "!important",
  },
}));

function Rules() {
  const classes = useStyles();
  return (
    <Box className={classes.center}>
      <Box className={classes.root}>
        <Box className={classes.welcomeBox}>
          <Typography className={classes.welcomeText} variant="h2">
            Welcome to
          </Typography>
          <Typography className={classes.theGameText} variant="h2">
            the Game
          </Typography>
        </Box>
        <Box className={classes.introBox}>
          <Typography className={classes.introText} variant="h4">
            Welcome to the Choose Your Own Adventure Game: Altruism Version!
          </Typography>
          <Typography className={classes.introText} variant="h6">
            This is a website for Gened 1004’s final project for Fall 2021 by
            Bryan Lee and Nathan Le.
          </Typography>
          <Typography className={classes.introSubtext} variant="h6">
            You'll go on an adventure through some of the history of research on
            the evolutionary origins of altruism. Before we discuss the rules of
            the game, let’s discuss “what is altruism” and “why altruism”.
          </Typography>
        </Box>
        <Box className={classes.nextBox}>
          <Button
            className={classes.next}
            variant="contained"
            href={"/whyaltruism"}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Rules;
