/* Cat SVG components — Pixar-soft, rounded, huggable */

// Reusable cat face: eyes, nose, whiskers, cheeks
const CatFace = ({ eyeColor = '#2a2320', mouth = 'smile', blush = true }) => (
  <g>
    {/* cheeks */}
    {blush && (
      <>
        <ellipse cx="-22" cy="10" rx="10" ry="5" fill="oklch(0.82 0.08 20)" opacity="0.7"/>
        <ellipse cx="22" cy="10" rx="10" ry="5" fill="oklch(0.82 0.08 20)" opacity="0.7"/>
      </>
    )}
    {/* eyes */}
    <g className="eye">
      <ellipse cx="-14" cy="-4" rx="5" ry="7" fill={eyeColor}/>
      <circle cx="-12.5" cy="-6" r="1.8" fill="white"/>
    </g>
    <g className="eye delay">
      <ellipse cx="14" cy="-4" rx="5" ry="7" fill={eyeColor}/>
      <circle cx="15.5" cy="-6" r="1.8" fill="white"/>
    </g>
    {/* nose */}
    <path d="M -4 8 Q 0 12 4 8 Q 4 14 0 15 Q -4 14 -4 8 Z" fill="oklch(0.7 0.12 20)" stroke="#2a2320" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* mouth */}
    {mouth === 'smile' && (
      <path d="M 0 15 Q 0 20 -6 22 M 0 15 Q 0 20 6 22" stroke="#2a2320" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    )}
    {mouth === 'happy' && (
      <path d="M -7 18 Q 0 26 7 18" stroke="#2a2320" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    )}
    {mouth === 'o' && (
      <ellipse cx="0" cy="20" rx="3" ry="4" fill="#2a2320"/>
    )}
    {/* whiskers */}
    <g stroke="#2a2320" strokeWidth="1.3" strokeLinecap="round" opacity="0.8">
      <line x1="-18" y1="14" x2="-34" y2="12"/>
      <line x1="-18" y1="17" x2="-34" y2="18"/>
      <line x1="18" y1="14" x2="34" y2="12"/>
      <line x1="18" y1="17" x2="34" y2="18"/>
    </g>
  </g>
);

// Teffy — lavender/purple tabby cat with glasses, main hero
const CatTeffy = ({ size = 320, sleeping = false }) => (
  <div className="cat" style={{width: size, height: size}}>
    <svg viewBox="-160 -180 320 360" width={size} height={size}>
      {/* tail */}
      <g className="tail">
        <path d="M 60 60 Q 130 30 120 -40 Q 115 -80 80 -70" fill="oklch(0.82 0.06 300)" stroke="#2a2320" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 90 -10 Q 115 -20 115 -50" stroke="oklch(0.72 0.08 298)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </g>
      {/* body */}
      <ellipse cx="0" cy="70" rx="85" ry="75" fill="oklch(0.82 0.06 300)" stroke="#2a2320" strokeWidth="4"/>
      {/* belly */}
      <ellipse cx="0" cy="90" rx="45" ry="45" fill="oklch(0.95 0.02 300)"/>
      {/* front paws */}
      <ellipse cx="-30" cy="135" rx="18" ry="14" fill="oklch(0.82 0.06 300)" stroke="#2a2320" strokeWidth="4"/>
      <ellipse cx="30" cy="135" rx="18" ry="14" fill="oklch(0.82 0.06 300)" stroke="#2a2320" strokeWidth="4"/>
      {/* toe beans */}
      <circle cx="-36" cy="138" r="2" fill="oklch(0.7 0.1 20)"/>
      <circle cx="-30" cy="140" r="2" fill="oklch(0.7 0.1 20)"/>
      <circle cx="-24" cy="138" r="2" fill="oklch(0.7 0.1 20)"/>
      <circle cx="24" cy="138" r="2" fill="oklch(0.7 0.1 20)"/>
      <circle cx="30" cy="140" r="2" fill="oklch(0.7 0.1 20)"/>
      <circle cx="36" cy="138" r="2" fill="oklch(0.7 0.1 20)"/>
      {/* head */}
      <circle cx="0" cy="-20" r="75" fill="oklch(0.82 0.06 300)" stroke="#2a2320" strokeWidth="4"/>
      {/* ears */}
      <path d="M -62 -60 L -70 -110 L -30 -75 Z" fill="oklch(0.82 0.06 300)" stroke="#2a2320" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M 62 -60 L 70 -110 L 30 -75 Z" fill="oklch(0.82 0.06 300)" stroke="#2a2320" strokeWidth="4" strokeLinejoin="round"/>
      {/* inner ears */}
      <path d="M -58 -70 L -62 -95 L -42 -78 Z" fill="oklch(0.75 0.09 18)"/>
      <path d="M 58 -70 L 62 -95 L 42 -78 Z" fill="oklch(0.75 0.09 18)"/>
      {/* tabby stripes on head */}
      <path d="M -40 -70 Q -35 -60 -30 -70" stroke="oklch(0.65 0.09 300)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M -20 -80 Q -15 -70 -10 -80" stroke="oklch(0.65 0.09 300)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M 20 -80 Q 15 -70 10 -80" stroke="oklch(0.65 0.09 300)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M 40 -70 Q 35 -60 30 -70" stroke="oklch(0.65 0.09 300)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* face (shifted up) */}
      <g transform="translate(0, -20)">
        {sleeping ? (
          <>
            {/* closed eyes */}
            <path d="M -20 -4 Q -14 1 -8 -4" stroke="#2a2320" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
            <path d="M 8 -4 Q 14 1 20 -4" stroke="#2a2320" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
            <ellipse cx="-22" cy="10" rx="10" ry="5" fill="oklch(0.82 0.08 20)" opacity="0.7"/>
            <ellipse cx="22" cy="10" rx="10" ry="5" fill="oklch(0.82 0.08 20)" opacity="0.7"/>
            <path d="M -4 8 Q 0 12 4 8 Q 4 14 0 15 Q -4 14 -4 8 Z" fill="oklch(0.7 0.12 20)" stroke="#2a2320" strokeWidth="1.5"/>
            <path d="M -4 16 Q 0 19 4 16" stroke="#2a2320" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Z Z Z */}
            <text x="30" y="-30" fontFamily="Fredoka" fontSize="18" fill="#2a2320">z</text>
            <text x="42" y="-42" fontFamily="Fredoka" fontSize="22" fill="#2a2320">z</text>
            <text x="56" y="-58" fontFamily="Fredoka" fontSize="28" fill="#2a2320">Z</text>
          </>
        ) : (
          <CatFace mouth="smile"/>
        )}
        {/* glasses */}
        {!sleeping && (
          <g stroke="#2a2320" strokeWidth="2.5" fill="none">
            <circle cx="-14" cy="-4" r="11" fill="white" fillOpacity="0.2"/>
            <circle cx="14" cy="-4" r="11" fill="white" fillOpacity="0.2"/>
            <line x1="-3" y1="-4" x2="3" y2="-4"/>
          </g>
        )}
      </g>
      {/* bow tie */}
      <g transform="translate(0, 5)">
        <path d="M -20 0 L -20 -12 L 0 -6 L 20 -12 L 20 0 L 0 -6 Z" fill="oklch(0.75 0.08 18)" stroke="#2a2320" strokeWidth="3" strokeLinejoin="round"/>
        <circle cx="0" cy="-6" r="3" fill="oklch(0.88 0.04 75)" stroke="#2a2320" strokeWidth="2"/>
      </g>
    </svg>
  </div>
);

// Murka — pink cat with headphones
const CatMurka = ({ size = 240 }) => (
  <div className="cat" style={{width: size, height: size}}>
    <svg viewBox="-160 -180 320 360" width={size} height={size}>
      {/* tail */}
      <g className="tail">
        <path d="M -60 60 Q -130 40 -125 -30 Q -120 -70 -90 -70" fill="oklch(0.85 0.055 20)" stroke="#2a2320" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      {/* body */}
      <ellipse cx="0" cy="70" rx="85" ry="75" fill="oklch(0.85 0.055 20)" stroke="#2a2320" strokeWidth="4"/>
      <ellipse cx="0" cy="90" rx="45" ry="45" fill="oklch(0.97 0.015 20)"/>
      {/* paws */}
      <ellipse cx="-30" cy="135" rx="18" ry="14" fill="oklch(0.85 0.055 20)" stroke="#2a2320" strokeWidth="4"/>
      <ellipse cx="30" cy="135" rx="18" ry="14" fill="oklch(0.85 0.055 20)" stroke="#2a2320" strokeWidth="4"/>
      {/* head */}
      <circle cx="0" cy="-20" r="75" fill="oklch(0.85 0.055 20)" stroke="#2a2320" strokeWidth="4"/>
      {/* ears */}
      <path d="M -62 -60 L -70 -110 L -30 -75 Z" fill="oklch(0.85 0.055 20)" stroke="#2a2320" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M 62 -60 L 70 -110 L 30 -75 Z" fill="oklch(0.85 0.055 20)" stroke="#2a2320" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M -58 -70 L -62 -95 L -42 -78 Z" fill="oklch(0.78 0.1 18)"/>
      <path d="M 58 -70 L 62 -95 L 42 -78 Z" fill="oklch(0.78 0.1 18)"/>
      {/* headphones band */}
      <path d="M -70 -85 Q 0 -140 70 -85" stroke="#2a2320" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M -70 -85 Q 0 -135 70 -85" stroke="oklch(0.82 0.06 300)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* headphone cups */}
      <circle cx="-70" cy="-45" r="18" fill="oklch(0.7 0.09 298)" stroke="#2a2320" strokeWidth="3"/>
      <circle cx="70" cy="-45" r="18" fill="oklch(0.7 0.09 298)" stroke="#2a2320" strokeWidth="3"/>
      <circle cx="-70" cy="-45" r="8" fill="oklch(0.82 0.06 300)"/>
      <circle cx="70" cy="-45" r="8" fill="oklch(0.82 0.06 300)"/>
      {/* face */}
      <g transform="translate(0, -20)">
        <CatFace mouth="happy"/>
      </g>
      {/* note */}
      <text x="90" y="-80" fontFamily="Fredoka" fontSize="24" fill="oklch(0.7 0.09 298)">♪</text>
    </svg>
  </div>
);

// Generic cat — accepts color & accent, used for specialist gallery
const CatChibi = ({ color = 'oklch(0.88 0.04 75)', accent = 'oklch(0.7 0.12 20)', accessory = null, size = 180, expression = 'smile' }) => (
  <div className="cat" style={{width: size, height: size}}>
    <svg viewBox="-120 -140 240 260" width={size} height={size}>
      <g className="tail">
        <path d="M 50 40 Q 100 20 95 -30 Q 90 -55 65 -50" fill={color} stroke="#2a2320" strokeWidth="3.5" strokeLinejoin="round"/>
      </g>
      {/* body */}
      <ellipse cx="0" cy="50" rx="65" ry="58" fill={color} stroke="#2a2320" strokeWidth="3.5"/>
      <ellipse cx="0" cy="70" rx="32" ry="30" fill="oklch(0.97 0.015 80)" opacity="0.7"/>
      {/* paws */}
      <ellipse cx="-22" cy="100" rx="14" ry="10" fill={color} stroke="#2a2320" strokeWidth="3.5"/>
      <ellipse cx="22" cy="100" rx="14" ry="10" fill={color} stroke="#2a2320" strokeWidth="3.5"/>
      {/* head */}
      <circle cx="0" cy="-20" r="58" fill={color} stroke="#2a2320" strokeWidth="3.5"/>
      <path d="M -48 -50 L -55 -90 L -20 -60 Z" fill={color} stroke="#2a2320" strokeWidth="3.5" strokeLinejoin="round"/>
      <path d="M 48 -50 L 55 -90 L 20 -60 Z" fill={color} stroke="#2a2320" strokeWidth="3.5" strokeLinejoin="round"/>
      <path d="M -45 -58 L -50 -78 L -30 -63 Z" fill={accent} opacity="0.7"/>
      <path d="M 45 -58 L 50 -78 L 30 -63 Z" fill={accent} opacity="0.7"/>
      <g transform="translate(0, -20) scale(0.85)">
        <CatFace mouth={expression}/>
      </g>
      {accessory}
    </svg>
  </div>
);

// Tiny cat face (logo / avatar) — simple round head
const CatMark = ({ size = 40, color = 'oklch(0.85 0.055 20)' }) => (
  <svg viewBox="-30 -30 60 60" width={size} height={size}>
    <path d="M -22 -10 L -26 -28 L -10 -20 Z" fill={color} stroke="#2a2320" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M 22 -10 L 26 -28 L 10 -20 Z" fill={color} stroke="#2a2320" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="0" cy="0" r="22" fill={color} stroke="#2a2320" strokeWidth="2.5"/>
    <circle cx="-7" cy="-2" r="2.2" fill="#2a2320"/>
    <circle cx="7" cy="-2" r="2.2" fill="#2a2320"/>
    <path d="M -2 5 Q 0 7 2 5" fill="oklch(0.7 0.12 20)" stroke="#2a2320" strokeWidth="1" strokeLinejoin="round"/>
    <path d="M 0 7 Q 0 10 -3 11 M 0 7 Q 0 10 3 11" stroke="#2a2320" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
);

// Yarn ball (draggable later)
const YarnBall = ({ size = 60, color = 'oklch(0.75 0.08 18)' }) => (
  <svg viewBox="-40 -40 80 80" width={size} height={size}>
    <circle cx="0" cy="0" r="32" fill={color} stroke="#2a2320" strokeWidth="3"/>
    <path d="M -25 -15 Q 0 -5 25 -15 M -28 0 Q 0 10 28 0 M -25 15 Q 0 5 25 15 M -15 -25 Q -5 0 -15 25 M 0 -30 Q 10 0 0 30 M 15 -25 Q 5 0 15 25" stroke="#2a2320" strokeWidth="1.5" fill="none" opacity="0.55"/>
    <path d="M 28 8 Q 50 18 45 35" stroke="#2a2320" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

// Paw print icon
const Paw = ({ size = 24, color = '#2a2320' }) => (
  <svg viewBox="-30 -30 60 60" width={size} height={size}>
    <ellipse cx="0" cy="8" rx="14" ry="11" fill={color}/>
    <ellipse cx="-14" cy="-8" rx="5" ry="7" fill={color}/>
    <ellipse cx="14" cy="-8" rx="5" ry="7" fill={color}/>
    <ellipse cx="-22" cy="4" rx="4" ry="5.5" fill={color}/>
    <ellipse cx="22" cy="4" rx="4" ry="5.5" fill={color}/>
  </svg>
);

Object.assign(window, { CatFace, CatTeffy, CatMurka, CatChibi, CatMark, YarnBall, Paw });
