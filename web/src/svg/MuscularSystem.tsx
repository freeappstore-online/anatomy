interface Props {
  highlight?: string | null;
  searchHighlights?: Set<string>;
  onClick: (id: string) => void;
}

export default function MuscularSystem({ highlight, searchHighlights, onClick }: Props) {
  const hp = (id: string) => highlight === id || searchHighlights?.has(id);
  const fill = (id: string) => (hp(id) ? "#fbbf24" : "#c0392b");
  const fillLight = (id: string) => (hp(id) ? "#fde68a" : "#d4655b");
  const cur = "pointer" as const;

  return (
    <g id="muscular-system">
      {/* Trapezius */}
      <path
        d="M175 108 Q200 100 225 108 Q240 118 245 135 L200 125 L155 135 Q160 118 175 108 Z"
        fill={fill("trapezius")} opacity={0.75}
        style={{ cursor: cur }} onClick={() => onClick("trapezius")}
      />

      {/* Deltoids L */}
      <ellipse cx="147" cy="133" rx="14" ry="18"
        fill={fill("deltoids")} opacity={0.8}
        style={{ cursor: cur }} onClick={() => onClick("deltoids")}
      />
      {/* Deltoids R */}
      <ellipse cx="253" cy="133" rx="14" ry="18"
        fill={fill("deltoids")} opacity={0.8}
        style={{ cursor: cur }} onClick={() => onClick("deltoids")}
      />

      {/* Pectorals */}
      <g style={{ cursor: cur }} onClick={() => onClick("pectorals")}>
        <path
          d="M160 125 Q175 120 197 128 L197 160 Q180 165 162 155 Z"
          fill={fill("pectorals")} opacity={0.75}
        />
        <path
          d="M240 125 Q225 120 203 128 L203 160 Q220 165 238 155 Z"
          fill={fill("pectorals")} opacity={0.75}
        />
      </g>

      {/* Biceps L */}
      <ellipse cx="137" cy="175" rx="9" ry="22"
        fill={fill("biceps")} opacity={0.8}
        transform="rotate(-10 137 175)"
        style={{ cursor: cur }} onClick={() => onClick("biceps")}
      />
      {/* Biceps R */}
      <ellipse cx="263" cy="175" rx="9" ry="22"
        fill={fill("biceps")} opacity={0.8}
        transform="rotate(10 263 175)"
        style={{ cursor: cur }} onClick={() => onClick("biceps")}
      />

      {/* Triceps L */}
      <ellipse cx="132" cy="182" rx="7" ry="20"
        fill={fillLight("triceps")} opacity={0.7}
        transform="rotate(-10 132 182)"
        style={{ cursor: cur }} onClick={() => onClick("triceps")}
      />
      {/* Triceps R */}
      <ellipse cx="268" cy="182" rx="7" ry="20"
        fill={fillLight("triceps")} opacity={0.7}
        transform="rotate(10 268 182)"
        style={{ cursor: cur }} onClick={() => onClick("triceps")}
      />

      {/* Abdominals */}
      <g style={{ cursor: cur }} onClick={() => onClick("abdominals")}>
        {Array.from({ length: 4 }, (_, i) => (
          <g key={i}>
            <rect x="185" y={175 + i * 22} width="12" height="18" rx="3"
              fill={fill("abdominals")} opacity={0.7}
            />
            <rect x="203" y={175 + i * 22} width="12" height="18" rx="3"
              fill={fill("abdominals")} opacity={0.7}
            />
          </g>
        ))}
      </g>

      {/* Latissimus Dorsi L */}
      <path
        d="M158 155 Q155 190 160 220 L172 210 Q168 175 165 150 Z"
        fill={fillLight("latissimus-dorsi")} opacity={0.6}
        style={{ cursor: cur }} onClick={() => onClick("latissimus-dorsi")}
      />
      {/* Latissimus Dorsi R */}
      <path
        d="M242 155 Q245 190 240 220 L228 210 Q232 175 235 150 Z"
        fill={fillLight("latissimus-dorsi")} opacity={0.6}
        style={{ cursor: cur }} onClick={() => onClick("latissimus-dorsi")}
      />

      {/* Glutes L */}
      <ellipse cx="183" cy="290" rx="18" ry="14"
        fill={fill("glutes")} opacity={0.75}
        style={{ cursor: cur }} onClick={() => onClick("glutes")}
      />
      {/* Glutes R */}
      <ellipse cx="217" cy="290" rx="18" ry="14"
        fill={fill("glutes")} opacity={0.75}
        style={{ cursor: cur }} onClick={() => onClick("glutes")}
      />

      {/* Quadriceps L */}
      <ellipse cx="177" cy="360" rx="14" ry="40"
        fill={fill("quadriceps")} opacity={0.75}
        style={{ cursor: cur }} onClick={() => onClick("quadriceps")}
      />
      {/* Quadriceps R */}
      <ellipse cx="223" cy="360" rx="14" ry="40"
        fill={fill("quadriceps")} opacity={0.75}
        style={{ cursor: cur }} onClick={() => onClick("quadriceps")}
      />

      {/* Hamstrings L */}
      <ellipse cx="173" cy="370" rx="10" ry="35"
        fill={fillLight("hamstrings")} opacity={0.6}
        style={{ cursor: cur }} onClick={() => onClick("hamstrings")}
      />
      {/* Hamstrings R */}
      <ellipse cx="227" cy="370" rx="10" ry="35"
        fill={fillLight("hamstrings")} opacity={0.6}
        style={{ cursor: cur }} onClick={() => onClick("hamstrings")}
      />

      {/* Calves L */}
      <ellipse cx="167" cy="475" rx="10" ry="30"
        fill={fill("calves")} opacity={0.75}
        style={{ cursor: cur }} onClick={() => onClick("calves")}
      />
      {/* Calves R */}
      <ellipse cx="233" cy="475" rx="10" ry="30"
        fill={fill("calves")} opacity={0.75}
        style={{ cursor: cur }} onClick={() => onClick("calves")}
      />
    </g>
  );
}
