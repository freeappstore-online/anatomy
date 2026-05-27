import { useCallback, useEffect, useMemo } from "react";
import type { Difficulty, QuizState, SystemId } from "../types";
import { bodyParts, easyPartIds, bodyPartMap } from "../data/parts";
import { systemMap } from "../data/systems";

interface Props {
  quiz: QuizState;
  setQuiz: React.Dispatch<React.SetStateAction<QuizState>>;
  activeSystems: Set<SystemId>;
  onHighlightPart: (id: string | null) => void;
}

function pickQuestion(difficulty: Difficulty, activeSystems: Set<SystemId>): {
  partId: string;
  choices: string[];
  correctIndex: number;
} {
  // Filter parts by active systems and difficulty
  let candidates = bodyParts.filter((p) => activeSystems.has(p.system));
  if (difficulty === "easy") {
    candidates = candidates.filter((p) => easyPartIds.has(p.id));
  }
  if (candidates.length < 4) {
    // Fall back to all parts for active systems
    candidates = bodyParts.filter((p) => activeSystems.has(p.system));
  }
  if (candidates.length < 4) {
    candidates = [...bodyParts];
  }

  // Pick random correct answer
  const correctIdx = Math.floor(Math.random() * candidates.length);
  const correct = candidates[correctIdx]!;

  // Pick 3 wrong answers (from same pool, no duplicates)
  const wrong: string[] = [];
  const used = new Set([correct.id]);
  while (wrong.length < 3) {
    const r = candidates[Math.floor(Math.random() * candidates.length)]!;
    if (!used.has(r.id)) {
      used.add(r.id);
      wrong.push(r.name);
    }
    // Safety: if pool is too small, pull from all
    if (used.size >= candidates.length && wrong.length < 3) {
      const fallback = bodyParts.filter((p) => !used.has(p.id));
      if (fallback.length > 0) {
        const fb = fallback[Math.floor(Math.random() * fallback.length)]!;
        used.add(fb.id);
        wrong.push(fb.name);
      } else {
        break;
      }
    }
  }

  // Shuffle choices
  const choices = [correct.name, ...wrong];
  const correctPosition = Math.floor(Math.random() * choices.length);
  const tmp = choices[0]!;
  choices[0] = choices[correctPosition]!;
  choices[correctPosition] = tmp;

  return {
    partId: correct.id,
    choices,
    correctIndex: choices.indexOf(correct.name),
  };
}

export default function QuizMode({
  quiz,
  setQuiz,
  activeSystems,
  onHighlightPart,
}: Props) {
  const nextQuestion = useCallback(() => {
    const q = pickQuestion(quiz.difficulty, activeSystems);
    setQuiz((prev) => ({
      ...prev,
      currentQuestion: q,
      answered: false,
      selectedIndex: null,
    }));
    onHighlightPart(q.partId);
  }, [quiz.difficulty, activeSystems, setQuiz, onHighlightPart]);

  // Generate first question when quiz starts
  useEffect(() => {
    if (quiz.active && !quiz.currentQuestion) {
      nextQuestion();
    }
  }, [quiz.active, quiz.currentQuestion, nextQuestion]);

  const currentPart = useMemo(
    () => (quiz.currentQuestion ? bodyPartMap.get(quiz.currentQuestion.partId) : null),
    [quiz.currentQuestion],
  );

  const currentSystem = useMemo(
    () => (currentPart ? systemMap.get(currentPart.system) : null),
    [currentPart],
  );

  const handleAnswer = (index: number) => {
    if (quiz.answered || !quiz.currentQuestion) return;
    const correct = index === quiz.currentQuestion.correctIndex;
    setQuiz((prev) => ({
      ...prev,
      answered: true,
      selectedIndex: index,
      score: correct ? prev.score + 1 : prev.score,
      total: prev.total + 1,
    }));
  };

  const startQuiz = (difficulty: Difficulty) => {
    setQuiz({
      active: true,
      difficulty,
      currentQuestion: null,
      score: 0,
      total: 0,
      answered: false,
      selectedIndex: null,
    });
  };

  const endQuiz = () => {
    setQuiz((prev) => ({ ...prev, active: false, currentQuestion: null }));
    onHighlightPart(null);
  };

  // Not active: show start buttons
  if (!quiz.active) {
    return (
      <div
        className="rounded-xl border p-5"
        style={{ borderColor: "var(--line)", background: "var(--panel)" }}
      >
        <h2
          className="text-lg font-bold mb-1"
          style={{ fontFamily: "'Fraunces', serif", color: "var(--ink)" }}
        >
          Quiz Mode
        </h2>
        <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
          Can you identify the highlighted body part? Pick from 4 choices.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => startQuiz("easy")}
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "var(--success)",
              color: "#fff",
            }}
          >
            Easy
          </button>
          <button
            onClick={() => startQuiz("hard")}
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "var(--warning)",
              color: "#fff",
            }}
          >
            Hard
          </button>
        </div>
      </div>
    );
  }

  // Active quiz
  return (
    <div
      className="rounded-xl border p-5"
      style={{ borderColor: "var(--line)", background: "var(--panel)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2
          className="text-lg font-bold"
          style={{ fontFamily: "'Fraunces', serif", color: "var(--ink)" }}
        >
          Quiz — {quiz.difficulty === "easy" ? "Easy" : "Hard"}
        </h2>
        <button
          onClick={endQuiz}
          className="text-xs px-2 py-1 rounded-md border"
          style={{
            borderColor: "var(--line)",
            color: "var(--muted)",
          }}
        >
          End Quiz
        </button>
      </div>

      {/* Score */}
      <div
        className="text-sm font-semibold mb-3"
        style={{ color: "var(--accent)" }}
      >
        Score: {quiz.score} / {quiz.total}
        {quiz.total > 0 && (
          <span style={{ color: "var(--muted)" }}>
            {" "}
            ({Math.round((quiz.score / quiz.total) * 100)}%)
          </span>
        )}
      </div>

      {/* Question */}
      {quiz.currentQuestion && currentPart && (
        <div>
          <p className="text-sm mb-1" style={{ color: "var(--ink)" }}>
            What is the highlighted{" "}
            <span style={{ color: currentSystem?.color, fontWeight: 600 }}>
              {currentSystem?.name.toLowerCase()}
            </span>{" "}
            structure?
          </p>
          <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
            (Look at the yellow highlight on the body)
          </p>

          <div className="grid grid-cols-1 gap-2">
            {quiz.currentQuestion.choices.map((choice, i) => {
              let bg = "var(--paper)";
              let border = "var(--line)";
              let textColor = "var(--ink)";

              if (quiz.answered) {
                if (i === quiz.currentQuestion!.correctIndex) {
                  bg = "var(--success)";
                  border = "var(--success)";
                  textColor = "#fff";
                } else if (
                  i === quiz.selectedIndex &&
                  i !== quiz.currentQuestion!.correctIndex
                ) {
                  bg = "var(--error)";
                  border = "var(--error)";
                  textColor = "#fff";
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={quiz.answered}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-left border transition-all"
                  style={{
                    background: bg,
                    borderColor: border,
                    color: textColor,
                    cursor: quiz.answered ? "default" : "pointer",
                  }}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {quiz.answered && (
            <div className="mt-3">
              {quiz.selectedIndex === quiz.currentQuestion.correctIndex ? (
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--success)" }}
                >
                  Correct!
                </p>
              ) : (
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--error)" }}
                >
                  The answer was {currentPart.name}.
                </p>
              )}
              <button
                onClick={nextQuestion}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
