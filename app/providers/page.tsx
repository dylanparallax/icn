import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { stages } from "@/lib/content";
import { portalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "For providers — ICONUS",
  description:
    "Bring ICONUS to your practice. A focused genetic panel, results in both portals, and a plan you guide.",
};

export default function ProvidersPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="For providers" title="From first conversation to lasting change.">
        ICONUS isn’t a one-time test. It’s the foundation of a journey you guide, from understanding
        your patient’s biology to building a plan.
      </PageIntro>
      <section className="flex flex-col items-start gap-6 px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <ButtonLink href="/contact">Talk with ICONUS</ButtonLink>
          <ButtonLink href={portalUrl} variant="outline">
            Portal login
          </ButtonLink>
        </div>
        <ol className="mt-8 w-full max-w-3xl">
          {stages.map((stage) => (
            <li key={stage.number} className="flex gap-6 border-t border-line py-6">
              <p className="w-10 shrink-0 text-[32px] leading-none font-medium text-gold">{stage.number}</p>
              <div>
                <p className="font-mono text-sm text-gold uppercase">{stage.label}</p>
                <h2 className="mt-3 text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
                  {stage.title}
                </h2>
                <p className="mt-3 text-lg leading-[1.6] font-light text-ink sm:text-2xl">{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
