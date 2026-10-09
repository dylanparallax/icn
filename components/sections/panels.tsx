import Link from "next/link";
import { panels } from "@/lib/content";

export function Panels() {
  return (
    <section id="panels" className="scroll-mt-8 bg-brown px-5 py-16 text-cream sm:px-8 lg:px-16 lg:py-24">
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:gap-[100px]">
        <h2 className="max-w-[690px] text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
          Different goals.
          <br />
          Precision care.
        </h2>
        <p className="max-w-xl text-lg leading-[1.6] font-light text-stone lg:pt-2 lg:text-2xl">
          Choose from a variety of test panels to give patients targeted
          recommendations for their health goals.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {panels.map((panel) => (
          <li key={panel.slug} id={panel.slug} className="scroll-mt-8">
            <article className="flex h-full min-h-[420px] flex-col justify-between border border-line-dark p-7 xl:h-[500px]">
              <div className="flex flex-col items-start gap-5">
                <img
                  src={panel.icon.src}
                  width={panel.icon.width}
                  height={panel.icon.height}
                  alt=""
                />
                <h3 className="text-[23px] leading-[1.18] tracking-[-0.69px]">
                  {panel.title}
                </h3>
                <p className="text-xl leading-[1.4] font-light tracking-[-0.4px] text-stone">
                  {panel.body}
                </p>
              </div>
              <Link
                href={`/panels/${panel.slug}`}
                className="mt-8 flex items-center justify-between border-t border-line-dark pt-5 font-mono text-sm text-teal uppercase"
              >
                Explore panel
                <img src="/brand/arrow-teal.svg" width={16} height={16} alt="" />
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
