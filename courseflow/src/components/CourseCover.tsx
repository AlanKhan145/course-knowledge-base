import { domainStyle } from "@/lib/domain-style";

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

/**
 * Deterministic Bauhaus-style cover (idea from the design mockups): a grid of geometric tiles
 * in the domain's deep hue + amber + cream. No stock photos, seeded by the course id.
 */
export function CourseCover({ id, domainTitle, className, showIcon = true }: { id: string; domainTitle: string; className?: string; showIcon?: boolean }) {
  const { icon: Icon, hue } = domainStyle(domainTitle);
  const r = rng(hash(id));
  const deep = `hsl(${hue} 42% 24%)`;
  const mid = `hsl(${hue} 44% 34%)`;
  const amber = "#d39b2a";
  const cream = "#f2e9d6";
  const palette = [deep, mid, amber, cream];
  const cols = 4;
  const rows = 2;
  const s = 50;
  const tiles = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const bg = palette[Math.floor(r() * palette.length)];
      let fg = palette[Math.floor(r() * palette.length)];
      if (fg === bg) fg = bg === cream ? deep : cream;
      const kind = Math.floor(r() * 6);
      const rot = Math.floor(r() * 4) * 90;
      const ox = x * s;
      const oy = y * s;
      const c = `${ox + s / 2} ${oy + s / 2}`;
      let shape;
      if (kind === 0) shape = <path d={`M${ox} ${oy} L${ox + s} ${oy} A${s} ${s} 0 0 1 ${ox} ${oy + s} Z`} fill={fg} transform={`rotate(${rot} ${c})`} />;
      else if (kind === 1) shape = <circle cx={ox + s / 2} cy={oy + s / 2} r={s * 0.36} fill={fg} />;
      else if (kind === 2) shape = <path d={`M${ox} ${oy + s} A${s / 2} ${s / 2} 0 0 1 ${ox + s} ${oy + s} Z`} fill={fg} transform={`rotate(${rot} ${c})`} />;
      else if (kind === 3) shape = <path d={`M${ox} ${oy} L${ox + s} ${oy + s} L${ox} ${oy + s} Z`} fill={fg} transform={`rotate(${rot} ${c})`} />;
      else if (kind === 4) shape = <rect x={ox + s * 0.18} y={oy + s * 0.18} width={s * 0.64} height={s * 0.64} rx={s * 0.08} fill={fg} />;
      else shape = <circle cx={ox + s / 2} cy={oy + s / 2} r={s * 0.14} fill={fg} />;
      tiles.push(
        <g key={`${x}-${y}`}>
          <rect x={ox} y={oy} width={s} height={s} fill={bg} />
          {shape}
        </g>,
      );
    }
  }
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`} style={{ background: cream }} aria-hidden>
      <svg viewBox={`0 0 ${cols * s} ${rows * s}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        {tiles}
      </svg>
      {showIcon ? (
        <span className="absolute bottom-2.5 left-2.5 flex size-8 items-center justify-center rounded-lg bg-white/90 shadow-sm dark:bg-black/55" style={{ color: deep }}>
          <Icon className="size-4" />
        </span>
      ) : null}
    </div>
  );
}
