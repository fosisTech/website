"use client";

import { useId } from "react";
import { FormField } from "@/components/FormField";
import { ArrowIcon } from "@/components/ui";

const FIELDS = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name", required: true },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "university", label: "University (optional)", type: "text", autoComplete: "organization", required: false },
] as const;

/**
 * Newsletter signup in the obama.org "Be an Insider" pattern. The heavy rule sits above the section,
 * outside the paper-coloured panel. Field labels sit in the field and float up when it is used.
 */
export function NewsletterBand() {
  const id = useId();

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="bg-white pb-[6.25rem] md:pb-[7.5rem] lg:pb-[10rem]"
    >
      <div className="page-wrap">
        <div aria-hidden="true" className="rule" />
        <div className="mt-6 grid gap-10 bg-paper p-6 md:p-10 lg:mt-6 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)] lg:p-[3.125rem]">
          <div className="lg:col-span-6">
            <h2 id={`${id}-title`} className="type-heading-md">
              Be in the Loop
            </h2>
            <p className="type-body-md mt-6 max-w-[30ch]">
              Sign up for FOSIS news, event announcements, and resources for Muslim students across the UK and Ireland.
            </p>
          </div>
          <form className="flex flex-col gap-2 lg:col-span-6" onSubmit={(event) => event.preventDefault()}>
            {FIELDS.map((field) => (
              <FormField
                key={field.name}
                id={`${id}-${field.name}`}
                name={field.name}
                label={field.label}
                type={field.type}
                autoComplete={field.autoComplete}
                required={field.required}
              />
            ))}
            <p className="type-body-sm mt-4">
              By submitting your information, you are giving us permission to email you. You may unsubscribe at any
              time.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
              <label className="type-label flex items-center gap-4">
                <input type="checkbox" name="consent" required className="size-6 shrink-0" />
                Yes, I agree to receive emails from FOSIS
              </label>
              <button type="submit" className="btn btn-outline-ink">
                Submit
                <ArrowIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
