import type { ReactNode } from "react";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-brown text-cream">
        <SiteHeader />
      </div>
      {children}
      <SiteFooter />
    </div>
  );
}
