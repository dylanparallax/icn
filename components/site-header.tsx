"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { portalUrl } from "@/lib/site";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#panels", label: "Shop" },
  { href: "/providers", label: "For providers" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-5 sm:px-8 lg:px-16">
      <div className="flex h-[100px] items-center justify-between gap-6 py-10">
        <Link href="/" aria-label="ICONUS home">
          <Image
            src="/brand/wordmark.png"
            alt="ICONUS"
            width={100}
            height={30}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-14 lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-8 font-mono text-sm text-cream uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-7">
            <ButtonLink href={portalUrl} variant="login">
              Log in
            </ButtonLink>
            <ButtonLink href="/get-started">Get started</ButtonLink>
          </div>
        </nav>

        <button
          type="button"
          className="font-mono text-sm text-cream uppercase lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="flex flex-col gap-6 pb-8 lg:hidden" aria-label="Primary">
          <ul className="flex flex-col gap-4 font-mono text-sm text-cream uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start gap-4">
            <ButtonLink href={portalUrl} variant="login">
              ogin
            </ButtonLink>
            <ButtonLink href="/get-started">Get started</ButtonLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
