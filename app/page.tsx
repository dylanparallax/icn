import { Blueprint } from "@/components/sections/blueprint";
import { Closing } from "@/components/sections/closing";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Panels } from "@/components/sections/panels";
import { Process } from "@/components/sections/process";
import { Questions } from "@/components/sections/questions";
import { QuizBand } from "@/components/sections/quiz-band";
import { SiteFooter } from "@/components/sections/site-footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Blueprint />
      <Panels />
      <QuizBand />
      <Process />
      <Journey />
      <Questions />
      <Closing />
      <SiteFooter />
    </main>
  );
}
