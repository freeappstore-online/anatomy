interface Props {
  highlight?: string | null;
  searchHighlights?: Set<string>;
  onClick: (id: string) => void;
}

export default function NervousSystem({ highlight, searchHighlights, onClick }: Props) {
  const hp = (id: string) => highlight === id || searchHighlights?.has(id);
  const fill = (id: string) => (hp(id) ? "#fbbf24" : "#f1c40f");
  const stk = (id: string) => (hp(id) ? "#f59e0b" : "#d4ac0d");
  const cur = "pointer" as const;

  return (
    <g id="nervous-system">
      {/* Brain */}
      <g style={{ cursor: cur }} onClick={() => onClick("brain")}>
        <ellipse cx="200" cy="50" rx="26" ry="30"
          fill={fill("brain")} opacity={0.7} stroke={stk("brain")} strokeWidth={1.5}
        />
        {/* Brain folds */}
        <path d="M182 40 Q190 35 200 38 Q210 35 218 40" fill="none" stroke={stk("brain")} strokeWidth={0.8} opacity={0.5} />
        <path d="M180 50 Q190 45 200 48 Q210 45 220 50" fill="none" stroke={stk("brain")} strokeWidth={0.8} opacity={0.5} />
        <path d="M183 60 Q193 55 200 58 Q207 55 217 60" fill="none" stroke={stk("brain")} strokeWidth={0.8} opacity={0.5} />
        {/* Cerebellum */}
        <ellipse cx="200" cy="72" rx="14" ry="8"
          fill={fill("brain")} opacity={0.5} stroke={stk("brain")} strokeWidth={1}
        />
      </g>

      {/* Spinal cord */}
      <g style={{ cursor: cur }} onClick={() => onClick("spinal-cord")}>
        <path
          d="M200 80 L200 300"
          fill="none" stroke={fill("spinal-cord")} strokeWidth={4} strokeLinecap="round"
        />
        {/* Nerve branches off spinal cord */}
        {Array.from({ length: 12 }, (_, i) => {
          const y = 110 + i * 16;
          return (
            <g key={i}>
              <line x1="200" y1={y} x2="188" y2={y + 5} stroke={fill("spinal-cord")} strokeWidth={1} opacity={0.5} />
              <line x1="200" y1={y} x2="212" y2={y + 5} stroke={fill("spinal-cord")} strokeWidth={1} opacity={0.5} />
            </g>
          );
        })}
      </g>

      {/* Brachial plexus L */}
      <g style={{ cursor: cur }} onClick={() => onClick("brachial-plexus")}>
        <path d="M192 115 Q175 120 160 130 Q145 140 135 165 Q125 190 118 220 Q112 245 108 270"
          fill="none" stroke={fill("brachial-plexus")} strokeWidth={2.5} opacity={0.8}
        />
        {/* Nerve branches */}
        <path d="M155 135 Q148 145 142 160" fill="none" stroke={fill("brachial-plexus")} strokeWidth={1.2} opacity={0.5} />
        <path d="M140 165 Q132 175 128 190" fill="none" stroke={fill("brachial-plexus")} strokeWidth={1.2} opacity={0.5} />
      </g>
      {/* Brachial plexus R */}
      <g style={{ cursor: cur }} onClick={() => onClick("brachial-plexus")}>
        <path d="M208 115 Q225 120 240 130 Q255 140 265 165 Q275 190 282 220 Q288 245 292 270"
          fill="none" stroke={fill("brachial-plexus")} strokeWidth={2.5} opacity={0.8}
        />
        <path d="M245 135 Q252 145 258 160" fill="none" stroke={fill("brachial-plexus")} strokeWidth={1.2} opacity={0.5} />
        <path d="M260 165 Q268 175 272 190" fill="none" stroke={fill("brachial-plexus")} strokeWidth={1.2} opacity={0.5} />
      </g>

      {/* Sciatic nerve L */}
      <g style={{ cursor: cur }} onClick={() => onClick("sciatic-nerve")}>
        <path d="M192 290 Q185 320 180 370 Q175 420 170 465 Q166 500 163 540"
          fill="none" stroke={fill("sciatic-nerve")} strokeWidth={3} opacity={0.8}
        />
        {/* Branches */}
        <path d="M178 380 Q172 400 168 420" fill="none" stroke={fill("sciatic-nerve")} strokeWidth={1.5} opacity={0.5} />
        <path d="M175 430 Q170 450 167 470" fill="none" stroke={fill("sciatic-nerve")} strokeWidth={1.5} opacity={0.5} />
      </g>
      {/* Sciatic nerve R */}
      <g style={{ cursor: cur }} onClick={() => onClick("sciatic-nerve")}>
        <path d="M208 290 Q215 320 220 370 Q225 420 230 465 Q234 500 237 540"
          fill="none" stroke={fill("sciatic-nerve")} strokeWidth={3} opacity={0.8}
        />
        <path d="M222 380 Q228 400 232 420" fill="none" stroke={fill("sciatic-nerve")} strokeWidth={1.5} opacity={0.5} />
        <path d="M225 430 Q230 450 233 470" fill="none" stroke={fill("sciatic-nerve")} strokeWidth={1.5} opacity={0.5} />
      </g>
    </g>
  );
}
