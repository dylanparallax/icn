import Link from "next/link";
import { FaqList } from "@/components/faq-list";

export function Questions() {
  return (
    <section
      id="questions"
      className="scroll-mt-8 flex flex-col gap-12 border-t border-line bg-gold px-5 py-16 sm:px-8 lg:flex-row lg:gap-20 lg:px-16 lg:py-24"
    >
      <div className="w-full max-w-[430px] shrink-0">
        <h2 className="text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
          Before you begin.
        </h2>
        <p className="mt-7 text-lg leading-[1.6] font-light text-stone sm:text-2xl">
          A few practical answers to help you take the next step with confidence.
        </p>
        <Link href="/faq" className="mt-6 inline-block font-mono text-sm text-cream uppercase hover:text-brown">
          All questions
        </Link>
      </div>
      <div className="min-w-0 flex-1">
        <FaqList />
      </div>
    </section>
  );
}
