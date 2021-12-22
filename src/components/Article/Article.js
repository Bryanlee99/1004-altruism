import React from "react";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

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
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  flexGrow: {
    flexGrow: 1,
  },
  titleBox: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    boxSizing: "border-box", // includes border in box sizing
  },
  titleText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "1000 !important",
    paddingRight: theme.spacing(2),
  },
  subtitleText: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.light,
  },
  textBox: {
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
  reference: {
    fontFamily: "museo-sans !important",
  },
  text: {
    fontFamily: "museo-sans !important",
    color: theme.palette.primary.main,
    fontWeight: "500 !important",
    textAlign: "center",
  },
  img: { padding: theme.spacing(2), maxHeight: "400px" },
  nextBox: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(5),
  },
  back: {
    fontFamily: "museo-sans !important",
    fontSize: "1.5rem !important",
    marginRight: theme.spacing(4) + "!important",
    backgroundColor: theme.palette.primary.light + "!important",
  },
  next: {
    fontFamily: "museo-sans !important",
    fontSize: "1.5rem !important",
    backgroundColor: theme.palette.secondary.main + "!important",
  },
}));

function Article({ _title, _category, _text, _img, _next, _references }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const goForward = () => {
    navigate(_next);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box className={classes.center}>
      <Box className={classes.root}>
        <Box className={classes.titleBox}>
          <Box classes={classes.flexColumn}>
            <Typography className={classes.titleText} variant="h2">
              {_title}
            </Typography>
            <Typography className={classes.subtitleText} variant="h5">
              {_category}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.textBox}>
          <Typography className={classes.text} variant="h5">
            {parse(_text)}
          </Typography>
          {_img && <img className={classes.img} src={_img} />}
        </Box>
        <Box className={`${classes.nextBox} ${classes.flexRow}`}>
          <Box className={classes.flexGrow}>
            {_references.map((ref, i) => (
              <Typography key={i} className={`${classes.reference}`}>
                {ref}
              </Typography>
            ))}
          </Box>
          <Button className={classes.back} variant="contained" onClick={goBack}>
            Back
          </Button>
          <Button
            className={classes.next}
            variant="contained"
            onClick={goForward}
          >
            {_next === "/" ? "Return Home" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Article;
