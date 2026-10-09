import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { gpoUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "GenoGPO — ICONUS",
  description: "GenoGPO is the group purchasing organization for practices that order with ICONUS.",
};

export default function GpoPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="GenoGPO" title="Ordering lives with GenoGPO.">
        GenoGPO is the group purchasing organization for practices that order with us. Product
        categories and purchasing are on genogpo.com.
      </PageIntro>
      <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        <ButtonLink href={gpoUrl}>Visit GenoGPO</ButtonLink>
      </section>
    </PageShell>
  );
}
