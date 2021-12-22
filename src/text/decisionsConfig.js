import {
  decision1Url,
  decision2Url,
  decision3Url,
  decision4Url,
  decision5Url,
  decision6Url,
  secondSectionStart,
  thirdSectionStart,
  fourthSectionStart,
  fifthSectionStart,
  sixthSectionStart,
  gameEndMulti,
  gameEndMultiKin,
  gameEndKin,
  gameEndNatural,
} from "text/sections.js";

const decisionPoints = {
  Decision1: {
    text: `Given the prior evidence supporting group selection and the qualms, what option will you choose: Continue with group selection, or is an alternate theory needed?`,
    options: ["Group selection", "An alternate theory"],
    optionURLs: [secondSectionStart, thirdSectionStart],
    url: decision1Url,
  },
  Decision2: {
    text: `Given the additional evidence which puts group theory in question, you reluctantly accept proposals for alternate theories.`,
    options: ["Reject group theory in favor of an alternative"],
    optionURLs: [thirdSectionStart],
    url: decision2Url,
  },
  Decision3: {
    text: `Given the prior evidence suppporting kin selection, but balanced against new proposals for multi-level selection, what position do you support?.`,
    options: ["Multi-level selection", "Kin Selection"],
    optionURLs: [fourthSectionStart, fifthSectionStart],
    url: decision3Url,
  },
  Decision4: {
    text: `Given the proposals for multiple subcategories of multi-level selection, which would you endorse?`,
    options: [
      "Multi-level 1 is generally preferred",
      "Multi-level 2 is generally preferred",
      "The two must be used on a case-by-case basis",
    ],
    optionURLs: [sixthSectionStart, sixthSectionStart, sixthSectionStart],
    url: decision4Url,
  },
  Decision5: {
    text: `Given the concerns E.O. Wilson and Nowak raise about Kin Selection in balance with the counter arguments, but also recalling the merits of multilevel selection, which of the following would you choose?`,
    options: [
      "Continue endorsing Kin Selection",
      "Convert to multi-level selection",
      "Convert to Nowak's natural selection based theory",
    ],
    optionURLs: [sixthSectionStart, fourthSectionStart, gameEndNatural],
    url: decision5Url,
  },
  Decision6: {
    text: `Given the theories supposing that Kin Selection and Multi-level selection are equivalent, which position would you endorse?`,
    options: [
      "Continue endorsing multi-level selection, distinct from kin selection",
      "Multi-level selection and kin selection are equivalent",
      "Change endorsement to kin selection, distinct from multi-level selection",
    ],
    optionURLs: [gameEndMulti, gameEndMultiKin, gameEndKin],
    url: decision6Url,
  },
};

export default decisionPoints;
