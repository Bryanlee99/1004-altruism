import {
  gameEndMulti,
  gameEndMultiKin,
  gameEndKin,
  gameEndNatural,
} from "text/sections.js";

// Images
import Berry from "assets/berry.jpg";

const endGameConfig = {
  MultiLevel: {
    group: "Multi-Level Selection",
    text: "Some description",
    imgs: [Berry, Berry],
    imgCaptions: ["This is Berry", "This is Berry 2"],
    url: gameEndMulti,
  },
  MultiKin: {
    group: "Multi-Level & Kin Selection",
    text: "Some description",
    imgs: [Berry, Berry],
    imgCaptions: ["This is Berry", "This is Berry 2"],
    url: gameEndMultiKin,
  },
  KinSelection: {
    group: "Kin Selection",
    text: "Some description",
    imgs: [Berry, Berry],
    imgCaptions: ["This is Berry", "This is Berry 2"],
    url: gameEndKin,
  },
  NaturalSelection: {
    group: "Natural Selection",
    text: "You've reached the end of your adventure, and you agree with Nowak, E.O. Wilson (also Harvard minds!) ",
    imgs: [Berry, Berry],
    imgCaptions: ["This is Berry", "This is Berry 2"],
    url: gameEndNatural,
  },
};

export default endGameConfig;
