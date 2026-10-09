import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz-flow";

export const metadata: Metadata = {
  title: "Which panel fits? — ICONUS",
  description: "Answer four short questions to find an ICONUS test panel to discuss with your provider.",
};

export default function QuizPage() {
  return <QuizFlow />;
}
