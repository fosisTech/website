import Image from "next/image";
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
  variant: "navy" | "ink" | "white" | "outline-ink" | "outline-white";
  children: ReactNode;
  /** Off-site link: opens in a new tab. */
  external?: boolean;
};

// Routes are not built yet, so prefetching would log 404s in the console.
export function ButtonLink({ href, variant, children, external = false }: ButtonLinkProps) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`btn btn-${variant}`}>
        {children}
        <ArrowIcon />
      </a>
    );
  }
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

/** Top of an inner page: large condensed title and a serif lede, clear of the fixed header. With `image`, a wide photo follows the title (the obama.org programs pattern). `tone="gold"` puts the title on a colour field instead. */
export function PageIntro({
  title,
  children,
  size = "xl",
  image,
  tone = "white",
  lede = "lg",
}: {
  title: ReactNode;
  children?: ReactNode;
  /** "lg" for titles whose longest word would overflow a phone at the xl size. */
  size?: "xl" | "lg";
  image?: { src: string; position?: string };
  tone?: "white" | "gold";
  /** "md" for a lede that runs to a full paragraph. */
  lede?: "lg" | "md";
}) {
  return (
    <section className={tone === "gold" ? "bg-gold text-ink" : "bg-white"}>
      <div className="page-wrap pt-[calc(var(--nav-height)+3.75rem)] pb-[3.75rem] lg:pb-20">
        <h1 className={size === "lg" ? "type-heading-lg" : "type-heading-xl"}>{title}</h1>
        {children && (
          <p className={lede === "md" ? "type-body-md mt-8 max-w-[50ch] lg:mt-12" : "type-body-lg mt-8 max-w-[30ch] lg:mt-12"}>
            {children}
          </p>
        )}
        {image && (
          <div className="relative mt-12 aspect-[3/2] overflow-hidden md:aspect-[2/1] lg:mt-20 lg:aspect-[21/9]">
            <Image
              src={image.src}
              alt=""
              role="presentation"
              fill
              priority
              sizes="(min-width: 1920px) 1800px, 100vw"
              className={`object-cover ${image.position ?? "object-center"}`}
            />
          </div>
        )}
      </div>
    </section>
  );
}
