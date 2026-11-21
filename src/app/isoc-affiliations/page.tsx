import type { Metadata } from "next";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { ArrowLink, ButtonLink, PageIntro, SectionHead } from "@/components/ui";
import { isocsInGroup, REGIONS } from "@/lib/isocs";

export const metadata: Metadata = {
  title: "ISoc Affiliations",
  description:
    "Browse affiliated Islamic Societies across the UK and Ireland, or affiliate your ISoc with FOSIS for national representation, training and freshers packs.",
  alternates: { canonical: "/isoc-affiliations/" },
};

const AFFILIATE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScnDtkucoB_VUGZ007ef_FRI8DGPEPheB5Ur4wSC9CBGkU4XQ/viewform";

const BENEFITS = [
  {
    title: "National Representation",
    body: "Your ISoc’s voice becomes part of a national conversation. FOSIS advocates for affiliated societies at university, government, and media level.",
  },
  {
    title: "Training & Support",
    body: "Access our full committee training programme, Da’wah training, leadership development workshops, and ongoing advisory support throughout the year.",
  },
  {
    title: "Freshers Packs",
    body: "Receive thousands of FOSIS freshers packs each year to distribute at your Freshers Fairs, a proven tool for welcoming and connecting new Muslim students to your ISoc.",
  },
];

export default function IsocAffiliations() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="ISoc Affiliations">
        Browse 150+ affiliated Islamic Societies across the UK &amp; Ireland, or join the FOSIS family today.
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <div className="grid gap-8 bg-gold p-6 text-ink lg:grid-cols-12 lg:gap-x-[var(--grid-gap)] lg:p-10">
            <div className="lg:col-span-7">
              <p className="type-label">Open Now</p>
              <h2 className="type-heading-md mt-4">Ready to Affiliate Your ISoc?</h2>
              <p className="type-body-md mt-6 max-w-[40ch]">
                Join the UK’s largest Muslim student network. Affiliating gives your society access to FOSIS resources,
                events, training, and national representation.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:justify-end">
              <ButtonLink href={AFFILIATE_FORM} variant="ink" external>
                Affiliate Your ISoc Now
              </ButtonLink>
              <p className="type-label">Takes 5 minutes · Free to apply</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Our Network</SectionHead>
          <h2 className="type-heading-lg mb-4">Explore by Region</h2>
          <p className="type-body-md mb-12 max-w-[40ch] lg:mb-20">
            Pick a region to see the ISocs available there.
          </p>
          <ul className="grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region) => (
              <li key={region.key} className="flex flex-col gap-3 border-t border-ink py-6 lg:py-8">
                <h3 className="type-heading-sm">{region.label}</h3>
                <p className="type-label">{isocsInGroup(region.group).length} ISocs</p>
                <div className="pt-2">
                  <ArrowLink href={`/find-your-isoc/?region=${region.key}`}>
                    Browse ISocs<span className="sr-only"> in {region.label}</span>
                  </ArrowLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="page-wrap">
          <SectionHead>Directory</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">Find Your ISoc</h2>
          <p className="type-body-md mt-8 max-w-[40ch]">
            Search and filter through all FOSIS-affiliated Islamic Societies.
          </p>
          <div className="mt-8">
            <ButtonLink href="/find-your-isoc/" variant="navy">
              Open the Directory
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Join the Network</SectionHead>
          <h2 className="type-heading-lg max-w-[16ch]">Affiliate Your ISoc with FOSIS</h2>
          <p className="type-body-md mt-8 max-w-[50ch]">
            Affiliating with FOSIS means joining a national network that has been serving Muslim students since 1963. As
            an affiliated ISoc, your society gains direct access to FOSIS’s full suite of services, representation on a
            national level, and the collective strength of over 150 Islamic Societies working together across the UK and
            Ireland.
          </p>
        </div>
      </section>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>What You Get</SectionHead>
          <h2 className="type-heading-lg mb-12 lg:mb-20">Benefits of Affiliation</h2>
          <ul className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title} className="border-t border-ink py-6 lg:py-8">
                <h3 className="type-heading-sm">{benefit.title}</h3>
                <p className="type-body-md mt-4">{benefit.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ArrowLink href="/fosis-services/">Everything an affiliated ISoc receives</ArrowLink>
          </div>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
