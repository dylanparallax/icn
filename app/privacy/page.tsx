import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { contactEmail, portalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy — ICONUS",
  description: "How this ICONUS website handles the information you share with it.",
};

const sections = [
  {
    title: "This website",
    body: "These pages introduce ICONUS test panels. They do not store genetic results, kit orders, or portal accounts. Those live in the portal at my.iconus.org, which has its own sign-in.",
  },
  {
    title: "What you send us",
    body: "The contact form opens your email app. The message is not saved on this website. If you email us, we use that note to reply. We do not sell that information.",
  },
  {
    title: "The quiz",
    body: "Quiz answers stay in your browser for that visit. They are used only to suggest a panel. They are not a medical record and they are not sent to ICONUS unless you later include them in a message.",
  },
  {
    title: "The portal",
    body: "When you sign in at my.iconus.org, that site handles your account and any results. This marketing site does not read that information.",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Privacy" title="What this site keeps.">
        A plain-language note about this website. It is not a medical record policy and it is not a
        substitute for the terms of the portal.
      </PageIntro>
      <article className="flex max-w-3xl flex-col gap-12 px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        {sections.map((section) => (
          <section key={section.title} className="border-t border-line pt-8">
            <h2 className="text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
              {section.title}
            </h2>
            <p className="mt-4 text-lg leading-[1.6] font-light text-ink sm:text-2xl">{section.body}</p>
          </section>
        ))}
        <p className="text-lg leading-[1.6] font-light text-ink">
          Questions about this page can go to{" "}
          <a href={`mailto:${contactEmail}`} className="underline hover:text-gold">
            {contactEmail}
          </a>
          . To reach your results, visit{" "}
          <a href={portalUrl} className="underline hover:text-gold">
            my.iconus.org
          </a>
          . See also the{" "}
          <Link href="/terms" className="underline hover:text-gold">
            terms
          </Link>
          .
        </p>
      </article>
    </PageShell>
  );
}
