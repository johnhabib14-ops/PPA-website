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
  body: "This project examines maternal advocacy across distinct political and historical settings. By placing these contexts in conversation, we study how mothers give voice to loss, demand accountability, and sustain hope under conditions of political violence. Our work centers language, testimony, advocacy, trauma, resilience, and political violence as connecting threads.",
  groups: [
    {
      title: "Madres de Plaza de Mayo",
      blurb:
        "Mothers who publicly advocated for their disappeared children during Argentina's military dictatorship.",
    },
    {
      title: "Israeli mothers after October 7",
      blurb:
        "Mothers advocating after the October 7 attacks, including those whose family members were abducted, killed, or otherwise harmed.",
    },
    {
      title: "Ukrainian mothers",
      blurb:
        "Mothers affected by war, displacement, child abduction, and family separation amid ongoing political violence.",
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

export type ResearchGroup = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  paragraphs: string[];
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
      "The Madres de Plaza de Mayo are an association of Argentine mothers who came together to seek information about their children who were forcibly disappeared during the period of military dictatorship. Gathering publicly, they transformed private grief into sustained, visible advocacy.",
      "Their weekly presence in the Plaza de Mayo became an enduring act of remembrance and public testimony. Through peaceful assembly and persistent demands for truth, they advanced the cause of accountability and resisted authoritarian violence.",
      "Public commemorations in Buenos Aires have continued this tradition of visible remembrance. Gatherings bring together participants holding placards, banners, and symbolic figures representing the disappeared—sustaining a decades-long demand for truth, memory, and accountability.",
      "This section emphasizes advocacy, remembrance, public testimony, and resistance. It is presented factually and respectfully, with attention to the dignity of the families involved.",
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
      "This section focuses on Ukrainian mothers affected by war, displacement, child abduction, family separation, and political violence. It documents how mothers advocate for the recognition, protection, and return of their children and families.",
      "Media reporting and advocacy interviews have described the unlawful transfer and abduction of Ukrainian children amid ongoing conflict, including efforts by parents to locate and retrieve children across occupied territory. These accounts emphasize identity erasure, family separation, and the psychological toll on parents and children alike.",
      "The emphasis remains on maternal advocacy, trauma, and resilience, alongside appeals for recognition, protection, and justice. Figures cited in public reporting—including estimates of thousands of children identified by Ukrainian authorities—are reported estimates from advocacy and official sources, not verified research data from this project.",
      "We present this material with respect for those affected and as context for understanding contemporary maternal advocacy under conditions of political violence.",
    ],
    resourceLinks: [
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
    "This project uses content analysis of interviews with two sample populations of mothers whose children were victimized by political violence.",
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
        body: "Placeholder description of how motherhood is conceptualized in the study, including maternal identity, caregiving, and advocacy on behalf of children and family.",
      },
      {
        title: "Political Violence",
        body: "Placeholder description of political violence as a context shaping testimony, including abduction, disappearance, displacement, and authoritarian conditions.",
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
      title: "Reports",
      description:
        "Research reports, summaries, and documentation produced by the project and partners.",
      type: "Reports",
      status: "coming_soon",
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
