/** Primary site navigation (order matters). */
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/assessment", label: "Assessment" },
  { href: "/therapy", label: "Therapy" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/fees", label: "Fees" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT_HREF = "/contact" as const;

/** Primary conversion CTA — same destination as Contact; distinct label for clarity. */
export const SCHEDULE_HREF = "/contact" as const;
