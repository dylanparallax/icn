import { ButtonLink } from "@/components/button-link";
import { stages } from "@/lib/content";

export function Journey() {
  return (
    <section
      id="providers"
      className="scroll-mt-8 flex flex-col gap-12 bg-brown px-5 py-16 text-cream sm:px-8 lg:flex-row lg:gap-20 lg:px-16 lg:py-24"
    >
      <div className="flex w-full max-w-[430px] shrink-0 flex-col items-start gap-7">
        <h2 className="text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
          From first conversation to lasting change.
        </h2>
        <p className="text-lg leading-[1.6] font-light text-stone sm:text-2xl">
          ICONUS isn’t a one-time test. It’s the foundation of a journey you guide,
          from understanding your patient’s biology to building a plan, preparing
          for it and growing with it over time.
        </p>
        <ButtonLink href="/providers">Bring ICONUS to your practice</ButtonLink>
      </div>

      <ol className="min-w-0 flex-1">
        {stages.map((stage) => (
          <li key={stage.number} className="flex gap-6 border-t border-line py-[26px]">
            <p className="w-10 shrink-0 text-[32px] leading-none font-medium text-gold tracking-[-0.96px]">
              {stage.number}
            </p>
            <div className="flex min-w-0 flex-col gap-3">
              <p className="font-mono text-sm text-stone uppercase">{stage.label}</p>
              <h3 className="text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
                {stage.title}
              </h3>
              <p className="text-lg leading-[1.6] font-light text-stone sm:text-2xl">
                {stage.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
