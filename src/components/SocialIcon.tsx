export type SocialIconName = "x" | "linkedin" | "instagram" | "youtube" | "calendar";

const FILLED: Record<"x" | "linkedin" | "youtube", { d: string; evenodd?: boolean }> = {
  x: {
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  linkedin: {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452z",
  },
  youtube: {
    d: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.76 2 12 2 12s0 3.24.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.4-4.8zM10 15V9l5.2 3z",
    evenodd: true,
  },
};

/** Small brand marks for the footer social links. Decorative: the link text carries the name. */
export function SocialIcon({ name }: { name: SocialIconName }) {
  const common = { "aria-hidden": true, viewBox: "0 0 24 24", width: 24, height: 24, className: "shrink-0" } as const;

  if (name === "instagram") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    );
  }
  const shape = FILLED[name];
  return (
    <svg {...common} fill="currentColor">
      <path d={shape.d} fillRule={shape.evenodd ? "evenodd" : undefined} />
    </svg>
  );
}
