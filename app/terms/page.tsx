import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms — ICONUS",
  description: "How to use the ICONUS website, quiz, and panel descriptions.",
};

const sections = [
  {
    title: "Information, not a diagnosis",
    body: "Panel descriptions and the quiz are here to help you start a conversation. They do not diagnose, treat, or tell you which test to order. That decision belongs with you and your provider.",
  },
  {
    title: "No order is placed here",
    body: "Browsing this website, taking the quiz, or opening a panel page does not order a kit. A kit follows a conversation with your provider.",
  },
  {
    title: "The portal is separate",
    body: "Signing in, viewing results, and managing an account happen at my.iconus.org. Those steps follow the portal’s own terms, not only this page.",
  },
  {
    title: "Using the site",
    body: "You may read these pages and share links to them. Please don’t misuse the site, attempt to break it, or present the quiz result as medical advice.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Terms" title="How to use this site.">
        These terms cover the ICONUS marketing pages. They are written in plain language.
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
          Questions can go to{" "}
          <a href={`mailto:${contactEmail}`} className="underline hover:text-gold">
            {contactEmail}
          </a>
          . Read the{" "}
          <Link href="/privacy" className="underline hover:text-gold">
            privacy note
          </Link>{" "}
          for what this website does with information you share.
        </p>
      </article>
    </PageShell>
  );
}
