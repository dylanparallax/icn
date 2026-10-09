export const panels = [
  {
    slug: "immunity-longevity",
    title: "Immunity & Longevity Genetics",
    body: "This panel examines how your patient’s genes may relate to immune function, inflammation response, and the way their body ages over time. Results may offer insights that can support informed, long-term preventive care planning.",
    icon: { src: "/brand/panel-immunity.svg", width: 25.6, height: 25.6 },
  },
  {
    slug: "performance",
    title: "Performance Genetics",
    body: "This panel explores how your patient’s DNA may relate to exercise performance, muscle development, recovery, and endurance. Results may help inform personalized training and nutrition recommendations.",
    icon: { src: "/brand/panel-performance.svg", width: 32, height: 32 },
  },
  {
    slug: "hormone-skin",
    title: "Hormone Genetics & Skin Aesthetics",
    body: "This panel looks at genetic traits that may be associated with hormone balance, skin health, collagen production, and aging markers. Results may offer context for aesthetic and hormonal wellness.",
    icon: { src: "/brand/panel-hormone.svg", width: 32, height: 32 },
  },
  {
    slug: "cognition",
    title: "Cognition Genetics",
    body: "This panel looks at genetic factors that may be associated with memory, focus, stress response, and brain health. Results may provide context to support cognitive wellness planning for your patient.",
    icon: { src: "/brand/panel-cognition.svg", width: 33.2, height: 33.2 },
  },
  {
    slug: "lifestyle",
    title: "Lifestyle Genetics",
    body: "This panel explores how your patient’s genes may relate to metabolism, sleep, stress response, performance, and nutrient needs. Results may support more personalized everyday health recommendations.",
    icon: { src: "/brand/panel-lifestyle.svg", width: 40, height: 28 },
  },
  {
    slug: "peptide",
    title: "Peptide Genetics",
    body: "This panel examines how your patient’s genetic profile may relate to their body’s response to different peptides. It looks at genetic factors associated with peptide pathways and individual response.",
    icon: { src: "/brand/panel-peptide.svg", width: 30, height: 33.2 },
  },
  {
    slug: "glp-1",
    title: "GLP-1 Benefits",
    body: "This panel looks at 25 genetic markers associated with how a patient’s biology may interact with GLP-1 medications.",
    icon: { src: "/brand/panel-glp1.svg", width: 33.2, height: 33.2 },
  },
  {
    slug: "toxin-gut",
    title: "Toxin & Gut Complete",
    body: "This panel examines how your patient’s genetics may relate to digestion, nutrient absorption, and detoxification pathways. Results may help guide personalized lifestyle and nutrition recommendations in support of gut health.",
    icon: { src: "/brand/panel-gut.svg", width: 38, height: 33.2 },
  },
] as const;

export const markers = [
  { src: "/brand/marker-1.svg", width: 21, height: 26 },
  { src: "/brand/marker-2.svg", width: 26, height: 26 },
  { src: "/brand/marker-3.svg", width: 26, height: 25 },
  { src: "/brand/marker-4.svg", width: 22, height: 20 },
  { src: "/brand/marker-5.svg", width: 24, height: 24 },
  { src: "/brand/marker-6.svg", width: 21, height: 18 },
  { src: "/brand/marker-7.svg", width: 28, height: 30 },
  { src: "/brand/marker-8.svg", width: 25, height: 25 },
  { src: "/brand/marker-9.svg", width: 25, height: 24 },
] as const;

export const principles = [
  {
    title: "Biology, not averages.",
    body: "Explore the genetic traits that may relate to a person’s health and wellness priorities.",
  },
  {
    title: "Goals, not guesswork.",
    body: "Choose a focused test panel around the questions you and your provider want to explore.",
  },
  {
    title: "A conversation, not a conclusion.",
    body: "Bring genetic insight into a shared discussion about the next steps in your plan.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Kits shipped direct to patient",
    body: "Choose a panel with your provider. Your ICONUS kit comes directly to you.",
  },
  {
    number: "02",
    title: "Patient swabs cheek, mails back with prepaid return mailer",
    body: "Complete your cheek swab at home, then use the prepaid return mailer to send it back.",
  },
  {
    number: "03",
    title: "Results delivered to patient portal & provider portal",
    body: "Results are available in about 3–4 weeks, ready to review together with your provider.",
  },
] as const;

export const stages = [
  {
    number: "01",
    label: "The Conversation",
    title: "Start with who they are.",
    body: "Talk about goals, history and what your patient hopes to understand. Choose the ICONUS panel that fits where they are today.",
  },
  {
    number: "02",
    label: "The Discovery",
    title: "See what’s written in their biology.",
    body: "A simple at-home cheek swab. Results in about 3–4 weeks, offering context for the areas that matter most to your patient.",
  },
  {
    number: "03",
    label: "The Plan",
    title: "Build from their biology, not the averages.",
    body: "Review results together in a follow-up visit. Build a personalized roadmap around nutrition, movement, recovery and wellness priorities.",
  },
  {
    number: "04",
    label: "The Program",
    title: "Put the plan into motion.",
    body: "Where formulations fit, ICONUS results highlight GenoGenRx options aligned with your patient’s profile, for you to review, adjust and recommend.",
  },
  {
    number: "05",
    label: "The Evolution",
    title: "Grow with your patient.",
    body: "Bodies change. Goals change. Use follow-up visits to reflect on progress and refine the plan. Their genetics remain a reference point.",
  },
] as const;

export const questions = [
  {
    question: "How do I choose a test panel?",
    answer:
      "Start with a conversation with your provider about your goals, history and what you hope to understand. Together, choose the panel that fits where you are today.",
  },
  {
    question: "What sample do I need to provide?",
    answer:
      "A simple cheek swab, completed at home. Your kit ships directly to you and includes a prepaid return mailer.",
  },
  {
    question: "Where will I see my results?",
    answer:
      "Results are delivered to both the patient portal and provider portal, so you can review the findings together.",
  },
  {
    question: "How long do results take?",
    answer:
      "Results arrive in the ICONUS portal in about 3–4 weeks. Your provider can then schedule a follow-up to discuss a plan.",
  },
  {
    question: "What happens after the test?",
    answer:
      "Review the results with your provider and build a plan around your priorities. Follow-up visits are an opportunity to check in and refine that plan over time.",
  },
] as const;

export const moreQuestions = [
  {
    question: "Where do I log in?",
    answer:
      "Patients and providers sign in at my.iconus.org. Results, when they are ready, are delivered to the patient portal and the provider portal.",
  },
  {
    question: "Does the quiz choose a panel for me?",
    answer:
      "The quiz suggests a starting point. It is not a diagnosis and it does not place an order. Choose the final panel with your provider.",
  },
  {
    question: "How do I reach ICONUS?",
    answer:
      "Use the contact page to send a note. If you already have results, sign in to the portal and follow up with your provider.",
  },
  {
    question: "Can I take the test without a provider?",
    answer:
      "ICONUS is meant to be used with a provider. The kit, the panel, and the plan that follows are part of that conversation.",
  },
] as const;

export const essentials = [
  "Simple at-home cheek swab",
  "Panels chosen around specific goals",
  "Results for patient and provider",
  "Kits shipped directly",
  "Results in about 3–4 weeks",
  "Reviewed in a follow-up visit",
] as const;

export type PanelSlug = (typeof panels)[number]["slug"];

export function getPanel(slug: string) {
  return panels.find((panel) => panel.slug === slug);
}

export const panelPages: Record<
  PanelSlug,
  { audience: string; focuses: readonly string[] }
> = {
  "immunity-longevity": {
    audience:
      "A fit when the conversation is about staying well over the long term.",
    focuses: [
      "Immune function",
      "Inflammation response",
      "How the body ages over time",
    ],
  },
  performance: {
    audience:
      "A fit when training, recovery, or endurance is the question you want to explore.",
    focuses: [
      "Exercise performance",
      "Muscle development and recovery",
      "Endurance",
    ],
  },
  "hormone-skin": {
    audience:
      "A fit for aesthetic and hormonal wellness conversations with your provider.",
    focuses: ["Hormone balance", "Skin health and collagen", "Aging markers"],
  },
  cognition: {
    audience: "A fit when memory, focus, or stress response is the priority.",
    focuses: ["Memory and focus", "Stress response", "Brain health"],
  },
  lifestyle: {
    audience:
      "A fit for everyday recommendations around sleep, stress, metabolism, and nutrients.",
    focuses: ["Metabolism", "Sleep and stress response", "Everyday nutrient needs"],
  },
  peptide: {
    audience:
      "A fit when peptides are already part of the conversation with your provider.",
    focuses: [
      "Peptide pathways",
      "Individual response",
      "Context before a peptide plan",
    ],
  },
  "glp-1": {
    audience:
      "A fit when GLP-1 medication is already part of the care conversation.",
    focuses: [
      "25 genetic markers",
      "How biology may interact with GLP-1 medications",
      "Context for a medication conversation",
    ],
  },
  "toxin-gut": {
    audience:
      "A fit when digestion, nutrient absorption, or detox pathways are the focus.",
    focuses: ["Digestion", "Nutrient absorption", "Detoxification pathways"],
  },
};
