import { ButtonLink } from "@/components/ui";

/** The "Have a question or want to work with us?" band that closes most inner pages on the old site. */
export function GetInvolvedBand() {
  return (
    <section aria-labelledby="get-involved-title" className="bg-mist">
      <div className="page-wrap py-[3.75rem] md:py-20 lg:py-[7.5rem]">
        <h2 id="get-involved-title" className="type-heading-lg max-w-[16ch]">
          Have a question or want to work with us?
        </h2>
        <div className="mt-8 flex flex-wrap gap-4 lg:mt-12">
          <ButtonLink href="/contact-us/" variant="navy">
            Contact Us
          </ButtonLink>
          <ButtonLink href="/about-us/" variant="outline-ink">
            About FOSIS
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
