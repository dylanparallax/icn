import { ButtonLink } from "@/components/button-link";

export function QuizBand() {
  return (
    <section className="flex flex-col items-start gap-8 border-b border-line bg-stone px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-14">
      <h2 className="w-full max-w-[420px] shrink-0 text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
        Which questions matter to you?
      </h2>
      <div className="max-w-xl text-lg leading-[1.6] font-light text-ink sm:text-2xl">
        <p>Start with your goals, history and what you hope to understand.</p>
        <p className="mt-5">
          Together with your provider, choose the ICONUS panel that fits where you
          are today.
        </p>
      </div>
      <ButtonLink href="/quiz">Take the quiz</ButtonLink>
    </section>
  );
}
