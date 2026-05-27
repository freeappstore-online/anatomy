import type { SystemId } from "../types";
import { systems } from "../data/systems";

interface Props {
  activeSystems: Set<SystemId>;
  onToggle: (id: SystemId) => void;
}

export default function SystemSelector({ activeSystems, onToggle }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {systems.map((sys) => {
        const active = activeSystems.has(sys.id);
        return (
          <button
            key={sys.id}
            onClick={() => onToggle(sys.id)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all border"
            style={{
              borderColor: active ? sys.color : "var(--line)",
              background: active ? sys.color + "22" : "var(--panel)",
              color: active ? sys.color : "var(--muted)",
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{
                background: sys.color,
                opacity: active ? 1 : 0.4,
              }}
            />
            {sys.name}
          </button>
        );
      })}
    </div>
  );
}
