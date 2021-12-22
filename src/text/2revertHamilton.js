import { secondSectionStart } from "text/sections.js";
import { BACKGROUND } from "text/sections.js";

const groupLimits = {
  Revert: {
    title: "Group Selection: Alas, it was not meant to be",
    text: `You’re determined in your support of Group Selection! Unfortunately, overtime, group selection began to lose favor, particularly with the introduction of new theories such as Kin Selection from W.D. Hamilton (1964) which provided alternate explanations for observed altruism. As David Sloan Wilson notes, within groups, an altruistic trait can only become fixed due to genetic drift which means groups must be small, because the altruistic gene is less fit than the selfish one. In fact, dispersal between groups must be limited in order to reduce the likelihood of a selfish gene appearing. In Wilson’s 1975 article in Nature, he summarized the tension against Group Selection well in stating “The current consensus is
    that the proper conditions are infrequent or at least limited to special circumstances such as the early stage of colonization of many populations”. (Wilson, 1975)
    `,
    url: secondSectionStart,
    references: [
      "Wilson, David Sloan. 'A theory of group selection.' Proceedings of the national academy of sciences 72.1 (1975): 143-146.",
    ],
    category: BACKGROUND,
  },
};

export default groupLimits;
