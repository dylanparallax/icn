import { ButtonLink } from "@/components/button-link";
import { SiteHeader } from "@/components/site-header";
import { essentials } from "@/lib/content";

function EssentialsMarquee() {
  const group = Array.from({ length: 2 }, () => essentials).flat();

  return (
    <div className="overflow-hidden border-t border-line-dark">
      <ul className="sr-only">
        {essentials.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="essentials-marquee flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex h-[84px] shrink-0 items-center">
            {group.map((item, index) => (
              <span key={`${copy}-${index}`} className="flex items-center">
                <span className="px-8 text-lg font-light whitespace-nowrap text-stone sm:px-12 sm:text-2xl">
                  {item}
                </span>
                <span className="size-1.5 shrink-0 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="flex h-dvh flex-col overflow-hidden bg-brown text-cream"
    >
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col-reverse gap-4 px-5 pt-2 pb-4 sm:gap-6 sm:px-8 sm:pt-4 lg:flex-row lg:items-stretch lg:gap-8 lg:pt-6 lg:pr-10 lg:pb-6 lg:pl-16">
        <div className="flex w-full max-w-[656px] shrink-0 flex-col justify-center gap-4 sm:gap-6 lg:gap-8">
          <h1 className="text-[clamp(2.25rem,min(10vw,12vh),7.5rem)] leading-[1.02] font-medium tracking-[-0.03em]">
            Reveal what
            <br />
            is possible.
          </h1>
          <div className="flex max-w-[475px] flex-col gap-4 sm:gap-6 lg:gap-8">
            <p className="text-base leading-[1.6] font-light text-stone sm:text-lg lg:text-2xl">
              Iconus genetic test kits uncover the biological blueprint within every
              patient, so you can chart a new path toward transformational health together.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <ButtonLink href="#panels">Explore test panels</ButtonLink>
              <ButtonLink href="#how-it-works" variant="ghost">
                For patients
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="relative min-h-0 w-full flex-1">
          <img
            src="/brand/hero-bust.svg"
            width={463}
            height={645}
            alt="Classical bust illustration"
            className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto max-w-full object-contain object-bottom lg:mr-0 lg:ml-auto"
          />
        </div>
      </div>
      <EssentialsMarquee />
    </section>
  );
}
