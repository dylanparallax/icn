"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { contactEmail } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  role: string;
  message: string;
};

const empty: Fields = { name: "", email: "", role: "Patient", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate(values: Fields) {
    const next: Partial<Fields> = {};
    if (values.name.trim().length < 2) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please add a valid email address.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Please add a short message, at least a sentence.";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = `ICONUS note from ${fields.name.trim()}`;
    const body = `Name: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\nI am a: ${fields.role}\n\n${fields.message.trim()}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex max-w-xl flex-col gap-6">
      <Field label="Name" error={errors.name} htmlFor="contact-name">
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => update("name", event.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
      </Field>
      <Field label="Email" error={errors.email} htmlFor="contact-email">
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(event) => update("email", event.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
      </Field>
      <Field label="I am a" htmlFor="contact-role">
        <select
          id="contact-role"
          name="role"
          value={fields.role}
          onChange={(event) => update("role", event.target.value)}
          className={inputClass}
        >
          <option>Patient</option>
          <option>Provider</option>
          <option>Someone else</option>
        </select>
      </Field>
      <Field label="Message" error={errors.message} htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
      </Field>
      <button
        type="submit"
        className="inline-flex h-[54px] w-fit items-center gap-6 bg-teal px-6 font-mono text-sm text-brown uppercase"
      >
        Send message
        <img src="/brand/arrow-dark.svg" width={18} height={18} alt="" />
      </button>
      <p className="text-sm leading-[1.6] font-light text-ink">
        Sending opens your email app with this note addressed to {contactEmail}. This website does
        not store the message.
      </p>
    </form>
  );
}

const inputClass =
  "w-full border border-line bg-cream px-4 py-3 text-lg font-light text-brown outline-none focus:border-brown";

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
