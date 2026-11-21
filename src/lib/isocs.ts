import data from "@/content/isocs.json";

export type IsocLink = { label: string; href: string };

export type Isoc = {
  slug: string;
  name: string;
  institution: string;
  /** Directory grouping used by the seven filters on /find-your-isoc/. */
  group: string;
  /** Finer region recorded on the profile page. */
  region: string;
  logo: string | null;
  links: IsocLink[];
};

/** Alphabetical. Generated from the scrape by tools/content/build-isocs.py. */
export const ISOCS: Isoc[] = data;

/** Directory filter groups, with the query key the region cards on /isoc-affiliations/ link with. */
export const REGIONS = [
  { key: "north", label: "North" },
  { key: "midlands", label: "Midlands" },
  { key: "south", label: "South" },
  { key: "london", label: "London" },
  { key: "wales", label: "Wales & West", group: "Wales and West" },
  { key: "scotland", label: "Scotland" },
  { key: "ireland", label: "Ireland" },
].map((region) => ({ ...region, group: region.group ?? region.label }));

export function isocsInGroup(group: string): Isoc[] {
  return ISOCS.filter((isoc) => isoc.group === group);
}

export function findIsoc(slug: string): Isoc | undefined {
  return ISOCS.find((isoc) => isoc.slug === slug);
}
