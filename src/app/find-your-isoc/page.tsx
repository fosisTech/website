import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { IsocDirectory } from "@/components/IsocDirectory";
import { PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Find Your ISoc",
  description:
    "Search the directory of FOSIS-affiliated Islamic Societies across universities and colleges in the UK and Ireland, filtered by region.",
  alternates: { canonical: "/find-your-isoc/" },
};

const REGION_COMMITTEES = [
  "Scotland",
  "Ireland",
  "North",
  "Wales & West",
  "Midlands",
  "London & South",
  "Further Education",
];

export default function FindYourIsoc() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Find Your ISoc" />

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-6">
              <h2 className="type-heading-lg">Your ISoc Is Waiting For You</h2>
              <p className="type-body-md mt-8 max-w-[44ch]">
                Wherever you study in the UK or Ireland, there is almost certainly an Islamic Society on your campus.
                FOSIS affiliates over 150 ISocs across universities and colleges from Edinburgh to Exeter, and our
                network spans 7 regional committees covering every corner of the country. Your ISoc is your home on
                campus, a community, a support network, and a space to grow your faith alongside your studies.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden lg:col-span-5 lg:col-start-8">
              <Image
                src="/images/home/crowd.jpg"
                alt="Muslim students gathered at a FOSIS event"
                fill
                sizes="(min-width: 1200px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>Our Regions</SectionHead>
          <h2 className="type-heading-lg max-w-[16ch]">FOSIS Operates Across 7 Regions</h2>
          <p className="type-body-md mt-8 max-w-[48ch]">
            In addition to the National Executive Committee, FOSIS has regional committees that organise local events,
            provide on-the-ground support, and ensure Muslim students across the country feel connected to the wider
            FOSIS community.
          </p>
          <ol className="mt-12 grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {REGION_COMMITTEES.map((region, index) => (
              <li key={region} className="border-t border-white/40 py-5">
                <p className="type-label">Region {String(index + 1).padStart(2, "0")}</p>
                <h3 className="type-heading-xs mt-2">{region}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="directory" className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Search ISocs</SectionHead>
          <Suspense fallback={null}>
            <IsocDirectory />
          </Suspense>
        </div>
      </section>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>No ISoc at Your University?</SectionHead>
          <h2 className="type-heading-md max-w-[16ch]">Can’t Find Yours?</h2>
          <p className="type-body-md mt-8 max-w-[50ch]">
            If your university doesn’t yet have an affiliated ISoc, or you want to start one, FOSIS can help. We provide
            everything you need to establish and build a society on your campus. Get in touch at{" "}
            <a href="mailto:info@fosis.org.uk" className="font-bold underline underline-offset-4">
              info@fosis.org.uk
            </a>{" "}
            and our team will guide you through the process.
          </p>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
