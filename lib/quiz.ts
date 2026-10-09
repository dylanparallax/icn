import { panels, type PanelSlug } from "@/lib/content";

type Score = Partial<Record<PanelSlug, number>>;

export type QuizOption = {
  label: string;
  scores: Score;
};

export type QuizQuestion = {
  prompt: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    prompt: "What feels most important to understand?",
    options: [
      { label: "Immune function and healthy aging", scores: { "immunity-longevity": 3 } },
      { label: "Training, recovery, and endurance", scores: { performance: 3 } },
      { label: "Hormones, skin, and collagen", scores: { "hormone-skin": 3 } },
      { label: "Memory, focus, and stress", scores: { cognition: 3 } },
      { label: "Sleep, metabolism, and daily habits", scores: { lifestyle: 3 } },
      { label: "Digestion, nutrients, and detox pathways", scores: { "toxin-gut": 3 } },
    ],
  },
  {
    prompt: "What should the result help you do next?",
    options: [
      { label: "Talk about long-term prevention", scores: { "immunity-longevity": 2 } },
      { label: "Shape training or nutrition", scores: { performance: 2 } },
      { label: "Add context for skin or hormone care", scores: { "hormone-skin": 2 } },
      { label: "Support focus and brain health", scores: { cognition: 2 } },
      { label: "Personalize everyday habits", scores: { lifestyle: 2 } },
      { label: "Guide gut and nutrition choices", scores: { "toxin-gut": 2 } },
    ],
  },
  {
    prompt: "How broad should the panel be?",
    options: [
      { label: "Stay with the main question", scores: {} },
      { label: "Look more broadly at daily biology", scores: { lifestyle: 2 } },
      { label: "Look at aging and immune resilience", scores: { "immunity-longevity": 2 } },
    ],
  },
  {
    prompt: "Is a specific kind of support already part of the plan?",
    options: [
      { label: "GLP-1 medication", scores: { "glp-1": 5 } },
      { label: "Peptides", scores: { peptide: 5 } },
      { label: "Neither right now", scores: {} },
    ],
  },
];

export type QuizMatch = {
  slug: PanelSlug;
  score: number;
};

export function matchPanels(answers: number[]): QuizMatch[] {
  const scores = Object.fromEntries(panels.map((panel) => [panel.slug, 0])) as Record<
    PanelSlug,
    number
  >;
  const lastTouch = Object.fromEntries(panels.map((panel) => [panel.slug, -1])) as Record<
    PanelSlug,
    number
  >;

  answers.forEach((choice, questionIndex) => {
    const option = quizQuestions[questionIndex]?.options[choice];
    if (!option) return;
    for (const [slug, points] of Object.entries(option.scores) as [PanelSlug, number][]) {
      scores[slug] += points;
      lastTouch[slug] = questionIndex;
    }
  });

  return panels
    .map((panel) => ({ slug: panel.slug, score: scores[panel.slug] }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return lastTouch[b.slug] - lastTouch[a.slug];
    });
}
