import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="bg-brown px-5 py-16 text-cream sm:px-8 lg:px-16 lg:py-24">
      <p className="font-mono text-sm text-gold uppercase">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
        {title}
      </h1>
      {children ? (
        <div className="mt-6 max-w-2xl text-lg leading-[1.6] font-light text-stone sm:text-2xl">
          {children}
        </div>
      ) : null}
    </header>
  );
}
