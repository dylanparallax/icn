import type { Metadata } from "next";
import { PlaceholderForm } from "@/components/placeholder-form";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Provider contact — ICONUS",
  description: "Ask ICONUS about bulk kits or a white-label version.",
};

const fields = [
  { name: "name", label: "Name", autoComplete: "name" },
  { name: "organization", label: "Practice or organization", autoComplete: "organization" },
  { name: "email", label: "Email", kind: "email", autoComplete: "email" },
  {
    name: "interest",
    label: "I'm asking about",
    kind: "select",
    options: ["Bulk kits", "White label", "Bulk kits and white label"],
  },
  { name: "message", label: "Message", kind: "textarea" },
] as const;

export default function ProviderContactPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="For providers" title="Bulk kits and white label.">
        Ask about ordering kits in volume, or about a white-label version of ICONUS for your
        practice or group.
      </PageIntro>
      <section className="grid gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_280px] lg:px-16 lg:py-24">
        <PlaceholderForm id="provider-contact" fields={fields} submitLabel="Request information" />
        <aside className="flex flex-col gap-8 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <div>
            <p className="font-mono text-sm text-gold uppercase">Email</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 block text-lg font-light hover:text-gold"
            >
              {contactEmail}
            </a>
            <p className="mt-3 text-sm leading-[1.6] font-light text-ink">
              Email is the way to reach ICONUS until this form is connected.
            </p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
