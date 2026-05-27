interface Props {
  highlight?: string | null;
  searchHighlights?: Set<string>;
  onClick: (id: string) => void;
}

export default function DigestiveSystem({ highlight, searchHighlights, onClick }: Props) {
  const hp = (id: string) => highlight === id || searchHighlights?.has(id);
  const fill = (id: string) => (hp(id) ? "#fbbf24" : "#f39c12");
  const stk = (id: string) => (hp(id) ? "#f59e0b" : "#d68910");
  const cur = "pointer" as const;

  return (
    <g id="digestive-system">
      {/* Esophagus */}
      <path
        d="M200 100 Q200 120 200 145 Q200 165 195 180"
        fill="none" stroke={fill("esophagus")} strokeWidth={4} strokeLinecap="round"
        style={{ cursor: cur }} onClick={() => onClick("esophagus")}
      />

      {/* Stomach */}
      <path
        d="M185 180 Q175 182 170 195 Q165 215 175 228 Q185 235 200 232 Q210 228 212 218 Q210 200 205 188 Q200 180 192 178 Z"
        fill={fill("stomach")} opacity={0.7} stroke={stk("stomach")} strokeWidth={1.5}
        style={{ cursor: cur }} onClick={() => onClick("stomach")}
      />

      {/* Liver */}
      <path
        d="M215 168 Q230 165 242 172 Q250 180 248 195 Q245 205 235 210 Q220 215 210 208 Q205 200 208 185 Q210 175 215 168 Z"
        fill={hp("liver") ? "#fbbf24" : "#a0522d"} opacity={0.7} stroke={hp("liver") ? "#f59e0b" : "#8b4513"} strokeWidth={1.5}
        style={{ cursor: cur }} onClick={() => onClick("liver")}
      />

      {/* Gallbladder */}
      <ellipse cx="230" cy="210" rx="6" ry="8"
        fill={hp("gallbladder") ? "#fbbf24" : "#2ecc71"} opacity={0.8} stroke={hp("gallbladder") ? "#f59e0b" : "#27ae60"} strokeWidth={1}
        style={{ cursor: cur }} onClick={() => onClick("gallbladder")}
      />

      {/* Pancreas */}
      <path
        d="M178 238 Q190 232 210 235 Q225 238 235 235"
        fill="none" stroke={fill("pancreas")} strokeWidth={5} strokeLinecap="round" opacity={0.8}
        style={{ cursor: cur }} onClick={() => onClick("pancreas")}
      />

      {/* Small intestine */}
      <g style={{ cursor: cur }} onClick={() => onClick("small-intestine")}>
        <path
          d="M195 245 Q185 250 182 260 Q180 270 190 275 Q200 278 210 272 Q215 265 208 258 Q200 254 192 260 Q188 268 195 275 Q205 280 212 274 Q218 268 210 262 Q202 258 195 263"
          fill="none" stroke={fill("small-intestine")} strokeWidth={3} opacity={0.7}
        />
      </g>

      {/* Large intestine */}
      <g style={{ cursor: cur }} onClick={() => onClick("large-intestine")}>
        <path
          d="M228 248 L240 250 Q248 255 248 268 L248 285 Q248 295 238 298 L165 298 Q155 295 155 285 L155 268 Q155 258 165 255 L175 248"
          fill="none" stroke={hp("large-intestine") ? "#fbbf24" : "#d4a574"} strokeWidth={5} strokeLinecap="round" opacity={0.7}
        />
      </g>
    </g>
  );
}
