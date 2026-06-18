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
    {
      title: "Cross-conflict maternal peace",
      blurb:
        "Palestinian and Israeli mothers organizing for dialogue, hostage return, and political resolution amid ongoing violence.",
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
  collapsible?: ResearchSubsection;
  quote?: string;
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
    collapsible: {
      title: "Founding mothers and contentious motherhood",
      paragraphs: [
        "The founding mothers of the Plaza de Mayo emerged from a political environment defined by the Argentine junta's systematic use of enforced disappearance as a mechanism of social control during the Proceso. Their transformation from individual grieving mothers into a coordinated human-rights movement exemplifies what scholars describe as \"contentious motherhood\"—the politicization of maternal identity under authoritarian rule (Feijóo & Nari, 1996; Bosco, 2006).",
        "The Mothers' founding nucleus—Azucena Villaflor, Esther Ballestrino de Careaga, María Ponce de Bianco, Josefina García de Noia, Mirta Acuña de Baravalle, and Hebe de Bonafini—constituted a heterogeneous but structurally coherent group whose activism redefined the boundaries of the possible under state terror.",
        "The founding mothers were not professional activists. Most came from working-class or lower-middle-class households, with limited prior political engagement. Working-class women like Azucena Villaflor had deep ties to Peronist labor networks, which provided both a political vocabulary and a sense of collective agency. Educated migrants like Esther Ballestrino brought ideological sophistication, including Marxist and anti-imperialist frameworks, which shaped the group's early discourse. Mothers from the provinces like María Ponce de Bianco embodied the demographic shifts of mid-century Argentina, linking the Madres to broader patterns of urbanization, gender equity, and social mobility. This diversity of maternal advocacy produced a shared identity rooted in motherhood but shaped by distinct class, ideological, and regional trajectories.",
      ],
    },
    subsections: [
      {
        title: "Visible remembrance",
        paragraphs: [
          "Public commemorations in Buenos Aires have continued this tradition of visible remembrance. Gatherings bring together participants holding placards, banners, and symbolic figures representing the disappeared—sustaining a decades-long demand for truth, memory, and accountability.",
        ],
      },
    ],
    photos: [
      {
        src: `${MADRES_PHOTO_BASE}/madres-banner-protest.png`,
        alt: "Mothers of the Plaza de Mayo holding a banner demanding the return of detained-disappeared persons alive.",
        caption:
          "Mothers of the Plaza de Mayo at a public demonstration demanding the return of the detained-disappeared alive.",
      },
      {
        src: `${MADRES_PHOTO_BASE}/desaparecidos-portrait-grid.png`,
        alt: "Grid of black-and-white portrait photographs of disappeared persons.",
        caption:
          "Portrait photographs of disappeared persons, illustrating individualized remembrance at scale.",
      },
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
      "Following the October 7 attacks, dozens of mothers became the public faces of advocacy for hostages and missing family members through the Hostages and Missing Families Forum (#BringThemHomeNow). We approach this material with care and trauma-informed language, emphasizing advocacy, grief, and family-centered testimony rather than graphic detail.",
    ],
    quote:
      "\u201cOur voices are excluded from the rooms where decisions are made for us and our children.\u201d \u2014 Mothers Call",
    subsections: [
      {
        title: "Hostage advocacy after October 7",
        paragraphs: [
          "The Hostages and Missing Families Forum has coordinated sustained public appeals for the safe return of abducted family members. Mothers have worn photographs of loved ones, addressed media and international audiences, and demanded government action—exemplifying maternal advocacy under conditions of abduction, uncertainty, and political violence.",
        ],
      },
      {
        title: "Named advocates",
        paragraphs: [
          "Documented public faces of hostage advocacy include Rachel Goldberg-Polin (son Hersh Goldberg-Polin); Shira Albag (daughter Liri Albag); Keren Schem (daughter Mia Schem); Simona Steinbrecher (daughter Agam Steinbrecher); Nitza Korngold (son Tal Shoham); Shelly Shem-Tov (son Omer Shem-Tov); Hagit Chen (son Itay Chen); Yael Adar (son Tamir Adar); Varda Ben Baruch (grandson Edan Alexander); Niva Wenkert (daughter Agam Berger); Ruty Strum (sons Iair and Eitan Horn); and Osnat Sharabi (brothers Eli and Yossi Sharabi).",
        ],
      },
      {
        title: "Cross-conflict bereavement and peace",
        paragraphs: [
          "The Parents Circle – Families Forum (PCFF) is a joint Israeli-Palestinian organization of more than 800 bereaved families who have lost immediate relatives to the conflict. Founded in 1995, members choose to transform private grief into dialogue, reconciliation, and public education.",
          "Mothers Call unites Palestinian and Israeli women for peace, freedom, equality, and security for children. The campaign grew from a partnership between Women of the Sun (Palestinian) and Women Wage Peace (Israeli), signed in 2022. It has been nominated for the 2025 Nobel Peace Prize and was a 2024 Sakharov Prize finalist.",
          "MADRE partners with local Palestinian organizers to deliver mental health support, healthcare, and clean water amid occupation. Its \"Resist In Body\" program brings Palestinian and Israeli midwives together to demand an end to occupation policies that block reproductive healthcare in the West Bank.",
        ],
      },
    ],
    photos: [
      {
        src: "/images/research/israel/bring-them-home-mothers.png",
        alt: "Israeli mothers wearing shirts with photographs of abducted family members and Bring Them Home advocacy messages.",
        caption:
          "Mothers wearing advocacy shirts with photographs of abducted family members and Bring Them Home messages.",
      },
    ],
    resourceLinks: [
      {
        title: "Bring Them Home Now",
        url: "https://bringthemhomenow.net/",
        source: "Hostages and Missing Families Forum",
        summary:
          "The Hostages and Missing Families Forum coordinates public advocacy for the safe return of hostages and missing persons taken during the October 7 attacks, including sustained campaigns led by affected families.",
      },
      {
        title: "Parents Circle – Families Forum",
        url: "https://www.theparentscircle.org/en/about_eng-2/",
        source: "Parents Circle – Families Forum",
        summary:
          "A joint Israeli-Palestinian organization of more than 800 bereaved families who transform grief into dialogue, reconciliation, and peace education in schools and communities across the region.",
      },
      {
        title: "Mothers Call",
        url: "https://mothers-call.org/",
        source: "Mothers Call",
        summary:
          "A cross-conflict campaign of Palestinian and Israeli women united for peace, freedom, equality, and security for children—partnership between Women of the Sun and Women Wage Peace.",
      },
      {
        title: "MADRE: Palestine",
        url: "https://www.madre.org/palestine/",
        source: "MADRE",
        summary:
          "MADRE partners with local Palestinian organizers to provide mental health support for children, healthcare access, and clean water—alongside midwife-led advocacy for reproductive healthcare in the West Bank.",
      },
      {
        title: "Israeli Mothers — Hostage Advocacy Reference",
        url: "/documents/research/israeli-mothers-hostage-advocacy.pdf",
        source: "Pacific Psychological Associates research materials",
        summary:
          "Downloadable reference table of documented mothers in the Hostages and Missing Families Forum (#BringThemHomeNow), compiled from scholarly correspondence with Dr. Edward Dunbar.",
      },
    ],
  },
  {
    id: "ukraine",
    eyebrow: "Section 3",
    title: "Ukrainian Mothers",
    intro:
      "Mothers affected by war, displacement, child abduction, family separation, and political violence.",
    paragraphs: [
      "Ukrainian mothers advocate for the recognition, protection, and return of their children amid ongoing conflict—organizing family reunification efforts where official protection has failed.",
    ],
    quote:
      "\u201cIt\u2019s very important not to be strong alone.\u201d \u2014 Lidiya, Kharkiv (via HIAS)",
    subsections: [
      {
        title: "Child abduction during the war",
        paragraphs: [
          "From the earliest months of Russia's full-scale invasion, international monitors documented the systematic removal of Ukrainian children from occupied territories. Investigations found coordinated state-run programs—not temporary wartime relocations—involving passport changes, illegal adoption, \"re-education,\" and obstruction of family reunification. In March 2023, the ICC issued arrest warrants citing evidence that deportations were systematic and directed at the highest levels of government.",
        ],
      },
      {
        title: "International legal response",
        paragraphs: [
          "On December 3, 2025, the UN General Assembly adopted a resolution demanding Russia immediately return all forcibly taken Ukrainian children and cease practices of citizenship change, illegal adoption, and transfer to Russian families. Ukrainian prosecutors have verified 19,546 deported or forcibly relocated children; as of late 2025, only 1,876 have returned home—underscoring the urgency of international pressure and family-led advocacy.",
        ],
      },
      {
        title: "Humanitarian recovery",
        paragraphs: [
          "Humanitarian organizations including HIAS and local partners operate mobile brigades and safe spaces near the frontlines, providing mental health support, violence prevention, and economic assistance to displaced mothers and children. Partners include Power of a Woman, Angels of Salvation, and the Kherson \"Successful Woman\" center, funded in part by the German Federal Foreign Office.",
          "As Roma mother Anna* reflected after receiving dignity kits: \"I felt cared for. We are usually ignored, and no one ever asks if we need support.\"",
        ],
      },
      {
        title: "Family reunification organizations",
        paragraphs: [
          "Save Ukraine organizes cross-border rescue missions, working directly with mothers and grandmothers who travel into Russia or occupied territories to recover their children. The Association of Families of Deported Children provides testimony and legal evidence to the ICC, UN, and Ukrainian prosecutors—functioning similarly to historical mothers' human-rights groups, adapted to wartime conditions.",
        ],
      },
    ],
    photos: [
      {
        src: "/images/research/ukraine/hias-mobile-brigade-dnipro.png",
        alt: "Ukrainian mothers and children at a HIAS mobile social assistance brigade in Dnipropetrovsk region.",
        caption:
          "Mothers and children at a HIAS mobile social assistance brigade in Dnipropetrovsk region.",
      },
    ],
    resourceLinks: [
      {
        title: "Four Years of War, Four Stories of Ukrainians Recovering Against All Odds",
        url: "https://hias.org/news/four-years-war-four-stories-ukrainians-recovering-against-all-odds/",
        source: "HIAS",
        summary:
          "HIAS profiles Ukrainian mothers and families rebuilding after shelling, displacement, and frontline violence—through mobile brigades, art therapy, violence prevention, and economic assistance near the frontlines.",
      },
      {
        title: "Return of Ukrainian Children: A Common Duty of the Civilized World",
        url: "https://gp.gov.ua/en/posts/povernennya-ukrayinskix-ditei-spilnii-obovyazok-civilizovanogo-svitu",
        source: "Office of the Prosecutor General of Ukraine",
        summary:
          "Official account of the December 2025 UN General Assembly resolution demanding the return of forcibly taken Ukrainian children, with verified statistics on deportation, return, and criminal proceedings.",
      },
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
  note: "Additional briefs and citations will be added as the project develops.",
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
      title: "Four Years of War, Four Stories of Ukrainians Recovering",
      description:
        "HIAS profiles maternal resilience and humanitarian recovery for displaced Ukrainian families near the frontlines.",
      type: "Articles",
      url: "https://hias.org/news/four-years-war-four-stories-ukrainians-recovering-against-all-odds/",
      status: "available",
    },
    {
      title: "Return of Ukrainian Children (UN resolution)",
      description:
        "Prosecutor General of Ukraine on the December 2025 UN General Assembly resolution and verified deportation statistics.",
      type: "Reports",
      url: "https://gp.gov.ua/en/posts/povernennya-ukrayinskix-ditei-spilnii-obovyazok-civilizovanogo-svitu",
      status: "available",
    },
    {
      title: "Parents Circle – Families Forum",
      description:
        "Joint Israeli-Palestinian organization of bereaved families transforming grief into dialogue and reconciliation.",
      type: "Reports",
      url: "https://www.theparentscircle.org/en/about_eng-2/",
      status: "available",
    },
    {
      title: "Mothers Call",
      description:
        "Cross-conflict campaign of Palestinian and Israeli women united for peace, freedom, and security for children.",
      type: "Articles",
      url: "https://mothers-call.org/",
      status: "available",
    },
    {
      title: "MADRE: Palestine",
      description:
        "MADRE's partnerships with Palestinian organizers for mental health, healthcare, and midwife-led reproductive advocacy.",
      type: "Reports",
      url: "https://www.madre.org/palestine/",
      status: "available",
    },
    {
      title: "Bring Them Home Now",
      description:
        "Hostages and Missing Families Forum advocacy for the safe return of hostages taken during the October 7 attacks.",
      type: "Articles",
      url: "https://bringthemhomenow.net/",
      status: "available",
    },
    {
      title: "Israeli Mothers — Hostage Advocacy Reference (PDF)",
      description:
        "Reference table of documented mothers in the Hostages and Missing Families Forum (#BringThemHomeNow), from scholarly research correspondence.",
      type: "Downloads",
      url: "/documents/research/israeli-mothers-hostage-advocacy.pdf",
      status: "available",
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
