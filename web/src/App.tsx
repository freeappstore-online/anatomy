import { useState, useCallback } from "react";
import type { SystemId, QuizState } from "./types";
import { bodyPartMap } from "./data/parts";
import { systemMap } from "./data/systems";
import BodyViewer from "./svg/BodyViewer";
import SystemSelector from "./components/SystemSelector";
import DetailPanel from "./components/DetailPanel";
import SearchBar from "./components/SearchBar";
import QuizMode from "./components/QuizMode";

const INITIAL_SYSTEMS: SystemId[] = ["skeletal"];

export default function App() {
  const [activeSystems, setActiveSystems] = useState<Set<SystemId>>(
    () => new Set(INITIAL_SYSTEMS),
  );
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [highlightPart, setHighlightPart] = useState<string | null>(null);
  const [searchHighlights, setSearchHighlights] = useState<Set<string>>(
    () => new Set(),
  );
  const [showQuiz, setShowQuiz] = useState(false);
  const [quiz, setQuiz] = useState<QuizState>({
    active: false,
    difficulty: "easy",
    currentQuestion: null,
    score: 0,
    total: 0,
    answered: false,
    selectedIndex: null,
  });

  const toggleSystem = useCallback((id: SystemId) => {
    setActiveSystems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handlePartClick = useCallback(
    (id: string) => {
      if (quiz.active) return; // Don't navigate during quiz
      const part = bodyPartMap.get(id);
      if (part) {
        // Ensure the part's system is visible
        setActiveSystems((prev) => {
          if (prev.has(part.system)) return prev;
          return new Set([...prev, part.system]);
        });
        setSelectedPart(id);
        setHighlightPart(id);
      }
    },
    [quiz.active],
  );

  const handleNavigate = useCallback((id: string) => {
    const part = bodyPartMap.get(id);
    if (part) {
      setActiveSystems((prev) => {
        if (prev.has(part.system)) return prev;
        return new Set([...prev, part.system]);
      });
      setSelectedPart(id);
      setHighlightPart(id);
    }
  }, []);

  const handleSearchSelect = useCallback((partId: string) => {
    const part = bodyPartMap.get(partId);
    if (part) {
      setActiveSystems((prev) => {
        if (prev.has(part.system)) return prev;
        return new Set([...prev, part.system]);
      });
      setSelectedPart(partId);
      setHighlightPart(partId);
      setSearchHighlights(new Set());
    }
  }, []);

  const handleSearchHighlight = useCallback((ids: Set<string>) => {
    setSearchHighlights(ids);
    // Ensure systems with highlighted parts are visible
    if (ids.size > 0) {
      setActiveSystems((prev) => {
        const next = new Set(prev);
        ids.forEach((id) => {
          const part = bodyPartMap.get(id);
          if (part) next.add(part.system);
        });
        return next;
      });
    }
  }, []);

  const handleQuizHighlight = useCallback((id: string | null) => {
    setHighlightPart(id);
    if (id) {
      const part = bodyPartMap.get(id);
      if (part) {
        setActiveSystems((prev) => {
          if (prev.has(part.system)) return prev;
          return new Set([...prev, part.system]);
        });
      }
    }
  }, []);

  const selectedPartData = selectedPart ? bodyPartMap.get(selectedPart) : null;

  // Combine highlight sources: quiz highlight + search highlights
  const effectiveHighlight = quiz.active
    ? highlightPart
    : highlightPart;

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-sm"
        style={{
          borderColor: "var(--line)",
          background: "var(--glass)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1
            className="text-xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Fraunces', serif", color: "var(--ink)" }}
          >
            Anatomy Explorer
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setShowQuiz(!showQuiz);
                if (quiz.active) {
                  setQuiz((prev) => ({
                    ...prev,
                    active: false,
                    currentQuestion: null,
                  }));
                  setHighlightPart(null);
                }
              }}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all"
              style={{
                borderColor: showQuiz ? "var(--accent)" : "var(--line)",
                background: showQuiz ? "var(--accent)" : "var(--panel)",
                color: showQuiz ? "#fff" : "var(--ink)",
              }}
            >
              {showQuiz ? "Close Quiz" : "Quiz"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-4">
        {/* Controls row */}
        <div className="mb-4 space-y-3">
          <SearchBar
            onSelect={handleSearchSelect}
            onHighlight={handleSearchHighlight}
          />
          <SystemSelector
            activeSystems={activeSystems}
            onToggle={toggleSystem}
          />
        </div>

        {/* Active systems description */}
        {activeSystems.size > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {Array.from(activeSystems).map((sysId) => {
              const sys = systemMap.get(sysId);
              if (!sys) return null;
              return (
                <p
                  key={sysId}
                  className="text-xs"
                  style={{ color: sys.color }}
                >
                  {sys.description}
                </p>
              );
            })}
          </div>
        )}

        {/* Main layout: body viewer + sidebar */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Body viewer */}
          <div className="flex-1 flex justify-center items-start">
            <div className="w-full max-w-lg">
              {activeSystems.size === 0 ? (
                <div
                  className="flex items-center justify-center h-96 rounded-xl border"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--panel)",
                  }}
                >
                  <p
                    className="text-sm text-center px-8"
                    style={{ color: "var(--muted)" }}
                  >
                    Select one or more body systems above to explore the human
                    body.
                  </p>
                </div>
              ) : (
                <BodyViewer
                  activeSystems={activeSystems}
                  highlightPart={effectiveHighlight}
                  searchHighlights={searchHighlights}
                  onPartClick={handlePartClick}
                />
              )}
            </div>
          </div>

          {/* Sidebar — detail panel or quiz */}
          <div className="lg:w-80 xl:w-96 shrink-0 space-y-4">
            {showQuiz && (
              <QuizMode
                quiz={quiz}
                setQuiz={setQuiz}
                activeSystems={activeSystems}
                onHighlightPart={handleQuizHighlight}
              />
            )}

            {selectedPartData && !quiz.active && (
              <DetailPanel
                part={selectedPartData}
                onClose={() => {
                  setSelectedPart(null);
                  setHighlightPart(null);
                }}
                onNavigate={handleNavigate}
              />
            )}

            {!selectedPartData && !showQuiz && (
              <div
                className="rounded-xl border p-5"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--panel)",
                }}
              >
                <h2
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "var(--ink)",
                  }}
                >
                  Getting Started
                </h2>
                <ul
                  className="text-sm space-y-2"
                  style={{ color: "var(--muted)" }}
                >
                  <li>
                    Toggle body systems using the colored buttons above.
                  </li>
                  <li>
                    Click any organ, bone, or muscle on the body to learn more.
                  </li>
                  <li>
                    Search for specific parts using the search bar.
                  </li>
                  <li>
                    Layer multiple systems to see how they relate.
                  </li>
                  <li>
                    Try Quiz mode to test your anatomy knowledge!
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile bottom sheet for detail panel */}
      {selectedPartData && !quiz.active && (
        <div
          className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t rounded-t-2xl shadow-2xl max-h-[60vh] overflow-y-auto animate-slideUp"
          style={{
            borderColor: "var(--line)",
            background: "var(--panel)",
          }}
        >
          <div className="p-4">
            {/* Drag handle */}
            <div className="flex justify-center mb-2">
              <div
                className="w-10 h-1 rounded-full"
                style={{ background: "var(--line-strong)" }}
              />
            </div>
            <DetailPanel
              part={selectedPartData}
              onClose={() => {
                setSelectedPart(null);
                setHighlightPart(null);
              }}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      )}
    </div>
  );
}
