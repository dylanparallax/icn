import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <PageIntro eyebrow="404" title="That page isn’t here.">
        The link may be old, or the address may be mistyped.
      </PageIntro>
      <div className="flex flex-col items-start gap-4 px-5 py-16 sm:flex-row sm:px-8 lg:px-16">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/faq" variant="outline">
          Read the FAQ
        </ButtonLink>
      </div>
    </PageShell>
  );
}
