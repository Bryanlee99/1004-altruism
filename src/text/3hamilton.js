import { thirdSectionStart } from "text/sections.js";
import { BACKGROUND } from "text/sections.js";

const hamiltonSeries = {
  Hamilton1: {
    title: "Hamilton: Another Explanation for Altruism? (1/4)",
    text: `Following the reduction in favor of group selection, another theory called Kin Selection lead by WD Hamilton was taking form. Hamilton made the theoretical prediction that altruistic behavior is more likely to be found in interactions between related individuals than in those between unrelated individuals, even in cases where individuals cannot recognize degrees of relationship. (John Maynard Smith 1978, 177). Given a gene A associated with performing an altruistic act, the frequency of gene A will increase if the relationship coefficient r between the donor and recipient of the altruistic act is greater than the cost-benefit ratio (i.e. r > C/B). In other words, altruism can evolve if the cost to the actor is offset by sufficient benefit to sufficiently closely-related recipients. This means that animals should behave in ways that maximize not their personal fitness (or number of surviving offspring), but rather their inclusive fitness — a measure that also takes into account the offspring of their relatives. `,
    url: thirdSectionStart,
    references: [
      "Smith, John Maynard. 'The evolution of behavior.' Scientific American 239.3 (1978): 176-193.",
    ],
    category: BACKGROUND,
  },
  Hamilton2: {
    title: "Hamilton: Kin Selection (2/4)",
    text: `Given relational coefficients, JBS Haldane famously joked that he “would be willing to die for two brothers or eight cousins”. Furthermore, as W.D. Hamilton notes in his book <i>The Evolution of Altruistic Behavior (1963)</i>, <p>"Despite the principle of 'survival of the fittest' the ultimate criterion which determines whether [a gene] G will spread is not whether the behavior is to the benefit of the behaver, but whether it is to the benefit of the gene G ...With altruism this will happen only if the affected individual is a relative of the altruist, therefore having an increased chance of carrying the gene."</p>
    `,
    url: "/hamilton2",
    references: [
      "W. D. Hamilton, The Evolution of Altruistic Behavior (1963), pp. 354–355",
    ],
    category: BACKGROUND,
  },
  Hamilton3: {
    title: "Hamilton: Bacterial Plasmids (3/4)",
    text: `Two examples that John Maynard Smith uses to illustrate Hamilton’s theory are bacterial plasmids and the sterile worker individuals of Hymenoptera insect families. In the case of the bacterial plasmids, he notes that overpopulation can actually trigger transcription of a toxin gene on the plasmid in a few individuals containing the plasmid, killing them and releasing the toxin in the process. However, because the plasmid itself also contains a toxin-resistance gene, surrounding bacteria that do not have the plasmid will be killed. Thus, the bacteria that have the plasmid will be able to reproduce freely. In this way, the plasmid sacrificing its host bacterium and itself actually allows for better reproduction of other copies of itself. This first example is a prime example of altruism being selected for even when the unit of selection (the plasmid) cannot recognize its relationship to other copies of itself.
    `,
    url: "/hamilton3",
    references: [
      "Smith, John Maynard. 'The evolution of behavior.' Scientific American 239.3 (1978): 176-193.",
    ],
    category: BACKGROUND,
  },
  Hamilton4: {
    title: "Hamilton: Haplodiploidy Support (4/4)",
    text: `The second example that Maynard Smith uses to demonstrate the validity of Hamilton’s theory is the sterile female workers of Hymenoptera. Since these species are haplodiploid, where males are haploid and females are diploid, full sisters will have a relationship coefficient of 0.75 (because they share one of two copies of their genome from their haploid father, and can inherit one of two possible copies from their diploid mother). Normally, in fully diploid species, this coefficient would be only 0.5. This elevated relationship coefficient caused by haplodiploidy thus pre-disposes Hymenoptera females to stay in their own nest and help raise their full sisters, which is seen in the field.
    `,
    url: "/hamilton4",
    references: [
      "Smith, John Maynard. 'The evolution of behavior.' Scientific American 239.3 (1978): 176-193.",
    ],
    category: BACKGROUND,
  },
  Dawkins: {
    title: "Dawkins: Selfish Gene & Gene-Level Inheritance",
    text: `Dawkins, building upon the work of WD Hamilton, supports Kin Selection by introducing the theory of a gene-centered view of evolution in which the gene is the primary unit of selection, as opposed to chromosomes, the organism, groups or species. As Dawkins notes, “One internally consistent logical picture is that the unit of replication is the gene,...and the organism is one kind of ...entity on which selection acts directly”. 

    <p>But the question must be raised that Darwinian selection does not operate on the level of the gene but instead on extended phenotypes, so how can the gene be the unit of selection if the phenotypes are many orders of magnitude higher in organizational structure and are constituted by multiple genes? </p>
    `,
    url: "/dawkins",
    references: [
      "Reeve, H. Kern; Keller, Laurent (1999). 'Burying the debate over whether genes or individuals are the units of selection'. In Keller, Laurent (ed.). Levels of Selection in Evolution. Princeton University Press. p. 5. ISBN 978-0691007045",
    ],
    category: BACKGROUND,
  },
  MultiLevel1: {
    title: "Wilson & Sober: Group Selection's Revival?",
    text: `While Kin Selection was well established for much of the late 20th century, Wilson and Sober initiated a rebirth of group selection, in the form of multilevel selection. They rejected selection “for the good of the species,” but considered that it may be possible for smaller groups of individuals within a species to be subject to selective forces. In addition, multilevel selection posits that natural selection acts on multiple levels simultaneously, including the group, individual, cellular, and genetic levels. In this sense, selection for altruistic traits is governed not only by individual benefit or group benefit alone, but by both in tandem with each other.
    `,
    url: "/wilsonsober1",
    references: [
      "Wilson, David Sloan, and Elliott Sober. 'Reintroducing group selection to the human behavioral sciences.' Behavioral and brain sciences 17.4 (1994): 585-608.",
    ],
    category: BACKGROUND,
  },
};

export default hamiltonSeries;
