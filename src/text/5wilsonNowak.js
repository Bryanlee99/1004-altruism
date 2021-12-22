import { fifthSectionStart } from "text/sections.js";
import { BACKGROUND } from "text/sections.js";

const wilsonNowak = {
  Wilson1: {
    title: "E.O Wilson: Limitations of Kin Selection?",
    text: `You have a lot of confidence in Kin Selection. Overtime, were there concerns which emerged? Wilson (2005) rebutts WD Hamilton’s original hypothesis of increased prevalence of altruistic sterility in haplodiploid Hymenoptera populations. He points out three critical errors:
    <p>1. Hamilton fails to consider that in a population with a 1:1 ratio of males to females, the relationship coefficient between sterile females to the overall rest of the population remains 0.5. This is because of the fact that males are haploid, which causes the relationship coefficient between a male and a full sister to be only 0.25. Moreover, in the presence of a mother queen, a 1:1 sex ratio is theoretically plausible, since the mother has a relationship coefficient of 0.5 with her offspring, male or female. This has been demonstrated empirically as well. </p>
    <p> 2. Recent research has shown that colonies are often founded by unrelated queens, workers do not show preference for their own mothers in the colony, and colony stability is not diminished even when the degree of relationship between workers is low. These three pieces of evidence taken together suggest that families do not make a colony, but a colony makes families. </p>
    <p> 3. Hamilton’s formulation of r > C/B (or rB > C) as a requirement for altruism fails to take into account altruism that can happen when individuals are not related (i.e. r = 0). Hamilton suggests that a corrective factor to account for colony-level benefits independent of kinship should be added, leading to a new inequality: rB<sub>k</sub> + B<sub>e</sub> > C, where B<sub>k</sub> is the benefit from kin selection and B<sub>e</sub> is the benefit from colony selection. Current evidence (as demonstrated in the previous error) suggests that B<sub>e</sub> will often be overwhelmingly larger than B<sub>k</sub>, leading to a simplified altruism requirement B<sub>e</sub> > C. </p>
    `,
    url: fifthSectionStart,
    references: [
      "Wilson, Edward O. 'Kin selection as the key to altruism: its rise and fall.' Social research (2005): 159-166",
    ],
    category: BACKGROUND,
  },
  Nowak1: {
    title: "Nowak: Issues with Kin Selection? (1/3)",
    text: `Nowak further refutes the haplodiploidy hypothesis in his 2010 paper (published with Corina Tarnita and E.O. Wilson) entitled “The Evolution of Eusociality.” He notes that the theory gained credence because evidence at the time seemed to support a causal relationship between haplodiploidy and eusociality. However, this was discovered not to be the case, since several diploid species also exhibit eusociality (despite full siblings having a relationship coefficient of 0.5). Moreover, very few species that multiplied through clonal reproduction achieved eusociality, despite the fact that these species should have an even greater tendency than haplodiploid species towards eusociality according to kin selection (clones have relationship coefficients of 1). Finally, there are group selection forces that actually cause reproductive altruism towards kin to be disadvantageous, such as disease. Colonies that have greater genetic diversity are more resistant to disease, as has been shown in several ant species and in honeybees.`,
    url: "/nowak1",
    references: [
      "Nowak, Martin A., Corina E. Tarnita, and Edward O. Wilson. 'The evolution of eusociality.' Nature 466.7310 (2010): 1057-1062",
    ],
    category: BACKGROUND,
  },
  Nowak2: {
    title: "Nowak: Natural Selection Alone is Sufficient? (2/3)",
    text: `Given these problems with the haplodiploidy hypothesis, an alternate (albeit contentious among the community) hypothesis for the evolution of eusociality is proposed. The logical first step that is proposed is the formation of groups in a freely-mixing population, which can occur through kin, but also through many other circumstances, such as congregation at potential nest sites and feeding grounds. These initial individuals may form groups when they discover that cooperation can be useful, or through reciprocity. In this sense, Nowak et al. argue that family groupings (kin selection) may hasten the process of grouping, but are not the causative agent.

    <p>The second step required for the evolution of eusociality is the accumulation of traits that cause the group to become predisposed towards eusociality. Researchers observed that solitary bees behaved in ways similar to eusocial bees when forced into groups together. One of these was the formation of a defined system of division of labor in foraging, tunneling, and guarding the nest. The authors note that this may be due to a predisposition for solitary bees to move to another task only when their current one is complete. However, in the coerced group, the other tasks are already occupied by other members, and thus each bee becomes dedicated to their specific task.</p>
    `,
    url: "/nowak2",
    references: [
      "Nowak, Martin A., Corina E. Tarnita, and Edward O. Wilson. 'The evolution of eusociality.' Nature 466.7310 (2010): 1057-1062",
    ],
    category: BACKGROUND,
  },
  Nowak3: {
    title: "Nowak: Natural Selection Alone is Sufficient? (3/3)",
    text: `The third step in eusocial evolution is the origin of eusocial alleles, which may arise either through mutation or recombination. Although there are no known genes that are specifically eusocial, research has documented the presence of genes controlling wing development that could be turned on or off based on diet or other environmental factors. This could potentially explain the origin of the wingless worker caste seen in eusocial colonies.

    <p>Finally, the authors argue that the origin of eusociality can be explained purely by the action of negative or positive natural selection. They construct a mathematical model in which a mutant recessive allele, a, induces daughters to stay within the nest. Homozygous dominant (AA) and heterozygous (Aa) daughters thus leave the nest, and only homozygous recessive (aa) daughters stay in the nest. For the mutant eusocial allele to be favored over the solitary allele, the authors demonstrate that eusociality has the potential to naturally arise if the fitness advantages of increased fecundity and reduced mortality for the mother are large enough to offset selection pressures against the recessive eusocial allele. In addition, there must be an intermediate probability that the offspring will stay in the nest (and thus have the homozygous recessive genotype). This is because enough offspring must stay for a colony to be established, but enough offspring must also leave (or “defect”) in order for new colonies to be established. Having thus provided a model for how natural selection alone can generate eusociality, the authors argue that kin selection is only necessary to account for eusociality from the perspective of the worker individuals, but entirely unnecessary from the perspective of a hypothetical gene governing whether a particular individual is eusocial or solitary.</p>
    `,
    url: "/nowak3",
    references: [
      "Nowak, Martin A., Corina E. Tarnita, and Edward O. Wilson. 'The evolution of eusociality.' Nature 466.7310 (2010): 1057-1062",
    ],
    category: BACKGROUND,
  },
};

export default wilsonNowak;
