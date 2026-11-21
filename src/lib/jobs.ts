import data from "@/content/jobs.json";

export type Job = {
  title: string;
  team: string;
  type: string;
  commitment: string;
  hours: string;
  apply: string;
  readMore: string | null;
  description: string[];
};

export type JobGroup = { name: string; roles: Job[] };

/** Generated from the scrape by tools/content/build-pages-data.py. */
export const JOB_GROUPS: JobGroup[] = data;
