import { fourthSectionStart } from "text/sections.js";
import { BACKGROUND } from "text/sections.js";
import multilevel from "assets/multilevel.png";

const multiSeries = {
  Multi1: {
    title: "Multi-Level Selection: Multiple Theories",
    text: `Multilevel selection, formulated as in the image below, shows promise! Within multilevel selection, there are two potential perspectives, which have been described in the literature as multilevel selection 1 (MLS-1) and multilevel selection 2 (MLS-2). MLS-1 views selection from the perspective of the individual; “group selection” refers to the effect of group membership on an individual’s fitness, fitness is considered a property of individuals, not groups, and populations consist of individuals, organized into groups.
    `,
    url: fourthSectionStart,
    references: [
      "Damuth, John, and I. Lorraine Heisler. 'Alternative formulations of multilevel selection.' Biology and Philosophy 3.4 (1988): 407-430.",
    ],
    img: multilevel,
    category: BACKGROUND,
  },
  MultiLevel1: {
    title: "Multi-Level Selection: Level 1 & 2",
    text: `On the other hand, MLS-2 views selection from the perspective of the group. “Group selection” refers to the relative reproductive success of different groups within a species, fitness is a property of the whole group, and populations consist of groups that, in turn, consist of individuals.

    <p>Importantly, although it may seem like MLS-1 and MLS-2 are arguing for individual selection and group selection (respectively), both perspectives acknowledge the presence of both individual and group selection, but choose to analyze the multilevel selection problem on the basis of either an individual (MLS-1) or a group (MLS-2).</p>
    `,
    url: "/multilevel1",
    references: [
      "Damuth, John, and I. Lorraine Heisler. 'Alternative formulations of multilevel selection.' Biology and Philosophy 3.4 (1988): 407-430.",
    ],
    category: BACKGROUND,
  },
};

export default multiSeries;
