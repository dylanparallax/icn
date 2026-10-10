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
          Common questions.
        </h2>
        <p className="mt-7 text-lg leading-[1.6] font-light text-stone sm:text-2xl">
          A few practical answers to help you take the next step with confidence.
        </p>
        <Link
          href="/faq"
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-teal uppercase hover:text-cream"
        >
          See all questions
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M11.3328 11.3328V4.6672H4.6672M11.3328 4.6672L4.6672 11.3328"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
      <div className="min-w-0 flex-1">
        <FaqList />
      </div>
    </section>
  );
}
