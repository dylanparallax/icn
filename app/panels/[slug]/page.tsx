import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";
import { getPanel, panelPages, panels, steps } from "@/lib/content";

type PanelPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return panels.map((panel) => ({ slug: panel.slug }));
}

export async function generateMetadata({ params }: PanelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const panel = getPanel(slug);
  if (!panel) return { title: "Panel — ICONUS" };
  return {
    title: `${panel.title} — ICONUS`,
    description: panel.body,
  };
}

export default async function PanelPage({ params }: PanelPageProps) {
  const { slug } = await params;
  const panel = getPanel(slug);
  if (!panel) notFound();

  const detail = panelPages[panel.slug];
  const others = panels.filter((item) => item.slug !== panel.slug);

  return (
    <PageShell>
      <article>
        <header className="bg-brown px-5 py-16 text-cream sm:px-8 lg:px-16 lg:py-24">
          <Link href="/#panels" className="font-mono text-sm text-teal uppercase hover:text-cream">
            All test panels
          </Link>
          <div className="mt-8">
            <img src={panel.icon.src} width={panel.icon.width} height={panel.icon.height} alt="" />
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
            {panel.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.6] font-light text-stone sm:text-2xl">
            {panel.body}
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <ButtonLink href="/get-started">Get started</ButtonLink>
            <ButtonLink href="/quiz" variant="ghost">
              Not sure? Take the quiz
            </ButtonLink>
          </div>
        </header>

        <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
          <h2 className="max-w-xl text-4xl leading-[1.08] sm:text-5xl lg:tracking-[-1.2px]">
            What this panel explores.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-[1.6] font-light text-ink sm:text-2xl">
            {detail.audience}
          </p>
          <ul className="mt-12 grid gap-8 lg:grid-cols-3">
            {detail.focuses.map((focus) => (
              <li key={focus} className="border-t border-line pt-6 text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
                {focus}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
          <h2 className="mb-12 max-w-xl text-4xl leading-[1.08] sm:text-5xl lg:tracking-[-1.2px]">
            Simple for you. Simple for them.
          </h2>
          <ol className="grid gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="border-t border-line pt-6">
                <p className="text-5xl leading-none text-gold tracking-[-2.4px]">{step.number}</p>
                <h3 className="mt-6 text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
                  {step.title}
                </h3>
                <p className="mt-6 text-lg leading-[1.6] font-light text-ink sm:text-2xl">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-brown px-5 py-16 text-cream sm:px-8 lg:px-16 lg:py-24">
          <h2 className="text-4xl leading-[1.08] sm:text-5xl lg:tracking-[-1.2px]">Other panels</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/panels/${item.slug}`}
                  className="flex items-center justify-between border border-line-dark px-6 py-5 font-mono text-sm text-teal uppercase hover:border-cream"
                >
                  {item.title}
                  <img src="/brand/arrow-teal.svg" width={16} height={16} alt="" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  );
}
