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
  titleBox: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box", // includes border in box sizing
  },
  titleText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "1000 !important",
    paddingRight: theme.spacing(2),
  },
  theGroupText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.light,
    fontWeight: "1000 !important",
  },
  descBox: {
    flexGrow: 1,
    width: "100%",
    boxSizing: "border-box", // includes border in box sizing
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    paddingLeft: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
  text: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "500 !important",
    textAlign: "center",
  },
  fullFlexRowEven: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  endGameBox: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5),
  },
  endGame: {
    fontFamily: "museo-sans !important",
    fontSize: "1.5rem !important",
    backgroundColor: theme.palette.secondary.main + "!important",
  },
}));

function GameEnd({ _group, _text, _imgs, _imgCaptions, _appendixURL }) {
  const classes = useStyles();

  const renderImgs = () => {
    const imgsArr = [];
    for (var idx = 0; idx < _imgs.length; idx++) {
      var img = _imgs[idx];
      var caption = _imgCaptions[idx];
      console.log(caption);
      imgsArr.push(
        <Box key={idx} className={classes.imgBox}>
          <img src={img} alt={caption} />
          <Typography variant="h6">{caption}</Typography>
        </Box>
      );
    }
    return <Box className={classes.fullFlexRowEven}>{imgsArr}</Box>;
  };

  return (
    <Box className={classes.center}>
      <Box className={classes.root}>
        <Box className={classes.titleBox}>
          <Typography className={classes.titleText} variant="h2">
            You've selected:
          </Typography>
          <Typography className={classes.theGroupText} variant="h2">
            {_group}
          </Typography>
        </Box>
        <Box className={classes.descBox}>
          {renderImgs()}
          <Typography className={classes.text} variant="h5">
            {_text}
          </Typography>
        </Box>
        <Box className={`${classes.endGameBox} + ${classes.fullFlexRowEven}`}>
          <Button className={classes.endGame} variant="contained" href={"/"}>
            End Game
          </Button>
          <Button
            className={classes.endGame}
            variant="contained"
            href={_appendixURL}
          >
            See Appendix
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default GameEnd;
