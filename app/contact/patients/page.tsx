import type { Metadata } from "next";
import { PlaceholderForm } from "@/components/placeholder-form";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { contactEmail, portalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient contact — ICONUS",
  description: "Questions about an ICONUS kit, a panel, or results.",
};

const fields = [
  { name: "name", label: "Name", autoComplete: "name" },
  { name: "email", label: "Email", kind: "email", autoComplete: "email" },
  { name: "message", label: "Message", kind: "textarea" },
] as const;

export default function PatientContactPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="For patients" title="Contact ICONUS.">
        Ask about a kit, a panel, or results. To register a kit or sign in, use the patient portal.
      </PageIntro>
      <section className="grid gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_280px] lg:px-16 lg:py-24">
        <PlaceholderForm id="patient-contact" fields={fields} submitLabel="Send message" />
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
          <div>
            <p className="font-mono text-sm text-gold uppercase">Register or sign in</p>
            <a href={portalUrl} className="mt-3 block text-lg font-light hover:text-gold">
              my.iconus.org
            </a>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
