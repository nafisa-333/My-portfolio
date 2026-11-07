/**
 * Image-free layered landscape: mountain ridges and drifting mist drawn in SVG,
 * coloured from theme tokens so it works in both light and dark modes.
 */
type Props = {
  className?: string;
  variant?: 'ridges' | 'hills';
  mist?: boolean;
  /** Dissolve the foreground into the page background, like fog on a valley floor. */
  fade?: boolean;
};

export function Landscape({ className = '', variant = 'ridges', mist = true, fade = false }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        {variant === 'ridges' ? (
          <>
            <path
              fill="var(--ridge-1)"
              d="M0 170 L120 120 L210 150 L330 80 L450 140 L560 100 L690 150 L820 70 L950 130 L1080 90 L1210 140 L1330 100 L1440 130 V320 H0Z"
            />
            <path
              fill="var(--ridge-2)"
              d="M0 210 L140 160 L260 200 L390 140 L520 190 L640 150 L780 200 L910 135 L1040 185 L1170 150 L1300 195 L1440 160 V320 H0Z"
            />
            <path
              fill="var(--ridge-3)"
              d="M0 250 C160 220 260 240 380 215 S620 250 760 225 S1020 255 1160 230 S1360 250 1440 235 V320 H0Z"
            />
            <path fill="var(--ridge-4)" d="M0 290 C220 268 420 285 620 272 S1040 290 1240 276 S1400 286 1440 282 V320 H0Z" />
          </>
        ) : (
          <>
            <path fill="var(--ridge-2)" d="M0 220 C200 170 360 200 540 180 S900 150 1080 185 S1340 170 1440 160 V320 H0Z" />
            <path fill="var(--ridge-3)" d="M0 260 C240 230 440 255 680 240 S1080 220 1280 248 S1420 240 1440 238 V320 H0Z" />
          </>
        )}
      </svg>
      {mist && (
        <>
          <div
            className="mist-drift absolute -inset-x-[10%] bottom-[18%] h-[45%]"
            style={{ background: 'radial-gradient(60% 60% at 30% 60%, var(--mist), transparent 70%)' }}
          />
          <div
            className="mist-drift-slow absolute -inset-x-[10%] bottom-[5%] h-[40%]"
            style={{ background: 'radial-gradient(55% 55% at 72% 55%, var(--mist), transparent 70%)' }}
          />
        </>
      )}
      {fade && <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,var(--bg))]" />}
    </div>
  );
}
