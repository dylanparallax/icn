import { ButtonLink } from "@/components/button-link";

export function Closing() {
  return (
    <section
      id="get-started"
      className="scroll-mt-8 flex flex-col items-center gap-10 bg-brown px-5 py-16 text-cream sm:px-8 lg:h-[590px] lg:flex-row lg:items-center lg:gap-20 lg:px-16 lg:py-[72px]"
    >
      <div className="h-[320px] w-[258px] shrink-0 overflow-hidden sm:h-[446px] sm:w-[360px]">
        <div className="origin-top-left scale-[0.717] sm:scale-100">
          <img
            src="/brand/closing-bust.svg"
            width={360}
            height={446}
            alt="Classical bust illustration"
          />
        </div>
      </div>
      <div className="flex max-w-3xl flex-col items-start gap-7">
        <h2 className="text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
          Every patient holds more than you can see.
        </h2>
        <p className="text-lg leading-[1.6] font-light text-stone sm:text-2xl">
          ICONUS brings it into view, so you can build plans around what’s possible
          for them.
        </p>
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <ButtonLink href="/get-started">Get started with ICONUS</ButtonLink>
          <ButtonLink href="#panels" variant="ghost">
            Explore test panels
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
