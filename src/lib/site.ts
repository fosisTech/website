export const SITE_URL = "https://fosis.org.uk";
export const SITE_NAME = "FOSIS";
export const SITE_LEGAL_NAME = "Federation of Student Islamic Societies";
export const SITE_DESCRIPTION =
  "The UK's national voice for Muslim students in higher education, connecting over 100 Islamic Societies and 350,000 students across every campus in the country.";

export const SITE_SAME_AS = [
  "https://x.com/fosischannel",
  "https://uk.linkedin.com/company/federation-of-student-islamic-societies",
];

/** Canonical, indexable paths. Add each route here as it ships. */
export const SITEMAP_PATHS = ["/"];

/**
 * Search engines may index only the production deployment. Every other
 * deployment (local, preview, staging) is disallowed and marked noindex.
 */
export function isIndexable(): boolean {
  return process.env.NEXT_PUBLIC_APP_URL === SITE_URL;
}
