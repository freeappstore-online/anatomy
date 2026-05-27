interface Props {
  highlight?: string | null;
  searchHighlights?: Set<string>;
  onClick: (id: string) => void;
}

export default function SkeletalSystem({ highlight, searchHighlights, onClick }: Props) {
  const hp = (id: string) => highlight === id || searchHighlights?.has(id);
  const fill = (id: string) => (hp(id) ? "#fbbf24" : "#e8e4d9");
  const stk = (id: string) => (hp(id) ? "#f59e0b" : "#bfb9a8");
  const cur = "pointer" as const;

  return (
    <g id="skeletal-system">
      {/* Skull */}
      <ellipse
        cx="200" cy="58" rx="30" ry="38"
        fill={fill("skull")} stroke={stk("skull")} strokeWidth={1.5}
        style={{ cursor: cur }} onClick={() => onClick("skull")}
      />
      {/* eye sockets */}
      <ellipse cx="189" cy="52" rx="6" ry="5" fill="var(--paper)" opacity={0.6} style={{ pointerEvents: "none" }} />
      <ellipse cx="211" cy="52" rx="6" ry="5" fill="var(--paper)" opacity={0.6} style={{ pointerEvents: "none" }} />
      {/* jaw */}
      <path d="M178 70 Q200 90 222 70" fill="none" stroke={stk("skull")} strokeWidth={1} style={{ pointerEvents: "none" }} />

      {/* Spine */}
      <g style={{ cursor: cur }} onClick={() => onClick("spine")}>
        {Array.from({ length: 20 }, (_, i) => (
          <rect key={i} x="196" y={108 + i * 10} width="8" height="8" rx="2"
            fill={fill("spine")} stroke={stk("spine")} strokeWidth={0.8}
          />
        ))}
      </g>

      {/* Ribs */}
      <g style={{ cursor: cur }} onClick={() => onClick("ribs")}>
        {Array.from({ length: 6 }, (_, i) => {
          const y = 130 + i * 16;
          const w = 32 + (i < 3 ? i * 8 : (5 - i) * 8);
          return (
            <g key={i}>
              <ellipse cx="200" cy={y} rx={w} ry={5}
                fill="none" stroke={fill("ribs")} strokeWidth={3}
              />
            </g>
          );
        })}
      </g>

      {/* Clavicle */}
      <g style={{ cursor: cur }} onClick={() => onClick("clavicle")}>
        <line x1="160" y1="118" x2="196" y2="114" stroke={fill("clavicle")} strokeWidth={4} strokeLinecap="round" />
        <line x1="240" y1="118" x2="204" y2="114" stroke={fill("clavicle")} strokeWidth={4} strokeLinecap="round" />
      </g>

      {/* Scapula */}
      <g style={{ cursor: cur }} onClick={() => onClick("scapula")}>
        <path d="M155 125 L148 160 L165 150 Z" fill={fill("scapula")} stroke={stk("scapula")} strokeWidth={1} />
        <path d="M245 125 L252 160 L235 150 Z" fill={fill("scapula")} stroke={stk("scapula")} strokeWidth={1} />
      </g>

      {/* Pelvis */}
      <path
        d="M168 270 Q165 255 180 250 H220 Q235 255 232 270 Q230 290 215 295 H185 Q170 290 168 270 Z"
        fill={fill("pelvis")} stroke={stk("pelvis")} strokeWidth={1.5}
        style={{ cursor: cur }} onClick={() => onClick("pelvis")}
      />

      {/* Humerus L */}
      <line x1="148" y1="125" x2="120" y2="210" stroke={fill("humerus")} strokeWidth={6} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("humerus")}
      />
      {/* Humerus R */}
      <line x1="252" y1="125" x2="280" y2="210" stroke={fill("humerus")} strokeWidth={6} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("humerus")}
      />

      {/* Radius L */}
      <line x1="118" y1="215" x2="105" y2="270" stroke={fill("radius")} strokeWidth={4} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("radius")}
      />
      {/* Radius R */}
      <line x1="282" y1="215" x2="295" y2="270" stroke={fill("radius")} strokeWidth={4} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("radius")}
      />

      {/* Ulna L */}
      <line x1="122" y1="215" x2="112" y2="272" stroke={fill("ulna")} strokeWidth={4} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("ulna")}
      />
      {/* Ulna R */}
      <line x1="278" y1="215" x2="288" y2="272" stroke={fill("ulna")} strokeWidth={4} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("ulna")}
      />

      {/* Hand bones L */}
      <g style={{ cursor: cur }} onClick={() => onClick("hands")}>
        <circle cx="105" cy="278" r="8" fill={fill("hands")} stroke={stk("hands")} strokeWidth={1} />
        {[-8, -4, 0, 4, 8].map((dx, i) => (
          <line key={i} x1={105 + dx} y1={282} x2={100 + dx} y2={296} stroke={fill("hands")} strokeWidth={2} strokeLinecap="round" />
        ))}
      </g>
      {/* Hand bones R */}
      <g style={{ cursor: cur }} onClick={() => onClick("hands")}>
        <circle cx="295" cy="278" r="8" fill={fill("hands")} stroke={stk("hands")} strokeWidth={1} />
        {[-8, -4, 0, 4, 8].map((dx, i) => (
          <line key={i} x1={295 + dx} y1={282} x2={300 + dx} y2={296} stroke={fill("hands")} strokeWidth={2} strokeLinecap="round" />
        ))}
      </g>

      {/* Femur L */}
      <line x1="182" y1="295" x2="172" y2="410" stroke={fill("femur")} strokeWidth={7} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("femur")}
      />
      {/* Femur R */}
      <line x1="218" y1="295" x2="228" y2="410" stroke={fill("femur")} strokeWidth={7} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("femur")}
      />

      {/* Tibia L */}
      <line x1="170" y1="415" x2="164" y2="530" stroke={fill("tibia")} strokeWidth={5} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("tibia")}
      />
      {/* Tibia R */}
      <line x1="230" y1="415" x2="236" y2="530" stroke={fill("tibia")} strokeWidth={5} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("tibia")}
      />

      {/* Foot bones L */}
      <g style={{ cursor: cur }} onClick={() => onClick("feet")}>
        <ellipse cx="160" cy="545" rx="14" ry="6" fill={fill("feet")} stroke={stk("feet")} strokeWidth={1} />
      </g>
      {/* Foot bones R */}
      <g style={{ cursor: cur }} onClick={() => onClick("feet")}>
        <ellipse cx="240" cy="545" rx="14" ry="6" fill={fill("feet")} stroke={stk("feet")} strokeWidth={1} />
      </g>
    </g>
  );
}
