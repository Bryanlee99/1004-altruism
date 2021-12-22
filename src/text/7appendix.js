import { appendixStart } from "text/sections.js";
import { APPENDIX } from "text/sections.js";
import nowak_five from "assets/nowak_five_cooperation.png";

const appendix = {
  Appendix1: {
    title: "Appendix: Social Explanations for Altruism?",
    text: `In this last selection, we present a note on a broad alternative perspective on the development of altruism. While the main game focuses on genetic and inheritable origins of altruism, this set of theories is broadly based on social selection, first presented in 2012 by Joan Roughgarden (Roughgarden, 2012). Within social selection, social influence due to pressures aside from genetic relatedness, such as reputational benefits, may encourage a species to undergo certain actions. As Simon (1990) acknowledges for humans in particular, social influence impacts actions significantly and can rapidly disperse among a population much more quickly  than individual genetic mutations. 
    `,
    url: appendixStart,
    references: [
      "Roughgarden, Joan. 'The social selection alternative to sexual selection.' Philosophical Transactions of the Royal Society B: Biological Sciences 367.1600 (2012): 2294-2303.",
    ],
    category: APPENDIX,
  },
  Appendix2: {
    title: "Appendix: Alternative Formulations for Altruism",
    text: `More broadly, investigation of questions which seem to hinge more on social factors as opposed to genetic factors requires different formulations of the altruism risk-reward tradeoff. Fortunately, survey work by authors such as Nowak (2006) present alternative equations which may be implicitly used by organisms to justify altruism, such as direct reciprocity (in which cooperation if the probability, w, of another encounter between the same two individuals exceeds the cost-to-benefit ratio of the altruistic act: w > c/b) and indirect reciprocity (the probability, q, to know someone's reputation exceeds the cost-to-benefit ratio of the altruistic act, q > c/b). While these formulations may help address more amorphous origins of altruism, the variables in the formula (such as reputation, q) are increasingly difficult to quantity relative to inclusive fitness. Exploration of such works seem necessary to explain macroscopic differences in behavior beyond the gene level, but should be presented in a sequel of this game.
    `,
    url: "/appendix2",
    references: [
      "Nowak, Martin A. 'Five rules for the evolution of cooperation.' science 314.5805 (2006): 1560-1563.",
    ],
    img: nowak_five,
    category: APPENDIX,
  },
};

export default appendix;
