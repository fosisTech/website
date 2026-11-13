import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS, FOOTER_SOCIALS } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="bg-cobalt text-white">
      <div className="page-wrap pt-[3.75rem]">
        <div className="grid gap-10 border-b border-white/40 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-[var(--grid-gap)]">
          <div>
            <Link href="/" aria-label="FOSIS home" className="inline-block">
              <Image src="/images/fosis-logo.png" alt="FOSIS" width={512} height={464} className="h-24 w-auto" />
            </Link>
            <p className="type-heading-xs mt-6">The Federation of Student Islamic Societies</p>
            <p className="type-label mt-2">Est. 1963</p>
            <p className="type-body-sm mt-6 max-w-sm text-white">
              The UK&apos;s national body representing Muslim students in higher and further education.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-[var(--grid-gap)]">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <h2 className="type-label mb-5">{column.heading}</h2>
                <ul className="flex flex-col gap-3">
                  {column.links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} prefetch={false} className="type-body-sm underline-offset-4 hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 border-b border-white/40 py-8">
          {FOOTER_SOCIALS.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 py-8 type-body-sm text-white md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} FOSIS. All rights reserved.</p>
          <p>Representing 350,000 Muslim Students Nationwide</p>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="type-heading-xl overflow-hidden whitespace-nowrap px-[var(--grid-margin)] pb-4 text-center uppercase !text-[48vw] !leading-[0.8] !tracking-[-0.03em] lg:!text-[46vw]"
      >
        FOSIS
      </p>
    </footer>
  );
}
