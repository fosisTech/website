"use client";

import { useId } from "react";
import { FormField } from "@/components/FormField";
import { ArrowIcon } from "@/components/ui";

export type MailtoFormField = {
  name: string;
  label: string;
  /** "radio" needs `options`. "checkbox" is a single consent box whose label is `label`. */
  type?: "text" | "email" | "tel" | "radio" | "checkbox";
  options?: string[];
  autoComplete?: string;
  required?: boolean;
  multiline?: boolean;
};

type MailtoFormProps = {
  to: string;
  subject: string;
  fields: MailtoFormField[];
  submitLabel: string;
};

/**
 * Enquiry form with no mail backend yet: Send opens the visitor's email app with every answer
 * written into the message, addressed to `to`.
 */
export function MailtoForm({ to, subject, fields, submitLabel }: MailtoFormProps) {
  const id = useId();

  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = fields
      .map((field) => {
        const value = data.get(field.name);
        return `${field.label}: ${field.type === "checkbox" ? (value ? "Yes" : "No") : String(value ?? "").trim()}`;
      })
      .join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={send}
      // Without JavaScript the browser posts the answers into an email draft instead of putting them in the URL.
      action={`mailto:${to}?subject=${encodeURIComponent(subject)}`}
      method="post"
      encType="text/plain"
      className="flex flex-col gap-2"
    >
      {fields.map((field) => {
        if (field.type === "radio") {
          return (
            <fieldset key={field.name} className="border-b border-ink py-4">
              <legend className="type-heading-xxs mb-3">{field.label}</legend>
              <div className="type-body-md flex flex-wrap gap-6">
                {field.options?.map((option) => (
                  <label key={option} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name={field.name}
                      value={option}
                      required={field.required}
                      className="size-5 appearance-none rounded-full border border-ink checked:bg-ink checked:shadow-[inset_0_0_0_4px_#fff]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          );
        }
        if (field.type === "checkbox") {
          return (
            <label key={field.name} className="type-body-sm flex cursor-pointer items-start gap-3 py-4">
              <input
                type="checkbox"
                name={field.name}
                required={field.required}
                className="mt-1 size-5 shrink-0 appearance-none border border-ink checked:bg-ink"
              />
              {field.label}
            </label>
          );
        }
        return (
          <FormField
            key={field.name}
            id={`${id}-${field.name}`}
            name={field.name}
            label={field.label}
            type={field.type}
            autoComplete={field.autoComplete}
            required={field.required}
            multiline={field.multiline}
          />
        );
      })}
      <div className="mt-6 flex">
        <button type="submit" className="btn btn-navy">
          {submitLabel}
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
