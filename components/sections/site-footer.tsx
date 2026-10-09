import Image from "next/image";
import Link from "next/link";
import { portalUrl } from "@/lib/site";

const columns = [
  {
    title: "Discover",
    links: [
      { href: "/#top", label: "Our approach" },
      { href: "/#panels", label: "Test panels" },
      { href: "/#how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Take the next step",
    links: [
      { href: "/quiz", label: "Take the quiz" },
      { href: "/providers", label: "For providers" },
      { href: "/get-started", label: "Get started" },
      { href: portalUrl, label: "Register a kit" },
      { href: portalUrl, label: "Portal login" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://www.instagram.com", label: "Instagram", newTab: true },
      { href: "https://www.linkedin.com", label: "LinkedIn", newTab: true },
      { href: "https://x.com", label: "X", newTab: true },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact/patients", label: "Patient contact" },
      { href: "/contact/providers", label: "Provider contact" },
      { href: "/gpo", label: "GenoGPO" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-cream px-5 py-12 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between">
        <div className="flex flex-col gap-4">
          <Image src="/brand/wordmark.png" alt="ICONUS" width={170} height={46} />
          <p className="text-sm leading-[1.6] font-light">Reveal what is possible.</p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
            <p className="font-mono text-sm text-gold uppercase">{column.title}</p>
            <ul className="flex flex-col gap-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      className="text-sm leading-[1.6] font-light hover:text-gold"
                      {...("newTab" in link && link.newTab
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm leading-[1.6] font-light hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="my-10 h-px bg-line" />
      <div className="flex flex-col gap-4 font-mono text-sm text-ink uppercase lg:flex-row lg:items-start lg:justify-between">
        <p>© 2026 ICONUS</p>
        <p>Genetic insight is one part of a broader conversation with your provider.</p>
        <p className="text-gold">Individual by design</p>
      </div>
    </footer>
  );
}
