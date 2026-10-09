import { steps } from "@/lib/content";

export function Process() {
  return (
    <section id="how-it-works" className="scroll-mt-8 px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <h2 className="mb-12 max-w-[800px] text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
        Simple for you.
        <br />
        Simple for them.
      </h2>
      <ol className="grid gap-8 lg:grid-cols-3 lg:gap-8">
        {steps.map((step) => (
          <li key={step.number} className="border-t border-line pt-6">
            <p className="font-sans text-5xl leading-none text-gold tracking-[-2.4px]">
              {step.number}
            </p>
            <h3 className="mt-6 text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
              {step.title}
            </h3>
            <p className="mt-6 text-lg leading-[1.6] font-light text-ink sm:text-2xl">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
