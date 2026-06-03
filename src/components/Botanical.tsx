/**
 * Decorative botanical SVGs — leafy sprigs in the green & gold palette.
 * Purely ornamental, so they're hidden from assistive tech.
 */

type SprigProps = {
  className?: string
  /** Flip horizontally so a pair can mirror each other. */
  flip?: boolean
}

/** A leafy stem that curves gently — nice for flanking a title. */
export function Sprig({ className, flip }: SprigProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      width="120"
      height="60"
      fill="none"
      role="presentation"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M6 54 C 40 50, 78 38, 112 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* leaves along the stem */}
      <g fill="currentColor" opacity="0.92">
        <path d="M30 47 c -6 -9, -2 -16, 9 -18 c -1 11, -3 16, -9 18 Z" />
        <path d="M50 39 c -5 -9, 0 -16, 11 -17 c -2 11, -5 15, -11 17 Z" />
        <path d="M72 28 c -4 -10, 2 -16, 13 -16 c -3 11, -7 14, -13 16 Z" />
        <path d="M44 46 c 4 -9, 11 -10, 18 -5 c -8 6, -13 7, -18 5 Z" />
        <path d="M66 35 c 5 -8, 12 -9, 18 -3 c -8 6, -13 6, -18 3 Z" />
      </g>
      {/* gold berry */}
      <circle cx="108" cy="11" r="3.2" fill="#dcbb66" />
    </svg>
  )
}

/** A small single sprig used as a flourish above headings. */
export function LeafTrio({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 40"
      width="64"
      height="40"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M32 38 L32 14"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <g fill="currentColor">
        <path d="M32 22 c -10 -1, -16 -7, -16 -16 c 10 1, 15 6, 16 16 Z" />
        <path d="M32 22 c 10 -1, 16 -7, 16 -16 c -10 1, -15 6, -16 16 Z" />
        <path d="M32 30 c -7 0, -11 -4, -12 -11 c 7 1, 11 4, 12 11 Z" />
        <path d="M32 30 c 7 0, 11 -4, 12 -11 c -7 1, -11 4, -12 11 Z" />
      </g>
      <circle cx="32" cy="9" r="2.6" fill="#dcbb66" />
    </svg>
  )
}

/** Large corner foliage for hero / page backgrounds. */
export function CornerLeaves({ className, flip }: SprigProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      width="220"
      height="220"
      fill="none"
      role="presentation"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M4 4 C 60 30, 100 80, 120 150 M40 14 C 70 40, 84 70, 90 110 M10 50 C 40 70, 56 100, 66 140"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <g fill="currentColor" opacity="0.85">
        <path d="M70 60 c -14 -6, -20 -18, -18 -34 c 15 5, 22 17, 18 34 Z" />
        <path d="M96 104 c -14 -6, -19 -19, -16 -35 c 15 6, 21 18, 16 35 Z" />
        <path d="M50 96 c -15 -2, -23 -12, -25 -28 c 15 2, 24 11, 25 28 Z" />
        <path d="M114 150 c -13 -7, -17 -21, -12 -36 c 14 7, 19 20, 12 36 Z" />
        <path d="M30 40 c 14 -3, 24 4, 30 19 c -15 3, -25 -3, -30 -19 Z" />
      </g>
    </svg>
  )
}
