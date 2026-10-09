import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { portalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get started — ICONUS",
  description: "Start with a panel, a short quiz, or a conversation with your provider.",
};

const paths = [
  {
    title: "For patients",
    body: "Start with the questions you and your provider want to answer. A short quiz can suggest a panel. The kit is a cheek swab you complete at home.",
    actions: [
      { href: "/quiz", label: "Take the quiz" },
      { href: "/#panels", label: "Explore panels", variant: "ghost" as const },
    ],
  },
  {
    title: "For providers",
    body: "ICONUS is a starting point for the plan you guide: a conversation, a focused panel, results in both portals, then a follow-up.",
    actions: [
      { href: "/providers", label: "For providers" },
      { href: portalUrl, label: "Portal login", variant: "ghost" as const },
    ],
  },
];

export default function GetStartedPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Get started" title="Choose the next step.">
        Genetic insight is one part of a broader conversation with your provider.
      </PageIntro>
      <section className="grid gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-16 lg:py-24">
        {paths.map((path) => (
          <article key={path.title} className="flex flex-col items-start gap-6 border-t border-line pt-8">
            <h2 className="text-[32px] leading-none font-medium lg:tracking-[-0.96px]">{path.title}</h2>
            <p className="text-lg leading-[1.6] font-light text-ink sm:text-2xl">{path.body}</p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              {path.actions.map((action) => (
                <ButtonLink
                  key={action.label}
                  href={action.href}
                  variant={action.variant === "ghost" ? "outline" : "teal"}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
