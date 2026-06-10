export const siteConfig = {
  name: "Pacific Psychological Associates",
  shortName: "PPA",
  /** SEO / hero — greater LA + office location */
  regionLabel: "Los Angeles",
  officeCity: "El Segundo",
  heroHeadline: "Neuropsychological assessment and therapy in Greater Los Angeles",
  heroSubheadline:
    "Evidence-informed assessment and psychotherapy for adults seeking diagnostic clarity, treatment planning, and support for cognitive, emotional, and behavioral concerns.",
  tagline:
    "Adult neuropsychological assessment and psychotherapy in El Segundo and greater Los Angeles.",
  footerBlurb:
    "Private practice neuropsychology and therapy grounded in assessment science, clear communication, and ethical standards of care.",
  // PLACEHOLDERS — replace all of the following with verified practice details before launch.
  phoneDisplay: "(310) 555-0100", // [Insert verified phone number]
  phoneTel: "+13105550100", // [Insert verified phone number]
  email: "office@pacificpsychologicalassociates.example", // [Insert verified office email]
  address: {
    // [Insert verified address]
    line1: "123 Example Street, Suite 100",
    city: "El Segundo",
    state: "CA",
    zip: "90245",
  },
  hours: "Monday–Friday, 9:00 a.m.–5:00 p.m. (update as needed)", // [Insert verified hours]
  mapSearchQuery: "El Segundo CA 90245",
} as const;

export function fullAddress(): string {
  const { line1, city, state, zip } = siteConfig.address;
  return `${line1}, ${city}, ${state} ${zip}`;
}

export function googleMapsUrl(): string {
  const q = encodeURIComponent(
    `${siteConfig.name} ${siteConfig.address.line1} ${siteConfig.address.city} ${siteConfig.address.state} ${siteConfig.address.zip}`,
  );
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
