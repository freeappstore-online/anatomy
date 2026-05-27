import { useState, useMemo, useRef, useEffect } from "react";
import { bodyParts } from "../data/parts";
import { systemMap } from "../data/systems";

interface Props {
  onSelect: (partId: string) => void;
  onHighlight: (partIds: Set<string>) => void;
}

export default function SearchBar({ onSelect, onHighlight }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return bodyParts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.function.toLowerCase().includes(q) ||
        p.system.toLowerCase().includes(q),
    );
  }, [query]);

  // Update highlights when search changes
  useEffect(() => {
    onHighlight(new Set(results.map((r) => r.id)));
  }, [results, onHighlight]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg border"
        style={{
          borderColor: "var(--line)",
          background: "var(--panel)",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ color: "var(--muted)", flexShrink: 0 }}
        >
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M11 11l3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search organs, muscles, systems..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="w-full bg-transparent text-sm outline-none"
          style={{ color: "var(--ink)" }}
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              onHighlight(new Set());
              setOpen(false);
            }}
            className="shrink-0"
            style={{ color: "var(--muted)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M4 4l6 6M10 4l-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div
          className="absolute z-50 mt-1 w-full max-h-64 overflow-y-auto rounded-lg border shadow-lg"
          style={{
            borderColor: "var(--line)",
            background: "var(--panel)",
          }}
        >
          {results.map((part) => {
            const sys = systemMap.get(part.system);
            return (
              <button
                key={part.id}
                onClick={() => {
                  onSelect(part.id);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm hover:opacity-80 transition-opacity"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: sys?.color ?? "var(--muted)" }}
                />
                <span className="font-medium">{part.name}</span>
                <span
                  className="ml-auto text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {sys?.name}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
