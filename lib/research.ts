/**
 * Content for the Research section.
 *
 * The Maternal Advocacy Project content was ported from a previously separate
 * project so it now lives inside the main PPA site. Copy is trauma-informed and
 * academic; placeholders are clearly labeled and should be replaced with
 * verified material (e.g. final LIWC results) before launch.
 */

export const maternalAdvocacyBase = "/research/maternal-advocacy-project" as const;

export const maternalAdvocacyProject = {
  slug: "maternal-advocacy-project",
  href: maternalAdvocacyBase,
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

export const maternalAdvocacyRoutes = {
  hub: maternalAdvocacyBase,
  foundations: `${maternalAdvocacyBase}/foundations`,
  madres: `${maternalAdvocacyBase}/madres`,
  israel: `${maternalAdvocacyBase}/israel`,
  ukraine: `${maternalAdvocacyBase}/ukraine`,
  study: `${maternalAdvocacyBase}/study`,
  findings: `${maternalAdvocacyBase}/findings`,
  media: `${maternalAdvocacyBase}/media`,
} as const;

export const maternalAdvocacyNav: ResearchNavLink[] = [
  { label: "Overview", href: maternalAdvocacyRoutes.hub },
  { label: "Research Foundations", href: maternalAdvocacyRoutes.foundations },
  { label: "Madres de Plaza de Mayo", href: maternalAdvocacyRoutes.madres },
  { label: "Israeli Mothers", href: maternalAdvocacyRoutes.israel },
  { label: "Ukrainian Mothers", href: maternalAdvocacyRoutes.ukraine },
  { label: "Our Study", href: maternalAdvocacyRoutes.study },
  { label: "Findings", href: maternalAdvocacyRoutes.findings },
  { label: "Media", href: maternalAdvocacyRoutes.media },
];

export type RegionPageLink = { label: string; href: string };

export const regionPages: RegionPageLink[] = [
  { label: "Madres de Plaza de Mayo", href: maternalAdvocacyRoutes.madres },
  { label: "Israeli Mothers After October 7", href: maternalAdvocacyRoutes.israel },
  { label: "Ukrainian Mothers", href: maternalAdvocacyRoutes.ukraine },
];

export type HubEntryCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export const hubRegionCards: HubEntryCard[] = [
  {
    eyebrow: "Section 1",
    title: "Madres de Plaza de Mayo",
    description:
      "Mothers who transformed private grief into coordinated advocacy during Argentina's Proceso, demanding truth for disappeared children.",
    href: maternalAdvocacyRoutes.madres,
  },
  {
    eyebrow: "Section 2",
    title: "Israeli Mothers After October 7",
    description:
      "Mothers advocating after the October 7 attacks, including families affected by abduction, loss, and political violence.",
    href: maternalAdvocacyRoutes.israel,
  },
  {
    eyebrow: "Section 3",
    title: "Ukrainian Mothers",
    description:
      "Mothers confronting wartime child abduction, forced transfer, and family separation—and organizing for reunification and accountability.",
    href: maternalAdvocacyRoutes.ukraine,
  },
];

export const hubSupportCards: HubEntryCard[] = [
  {
    eyebrow: "Research Foundations",
    title: "Theoretical & historical grounding",
    description:
      "The maternal contract framework and Argentina's history of disappearance anchor how we study family testimony and advocacy.",
    href: maternalAdvocacyRoutes.foundations,
  },
  {
    eyebrow: "Section 4",
    title: "Our Study",
    description:
      "Comparative content analysis of maternal testimony using LIWC linguistic measures of trauma, resilience, and advocacy.",
    href: maternalAdvocacyRoutes.study,
  },
  {
    eyebrow: "Section 5",
    title: "Graphs and Findings",
    description:
      "Planned LIWC visualizations comparing emotional tone, cognitive processing, and advocacy language across study groups.",
    href: maternalAdvocacyRoutes.findings,
  },
  {
    eyebrow: "Section 6",
    title: "Media Resources",
    description:
      "Articles, films, reports, interviews, and downloadable reference materials related to the project.",
    href: maternalAdvocacyRoutes.media,
  },
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
      href: maternalAdvocacyRoutes.madres,
    },
    {
      title: "Israeli mothers after October 7",
      blurb:
        "Mothers advocating after the October 7 attacks, including those whose family members were abducted, killed, or otherwise harmed.",
      href: maternalAdvocacyRoutes.israel,
    },
    {
      title: "Ukrainian mothers",
      blurb:
        "Mothers confronting wartime child abduction, forced transfer, and family separation—and organizing for reunification and accountability.",
      href: maternalAdvocacyRoutes.ukraine,
    },
    {
      title: "Mothers in our comparative study",
      blurb:
        "Mothers whose testimony forms the basis of our comparative linguistic analysis of advocacy and trauma.",
      href: maternalAdvocacyRoutes.study,
    },
    {
      title: "Cross-conflict maternal peace",
      blurb:
        "Palestinian and Israeli mothers organizing for dialogue, hostage return, and political resolution amid ongoing violence.",
      href: `${maternalAdvocacyRoutes.israel}#block-mothers-call`,
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

export type FoundationCard = {
  title: string;
  body: string[];
  citation: string;
  links: { label: string; url: string }[];
};

export type FoundationSource = {
  citation: string;
  url: string;
  label: string;
};

export const researchFoundations = {
  eyebrow: "Research Foundations",
  title: "Research Foundations",
  intro:
    "Two sources anchor this project: a political-theory framework for understanding maternal advocacy, and a historical account of why family testimony and public memory remain necessary. Together they ground how we study the language of mothers and relatives confronting state violence and disappearance.",
  image: {
    src: "/images/research/maternal-contract/mother-and-children-embrace.png",
    alt: "Charcoal-style portrait of a mother holding two children close, all with closed eyes, evoking grief, protection, and remembrance.",
    caption: "A contextual artwork evoking maternal care, grief, and remembrance.",
  },
  cards: [
    {
      title: "The Maternal Contract",
      body: [
        "Political theorist Elva F. Orozco Mendoza describes a \u201cmaternal contract\u201d: when official institutions abandon, blame, or fail to protect people harmed by state violence, disappearance, imprisonment, feminicide, or structural neglect, mothers and relatives step forward as political and moral actors.",
        "Their advocacy becomes a collective care structure. Organizing together, they perform some of the searching, documenting, witnessing, recognition, memory, and justice functions that institutions failed to provide \u2014 without the state\u2019s resources or authority.",
        "This framework directly informs our study of mothers and relatives of people who were disappeared, abducted, imprisoned, or politically targeted, and how their testimony gives voice to loss and demands accountability.",
      ],
      citation:
        "Elva F. Orozco Mendoza, The Maternal Contract: A Subaltern Response to Extreme Violence in the Americas, Oxford University Press / Oxford Academic, 2025.",
      links: [
        {
          label: "Read the Oxford Academic source",
          url: "https://academic.oup.com/book/61436/chapter/534736169",
        },
      ],
    },
    {
      title: "The Disappeared: What Was Known and What Remains Unknown",
      body: [
        "Historian Emilio Crenzel describes how knowledge of Argentina\u2019s system of disappearance was fragmentary and uneven during the dictatorship. Understanding was assembled gradually \u2014 by relatives, survivors, human-rights groups, exiles, journalists, and political organizations piecing evidence together over time.",
        "Many questions remain unresolved, including the fate of the disappeared, the children taken from their families, and the full social and political architecture of state terror.",
        "This is why maternal and family testimony matters as a source of memory, documentation, and public accountability \u2014 often preserving knowledge that official records omitted or suppressed.",
      ],
      citation:
        "Emilio Crenzel, \u201cThe disappeared: What we knew and what we still don\u2019t,\u201d Buenos Aires Herald, May 4, 2026.",
      links: [
        {
          label: "Read the Buenos Aires Herald article",
          url: "https://buenosairesherald.com/op-ed/the-disappeared-what-we-knew-and-what-we-still-dont",
        },
      ],
    },
    {
      title: "Why Maternal Advocacy Matters",
      body: [
        "Read together, these sources frame the project. The maternal contract offers a theoretical lens for understanding how mothers and relatives become advocates when institutions abandon victims.",
        "Argentina\u2019s history of disappearance shows, in concrete terms, why family testimony and public memory remain necessary long after the violence \u2014 because so much was never officially recorded or acknowledged.",
        "Together they support the project\u2019s aim: to study how mothers and relatives transform grief, uncertainty, and institutional abandonment into sustained advocacy, documentation, and the pursuit of justice.",
      ],
      citation:
        "Synthesis of Orozco Mendoza (2025) and Crenzel (2026); full citations below.",
      links: [
        {
          label: "Read the Oxford Academic source",
          url: "https://academic.oup.com/book/61436/chapter/534736169",
        },
        {
          label: "Read the Buenos Aires Herald article",
          url: "https://buenosairesherald.com/op-ed/the-disappeared-what-we-knew-and-what-we-still-dont",
        },
      ],
    },
  ] as FoundationCard[],
  sources: [
    {
      citation:
        "Orozco Mendoza, Elva F. The Maternal Contract: A Subaltern Response to Extreme Violence in the Americas. Oxford University Press / Oxford Academic, 2025.",
      url: "https://global.oup.com/academic/product/the-maternal-contract-9780197808252?cc=us&lang=en&",
      label: "Oxford University Press",
    },
    {
      citation:
        "Crenzel, Emilio. \u201cThe disappeared: What we knew and what we still don\u2019t.\u201d Buenos Aires Herald, May 4, 2026.",
      url: "https://buenosairesherald.com/op-ed/the-disappeared-what-we-knew-and-what-we-still-dont",
      label: "Buenos Aires Herald",
    },
  ] as FoundationSource[],
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

export type ResearchContentBlock =
  | { type: "card"; title?: string; paragraphs: string[] }
  | {
      type: "story";
      title: string;
      paragraphs: string[];
      quote?: string;
      photo?: ResearchPhoto;
    }
  | { type: "stats"; title?: string; items: { value: string; label: string }[] }
  | { type: "bullets"; title?: string; intro?: string; items: string[] }
  | {
      type: "table";
      title?: string;
      attribution?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: "org";
      title: string;
      url: string;
      paragraphs: string[];
      bullets: string[];
    };

export type ResearchGroup = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  paragraphs: string[];
  layout?: "split" | "stacked";
  subsections?: ResearchSubsection[];
  blocks?: ResearchContentBlock[];
  collapsible?: ResearchSubsection;
  quote?: string;
  photos?: ResearchPhoto[];
  resourceLinks?: ResearchResourceLink[];
  placeholderLabel?: string;
  placeholderNote?: string;
};

const UKRAINE_PHOTO_BASE = "/images/research/ukraine";

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
      "Their transformation from individual grieving mothers into a coordinated human-rights movement exemplifies what scholars describe as \"contentious motherhood\"—the politicization of maternal identity under authoritarian rule (Feijóo & Nari, 1996; Bosco, 2006). The Mothers' founding nucleus—Azucena Villaflor, Esther Ballestrino de Careaga, María Ponce de Bianco, Josefina García de Noia, Mirta Acuña de Baravalle, and Hebe de Bonafini—constituted a heterogeneous but structurally coherent group whose activism redefined the boundaries of the possible under state terror.",
    ],
    collapsible: {
      title: "Founding mothers and contentious motherhood",
      paragraphs: [
        "The founding mothers of the Plaza de Mayo emerged from a political environment defined by the Argentine junta's systematic use of enforced disappearance as a mechanism of social control during the Proceso.",
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
    layout: "split",
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
    layout: "stacked",
    intro:
      "Mothers advocating after the October 7 attacks, with attention to families affected by abduction, loss, and political violence.",
    paragraphs: [
      "Following the October 7 attacks, dozens of mothers became the public faces of advocacy for hostages and missing family members through the Hostages and Missing Families Forum (#BringThemHomeNow). We approach this material with care and trauma-informed language, emphasizing advocacy, grief, and family-centered testimony rather than graphic detail.",
    ],
    quote:
      "\u201cOur voices are excluded from the rooms where decisions are made for us and our children.\u201d \u2014 Mothers Call",
    blocks: [
      {
        type: "card",
        title: "Hostage advocacy after October 7",
        paragraphs: [
          "The Hostages and Missing Families Forum has coordinated sustained public appeals for the safe return of abducted family members. Mothers have worn photographs of loved ones, addressed media and international audiences, and demanded government action—exemplifying maternal advocacy under conditions of abduction, uncertainty, and political violence.",
        ],
      },
      {
        type: "table",
        title: "Named advocates",
        attribution:
          "Compiled from correspondence with Dr. Edward Dunbar, UCLA. Status notes reflect publicly reported information as of the source correspondence.",
        columns: ["Mother", "Hostage / relationship", "Status"],
        rows: [
          ["Rachel Goldberg-Polin", "Son Hersh Goldberg-Polin", "Killed in captivity, Aug. 2024"],
          ["Shira Albag", "Daughter Liri Albag", "Soldier, released 2025"],
          ["Keren Schem", "Daughter Mia Schem", "Released Nov. 2023"],
          ["Simona Steinbrecher", "Daughter Agam Steinbrecher", "—"],
          ["Nitza Korngold", "Son Tal Shoham", "Released 2025"],
          ["Shelly Shem-Tov", "Son Omer Shem-Tov", "Released 2025"],
          ["Hagit Chen", "Son Itay Chen", "Killed in captivity"],
          ["Yael Adar", "Son Tamir Adar", "Body held in Gaza"],
          ["Varda Ben Baruch", "Grandson Edan Alexander", "—"],
          ["Niva Wenkert", "Daughter Agam Berger", "—"],
          ["Ruty Strum", "Sons Iair & Eitan Horn", "—"],
          ["Osnat Sharabi", "Brothers Eli & Yossi Sharabi", "—"],
        ],
      },
      {
        type: "org",
        title: "Parents Circle – Families Forum",
        url: "https://www.theparentscircle.org/en/about_eng-2/",
        paragraphs: [
          "The Parents Circle – Families Forum (PCFF) is a joint Israeli-Palestinian organization of over 800 bereaved Palestinians and Israelis who have lost an immediate family member to the ongoing conflict. Despite profound grief, members have chosen to transform their pain into a force for reconciliation, dialogue, and peace.",
          "Founded in 1995 by bereaved father Yitzhak Frankenthal, PCFF provides a space for bereaved Israelis and Palestinians to share personal stories, understand each other's narratives, and recognize the humanity of the \"other.\" Since October 7, 2023, the organization has adapted its educational and public programs for schools, communities, and international audiences.",
        ],
        bullets: [
          "Joint Palestinian-Israeli board and professional team; offices in Beit Jala and Ramat Ef'al",
          "Outreach through schools, communities, and media to amplify bereaved families' moral voices",
          "Vision of two nations living side by side in freedom, dignity, and security",
        ],
      },
      {
        type: "org",
        title: "Mothers Call",
        url: "https://mothers-call.org/",
        paragraphs: [
          "Mothers Call unites Palestinian and Israeli women from all walks of life in a shared human desire for peace, freedom, equality, rights, and security for children and future generations. The campaign grew from a partnership between Women of the Sun (Palestinian) and Women Wage Peace (Israeli), signed in 2022.",
          "The Barefoot Walk for Peace campaign has brought Palestinian and Israeli mothers together in public solidarity, demanding that leaders listen and return to negotiations with a determined commitment to a political solution within a limited timeframe.",
        ],
        bullets: [
          "Nominated for the 2025 Nobel Peace Prize; among finalists for the 2024 Sakharov Prize",
          "Recognized with the DVF Award for Women's Leadership and the Günter Wallraff Prize",
          "Pope Francis signed the Mothers' Call; featured in Time Magazine Women of the Year 2024",
        ],
      },
      {
        type: "org",
        title: "MADRE: Palestine",
        url: "https://www.madre.org/palestine/",
        paragraphs: [
          "MADRE partners with local Palestinian organizers to deliver emergency medical care, psychosocial support, fuel, food, hygiene supplies, and clean water as attacks devastate hospitals and communities. Its decades of work in Palestine and long-term relationships with local organizers allow relief to reach those most in need despite blockades and siege conditions.",
          "MADRE upholds that lasting peace and justice can only come from an end to occupation and apartheid policies that have deprived Palestinians for generations—and that have made peace impossible for Israelis and Palestinians alike.",
        ],
        bullets: [
          "81,000 children provided with mental health and psychological support services",
          "Over 300,000 people in Gaza provided with emergency response, triage, and referral services",
          "Resist In Body: Palestinian and Israeli midwives demand an end to occupation policies blocking reproductive healthcare in the West Bank",
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
    layout: "stacked",
    intro:
      "Mothers affected by war, displacement, child abduction, family separation, and political violence.",
    paragraphs: [
      "Ukrainian mothers advocate for the recognition, protection, and return of their children amid ongoing conflict—organizing family reunification efforts where official protection has failed.",
    ],
    quote:
      "\u201cIt\u2019s very important not to be strong alone.\u201d \u2014 Lidiya, Kharkiv (via HIAS)",
    blocks: [
      {
        type: "card",
        title: "Child abduction during the war",
        paragraphs: [
          "From the earliest months of Russia's full-scale invasion, international monitors documented the systematic removal of Ukrainian children from occupied territories. Investigations found coordinated state-run programs—not temporary wartime relocations—involving passport changes, illegal adoption, \"re-education,\" and obstruction of family reunification. In March 2023, the ICC issued arrest warrants citing evidence that deportations were systematic and directed at the highest levels of government.",
        ],
      },
      {
        type: "stats",
        title: "Scale of the tragedy (Office of the Prosecutor General of Ukraine)",
        items: [
          { value: "19,546", label: "Children verified as deported or forcibly relocated" },
          { value: "661", label: "Children killed as a result of armed aggression" },
          { value: "2,200+", label: "Children injured of varying severity" },
          { value: "1,876", label: "Children who have returned home" },
          { value: "5,363", label: "Criminal proceedings regarding crimes against children" },
          { value: "91", label: "States supporting the Dec. 3, 2025 UN General Assembly resolution" },
        ],
      },
      {
        type: "bullets",
        title: "What the UN resolution demands of Russia",
        intro:
          "On December 3, 2025, during the 11th emergency special session, the UN General Assembly adopted a resolution titled \"Return of Ukrainian Children,\" establishing a clear international legal framework for further action.",
        items: [
          "Immediately and unconditionally return all Ukrainian children that Russia has forcibly taken",
          "Cease practices of changing citizenship, illegal adoption, and transferring children to Russian families—actions defined by international law as attempts to destroy their national identity",
        ],
      },
      {
        type: "bullets",
        title: "International access to information",
        intro:
          "For the first time at the level of the UN Secretary-General, the necessity has been established to provide international access to information about illegally relocated children, including their whereabouts, health status, and conditions of detention.",
        items: [
          "Access to information is critically important—it is impossible to return a child without knowing where they are and in what condition",
          "Countries unequivocally recognize deportation of children as a war crime with no statute of limitations",
        ],
      },
      {
        type: "bullets",
        title: "Role of the Prosecutor's Office of Ukraine",
        items: [
          "Document the war crime of deportation, recording facts of relocation, changes of citizenship, and illegal adoption",
          "Form an evidentiary base submitted to the International Criminal Court and international partners",
          "Identify children and establish their routes of relocation, cooperating with foreign law enforcement agencies and international organizations",
          "Ensure international coordination, constantly raising the issue of deportations in meetings with international colleagues",
          "Create legal grounds for pressure on the Russian Federation, using the resolution as an international tool",
        ],
      },
      {
        type: "card",
        title: "Humanitarian recovery near the frontlines",
        paragraphs: [
          "Since the full-scale war broke out in February 2022, 5.6 million Ukrainians have been forced to flee Ukraine, and 3.7 million more have been uprooted within the country. Through it all, HIAS and local partners—funded in part by the German Federal Foreign Office—have supported displaced Ukrainians with counseling, art therapy, violence prevention, legal support, trauma interventions, economic assistance, and basic supplies near shifting frontlines.",
          "Partners include Power of a Woman, Angels of Salvation, and the Kherson Regional Center \"Successful Woman,\" helping displaced mothers and children find safety, recover from the effects of war, and begin to rebuild their lives.",
        ],
      },
      {
        type: "story",
        title: "Inna and Zhanna",
        paragraphs: [
          "Sisters from Kherson who have always faced challenges together. They first came to the Successful Woman safe space simply looking for a moment of rest—to charge their phones, regain calm, and speak with people who understood what they were going through.",
          "The safe space became much more than a temporary refuge. They joined group activities, completed a mental health care course, and enrolled in a sewing and tailoring program, imagining a future where they could open a small sewing studio together. When shelling reached their neighborhood, they evacuated in tears, having lost their home and belongings. With support from the project, they received a sewing machine and overlock equipment; Inna has already sewn her first garment and begun taking small orders—stitching hope back into their future.",
        ],
      },
      {
        type: "story",
        title: "Lidiya",
        paragraphs: [
          "On the first day of the war, 77-year-old Lidiya was in a hospital in Kharkiv with her granddaughter. She remembers sirens, ambulances, and fire trucks as panic spread through the city. Since early 2023, she has participated in trainings run by Angels of Salvation mobile teams, which travel across the Kharkiv region providing mental health support during the war.",
          "For Lidiya, the sessions are \"a breath of fresh air.\" Participants reflect, share experiences, and use creative tools such as drawing, writing, or poetry. Inspired by these activities, Lidiya has returned to writing poetry—a pastime she loved when she was younger. This support is especially vital for older adults with limited access to mental health services.",
        ],
        quote:
          "\u201cLife goes on. We\u2019ve learned to be strong. But it\u2019s very important not to be strong alone.\u201d",
        photo: {
          src: `${UKRAINE_PHOTO_BASE}/lidiya-art-therapy-angels-of-salvation.jpg`,
          alt: "Lidiya attends a group art therapy session led by HIAS partner Angels of Salvation in Ukraine.",
          caption:
            "Lidiya at a group art therapy session led by Angels of Salvation, funded by the German Federal Foreign Office (HIAS).",
        },
      },
      {
        type: "story",
        title: "Sofia",
        paragraphs: [
          "Fifteen-year-old Sofia left a violence prevention training with a new sense of clarity and confidence. The session was led by Power of a Woman (PoW), and it opened her eyes to issues she had only partially understood before—including harassment, online abuse, unhealthy friendships, and stereotypes passed from one generation to the next.",
          "Facilitators explained different forms of violence and the importance of personal boundaries and consent. When Sofia raised a question about self-worth, the team's psychologist held up a 200-hryvnia bill, crumpled it, stepped on it, and asked whether its value had changed. Sofia reflected: \"I will remember this example for the rest of my life… What matters is knowing who you are and valuing yourself.\"",
        ],
        photo: {
          src: `${UKRAINE_PHOTO_BASE}/sofia-violence-prevention-pow.jpg`,
          alt: "Sofia and classmates attend a violence prevention workshop led by HIAS partner Power of a Woman in Ukraine.",
          caption:
            "Sofia and classmates at a violence prevention workshop led by Power of a Woman, funded by the German Federal Foreign Office (HIAS).",
        },
      },
      {
        type: "story",
        title: "Anna*",
        paragraphs: [
          "A 40-year-old mother of three from the Roma community, Anna* has faced many obstacles throughout her life. She had limited opportunities to attend school and cannot read or write. Before the war, she found seasonal work helping small farmers, but many opportunities disappeared as businesses left the region.",
          "Power of a Woman provided essential supplies and access to trainings on preventing and responding to violence. The dignity kit she received significantly improved her access to hygiene products and living conditions. Through awareness sessions, she also learned about various forms of violence and steps to take when she or others encounter it. *Name changed for safety.",
        ],
        quote:
          "\u201cI felt cared for. We are usually ignored, and no one ever asks if we need support. We felt that we are not alone, that someone truly cares about us.\u201d",
        photo: {
          src: `${UKRAINE_PHOTO_BASE}/anna-violence-prevention-pow.jpg`,
          alt: "Anna attends a violence prevention workshop led by HIAS partner Power of a Woman in Ukraine.",
          caption:
            "Anna* at a violence prevention workshop led by Power of a Woman, funded by the German Federal Foreign Office (HIAS). Name changed for safety.",
        },
      },
      {
        type: "card",
        title: "Family reunification organizations",
        paragraphs: [
          "Save Ukraine organizes cross-border rescue missions, working directly with mothers and grandmothers who travel into Russia or occupied territories to recover their children. The Association of Families of Deported Children provides testimony and legal evidence to the ICC, UN, and Ukrainian prosecutors—functioning similarly to historical mothers' human-rights groups, adapted to wartime conditions.",
        ],
      },
    ],
    photos: [
      {
        src: `${UKRAINE_PHOTO_BASE}/hias-mobile-brigade-dnipro.png`,
        alt: "Ukrainian mothers and children at a HIAS mobile social assistance brigade in Dnipropetrovsk region.",
        caption:
          "Mothers and children at a HIAS mobile social assistance brigade in Dnipropetrovsk region.",
      },
      {
        src: `${UKRAINE_PHOTO_BASE}/lidiya-art-therapy-angels-of-salvation.jpg`,
        alt: "Lidiya attends a group art therapy session led by HIAS partner Angels of Salvation in Ukraine.",
        caption:
          "Lidiya at a group art therapy session led by Angels of Salvation (HIAS).",
      },
      {
        src: `${UKRAINE_PHOTO_BASE}/sofia-violence-prevention-pow.jpg`,
        alt: "Sofia and classmates attend a violence prevention workshop led by HIAS partner Power of a Woman in Ukraine.",
        caption:
          "Sofia and classmates at a violence prevention workshop led by Power of a Woman (HIAS).",
      },
      {
        src: `${UKRAINE_PHOTO_BASE}/anna-violence-prevention-pow.jpg`,
        alt: "Anna attends a violence prevention workshop led by HIAS partner Power of a Woman in Ukraine.",
        caption:
          "Anna* at a violence prevention workshop led by Power of a Woman (HIAS). Name changed for safety.",
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
  description: [
    "The study strategies seek to provide a greater understanding of forms of maternal advocacy found in cases of disappeared family members, including adult-aged children, by repressive political regimes.",
    "Consistent with Orozco Mendoza's (2026) observation, this maternal contract is an organic response of mothers and other caregivers to the persecution and frequent homicides of young persons with opposing political views to the standing regime. These efforts of advocacy and defiance are in response to regimes that abandon their care for marginalized members of society.",
    "This project uses content analysis of interviews with two sample populations of mothers whose children were victimized by political violence.",
  ],
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
      "The analysis is organized around several core constructs that guide how we read maternal testimony and advocacy language.",
    items: [
      {
        title: "Ambiguous loss",
        body: "Mothers and relatives often face disappearance, abduction, or political targeting without confirmation of death or return. The study examines how testimony expresses the uncertainty, searching, and suspended grief that characterize ambiguous loss amid state violence.",
      },
      {
        title: "Measurement of political trauma",
        body: "Political trauma shapes the contexts in which maternal advocacy emerges. Using LIWC and related linguistic measures, the analysis attends to how language reflects distress, loss, and the psychological impact of authoritarian control, armed conflict, and enforced disappearance.",
      },
      {
        title: "Forms of advocacy",
        body: "Maternal advocacy takes varied forms—public testimony, assembly, documentation, appeals to institutions, and collective organizing. The study compares how mothers and relatives give voice to loss, demand accountability, and sustain hope across distinct political and historical settings.",
      },
      {
        title: "Defining the identity of the maternal conflict",
        body: "Under authoritarian rule and wartime conditions, maternal identity can become politicized—a form of contentious motherhood in which caregiving and moral authority are mobilized for recognition, protection, and justice. The analysis examines how that identity is expressed and contested in advocacy language.",
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

export function getResearchGroupBySlug(slug: "madres" | "israel" | "ukraine"): ResearchGroup | undefined {
  const idMap = { madres: "madres", israel: "october7", ukraine: "ukraine" } as const;
  return researchGroups.find((g) => g.id === idMap[slug]);
}

export function getRegionPagerLinks(slug: "madres" | "israel" | "ukraine"): {
  prev?: RegionPageLink;
  next?: RegionPageLink;
} {
  const index = { madres: 0, israel: 1, ukraine: 2 }[slug];
  return {
    prev: index > 0 ? regionPages[index - 1] : undefined,
    next: index < regionPages.length - 1 ? regionPages[index + 1] : undefined,
  };
}
