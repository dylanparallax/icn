import Image from "next/image";
import { principles } from "@/lib/content";

export function Blueprint() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="flex flex-col items-start gap-10 xl:flex-row xl:items-center xl:justify-between xl:gap-16">
        <div className="max-w-3xl min-w-0 xl:flex-1">
          <h2 className="text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
            The missing piece in every patient plan.
          </h2>
          <p className="mt-6 text-lg leading-[1.6] font-light text-ink sm:text-2xl">
            A cheek swab gives the patient and the provider the same starting point: that
            person’s own biology.
          </p>
        </div>
        <Image
          src="/brand/kit-box.png"
          alt="ICONUS test kit box"
          width={870}
          height={497}
          sizes="(min-width: 1024px) 480px, 100vw"
          className="h-auto w-full max-w-[420px] shrink-0"
        />
      </div>
      <ul className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-3 lg:gap-8">
        {principles.map((principle) => (
          <li key={principle.title} className="border-t border-line pt-6">
            <h3 className="text-[28px] leading-[1.15] font-medium sm:text-[36px] lg:text-[40px]">
              {principle.title}
            </h3>
            <p className="mt-4 text-lg leading-[1.6] font-light text-ink sm:text-2xl">
              {principle.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
