import type { BodyPart } from "../types";
import { systemMap } from "../data/systems";
import { bodyPartMap } from "../data/parts";

interface Props {
  part: BodyPart;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export default function DetailPanel({ part, onClose, onNavigate }: Props) {
  const system = systemMap.get(part.system);

  return (
    <div
      className="rounded-xl border p-5 animate-in"
      style={{
        borderColor: "var(--line)",
        background: "var(--panel)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2
            className="text-xl font-bold"
            style={{ fontFamily: "'Fraunces', serif", color: "var(--ink)" }}
          >
            {part.name}
          </h2>
          {system && (
            <span
              className="inline-flex items-center gap-1.5 mt-1 text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: system.color + "22",
                color: system.color,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: system.color }}
              />
              {system.name} System
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md hover:opacity-70 transition-opacity"
          style={{ color: "var(--muted)" }}
          aria-label="Close detail panel"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 6l8 8M14 6l-8 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Function */}
      <div className="mb-4">
        <h3
          className="text-xs font-semibold uppercase tracking-wide mb-1"
          style={{ color: "var(--muted)" }}
        >
          Function
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
          {part.function}
        </p>
      </div>

      {/* Fun fact */}
      <div
        className="mb-4 p-3 rounded-lg border"
        style={{
          borderColor: "var(--line)",
          background: "var(--paper)",
        }}
      >
        <h3
          className="text-xs font-semibold uppercase tracking-wide mb-1"
          style={{ color: "var(--accent)" }}
        >
          Fun Fact
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
          {part.funFact}
        </p>
      </div>

      {/* Related parts */}
      {part.related.length > 0 && (
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--muted)" }}
          >
            Related
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {part.related.map((relId) => {
              const rel = bodyPartMap.get(relId);
              if (!rel) return null;
              const relSystem = systemMap.get(rel.system);
              return (
                <button
                  key={relId}
                  onClick={() => onNavigate(relId)}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md border transition-all hover:scale-105"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--paper)",
                    color: relSystem?.color ?? "var(--ink)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: relSystem?.color ?? "var(--muted)" }}
                  />
                  {rel.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
