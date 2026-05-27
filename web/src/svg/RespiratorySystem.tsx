interface Props {
  highlight?: string | null;
  searchHighlights?: Set<string>;
  onClick: (id: string) => void;
}

export default function RespiratorySystem({ highlight, searchHighlights, onClick }: Props) {
  const hp = (id: string) => highlight === id || searchHighlights?.has(id);
  const fill = (id: string) => (hp(id) ? "#fbbf24" : "#5dade2");
  const stk = (id: string) => (hp(id) ? "#f59e0b" : "#2e86c1");
  const cur = "pointer" as const;

  return (
    <g id="respiratory-system">
      {/* Trachea */}
      <g style={{ cursor: cur }} onClick={() => onClick("trachea")}>
        <rect x="196" y="95" width="8" height="35" rx="3"
          fill={fill("trachea")} stroke={stk("trachea")} strokeWidth={1}
        />
        {/* Cartilage rings */}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={i} x1="196" y1={98 + i * 7} x2="204" y2={98 + i * 7}
            stroke={stk("trachea")} strokeWidth={0.8}
          />
        ))}
      </g>

      {/* Bronchi */}
      <g style={{ cursor: cur }} onClick={() => onClick("bronchi")}>
        <path d="M198 130 Q190 138 178 145 Q170 148 168 155"
          fill="none" stroke={fill("bronchi")} strokeWidth={3} strokeLinecap="round"
        />
        <path d="M202 130 Q210 138 222 145 Q230 148 232 155"
          fill="none" stroke={fill("bronchi")} strokeWidth={3} strokeLinecap="round"
        />
        {/* Sub-bronchi */}
        <path d="M175 148 Q168 155 163 165" fill="none" stroke={fill("bronchi")} strokeWidth={1.5} />
        <path d="M175 148 Q178 158 175 168" fill="none" stroke={fill("bronchi")} strokeWidth={1.5} />
        <path d="M225 148 Q232 155 237 165" fill="none" stroke={fill("bronchi")} strokeWidth={1.5} />
        <path d="M225 148 Q222 158 225 168" fill="none" stroke={fill("bronchi")} strokeWidth={1.5} />
      </g>

      {/* Left lung */}
      <path
        d="M158 135 Q150 140 148 165 Q146 195 150 215 Q155 225 170 230 Q185 225 190 210 Q195 185 193 160 Q191 140 185 135 Z"
        fill={fill("lungs")} opacity={0.5} stroke={stk("lungs")} strokeWidth={1.5}
        style={{ cursor: cur }} onClick={() => onClick("lungs")}
      />
      {/* Right lung */}
      <path
        d="M242 135 Q250 140 252 165 Q254 195 250 215 Q245 225 230 230 Q215 225 210 210 Q205 185 207 160 Q209 140 215 135 Z"
        fill={fill("lungs")} opacity={0.5} stroke={stk("lungs")} strokeWidth={1.5}
        style={{ cursor: cur }} onClick={() => onClick("lungs")}
      />

      {/* Diaphragm */}
      <path
        d="M150 232 Q175 245 200 240 Q225 245 250 232"
        fill="none" stroke={fill("diaphragm")} strokeWidth={3} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("diaphragm")}
      />
    </g>
  );
}
