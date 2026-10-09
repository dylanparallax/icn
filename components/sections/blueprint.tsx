import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { markers, principles } from "@/lib/content";

export function Blueprint() {
  return (
    <section className="flex flex-col gap-12 px-5 py-16 sm:px-8 lg:gap-12 lg:px-16 lg:py-24">
      <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
        <div className="relative flex aspect-square w-full max-w-[571px] shrink-0 items-center justify-center overflow-hidden bg-cream p-7">
          <Image
            src="/brand/marble.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 571px, 100vw"
            className="object-cover opacity-40"
          />
          <img
            src="/brand/marble-mark.svg"
            width={179}
            height={143}
            alt=""
            className="relative z-10 mix-blend-color-burn"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-12 lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
              The missing piece in every patient plan.
            </h2>
            <p className="text-lg leading-[1.6] font-light text-ink sm:text-2xl">
              The blueprint for precision care was always there, just beneath the
              surface.
            </p>
            <p className="text-lg leading-[1.6] font-light text-ink sm:text-2xl">
              Now, with a simple cheek swab, providers can map protocols to a fixed
              starting point: who your patient is at the source.
            </p>
            <ButtonLink href="#panels">Explore test panels</ButtonLink>
          </div>
          <ul className="flex items-end justify-between gap-3" aria-label="Genetic markers">
            {markers.map((marker) => (
              <li key={marker.src}>
                <img src={marker.src} width={marker.width} height={marker.height} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
        {principles.map((principle) => (
          <article key={principle.title} className="border-t border-line pt-6">
            <h3 className="text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
              {principle.title}
            </h3>
            <p className="mt-[18px] text-lg leading-[1.6] font-light text-ink sm:text-2xl">
              {principle.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
