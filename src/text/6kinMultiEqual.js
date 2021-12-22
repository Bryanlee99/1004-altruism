import { sixthSectionStart } from "text/sections.js";
import { BACKGROUND } from "text/sections.js";

const kinMultiEqual = {
  KinMultiEqual1: {
    title: "Kin & Multi-Level Selection: Different, or very similar?",
    text: `While multilevel and kin selection appear quite different, are there underlying similarities? Intuitively, both theories rely on positive assortment (i.e. genetic similarity within the populations) such that organisms will be inclined to assist their kin under kin selection, and reduce the effect of within-group selection under multilevel selection, increasing the effect of between group selection. (Kramer 2016, 13). Indeed, other researchers have used the often cited Price Equations to segment intergenerational changes in fitness at both the individual and group levels (similar to multilevel selection) but also into its indirect and direct components (deriving Hamilton’s rule for Kin Selection).
    `,
    url: sixthSectionStart,
    references: [
      "Kramer, Jos, and Joël Meunier. 'Kin and multilevel selection in social evolution: a never-ending controversy?.' F1000Research 5 (2016).",
      "Towards a general theory of group selection. Simon B, Fletcher JA, Doebeli M Evolution. 2013 Jun; 67(6):1561-72.",
    ],
    category: BACKGROUND,
  },
  KinMultiEqual2: {
    title: "Kin & Multi-Level Selection: Similarity Doubts",
    text: `Despite these similarities, researchers disagree that multilevel and kin selection have any more than a superficial similarity. For instance, Simon et al claim that multilevel and kin selection may appear similar when only one generation between populations is analyzed, but on longer time scales kin selection has difficulty explaining distinctly group-level phenomena, such as fusion, fission, and extinction. (Simon et al, 2013). Additionally, the two forms of selection may have differing assumptions, where Kin Selection assumes payoffs are non-additive while group selection assumes separated populations with limited dispersal. (Kramer 2016).
    `,
    url: "/kinmultiequal2",
    references: [
      "Kramer, Jos, and Joël Meunier. 'Kin and multilevel selection in social evolution: a never-ending controversy?.' F1000Research 5 (2016).",
    ],
    category: BACKGROUND,
  },
};

export default kinMultiEqual;
