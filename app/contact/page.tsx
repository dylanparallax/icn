import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { contactEmail, portalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — ICONUS",
  description: "Send a note to ICONUS about a kit, a panel, or bringing testing to your practice.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Contact" title="Send a note.">
        Ask about a panel, a kit, or bringing ICONUS to your practice. For results, sign in to the
        portal.
      </PageIntro>
      <section className="grid gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_280px] lg:px-16 lg:py-24">
        <ContactForm />
        <aside className="flex flex-col gap-8 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <div>
            <p className="font-mono text-sm text-gold uppercase">Email</p>
            <a href={`mailto:${contactEmail}`} className="mt-3 block text-lg font-light hover:text-gold">
              {contactEmail}
            </a>
          </div>
          <div>
            <p className="font-mono text-sm text-gold uppercase">Portal</p>
            <a href={portalUrl} className="mt-3 block text-lg font-light hover:text-gold">
              my.iconus.org
            </a>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
