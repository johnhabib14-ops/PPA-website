/**
 * Content for the Research section.
 *
 * The Maternal Advocacy Project content was ported from a previously separate
 * project so it now lives inside the main PPA site. Copy is trauma-informed and
 * academic; placeholders are clearly labeled and should be replaced with
 * verified material (e.g. final LIWC results) before launch.
 */

export const maternalAdvocacyProject = {
  slug: "maternal-advocacy-project",
  href: "/research/maternal-advocacy-project",
  title: "The Maternal Advocacy Project",
  shortDescription:
    "A research and advocacy project documenting the experiences of mothers who advocate for abducted children and family members affected by political violence, trauma, authoritarianism, and resilience.",
  eyebrow: "A Comparative Research Project",
  subtitle:
    "This page details the experiences of mothers who advocate for their abducted children and family. We document their words of advocacy in challenging authoritarianism.",
  heroSubtitle:
    "Documenting maternal advocacy, political violence, trauma, and resilience across global contexts.",
  heroIntro:
    "The Maternal Advocacy Project examines how mothers advocate for children and families affected by political violence, abduction, and authoritarian conditions. Through careful, trauma-informed research, we study the language of testimony and advocacy to better understand how mothers seek recognition, protection, and justice.",
} as const;

export type ResearchNavLink = { label: string; href: string };

export const maternalAdvocacyNav: ResearchNavLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Madres de Plaza de Mayo", href: "#madres" },
  { label: "Israeli Mothers", href: "#october7" },
  { label: "Ukrainian Mothers", href: "#ukraine" },
  { label: "Our Study", href: "#our-study" },
  { label: "Findings", href: "#findings" },
  { label: "Media", href: "#media" },
  { label: "Who We Are", href: "#team" },
];

/** Chrome (own navbar + footer) shown only on the Maternal Advocacy Project page. */
export const maternalAdvocacyChrome = {
  navBrand: "The Maternal Advocacy Project",
  navBrandHref: maternalAdvocacyProject.href,
  parentBrand: "Pacific Psychological Associates",
  parentHref: "/",
  parentResearchHref: "/research",
  footerBlurb:
    "A trauma-informed comparative research project documenting how mothers advocate for children and families affected by political violence, abduction, and authoritarianism.",
  footerNote:
    "This project is part of the research program at Pacific Psychological Associates. Content is presented for scholarly and informational purposes and is not legal, medical, or psychological advice.",
};

export const overview = {
  eyebrow: "Project Overview",
  title: "Maternal advocacy across political and historical contexts",
  body: "These women raised their children, supported their families, and from that commitment became political and moral actors. This project examines maternal advocacy across distinct political and historical settings where family members—including adult-aged children—have disappeared under repressive political regimes. By placing these contexts in conversation, we study how mothers give voice to loss, demand accountability, and sustain hope under conditions of political violence. Our work centers language, testimony, advocacy, trauma, resilience, and state violence as connecting threads.",
  groups: [
    {
      title: "Madres de Plaza de Mayo",
      blurb:
        "Mothers who transformed private grief into coordinated advocacy during Argentina's Proceso, demanding truth for disappeared children.",
    },
    {
      title: "Israeli mothers after October 7",
      blurb:
        "Mothers advocating after the October 7 attacks, including those whose family members were abducted, killed, or otherwise harmed.",
    },
    {
      title: "Ukrainian mothers",
      blurb:
        "Mothers confronting wartime child abduction, forced transfer, and family separation—and organizing for reunification and accountability.",
    },
    {
      title: "Mothers in our comparative study",
      blurb:
        "Mothers whose testimony forms the basis of our comparative linguistic analysis of advocacy and trauma.",
    },
  ],
  tags: [
    "Language",
    "Testimony",
    "Advocacy",
    "Trauma",
    "Resilience",
    "Political Violence",
    "State Violence",
  ],
};

export type ResearchResourceLink = {
  title: string;
  url: string;
  source: string;
  summary: string;
};

export type ResearchPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type ResearchSubsection = {
  title?: string;
  paragraphs: string[];
};

export type ResearchGroup = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  paragraphs: string[];
  subsections?: ResearchSubsection[];
  photos?: ResearchPhoto[];
  resourceLinks?: ResearchResourceLink[];
  placeholderLabel?: string;
  placeholderNote?: string;
};

const MADRES_PHOTO_BASE = "/images/research/madres-plaza-de-mayo-50th";

export const researchGroups: ResearchGroup[] = [
  {
    id: "madres",
    eyebrow: "Section 1",
    title: "Madres de Plaza de Mayo",
    intro:
      "Mothers who publicly advocated for their disappeared children during Argentina's military dictatorship.",
    paragraphs: [
      "The Madres de Plaza de Mayo are an association of Argentine mothers who came together to seek information about their children who were forcibly disappeared during the period of military dictatorship. Gathering publicly, they transformed private grief into sustained, visible advocacy—an organic response of mothers and other caregivers to the persecution and frequent homicides of young persons with opposing political views to the standing regime.",
      "Their weekly presence in the Plaza de Mayo became an enduring act of remembrance and public testimony. Through peaceful assembly and persistent demands for truth, they advanced the cause of accountability and resisted authoritarian violence. The advocacy of mothers served as a contrary form of support that regimes had abdicated toward marginalized members of society.",
    ],
    subsections: [
      {
        title: "Argentina's Proceso and Maternal Advocacy",
        paragraphs: [
          "The founding mothers of the Plaza de Mayo emerged from a political environment defined by the Argentine junta's systematic use of enforced disappearance as a mechanism of social control during the Proceso. Their transformation from individual grieving mothers into a coordinated human-rights movement exemplifies what scholars describe as \"contentious motherhood\"—the politicization of maternal identity under authoritarian rule (Feijóo & Nari, 1996; Bosco, 2006).",
          "The Mothers' founding nucleus—Azucena Villaflor, Esther Ballestrino de Careaga, María Ponce de Bianco, Josefina García de Noia, Mirta Acuña de Baravalle, and Hebe de Bonafini—constituted a heterogeneous but structurally coherent group whose activism redefined the boundaries of the possible under state terror.",
          "The founding mothers were not professional activists. Most came from working-class or lower-middle-class households, with limited prior political engagement. Working-class women like Azucena Villaflor had deep ties to Peronist labor networks, which provided both a political vocabulary and a sense of collective agency. Educated migrants like Esther Ballestrino brought ideological sophistication, including Marxist and anti-imperialist frameworks, which shaped the group's early discourse. Mothers from the provinces like María Ponce de Bianco embodied the demographic shifts of mid-century Argentina, linking the Madres to broader patterns of urbanization, gender equity, and social mobility. This diversity of maternal advocacy produced a shared identity rooted in motherhood but shaped by distinct class, ideological, and regional trajectories.",
        ],
      },
      {
        paragraphs: [
          "Public commemorations in Buenos Aires have continued this tradition of visible remembrance. Gatherings bring together participants holding placards, banners, and symbolic figures representing the disappeared—sustaining a decades-long demand for truth, memory, and accountability.",
        ],
      },
    ],
    photos: [
      {
        src: `${MADRES_PHOTO_BASE}/commemoration-crowd-plaza-01.png`,
        alt: "Large crowd gathered at an outdoor commemoration in Buenos Aires, with participants holding white cutout figures.",
        caption:
          "Participants at a public commemoration holding symbolic figures representing disappeared persons.",
      },
      {
        src: `${MADRES_PHOTO_BASE}/march-avenida-de-mayo-02.png`,
        alt: "March along a wide avenue in Buenos Aires, with a domed building visible in the background and participants carrying banners.",
        caption: "March along Avenida de Mayo during a public remembrance gathering.",
      },
      {
        src: `${MADRES_PHOTO_BASE}/thirty-thousand-cutouts-03.png`,
        alt: "Crowd at a commemoration holding white cutout figures and a banner reading 30,000.",
        caption:
          "Participants holding symbolic figures; a banner references the widely cited estimate of 30,000 disappeared persons.",
      },
      {
        src: `${MADRES_PHOTO_BASE}/demonstration-banners-04.png`,
        alt: "Demonstration with participants carrying organizational banners along a city street.",
        caption: "Demonstration with organizational banners during a public gathering.",
      },
      {
        src: `${MADRES_PHOTO_BASE}/plaza-gathering-05.png`,
        alt: "Gathering on a narrow city street lined with ornate historic buildings, with participants holding signs.",
        caption: "Street gathering during commemorative events in Buenos Aires.",
      },
      {
        src: `${MADRES_PHOTO_BASE}/detenido-desaparecido-placard-06.png`,
        alt: "Participant holding a placard with a photograph and the text detenido desaparecido for Jorge Oscar Tanco.",
        caption:
          "Placard bearing the name and photograph of a disappeared person, illustrating individualized remembrance.",
      },
    ],
    resourceLinks: [
      {
        title: "Argentina, 1985",
        url: "https://en.wikipedia.org/wiki/Argentina,_1985",
        source: "Wikipedia",
        summary:
          "Argentina, 1985 is a 2022 legal drama depicting the 1985 Trial of the Juntas, in which prosecutors sought accountability for crimes committed during Argentina's military dictatorship, including torture, extrajudicial murder, and forced disappearances. The film portrays the work of the prosecution team and witnesses who testified about junta-era violence. It has been widely discussed as a work of public memory that connects contemporary audiences to the Madres' long-standing demands for truth and justice—distinct from, but related to, the lived testimony of affected families.",
      },
    ],
  },
  {
    id: "october7",
    eyebrow: "Section 2",
    title: "Israeli Mothers After October 7",
    intro:
      "Mothers advocating after the October 7 attacks, with attention to families affected by abduction, loss, and political violence.",
    paragraphs: [
      "This section focuses on Israeli mothers who have advocated publicly following the October 7 attacks, including mothers whose children or family members were abducted, killed, or otherwise victimized by political violence.",
      "We approach this material with care and trauma-informed language. The emphasis is on advocacy, grief, uncertainty, public appeals, and family-centered testimony, rather than on graphic detail.",
      "Content here aims to document how mothers articulate hope, demand the safe return of loved ones, and sustain public attention through ongoing uncertainty.",
    ],
    placeholderLabel: "Interview excerpts, advocacy statements, or media links",
    placeholderNote:
      "Placeholder for interview excerpts, advocacy statements, or carefully selected media links to be added later.",
  },
  {
    id: "ukraine",
    eyebrow: "Section 3",
    title: "Ukrainian Mothers",
    intro:
      "Mothers affected by war, displacement, child abduction, family separation, and political violence.",
    paragraphs: [
      "This section documents how Ukrainian mothers advocate for the recognition, protection, and return of their children and families amid ongoing conflict. Their efforts of advocacy and defiance respond to conditions in which state actors have abandoned care for marginalized populations—offering a contrary form of support where official protection has failed.",
    ],
    subsections: [
      {
        title: "Child Abduction During the War in Ukraine",
        paragraphs: [
          "From the earliest months of Russia's full-scale invasion of Ukraine in 2022, international monitors began documenting the systematic removal of Ukrainian children from occupied territories. Initial reports described evacuations from besieged cities such as Mariupol and Kherson, but subsequent investigations by the United Nations and independent research groups found that many of these transfers were not temporary wartime relocations but coordinated state-run programs.",
          "Children were taken from orphanages, hospitals, foster families, and, most controversially, from parents who were told their children would return after \"recreation\" or \"medical treatment.\" Instead, many were transported deeper into Russian-controlled areas or across the border into the Russian Federation. Russian officials publicly acknowledged these transfers, framing them as humanitarian rescue efforts, even as Ukrainian families reported being unable to contact or retrieve their children.",
          "By late 2022 and throughout 2023, the scale and organization of these operations became clearer. The Yale Humanitarian Research Lab identified a network of dozens of facilities involved in the relocation, \"re-education,\" or adoption of Ukrainian children, while the UN Commission of Inquiry on Ukraine verified cases of forced transfer that met the legal definition of a war crime. In March 2023, the International Criminal Court issued arrest warrants for President Vladimir Putin and Children's Rights Commissioner Maria Lvova-Belova, citing evidence that the deportations were systematic and directed at the highest levels of government.",
          "Many children were placed in Russian foster families, given Russian passports, or subjected to programs aimed at erasing Ukrainian identity. Although some have been returned through complex diplomatic and humanitarian channels, thousands remain unaccounted for, and the practice has become one of the most internationally condemned aspects of the war.",
        ],
      },
      {
        title: "Documentation and Legal Corroboration",
        paragraphs: [
          "Several agencies have organized this information to clarify the significance of the forced abduction of children in Ukraine. UN Commission reports on verified cases explicitly distinguish between confirmed numbers—approximately 1,200—and the larger, likely undercounted universe of deported children. UN and Yale analyses both describe a coordinated policy involving passport changes, adoption procedures, \"re-education\" programs, and obstruction of family reunification rather than incidental wartime displacement.",
          "The Yale Humanitarian Research Lab combines named child lists, transport records, facility rosters, satellite imagery, and Russian official statements, mapping a network of camps and institutions used for relocation and \"re-education.\" ICC arrest warrants signal that independent prosecutors and judges found sufficient evidence that deportations were systematic, organized, and attributable to senior Russian officials.",
          "Figures cited in public reporting—including estimates of thousands of children identified by Ukrainian authorities—are reported estimates from advocacy and official sources, not verified research data from this project. We present this material with respect for those affected and as context for understanding contemporary maternal advocacy under conditions of political violence.",
        ],
      },
      {
        title: "Contemporary Ukrainian Family Advocacy Organizations",
        paragraphs: [
          "Save Ukraine has become one of the main family-reunification organizations in Ukraine. Founded by former Children's Ombudsman Mykola Kuleba, the NGO is involved in cross-border rescue missions to retrieve abducted children. The organization works directly with mothers and grandmothers who travel into Russia or occupied territories to recover their children, and has facilitated the return of hundreds of children—often documenting the process publicly. Many widely reported reunifications involve mothers traveling with Save Ukraine teams.",
          "The Association of Families of Deported Children is the closest equivalent to a dedicated mothers' movement for abducted Ukrainian children. Formed by mothers, grandmothers, and guardians of children taken to Russia or occupied territories, the organization provides testimony, documentation, and legal evidence to the ICC, UN, and Ukrainian prosecutors. It organizes public demonstrations, media campaigns, and international advocacy—functioning similarly to historical mothers' human-rights groups such as the Madres de Plaza de Mayo, though adapted to wartime conditions.",
        ],
      },
    ],
    resourceLinks: [
      {
        title: "Yale Humanitarian Research Lab",
        url: "https://medicine.yale.edu/lab/khoshnood/",
        source: "Yale School of Public Health",
        summary:
          "The Yale Humanitarian Research Lab documents Russia's deportation, \"re-education,\" and coerced adoption of Ukrainian children through named child lists, transport records, facility rosters, satellite imagery, and Russian official statements—mapping a network of camps and institutions used for relocation and indoctrination.",
      },
      {
        title: "ICC arrest warrants: Situation in Ukraine",
        url: "https://www.icc-cpi.int/news/situation-ukraine-icc-judges-issue-arrest-warrants-against-vladimir-vladimirovich-putin-and",
        source: "International Criminal Court (17 March 2023)",
        summary:
          "ICC Pre-Trial Chamber II issued arrest warrants for Vladimir Putin and Maria Lvova-Belova for the war crimes of unlawful deportation and transfer of children from occupied areas of Ukraine to the Russian Federation—signaling that independent prosecutors and judges found sufficient evidence that deportations were systematic and attributable to senior Russian officials.",
      },
      {
        title: "Save Ukraine",
        url: "https://www.saveukraineua.org/",
        source: "Save Ukraine NGO",
        summary:
          "Save Ukraine organizes cross-border rescue missions to return forcibly deported children, working directly with mothers and grandmothers who travel into Russia or occupied territories. Founded by former Children's Ombudsman Mykola Kuleba, the organization has facilitated the return of hundreds of children and documents reunification efforts publicly.",
      },
      {
        title: "They're stealing the children. Ukraine is fighting back.",
        url: "https://www.sexyboomershow.com/theyre-stealing-the-children-ukraine-is-fighting-back/",
        source: "Phil and Ted's Sexy Boomer Show (May 16, 2026)",
        summary:
          "This podcast episode features an interview with Dr. Olga Popel of the Holodomor Genocide Committee, discussing reported child abduction and forced transfer amid the war in Ukraine. Themes include parental retrieval efforts, historical context of mass violence against Ukrainian families, identity erasure, and international humanitarian concern. The episode presents advocacy perspectives and reported figures; they are included here as a media resource, not as confirmed research findings.",
      },
    ],
  },
];

export const study = {
  eyebrow: "Section 4",
  title: "Our Study",
  description:
    "The study strategies seek to provide a greater understanding of forms of maternal advocacy found in cases of disappeared family members, including adult-aged children, by repressive political regimes. Consistent with Orozco Mendoza's (2026) observation, this maternal contract is an organic response of mothers and other caregivers to the persecution and frequent homicides of young persons with opposing political views to the standing regime. These efforts of advocacy and defiance are in response to regimes that abandon their care for marginalized members of society. This project uses content analysis of interviews with two sample populations of mothers whose children were victimized by political violence.",
  groups: [
    {
      label: "Group 1",
      title: "Israeli mothers after October 7",
      blurb:
        "Mothers advocating after the October 7 attacks, including families affected by abduction and loss.",
    },
    {
      label: "Group 2",
      title: "Madres de Plaza de Mayo mothers",
      blurb:
        "Mothers who advocated for their disappeared children during Argentina's military dictatorship.",
    },
  ],
  liwc: {
    title: "LIWC Analysis",
    intro:
      "The study uses LIWC (Linguistic Inquiry and Word Count) analysis to examine patterns in maternal testimony and advocacy language. LIWC is a validated text-analysis approach that quantifies the words people use across psychologically meaningful categories.",
    constructsIntro: "LIWC is used to measure constructs such as:",
    measures: [
      "Emotional tone",
      "Cognitive processing words",
      "Social and family references",
      "Anxiety, anger, and sadness language",
      "Past versus future focus",
      "Certainty and uncertainty language",
    ],
    outro:
      "These linguistic patterns are being examined to identify content related to trauma experiences, resilience, political violence, and maternal advocacy.",
  },
  keyConstructs: {
    title: "Key Constructs",
    intro:
      "The analysis is organized around several core constructs. Descriptions below are placeholders and can be refined as the work develops.",
    items: [
      {
        title: "Motherhood",
        body: "Mothers and other caregivers who raised children and supported families became political and moral actors through advocacy—a maternal identity politicized under authoritarian rule and wartime conditions. The study examines how motherhood is expressed in testimony, including caregiving, demands for recognition, and sustained public appeals on behalf of children and family.",
      },
      {
        title: "Political Violence",
        body: "Political violence shapes the contexts in which maternal advocacy emerges, including enforced disappearance, abduction, deportation, displacement, and state-led programs of family separation. The analysis attends to how testimony reflects conditions of authoritarian control and armed conflict.",
      },
      {
        title: "LIWC Validity and Utility",
        body: "Placeholder description of why LIWC is a valid and useful tool for analyzing testimony, including its grounding in psychological research and its applicability to advocacy language.",
      },
      {
        title: "Trauma",
        body: "Placeholder description of trauma as expressed through language, including markers of distress, loss, and the psychological impact of political violence.",
      },
      {
        title: "Resilience",
        body: "Placeholder description of resilience, including expressions of hope, endurance, collective support, and sustained advocacy in the face of adversity.",
      },
    ],
  },
};

export type GraphCard = {
  title: string;
  description: string;
  chart: "bar" | "groupedBar" | "line" | "diverging";
};

export const findings = {
  eyebrow: "Section 5",
  title: "Graphs and Findings",
  intro:
    "The figures below illustrate the categories of analysis planned for this study. Final LIWC results will be inserted as analyses are completed. The visualizations shown here are placeholders that indicate the intended format of each comparison.",
  updateNote:
    "This section will be updated as analyses are finalized. Visualizations currently display illustrative placeholders, not study results. [Insert final LIWC graphs and values once analyses are complete.]",
  cards: [
    {
      title: "Emotional Tone Across Groups",
      description:
        "Comparison of overall emotional tone in maternal testimony across study groups.",
      chart: "groupedBar",
    },
    {
      title: "Cognitive Processing Language",
      description:
        "Use of cognitive processing words, reflecting reasoning, insight, and meaning-making.",
      chart: "bar",
    },
    {
      title: "Social and Family References",
      description:
        "Frequency of social and family-oriented language across testimony.",
      chart: "groupedBar",
    },
    {
      title: "Anxiety, Anger, and Sadness Language",
      description:
        "Distribution of affect-related language categories across groups.",
      chart: "bar",
    },
    {
      title: "Past vs. Future Focus",
      description:
        "Relative emphasis on past-oriented versus future-oriented language.",
      chart: "diverging",
    },
    {
      title: "Certainty vs. Uncertainty Language",
      description:
        "Balance of certainty and uncertainty markers in advocacy language.",
      chart: "line",
    },
  ] as GraphCard[],
};

export type MediaResource = {
  title: string;
  description: string;
  type: string;
  url?: string;
  status?: "available" | "coming_soon";
};

export const media = {
  eyebrow: "Section 6",
  title: "Media Resources",
  intro:
    "A growing collection of materials related to the project. Selected media and research materials will be added as the project develops.",
  note: "Placeholders below indicate the categories of resources that will be made available.",
  resources: [
    {
      title: "Articles",
      description:
        "Scholarly articles, essays, and written analyses related to maternal advocacy and political violence.",
      type: "Articles",
      status: "coming_soon",
    },
    {
      title: "Argentina, 1985 (film)",
      description:
        "A 2022 legal drama about the 1985 Trial of the Juntas and prosecution of Argentina's military dictatorship for torture, extrajudicial murder, and forced disappearances.",
      type: "Videos",
      url: "https://en.wikipedia.org/wiki/Argentina,_1985",
      status: "available",
    },
    {
      title: "They're stealing the children. Ukraine is fighting back.",
      description:
        "Podcast interview on reported child abduction and forced transfer in Ukraine, parental advocacy, and international humanitarian concern.",
      type: "Interviews",
      url: "https://www.sexyboomershow.com/theyre-stealing-the-children-ukraine-is-fighting-back/",
      status: "available",
    },
    {
      title: "Yale Humanitarian Research Lab",
      description:
        "Investigations documenting Russia's systematic deportation, \"re-education,\" and coerced adoption of Ukrainian children—including facility mapping and transport records.",
      type: "Reports",
      url: "https://medicine.yale.edu/lab/khoshnood/",
      status: "available",
    },
    {
      title: "ICC arrest warrants (Ukraine)",
      description:
        "International Criminal Court warrants issued in March 2023 for unlawful deportation and transfer of Ukrainian children.",
      type: "Reports",
      url: "https://www.icc-cpi.int/news/situation-ukraine-icc-judges-issue-arrest-warrants-against-vladimir-vladimirovich-putin-and",
      status: "available",
    },
    {
      title: "Save Ukraine",
      description:
        "Humanitarian organization facilitating cross-border rescue missions and family reunification for forcibly deported Ukrainian children.",
      type: "Reports",
      url: "https://www.saveukraineua.org/",
      status: "available",
    },
    {
      title: "Downloadable Resources",
      description:
        "Briefs, citations, and materials available for download by researchers and the public.",
      type: "Downloads",
      status: "coming_soon",
    },
  ] as MediaResource[],
};

export type TeamMember = {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
};

export const team = {
  eyebrow: "Section 7",
  title: "Who We Are",
  intro:
    "Our research team brings together expertise in psychology, political violence, and linguistic analysis. Profiles below are placeholders and will be completed as the team is finalized.",
  members: [
    {
      name: "Researcher Name",
      role: "Principal Investigator",
      affiliation: "Institutional Affiliation",
      bio: "Placeholder biography describing research interests in maternal advocacy, trauma, and political violence. [Insert verified bio.]",
    },
    {
      name: "Researcher Name",
      role: "Co-Investigator",
      affiliation: "Institutional Affiliation",
      bio: "Placeholder biography describing expertise in linguistic analysis and content-analytic methods. [Insert verified bio.]",
    },
    {
      name: "Researcher Name",
      role: "Research Associate",
      affiliation: "Institutional Affiliation",
      bio: "Placeholder biography describing contributions to data collection, coding, and analysis. [Insert verified bio.]",
    },
    {
      name: "Researcher Name",
      role: "Research Assistant",
      affiliation: "Institutional Affiliation",
      bio: "Placeholder biography describing support for literature review and project coordination. [Insert verified bio.]",
    },
  ] as TeamMember[],
};
