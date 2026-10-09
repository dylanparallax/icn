"use client";

import { useState } from "react";
import { questions } from "@/lib/content";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items?: readonly FaqItem[];
  tone?: "gold" | "cream";
};

export function FaqList({ items = questions, tone = "gold" }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const questionClass =
    tone === "gold" ? "text-cream" : "text-brown";
  const answerClass = tone === "gold" ? "text-stone" : "text-ink";

  return (
    <div>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question} className="border-t border-line py-6">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center gap-6 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span className={`flex-1 text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px] ${questionClass}`}>
                  {item.question}
                </span>
                {open ? (
                  <img src="/brand/minus.svg" width={16} height={16} alt="" />
                ) : (
                  <PlusMark />
                )}
              </button>
            </h3>
            {open ? (
              <p
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`mt-3.5 max-w-3xl text-lg leading-[1.6] font-light lg:text-2xl ${answerClass}`}
              >
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function PlusMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.3328 8H12.6672"
        stroke="#8A784A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M8 3.3328V12.6672"
        stroke="#8A784A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
