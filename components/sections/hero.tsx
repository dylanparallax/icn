import { ButtonLink } from "@/components/button-link";
import { SiteHeader } from "@/components/site-header";
import { essentials } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="bg-brown text-cream">
      <SiteHeader />
      <div className="flex flex-col items-start gap-8 px-5 py-8 sm:px-8 lg:h-[720px] lg:flex-row lg:items-center lg:gap-4 lg:py-11 lg:pr-10 lg:pl-16">
        <div className="flex w-full max-w-[656px] flex-col gap-8">
          <h1 className="text-[48px] leading-[1.02] font-medium sm:text-[72px] lg:text-[120px] lg:tracking-[-3.6px]">
            Reveal what
            <br />
            is possible.
          </h1>
          <div className="flex max-w-[475px] flex-col gap-8">
            <p className="text-lg leading-[1.6] font-light text-stone sm:text-2xl">
              Iconus genetic test kits uncover the biological blueprint within every
              patient, so you can chart a new path together.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <ButtonLink href="#panels">Explore test panels</ButtonLink>
              <ButtonLink href="#how-it-works" variant="ghost">
                For patients
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="mx-auto h-[464px] w-[333px] shrink-0 overflow-hidden sm:h-[645px] sm:w-[463px] lg:mx-0 lg:ml-auto">
          <div className="origin-top-left scale-[0.72] sm:scale-100">
            <img
              src="/brand/hero-bust.svg"
              width={463}
              height={645}
              alt="Classical bust illustration"
            />
          </div>
        </div>
      </div>
      <ul className="grid border-t border-line-dark sm:grid-cols-3 lg:h-[84px] lg:items-center lg:px-16">
        {essentials.map((item) => (
          <li
            key={item}
            className="border-line-dark px-5 py-5 text-lg leading-[1.6] font-light text-stone not-last:border-b sm:px-8 sm:text-2xl sm:not-last:border-r sm:not-last:border-b-0 lg:px-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
