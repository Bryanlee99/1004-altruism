import { firstSectionStart } from "text/sections.js";
import { BACKGROUND } from "text/sections.js";

const darwinSeries = {
  Darwin1: {
    title: "Darwin's Altruism Dilemma (1/2)",
    text: `The presence of sterile worker individuals in eusocial insect societies was an observation that Darwin struggled to explain. This was his most pressing problem, as he himself notes, “at first appeared to me insuperable, and actually fatal to my whole theory”. (Origin of Species, 1859, 111) In the Origin of Species, he appeals to a group selection argument, stating that “This difficulty, though appearing insuperable, is lessened, or, as I believe, disappears, when it is remembered that selection may be applied to the family, as well as to the individual, and may thus gain the desired end.” (112). `,
    url: firstSectionStart,
    references: [
      "Darwin, Charles. On the origin of species, 1859. Routledge, 2004.",
    ],
    category: BACKGROUND,
  },
  Darwin2: {
    title: "Darwin: Altruism as Vaguely 'Good of the Species' (2/2)",
    text: `In this sense, Darwin argues that evolution has come to select for groups that have sterile worker individuals because they are able to make the queens of the colony more efficient at reproduction than if each of them maintained their reproductive capacities. More than ten years later, in Descent of Man, Darwin attempts to explain the origin of human society in a similar way: “There can be no doubt that a tribe including many members who, from possessing in a high degree the spirit of patriotism, fidelity, obedience, courage, and sympathy, were always ready to give aid to each other and to sacrifice themselves for the common good, would be victorious over most other tribes; and this would be natural selection.” (166). Thus, Darwin alludes both to kin selection and to group selection, but does not distinguish between the two.`,
    url: "/darwin2",
    references: [
      "Darwin, Charles. The descent of man, and selection in relation to sex. Princeton University Press, 2008.",
    ],
    category: BACKGROUND,
  },
  Emerson: {
    title: "Emerson: Super Organisms & Group Selection",
    text: `Alfred Emerson provided additional support for Darwin’s formulation by expounding upon the concept of the “superorganism” through his research on termites, viewing the social group rather than the individual as the primary order of natural selection. Particularly, with the discoveries of organisms with high levels of organization, such as  cell colonies, nucleated cells, and multicellular organisms, it seems “ascending hierarchies of integrated units…form the basis of the concept of emergent evolution”. Given these levels of evolution, it appeared to Emerson that group-level evolution must be studied in order to understand population level dynamics (Emerson, 1939).`,
    url: "/emerson",
    references: [
      "Emerson, Alfred E. “Social Coordination and the Superorganism.” The American Midland Naturalist, vol. 21, no. 1, University of Notre Dame, 1939, pp. 182–209, https://doi.org/10.2307/2420380.",
    ],
    category: BACKGROUND,
  },
  WynneEdwards: {
    title: "Wynne-Edwards on Group Selection",
    text: `Wynne-Edwards (1964), another prominent 20th century evolutionary biologist, further asserts that, in studying territorial birds, social systems evolve at a higher order of organization which requires group level development as opposed to lower level genetic development. In particular, Wynne-Edwards notes that “social systems are collective entities in the higher animals frequently involving an element of tradition as well as genetic transmission”, which supports his notion that to explain higher order phenomena, group level selection must be used (Smith, 1964).`,
    url: "/wynne-edwards",
    references: [
      "Smith, J. Maynard. 'Group selection and kin selection.' Nature 201.4924 (1964): 1145-1147.",
    ],
    category: BACKGROUND,
  },
  Lorenz: {
    title: "Konrad Lorenz on 'Good of the Species'",
    text: `Nobel Prize laureate Konrad Lorenz (founder of ethnology) studied animal behaviors and reinforcement, which lead him to further endorse that animal behavior patterns were often “for the good of the species” (Burkhart 2005, p.432).`,
    url: "/lorenz",
    references: [
      "Burkhardt, Richard W. Patterns of behavior: Konrad Lorenz, Niko Tinbergen, and the founding of ethology. University of Chicago Press, 2005.",
    ],
    category: BACKGROUND,
  },
  Williams1: {
    title: "Williams: Qualms with Group Selection (1/2)",
    text: `In Adaptation and Natural Selection (1966), George Williams takes issue with the use of Group Selection to explain altruistic phenomena. Williams notes that “Low rates of endogenous change relative to selection coefficients are a necessary precondition for any effective selection” (114). In particular, the force of selection on genetic change must be significantly greater than the effect of other factors (such as environmental and social factors). While for gene populations this relative rate of change may be the case, for Williams, it seems that this is increasingly unlikely at higher levels of organization as large numbers of endogenous factors accumulate, particularly by the group level. 
    `,
    url: "/williams1",
    references: [
      "Williams, George C., and Austin Burt. Adaptation and natural selection. na, 1997.",
    ],
    category: BACKGROUND,
  },
  Williams2: {
    title: "Williams: Qualms continued (2/2)",
    text: `Williams further notes that the fundamental criteria (so called “selection coefficients”) for efficient selection at a given level of organization involve a large variation of phenotypes within that level and a fast turnover at that level of organization. For Williams, populations seem to have low variability between populations (given their small number) and have slow turnover given their large number of constituents. He contrasts this with (already slow) gene selection which can turnover between organism generations and has broad variety within a population. Ultimately, he claims that, “what would be a powerful selective force at the genie level would be trivial at the group level” (115), causing him to believe that gene-level selection is more plausible than group-level selection.`,
    url: "/williams2",
    references: [
      "Williams, George C., and Austin Burt. Adaptation and natural selection. na, 1997.",
    ],
    category: BACKGROUND,
  },
};

export default darwinSeries;
