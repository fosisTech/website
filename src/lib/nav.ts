export type NavLeaf = { label: string; href: string };
export type NavItem = NavLeaf & { children?: NavLeaf[] };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "What's FOSIS?",
    href: "/about-us/",
    children: [
      { label: "About Us", href: "/about-us/" },
      { label: "FOSIS History", href: "/fosis-history/" },
    ],
  },
  {
    label: "For Students",
    href: "#",
    children: [
      { label: "Find Your ISoc", href: "/find-your-isoc/" },
      { label: "Events", href: "/events/" },
      { label: "Career Help", href: "/ihsaan-careers/" },
      { label: "FOSIS Report", href: "/fosis-report/" },
      { label: "Islamic Resources", href: "/islamic-resources/" },
    ],
  },
  {
    label: "For ISocs",
    href: "#",
    children: [
      { label: "ISoc Affiliations", href: "/isoc-affiliations/" },
      { label: "ISoc Resources", href: "/isoc-essentials/" },
      { label: "FOSIS Services", href: "/fosis-services/" },
      { label: "Events", href: "/events/" },
    ],
  },
  {
    label: "For Student Unions",
    href: "#",
    children: [
      { label: "Book Islamophobia Training", href: "/book-islamophobia-training/" },
      { label: "Sabbatical Officer Network", href: "/sabbatical-officer-network/" },
    ],
  },
  { label: "Articles", href: "/articles/" },
  { label: "Explore FOSIS Projects", href: "/join-team-fosis/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Support Us", href: "/support-us/" },
];

export const FOOTER_COLUMNS: { heading: string; links: NavLeaf[] }[] = [
  {
    heading: "For Students",
    links: [
      { label: "Career Help", href: "/ihsaan-careers/" },
      { label: "Islamic Resources", href: "/islamic-resources/" },
      { label: "FOSIS Report", href: "/fosis-report/" },
    ],
  },
  {
    heading: "For ISocs",
    links: [
      { label: "ISoc Affiliations", href: "/isoc-affiliations/" },
      { label: "FOSIS Services", href: "/fosis-services/" },
      { label: "ISoc Resources", href: "/isoc-essentials/" },
    ],
  },
  {
    heading: "Organisation",
    links: [
      { label: "About Us", href: "/about-us/" },
      { label: "Explore Our Projects", href: "/join-team-fosis/" },
      { label: "Events", href: "/events/" },
      { label: "Articles", href: "/articles/" },
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Support Us", href: "/support-us/" },
    ],
  },
];

export const FOOTER_SOCIALS: { label: string; ariaLabel: string; href: string }[] = [
  { label: "X / Twitter", ariaLabel: "FOSIS on X (Twitter)", href: "https://x.com/fosischannel" },
  {
    label: "LinkedIn",
    ariaLabel: "FOSIS on LinkedIn",
    href: "https://uk.linkedin.com/company/federation-of-student-islamic-societies",
  },
  { label: "Events (Luma)", ariaLabel: "FOSIS on Luma", href: "https://luma.com/calendar/cal-U05Qd0a3Ri06jpT" },
];
