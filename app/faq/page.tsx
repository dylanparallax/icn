import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { moreQuestions, questions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Questions — ICONUS",
  description: "Practical answers about ICONUS kits, panels, results, and the patient portal.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Questions" title="Before you begin.">
        A few practical answers to help you take the next step with confidence.
      </PageIntro>
      <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        <FaqList items={[...questions, ...moreQuestions]} tone="cream" />
        <p className="mt-12 max-w-2xl text-lg leading-[1.6] font-light text-ink">
          Still looking for something?{" "}
          <Link href="/contact" className="underline hover:text-gold">
            Send a note
          </Link>{" "}
          or{" "}
          <Link href="/quiz" className="underline hover:text-gold">
            take the quiz
          </Link>
          .
        </p>
      </section>
    </PageShell>
  );
}
