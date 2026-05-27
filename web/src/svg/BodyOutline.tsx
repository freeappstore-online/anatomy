/** Base human body silhouette — always rendered as the background layer. */
export default function BodyOutline() {
  return (
    <g id="body-outline" opacity={0.12}>
      {/* Head */}
      <ellipse cx="200" cy="60" rx="36" ry="44" fill="var(--ink)" />
      {/* Neck */}
      <rect x="188" y="100" width="24" height="20" rx="4" fill="var(--ink)" />
      {/* Torso */}
      <path
        d="M148 120 Q148 115 160 115 H240 Q252 115 252 120 V260 Q252 290 230 300 H170 Q148 290 148 260 Z"
        fill="var(--ink)"
      />
      {/* Left arm */}
      <path
        d="M148 125 Q120 130 110 170 Q100 210 95 260 Q92 278 100 280 Q108 282 112 270 L130 200 Q138 170 148 155"
        fill="var(--ink)"
      />
      {/* Right arm */}
      <path
        d="M252 125 Q280 130 290 170 Q300 210 305 260 Q308 278 300 280 Q292 282 288 270 L270 200 Q262 170 252 155"
        fill="var(--ink)"
      />
      {/* Left leg */}
      <path
        d="M170 300 Q165 350 160 420 Q155 480 152 520 Q150 550 155 555 Q165 560 168 550 L175 480 Q178 420 182 360 Q185 330 188 310"
        fill="var(--ink)"
      />
      {/* Right leg */}
      <path
        d="M230 300 Q235 350 240 420 Q245 480 248 520 Q250 550 245 555 Q235 560 232 550 L225 480 Q222 420 218 360 Q215 330 212 310"
        fill="var(--ink)"
      />
    </g>
  );
}
