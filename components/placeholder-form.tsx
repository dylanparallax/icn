"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type Field = {
  name: string;
  label: string;
  kind?: "text" | "email" | "textarea" | "select";
  options?: readonly string[];
  autoComplete?: string;
};

type PlaceholderFormProps = {
  id: string;
  fields: readonly Field[];
  submitLabel: string;
};

const inputClass =
  "w-full border border-line bg-cream px-4 py-3 text-lg font-light text-brown outline-none focus:border-brown";

export function PlaceholderForm({ id, fields, submitLabel }: PlaceholderFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field.name, field.options?.[0] ?? ""])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [held, setHeld] = useState(false);

  function update(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setHeld(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};

    for (const field of fields) {
      if (field.kind === "select") continue;
      const value = (values[field.name] ?? "").trim();
      if (field.kind === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        next[field.name] = "Please add a valid email address.";
      } else if (field.kind === "textarea" && value.length < 10) {
        next[field.name] = "Please add a short message, at least a sentence.";
      } else if (field.kind !== "email" && field.kind !== "textarea" && value.length < 2) {
        next[field.name] = "Please fill this in.";
      }
    }

    setErrors(next);
    setHeld(Object.keys(next).length === 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex max-w-xl flex-col gap-6">
      {fields.map((field) => {
        const fieldId = `${id}-${field.name}`;
        const error = errors[field.name];
        const kind = field.kind ?? "text";

        return (
          <Field key={field.name} label={field.label} htmlFor={fieldId} error={error}>
            {kind === "textarea" ? (
              <textarea
                id={fieldId}
                name={field.name}
                rows={6}
                value={values[field.name] ?? ""}
                onChange={(event) => update(field.name, event.target.value)}
                className={inputClass}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${fieldId}-error` : undefined}
              />
            ) : kind === "select" ? (
              <select
                id={fieldId}
                name={field.name}
                value={values[field.name] ?? ""}
                onChange={(event) => update(field.name, event.target.value)}
                className={inputClass}
              >
                {field.options?.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                id={fieldId}
                name={field.name}
                type={kind === "email" ? "email" : "text"}
                autoComplete={field.autoComplete}
                value={values[field.name] ?? ""}
                onChange={(event) => update(field.name, event.target.value)}
                className={inputClass}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${fieldId}-error` : undefined}
              />
            )}
          </Field>
        );
      })}
      <button
        type="submit"
        className="inline-flex h-[54px] w-fit items-center gap-6 bg-teal px-6 font-mono text-sm text-brown uppercase"
      >
        {submitLabel}
        <img src="/brand/arrow-dark.svg" width={18} height={18} alt="" />
      </button>
      <p className="text-sm leading-[1.6] font-light text-ink">
        This form is a placeholder for a HubSpot form. It does not send or store a message.
      </p>
      {held ? (
        <p role="status" className="text-sm leading-[1.6] text-gold">
          Nothing was sent. The HubSpot form will go here later.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-mono text-sm uppercase">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-sm text-gold" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
