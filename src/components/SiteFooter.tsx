import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/SocialIcon";
import { FOOTER_COLUMNS, FOOTER_SOCIALS } from "@/lib/nav";

const linkClass = "type-heading-xxs underline-offset-4 hover:underline";

/** Four ruled columns of condensed links, after the obama.org footer. */
export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="page-wrap pt-[3.75rem] lg:pt-[6.25rem]">
        <div className="grid gap-x-[var(--grid-gap)] gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="border-t border-white pt-4">
              <h2 className="type-label">{column.heading}</h2>
              <ul className="mt-8 flex flex-col gap-5 lg:mt-10">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} prefetch={false} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="border-t border-white pt-4">
            <h2 className="type-label">Stay Connected</h2>
            <ul className="mt-8 flex flex-col gap-5 lg:mt-10">
              {FOOTER_SOCIALS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    aria-label={social.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} inline-flex items-center gap-3`}
                  >
                    <SocialIcon name={social.icon} />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/40 pt-8 md:flex-row md:items-center md:justify-between lg:mt-24">
          <div className="flex items-center gap-5">
            <Link href="/" aria-label="FOSIS home" className="inline-block shrink-0">
              <Image src="/images/fosis-logo.png" alt="FOSIS" width={512} height={464} className="h-16 w-auto" />
            </Link>
            <div>
              <p className="type-heading-xxs">The Federation of Student Islamic Societies</p>
              <p className="type-label mt-1">Est. 1963</p>
            </div>
          </div>
          <p className="type-body-sm md:max-w-[28ch] md:text-right">
            The UK&apos;s national body representing Muslim students in higher and further education.
          </p>
        </div>

        <div className="flex flex-col gap-2 py-8 type-body-sm md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} FOSIS. All rights reserved. Made by{" "}
            <a
              href="https://mikhailwijanarko.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              @mikhailbuilds
            </a>
          </p>
          <p>Representing 350,000 Muslim Students Nationwide</p>
        </div>
      </div>
    </footer>
  );
}
