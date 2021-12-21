import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Box, Typography, Button } from "@mui/material";

// Theme
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  titleBox: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box", // includes border in box sizing
  },
  title: {
    color: theme.palette.common.yellow,
    fontWeight: "1000 !important",
    paddingRight: theme.spacing(2),
  },
  text: {
    textAlign: "center",
    color: theme.palette.common.lightbrown,
    fontWeight: "500 !important",
  },
  optionsBox: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  optionButton: {
    fontSize: "1.5rem !important",
    color: theme.palette.common.yellow + "!important",
    borderColor: theme.palette.common.yellow + "!important",
    borderWidth: "4px !important",
    width: "500px",
    borderRadius: "20px !important",
  },
  selectedOptionButton: {
    fontSize: "1.5rem !important",
    color: theme.palette.common.pearlWhite + "!important",
    backgroundColor: theme.palette.common.yellow + "!important",
    borderColor: theme.palette.common.yellow + "!important",
    borderWidth: "4px !important",
    width: "500px",
    borderRadius: "20px !important",
  },
  nextBox: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5),
  },
  next: {
    fontSize: "1.5rem !important",
    backgroundColor: theme.palette.secondary.main + "!important",
  },
}));

function Decision({ _text, _options, _optionURLs }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [clickedAnswer, setClickedAnswer] = useState(-1);
  const options = _options;

  const gotoNextPage = () => {
    navigate(_optionURLs[clickedAnswer]);
    // Resets riddle component
    setClickedAnswer(-1);
  };

  const renderButtons = () => {
    const buttons = [];
    for (var i = 0; i < options.length; i++) {
      var className =
        clickedAnswer == i
          ? classes.selectedOptionButton
          : classes.optionButton;
      buttons.push(
        <Box>
          <Button
            key={i}
            id={i}
            className={className}
            variant="outlined"
            onClick={(btn) => setClickedAnswer(btn.target.id)}
          >
            {options[i]}
          </Button>
        </Box>
      );
    }
    return buttons;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Box className={classes.titleBox}>
          <Typography className={classes.title} variant="h2">
            Decision Point
          </Typography>
        </Box>
        <Box className={classes.titleBox}>
          <Typography className={classes.text} variant="h4">
            {_text}
          </Typography>
        </Box>
        <Box className={classes.optionsBox}>{renderButtons()}</Box>
        <Box className={classes.nextBox}>
          <Button
            disabled={clickedAnswer == -1}
            className={classes.next}
            variant="contained"
            onClick={gotoNextPage}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Decision;
