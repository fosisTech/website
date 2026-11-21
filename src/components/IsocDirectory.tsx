"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useId, useState } from "react";
import { ISOCS, REGIONS } from "@/lib/isocs";

const ALL = "all";

function initials(name: string): string {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((word) => /^[A-Z]/.test(word) && word !== "Islamic" && word !== "Society" && word !== "University" && word !== "of")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

/** Searchable, region-filtered grid of every affiliated ISoc. The region cards on /isoc-affiliations/ link here with ?region=. */
export function IsocDirectory() {
  const id = useId();
  const params = useSearchParams();
  const preset = REGIONS.find((region) => region.key === params.get("region"))?.group ?? ALL;
  const [group, setGroup] = useState(preset);
  const [query, setQuery] = useState("");

  const needle = query.trim().toLowerCase();
  const matches = ISOCS.filter(
    (isoc) =>
      (group === ALL || isoc.group === group) &&
      (needle === "" || `${isoc.name} ${isoc.institution}`.toLowerCase().includes(needle)),
  );

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
        <div className="relative border-b border-ink shadow-[0_1px_0_0_transparent] transition-shadow focus-within:shadow-[0_2px_0_0_#000] hover:shadow-[0_1px_0_0_#000] lg:col-span-5 lg:self-start">
          <label htmlFor={`${id}-search`} className="type-label block pt-2">
            Search ISocs
          </label>
          <input
            id={`${id}-search`}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="University or society name"
            className="type-heading-xxs w-full bg-transparent pt-3 pb-3 placeholder:text-grey"
          />
        </div>
        <fieldset className="lg:col-span-7">
          <legend className="type-label mb-3">Filter by Region</legend>
          <div className="flex flex-wrap gap-2">
            {[{ key: ALL, label: "All Regions", group: ALL }, ...REGIONS].map((region) => (
              <button
                key={region.key}
                type="button"
                aria-pressed={group === region.group}
                onClick={() => setGroup(region.group)}
                className={`type-cta border border-ink px-4 py-3 transition-colors ${group === region.group ? "bg-ink text-white" : "hover:bg-ink hover:text-white"}`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <p role="status" className="type-label mt-10 lg:mt-14">
        {matches.length} {matches.length === 1 ? "ISoc" : "ISocs"} found
      </p>

      {matches.length === 0 ? (
        <p className="type-body-md mt-6">No ISocs match your search. Try a different term or region.</p>
      ) : (
        <ul className="mt-6 grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-3">
          {matches.map((isoc) => (
            <li key={isoc.slug} className="group relative flex items-center gap-4 border-t border-ink py-5">
              {isoc.logo ? (
                <Image src={isoc.logo} alt="" role="presentation" width={64} height={64} className="size-16 shrink-0 object-cover" />
              ) : (
                <span
                  aria-hidden="true"
                  className="type-heading-xs flex size-16 shrink-0 items-center justify-center bg-navy text-white"
                >
                  {initials(isoc.name)}
                </span>
              )}
              <div className="min-w-0">
                <h3 className="type-heading-xxs">
                  <Link href={`/isoc/${isoc.slug}/`} prefetch={false} className="after:absolute after:inset-0 group-hover:underline underline-offset-4">
                    {isoc.name}
                  </Link>
                </h3>
                <p className="type-body-sm text-grey">
                  {isoc.institution} · {isoc.group}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
