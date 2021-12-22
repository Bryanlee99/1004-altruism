import {
  gameEndMulti,
  gameEndMultiKin,
  gameEndKin,
  gameEndNatural,
} from "text/sections.js";

// Images
import DavidSloanWilson from "assets/davidsloanwilson.png";
import EOWilson from "assets/eowilson.png";
import JMSmith from "assets/jmsmith.png";
import Nowak from "assets/nowak.png";
import Sober from "assets/sober.png";
import Hamilton from "assets/wdhamilton.png";
import Keller from "assets/keller.jpg";
import Lehmann from "assets/lehmann.jpg";

const endGameConfig = {
  MultiLevel: {
    group: "Multi-Level Selection",
    text: "You’ve joined a set of biologists reviving group selection, reframed for selection along higher degrees of organization, in the 21st century. You are in the company of David S. Wilson and Elliott Sober who assisted this revival which makes space for organism level thinking despite gene-level evolutionary selection.",
    imgs: [DavidSloanWilson, Sober],
    imgCaptions: ["David Sloan Wilson", "Elliott Sober"],
    url: gameEndMulti,
  },
  MultiKin: {
    group: "Multi-Level & Kin Selection",
    text: "You’re alongside a group of biologists like Keller and Lehmann who hold kin and multilevel selection as formally equivalent. Building bridges in a divisive debate! While the opinion is contentious, what opinion is not in the altruism debate? ",
    imgs: [Keller, Lehmann],
    imgCaptions: ["Laurent Keller", "Laurent Lehmann"],
    url: gameEndMultiKin,
  },
  KinSelection: {
    group: "Kin Selection",
    text: "You’ve concluded your adventure and endorse kin selection! One of the original hypotheses which still today is widely accepted by evolutionary biologists. You’re in good company with the likes of W.D. Hamilton who first rigorously defined kin selection by inclusive fitness and J.M. Smith, a critical figure in the turn from group selection to Kin Selection in the mid 20th century.",
    imgs: [Hamilton, JMSmith],
    imgCaptions: ["W.D. Hamilton", "John Maynard Smith"],
    url: gameEndKin,
  },
  NaturalSelection: {
    group: "(Traditional) Natural Selection",
    text: "You’ve concluded your adventure! You’ve ended with a newly emerging group of researchers who are bringing into question the relative importance of traditional kin selection and preferring explanations due to traditional natural selection mechanisms and ecological importance. A divisive and pioneering group, alongside the reputed evolutionary biologists Nowak and Wilson, among others.",
    imgs: [Nowak, EOWilson],
    imgCaptions: ["Martin Nowak", "E.O. Wilson"],
    url: gameEndNatural,
  },
};

export default endGameConfig;
