import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

type ButtonLinkProps = {
  href: string;
  variant: "cobalt" | "ink" | "white" | "outline-ink" | "outline-white";
  children: ReactNode;
};

// Routes are not built yet, so prefetching would log 404s in the console.
export function ButtonLink({ href, variant, children }: ButtonLinkProps) {
  return (
    <Link href={href} prefetch={false} className={`btn btn-${variant}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} prefetch={false} className="arrow-link">
      {children}
      <ArrowIcon />
    </Link>
  );
}

/** Heavy bar plus a condensed section label, the obama.org section opener. */
export function SectionHead({ children }: { children: ReactNode }) {
  return (
    <div className="mb-10 lg:mb-16">
      <div aria-hidden="true" className="rule" />
      <p className="type-heading-sm mt-4">{children}</p>
    </div>
  );
}
