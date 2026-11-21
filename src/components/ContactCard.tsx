"use client";

import { useId } from "react";
import { FormField } from "@/components/FormField";
import { ArrowIcon } from "@/components/ui";

const CONTACT_EMAIL = "info@fosis.org.uk";

/**
 * Contact form card. There is no mail backend yet, so Send opens the visitor's email app with the
 * message filled in and addressed to the general enquiries inbox.
 */
export function ContactCard() {
  const id = useId();

  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Website enquiry from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={send} className="flex flex-col gap-2 bg-paper p-6 text-ink lg:col-span-7 lg:p-10">
      <p className="type-label">Send us a message</p>
      <div className="mt-4 grid gap-x-[var(--grid-gap)] gap-y-2 md:grid-cols-2">
        <FormField id={`${id}-name`} name="name" label="Name" autoComplete="name" required />
        <FormField id={`${id}-email`} name="email" label="Email" type="email" autoComplete="email" required />
      </div>
      <FormField id={`${id}-message`} name="message" label="How can we help?" multiline required />
      <div className="mt-6 flex justify-end">
        <button type="submit" className="btn btn-navy">
          Send
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
