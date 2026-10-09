import Image from "next/image";
import { ButtonLink } from "@/components/button-link";

export function QuizBand() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden border-b border-line bg-cream">
      <Image
        src="/brand/marble.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="relative flex w-full flex-col items-center gap-8 px-5 py-14 text-center sm:px-8 lg:px-16 lg:py-16">
        <h2 className="max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
          Which questions matter to you?
        </h2>
        <div className="max-w-3xl text-lg leading-[1.6] font-light text-ink sm:text-2xl">
          <p>Start with your goals, history and what you hope to understand.</p>
          <p className="mt-5">
            Choose the ICONUS panel that fits where you are today.
          </p>
        </div>
        <ButtonLink href="/quiz">Take the quiz</ButtonLink>
      </div>
    </section>
  );
}
