import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "teal" | "ghost" | "login" | "outline";

const styles: Record<Variant, string> = {
  teal: "border-transparent bg-teal text-brown hover:bg-[#6dcec3]",
  ghost: "border-line-dark bg-transparent text-cream hover:border-cream",
  login: "border-cream bg-transparent text-cream hover:bg-cream/10",
  outline: "border-brown bg-transparent text-brown hover:border-gold",
};

const arrows: Record<Variant, { src: string; width: number; height: number } | null> = {
  teal: { src: "/brand/arrow-dark.svg", width: 18, height: 18 },
  ghost: { src: "/brand/arrow-light.svg", width: 18, height: 18 },
  login: null,
  outline: null,
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
};

export function ButtonLink({ href, children, variant = "teal" }: ButtonLinkProps) {
  const arrow = arrows[variant];
  const className = `inline-flex h-[54px] shrink-0 items-center gap-6 border px-6 font-mono text-sm uppercase ${styles[variant]}`;
  const content = (
    <>
      {children}
      {arrow ? <img src={arrow.src} width={arrow.width} height={arrow.height} alt="" /> : null}
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
