interface Props {
  highlight?: string | null;
  searchHighlights?: Set<string>;
  onClick: (id: string) => void;
}

export default function CirculatorySystem({ highlight, searchHighlights, onClick }: Props) {
  const hp = (id: string) => highlight === id || searchHighlights?.has(id);
  const arteryColor = (id: string) => (hp(id) ? "#fbbf24" : "#e74c3c");
  const veinColor = (id: string) => (hp(id) ? "#93c5fd" : "#3b82f6");
  const heartFill = hp("heart") ? "#fbbf24" : "#e74c3c";
  const cur = "pointer" as const;

  return (
    <g id="circulatory-system">
      {/* Heart */}
      <g style={{ cursor: cur }} onClick={() => onClick("heart")}>
        <path
          d="M192 155 Q185 140 192 132 Q200 125 207 135 Q214 125 222 132 Q229 140 222 155 L207 175 Z"
          fill={heartFill} stroke={hp("heart") ? "#f59e0b" : "#c0392b"} strokeWidth={1.5}
        />
      </g>

      {/* Aorta / major arteries */}
      <g style={{ cursor: cur }} onClick={() => onClick("arteries")}>
        {/* Aorta arch */}
        <path
          d="M207 155 L207 170 Q207 180 200 185 L200 280"
          fill="none" stroke={arteryColor("arteries")} strokeWidth={3} strokeLinecap="round"
        />
        {/* Carotid arteries (neck → head) */}
        <line x1="195" y1="135" x2="195" y2="100" stroke={arteryColor("arteries")} strokeWidth={2} />
        <line x1="210" y1="135" x2="210" y2="100" stroke={arteryColor("arteries")} strokeWidth={2} />

        {/* Subclavian → arm arteries */}
        <path d="M195 145 Q175 148 155 160 Q140 170 125 210 Q115 240 108 270"
          fill="none" stroke={arteryColor("arteries")} strokeWidth={2} />
        <path d="M215 145 Q235 148 255 160 Q270 170 280 210 Q290 240 295 270"
          fill="none" stroke={arteryColor("arteries")} strokeWidth={2} />

        {/* Iliac arteries → legs */}
        <path d="M195 280 Q188 300 180 340 Q172 400 168 450 Q164 500 162 535"
          fill="none" stroke={arteryColor("arteries")} strokeWidth={2} />
        <path d="M205 280 Q212 300 220 340 Q228 400 232 450 Q236 500 238 535"
          fill="none" stroke={arteryColor("arteries")} strokeWidth={2} />
      </g>

      {/* Veins */}
      <g style={{ cursor: cur }} onClick={() => onClick("veins")}>
        {/* Superior vena cava */}
        <path d="M200 155 L200 130 Q200 120 200 110"
          fill="none" stroke={veinColor("veins")} strokeWidth={2.5} strokeDasharray="4 3" />

        {/* Arm veins */}
        <path d="M200 135 Q170 140 150 165 Q135 185 120 225 Q110 250 104 275"
          fill="none" stroke={veinColor("veins")} strokeWidth={1.5} strokeDasharray="4 3" />
        <path d="M200 135 Q230 140 250 165 Q265 185 280 225 Q290 250 296 275"
          fill="none" stroke={veinColor("veins")} strokeWidth={1.5} strokeDasharray="4 3" />

        {/* Leg veins */}
        <path d="M197 280 Q190 310 183 360 Q176 410 170 460 Q166 505 163 540"
          fill="none" stroke={veinColor("veins")} strokeWidth={1.5} strokeDasharray="4 3" />
        <path d="M203 280 Q210 310 217 360 Q224 410 230 460 Q234 505 237 540"
          fill="none" stroke={veinColor("veins")} strokeWidth={1.5} strokeDasharray="4 3" />
      </g>
    </g>
  );
}
