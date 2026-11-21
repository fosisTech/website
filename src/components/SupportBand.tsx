import { ButtonLink } from "@/components/ui";

/** Site-wide donate band. Sits directly above the footer on the same navy field, as on obama.org. */
export function SupportBand() {
  return (
    <section aria-labelledby="support-band-title" className="bg-navy pt-[3.75rem] pb-[3.75rem] text-white lg:pt-[6.25rem]">
      <div className="page-wrap">
        <h2 id="support-band-title" className="type-heading-xl uppercase">
          Support FOSIS
        </h2>
        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
          <div className="lg:col-span-6">
            <p className="type-body-md">
              Your generosity helps us serve over 350,000 Muslim students across every campus in the UK. Every
              contribution strengthens our advocacy, programmes, and community.
            </p>
            <div className="mt-8">
              <ButtonLink href="/support-us/" variant="white">
                Donate Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
