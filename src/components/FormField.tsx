type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  required?: boolean;
  /** Renders a textarea that starts one line tall and grows as the visitor types. */
  multiline?: boolean;
};

const CONTROL = "peer type-heading-xxs w-full bg-transparent pt-7 pb-3 placeholder-transparent";
const LABEL =
  "type-heading-xxs pointer-events-none absolute top-5 left-0 origin-left transition-transform peer-focus:-translate-y-4 peer-focus:scale-[0.7] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-[0.7]";

/** Underlined field whose label sits inside it and floats up once the field is used (obama.org form style). */
export function FormField({ id, name, label, type = "text", autoComplete, required, multiline }: FormFieldProps) {
  return (
    <div className="relative border-b border-ink shadow-[0_1px_0_0_transparent] transition-shadow focus-within:shadow-[0_2px_0_0_#000] hover:shadow-[0_1px_0_0_#000]">
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={1}
          required={required}
          autoComplete={autoComplete}
          placeholder=" "
          className={`${CONTROL} field-sizing-content block resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder=" "
          className={CONTROL}
        />
      )}
      <label htmlFor={id} className={LABEL}>
        {label}
      </label>
    </div>
  );
}
