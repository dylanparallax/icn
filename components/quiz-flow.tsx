"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getPanel, panelPages } from "@/lib/content";
import { matchPanels, quizQuestions } from "@/lib/quiz";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function QuizFlow() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [highlight, setHighlight] = useState(0);
  const lock = useRef(false);

  const question = step >= 0 && step < quizQuestions.length ? quizQuestions[step] : null;
  const finished = step >= quizQuestions.length;
  const progress = finished ? 1 : step < 0 ? 0 : step / quizQuestions.length;

  useEffect(() => {
    setHighlight(0);
    document.getElementById("quiz-heading")?.focus();
  }, [step]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        window.location.href = "/";
        return;
      }

      if (finished) return;

      if (!question) {
        if (event.key === "Enter") setStep(0);
        return;
      }

      const count = question.options.length;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlight((value) => (value + 1) % count);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlight((value) => (value - 1 + count) % count);
      } else if (event.key === "Enter") {
        event.preventDefault();
        choose(highlight);
      } else if (/^[a-z]$/i.test(event.key)) {
        const index = event.key.toUpperCase().charCodeAt(0) - 65;
        if (index >= 0 && index < count) choose(index);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function choose(index: number) {
    if (lock.current || !question) return;
    lock.current = true;
    setSelected(index);
    window.setTimeout(() => {
      setAnswers((current) => {
        const next = current.slice(0, step);
        next[step] = index;
        return next;
      });
      setSelected(null);
      lock.current = false;
      setStep((current) => current + 1);
    }, 180);
  }

  function back() {
    if (step <= 0) {
      setStep(-1);
      setAnswers([]);
      return;
    }
    setSelected(null);
    setStep((current) => current - 1);
  }

  const ranked = finished ? matchPanels(answers) : [];
  const best = ranked[0];
  const runnerUp = ranked[1];
  const showRunnerUp = Boolean(best && runnerUp && runnerUp.score > 0 && best.score - runnerUp.score <= 1);
  const match = best ? getPanel(best.slug) : undefined;
  const alternate = showRunnerUp && runnerUp ? getPanel(runnerUp.slug) : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-cream text-brown">
      <header className="px-5 pt-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="ICONUS home">
            <Image src="/brand/wordmark.png" alt="ICONUS" width={140} height={38} priority />
          </Link>
          <Link href="/" className="font-mono text-sm uppercase hover:text-gold">
            Exit
          </Link>
        </div>
        <div
          className="mt-6 h-1 w-full bg-line"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={quizQuestions.length}
          aria-valuenow={Math.min(Math.max(step, 0), quizQuestions.length)}
          aria-label="Quiz progress"
        >
          <div className="h-1 bg-teal transition-all duration-300" style={{ width: `${progress * 100}%` }} />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-12 sm:px-8">
        {question ? (
          <section>
            <p className="font-mono text-sm text-gold uppercase">
              {step + 1} of {quizQuestions.length}
            </p>
            <h1
              id="quiz-heading"
              tabIndex={-1}
              className="mt-4 text-4xl leading-[1.08] outline-none sm:text-5xl lg:tracking-[-1.2px]"
            >
              {question.prompt}
            </h1>
            <div role="radiogroup" aria-labelledby="quiz-heading" className="mt-10 flex flex-col gap-3">
              {question.options.map((option, index) => {
                const active = selected === index || (selected === null && highlight === index);
                return (
                  <button
                    key={option.label}
                    type="button"
                    role="radio"
                    aria-checked={selected === index}
                    onMouseEnter={() => setHighlight(index)}
                    onClick={() => choose(index)}
                    className={`flex items-center gap-5 border px-5 py-4 text-left text-lg leading-snug sm:text-xl ${
                      active ? "border-teal bg-teal text-brown" : "border-line bg-cream hover:border-brown"
                    }`}
                  >
                    <span className={`w-6 shrink-0 font-mono text-sm ${active ? "text-brown" : "text-gold"}`}>
                      {letters[index]}
                    </span>
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>
        ) : null}

        {step < 0 ? (
          <section>
            <p className="font-mono text-sm text-gold uppercase">Find a starting point</p>
            <h1
              id="quiz-heading"
              tabIndex={-1}
              className="mt-4 text-4xl leading-[1.08] outline-none sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]"
            >
              Which questions matter to you?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-[1.6] font-light text-ink sm:text-2xl">
              Four short questions. At the end, you’ll see the ICONUS panel that fits where you are
              today.
            </p>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="mt-10 inline-flex h-[54px] items-center gap-6 bg-teal px-6 font-mono text-sm text-brown uppercase"
            >
              Start
              <img src="/brand/arrow-dark.svg" width={18} height={18} alt="" />
            </button>
          </section>
        ) : null}

        {finished && match ? (
          <section>
            <p className="font-mono text-sm text-gold uppercase">Your match</p>
            <h1
              id="quiz-heading"
              tabIndex={-1}
              className="mt-4 text-4xl leading-[1.08] outline-none sm:text-5xl lg:tracking-[-1.2px]"
            >
              {match.title}
            </h1>
            <p className="mt-6 text-lg leading-[1.6] font-light text-ink sm:text-2xl">{match.body}</p>
            <p className="mt-4 text-lg leading-[1.6] font-light text-ink">
              {panelPages[match.slug].audience}
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href={`/panels/${match.slug}`}
                className="inline-flex h-[54px] items-center gap-6 bg-teal px-6 font-mono text-sm text-brown uppercase"
              >
                Explore this panel
                <img src="/brand/arrow-dark.svg" width={18} height={18} alt="" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setAnswers([]);
                  setStep(-1);
                }}
                className="inline-flex h-[54px] items-center border border-line-dark px-6 font-mono text-sm uppercase"
              >
                Retake quiz
              </button>
            </div>
            {alternate ? (
              <p className="mt-8 text-lg leading-[1.6] font-light text-ink">
                Also close:{" "}
                <Link href={`/panels/${alternate.slug}`} className="underline hover:text-gold">
                  {alternate.title}
                </Link>
              </p>
            ) : null}
            <p className="mt-10 font-mono text-sm text-ink uppercase">
              Genetic insight is one part of a broader conversation with your provider.
            </p>
          </section>
        ) : null}
      </main>

      <footer className="flex items-center justify-between px-5 py-6 sm:px-8 lg:px-16">
        {step >= 0 && !finished ? (
          <button type="button" onClick={back} className="font-mono text-sm uppercase hover:text-gold">
            Back
          </button>
        ) : (
          <span />
        )}
        <p className="font-mono text-sm text-ink uppercase">
          {question ? "A–Z to choose · Enter" : finished ? "" : "Enter to start"}
        </p>
      </footer>
    </div>
  );
}
