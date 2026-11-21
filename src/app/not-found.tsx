import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section className="bg-mist">
        <div className="page-wrap pt-[calc(var(--nav-height)+3.75rem)] pb-[3.75rem] lg:pb-[6.25rem]">
          <div aria-hidden="true" className="rule" />
          <h1 className="type-heading-xl mt-6 lg:mt-8">Page not found</h1>
          <p className="type-body-lg mt-8 max-w-[30ch] lg:mt-12">
            This page is still being built, or the link has moved. Try one of these instead.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-12">
            <ButtonLink href="/" variant="navy">
              Back to Home
            </ButtonLink>
            <ButtonLink href="/about-us/" variant="outline-ink">
              About FOSIS
            </ButtonLink>
            <ButtonLink href="/articles/" variant="outline-ink">
              Read Articles
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[6.25rem] md:pb-[7.5rem] lg:pb-[10rem]">
        <div className="page-wrap pt-[3.75rem] lg:pt-[6.25rem]">
          <div aria-hidden="true" className="rule" />
          <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <h2 className="type-heading-md lg:col-span-5">Can&apos;t find what you need?</h2>
            <div className="lg:col-span-7">
              <p className="type-body-md max-w-[34ch]">
                Tell us what you were looking for and we will point you to the right place.
              </p>
              <a
                href="mailto:info@fosis.org.uk"
                className="type-heading-sm mt-6 block break-words underline underline-offset-4"
              >
                info@fosis.org.uk
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
