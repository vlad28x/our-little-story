import { useId, type ReactElement } from 'react';

import type { IllustrationKind } from '../content/illustrations';

const seasonPaint = {
  ceramic: ['#fff3dd', '#e4cab6', '#ae8c88'],
  wood: ['#cc9c71', '#9e6e55', '#6a4944'],
  sage: ['#bcc098', '#839277', '#53695e'],
  copper: ['#efd19a', '#c29267', '#926754'],
  paper: ['#fff1d6', '#ead0b4', '#c39b86'],
  plum: ['#a58798', '#785567', '#52404d'],
  rose: ['#f0bdad', '#cf8694', '#9e5a6d'],
  glass: ['#91aca6', '#557984', '#3a4e63'],
  ochre: ['#f2ca83', '#cc995c', '#98694d'],
  orange: ['#edb681', '#ca8455', '#934e40'],
} as const;

type PaintKey = keyof typeof seasonPaint;

const gold = '#efd096', cream = '#f9ecda', brown = '#5e443d', dark = '#453339';

function MiniSpark({ x, y, size = 8, light }: { x: number; y: number; size?: number; light: string }) {
  return <g>
    <circle cx={x} cy={y} r={size * 0.95} fill={light} opacity=".55" />
    <path d={`M${x} ${y - size}l${size * 0.25} ${size * 0.75} ${size * 0.75} ${size * 0.25}-${size * 0.75} ${size * 0.25}-${size * 0.25} ${size * 0.75}-${size * 0.25}-${size * 0.75}-${size * 0.75}-${size * 0.25} ${size * 0.75}-${size * 0.25}Z`} fill={cream} stroke={gold} strokeWidth=".85" />
  </g>;
}

export function Illustration({ kind, className = '', viewBox = '0 0 100 100' }: { kind: IllustrationKind; className?: string; viewBox?: string }) {
  const id = useId().replace(/:/g, '');
  const paint = (name: PaintKey) => `url(#${id}-${name})`;
  const knit = `url(#${id}-knit)`;
  const light = `url(#${id}-light)`;

  const art = {
    bag: () => <>
      {/* Cozy vintage canvas satchel with leather straps, brass hardware & gusset */}
      <path d="M35 37c0-13 4-20 15-20s15 7 15 20" fill="none" stroke={brown} strokeWidth="6" />
      <path d="M35 36c0-11 4-17 15-17s15 6 15 17" fill="none" stroke="#c7996e" strokeWidth="2.4" />
      <path d="M20 40q30-9 60 0l6 37q-1 8-9 9H23q-8-1-9-9Z" fill={paint('sage')} stroke="#485a4c" strokeWidth="1.9" />
      <path d="M72 39l8 1 6 37q-1 8-9 9H67q9-13 5-47Z" fill="#46574c" opacity=".46" />
      {/* Stitched leather vertical straps */}
      <path d="M31 40v44M69 40v44" stroke={paint('wood')} strokeWidth="5.5" />
      <path d="M31 41v42M69 41v42" stroke="#5c3e35" strokeWidth="1.1" strokeDasharray="3 3" opacity=".6" />
      {/* Rounded flap with subtle fabric texture & dashed trim */}
      <path d="M18 40q32-9 64 0l-4 15q-3 9-12 11H34q-9-2-12-11Z" fill={paint('sage')} stroke="#485a4c" strokeWidth="1.8" />
      <path d="M22 43q28-7 56 0l-3 11q-2 7-10 9H35q-8-2-10-9Z" fill={knit} opacity=".55" />
      <path d="M23 43q27-6 54 0M25 54q4 8 11 9h28q7-1 11-9" fill="none" stroke={cream} strokeWidth="1.35" strokeDasharray="3 2.8" opacity=".82" />
      {/* Gleaming brass clasp lock & rivets */}
      <rect x="42" y="54" width="16" height="14" rx="3" fill={paint('ochre')} stroke="#755235" strokeWidth="1.5" />
      <circle cx="50" cy="60" r="2.1" fill={brown} />
      <path d="M50 61v4M44 56h12" stroke="#fff3cf" strokeWidth="1.1" opacity=".75" />
      <circle cx="31" cy="57" r="2.3" fill={paint('ochre')} stroke="#6c4d32" strokeWidth="1" />
      <circle cx="69" cy="57" r="2.3" fill={paint('ochre')} stroke="#6c4d32" strokeWidth="1" />
      <MiniSpark x={78} y={24} size={7.5} light={light} />
    </>,
    mat: () => <>
      {/* Braided dusty-rose café doormat with woven border & cozy paw emblem */}
      <path d="M14 33 79 26 91 69 21 79Z" fill={dark} opacity=".34" transform="translate(1 4.5)" />
      <path d="M14 33 79 26 91 69 21 79Z" fill={paint('rose')} stroke="#764755" strokeWidth="1.9" />
      <path d="M15 34 78 27 90 68 22 78Z" fill={knit} opacity=".7" />
      <path d="m20 37 55-6 10 34-60 9Z" fill="none" stroke={gold} strokeWidth="2.3" opacity=".86" />
      <path d="m24 40 48-5 8 28-51 8Z" fill="none" stroke={cream} strokeWidth="1.15" strokeDasharray="3 2.5" opacity=".7" />
      {/* Warm brass-ochre welcome medallion with tiny cat paw */}
      <ellipse cx="52" cy="52" rx="14" ry="10" transform="rotate(-7 52 52)" fill={paint('ochre')} stroke="#7c563a" strokeWidth="1.5" />
      <ellipse cx="52" cy="54" rx="4.2" ry="3.1" transform="rotate(-7 52 54)" fill="#75493f" />
      <circle cx="47.5" cy="49.5" r="1.6" fill="#75493f" /><circle cx="51.6" cy="48.2" r="1.6" fill="#75493f" /><circle cx="55.8" cy="49.2" r="1.6" fill="#75493f" />
      <path d="M19 34l55-6" stroke={cream} strokeWidth="1.4" opacity=".65" />
    </>,
    paper: () => <>
      {/* Curled handwritten café note/receipt with brass paperclip & coffee ring */}
      <path d="M22 18 71 23l9 57-58 6Z" fill={dark} opacity=".28" transform="translate(2 4)" />
      <path d="M22 17 71 22l8 55q-2 4-7 5l-50 4Z" fill={paint('paper')} stroke="#7c5b4f" strokeWidth="1.85" />
      {/* Curled corner shadow & highlight */}
      <path d="M64 81q6-2 7-10l8 5q-3 6-15 5Z" fill={paint('copper')} stroke="#835f4e" strokeWidth="1.2" />
      {/* Faint warm café cup ring stamp */}
      <circle cx="60" cy="60" r="10.5" fill="none" stroke="#c78d62" strokeWidth="2" opacity=".32" />
      {/* Bold plum checkmark & crisp ruled handwriting lines */}
      <path d="m32 28 5 4.5 9-7.5" fill="none" stroke="#785567" strokeWidth="2.4" />
      <path d="M49 30l14 1.5M30 40l33 3M29 48l34 3M29 56l31 2.5M29 64l24 1.5M29 72l19 1" fill="none" stroke="#85655c" strokeWidth="1.75" opacity=".78" />
      {/* Gleaming brass paperclip at top */}
      <path d="M46 13q0-5 5-5t5 5v11q0 4-4 4t-4-4v-9" fill="none" stroke={paint('ochre')} strokeWidth="2.8" />
      <path d="M46 13q0-5 5-5t5 5v11q0 4-4 4t-4-4v-9" fill="none" stroke="#7c5938" strokeWidth="1" />
      <MiniSpark x={73} y={19} size={7.5} light={light} />
    </>,
    cup: () => <>
      {/* Takeaway café cup with ribbed dusty-rose sleeve, sage dome lid & warm steam */}
      <path d="M30 33q20 6 40 0l-6 48q-14 6-28 0Z" fill={paint('ceramic')} stroke="#765a52" strokeWidth="1.85" />
      {/* Ribbed rose heat sleeve */}
      <path d="M32 45q18 5 36 0l-3 22q-15 4-30 0Z" fill={paint('rose')} stroke="#7d4c5b" strokeWidth="1.5" />
      <path d="M38 47l1.5 19M45 48l1 20M55 48l-1 20M62 47l-1.5 19" stroke="#9e5a6d" strokeWidth="1" opacity=".45" />
      {/* Cream café emblem on sleeve */}
      <circle cx="50" cy="57" r="7.5" fill={paint('paper')} stroke="#8d5c66" strokeWidth="1.2" />
      <path d="M50 61c-6-3.5-3-7.5 0-4.5 3-3 6 1 0 4.5Z" fill={paint('rose')} />
      {/* Sage snap-on takeaway lid */}
      <path d="M27 28q23-6 46 0l2 6q-25 7-50 0Z" fill={paint('sage')} stroke="#4a5c4f" strokeWidth="1.75" />
      <path d="M31 23q19-4 38 0l3 5q-22 4-44 0Z" fill="#c7cca8" stroke="#53695e" strokeWidth="1.5" />
      <rect x="57" y="22.5" width="7" height="2.6" rx="1.2" fill="#46594e" />
      {/* Warm specular highlight & rising aroma steam */}
      <path d="M35 37l1.2 6m2.5 27 1 7" stroke={cream} strokeWidth="1.8" opacity=".8" />
      <path d="M44 17c-4-4 4-7 0-11m11 10c-3-4 4-6 0-10" fill="none" stroke={cream} strokeWidth="2.1" opacity=".82" />
      <MiniSpark x={73} y={20} size={7} light={light} />
    </>,
    umbrella: () => <>
      {/* Rich plum & dusty-rose umbrella with wooden crook handle & glistening raindrops */}
      <path d="M50 24v52q0 12 9 12t10-9" fill="none" stroke={brown} strokeWidth="4.6" />
      <path d="M50 25v51q0 10 8 11" fill="none" stroke={paint('copper')} strokeWidth="1.9" />
      {/* Scalloped umbrella canopy */}
      <path d="M11 49q11-31 39-32 29 0 39 32-13-8-26 1-13-8-26 0-13-7-26-1Z" fill={paint('plum')} stroke="#483642" strokeWidth="1.9" />
      <path d="M12 49q11-30 38-31 28 0 38 31-13-8-25 1-13-8-26 0-13-7-25-1Z" fill={knit} opacity=".45" />
      <path d="M37 50q3-23 13-33 12 10 13 33-13-8-26 0Z" fill={paint('rose')} stroke="#6c4553" strokeWidth="1.55" />
      <path d="M17 44q10-16 25-21m16 0q14 5 24 19" fill="none" stroke={cream} strokeWidth="1.45" strokeDasharray="3 2.8" opacity=".68" />
      {/* Brass ferrule tip */}
      <path d="M50 11v6" stroke="#755336" strokeWidth="3.2" />
      <circle cx="50" cy="15" r="2.6" fill={paint('ochre')} stroke="#755336" strokeWidth="1.1" />
      {/* Tiny glistening raindrops */}
      <path d="M21 63q3 5 0 8t-3-3q0-2 3-5Zm11 10q2.5 4.5 0 7t-2.5-2.5q0-2 2.5-4.5Zm48-11q3 5 0 8t-3-3q0-2 3-5Z" fill={paint('glass')} stroke="#d9ece8" strokeWidth="1" />
    </>,
    token: () => <>
      {/* Heavy antique brass token matching cafeShelf10 */}
      <circle cx="50" cy="52" r="32" fill="#6b4b32" stroke="#4f3626" strokeWidth="1.8" />
      <circle cx="50" cy="48" r="31" fill={paint('ochre')} stroke="#765134" strokeWidth="1.9" />
      <circle cx="50" cy="48" r="24.5" fill={paint('copper')} stroke="#93653e" strokeWidth="1.6" strokeDasharray="3.8 3" />
      <circle cx="50" cy="48" r="19" fill={paint('ochre')} stroke="#f6dfa8" strokeWidth="1.3" opacity=".9" />
      {/* Twin punched token holes with bevel depth */}
      <circle cx="40.5" cy="48" r="4.4" fill="#593f34" stroke="#f2cf94" strokeWidth="1.2" />
      <circle cx="59.5" cy="48" r="4.4" fill="#593f34" stroke="#f2cf94" strokeWidth="1.2" />
      <path d="M28 36q7-13 22-14m2 46q12-2 19-12" fill="none" stroke="#fff2c8" strokeWidth="1.8" opacity=".82" />
      <MiniSpark x={73} y={24} size={9.5} light={light} />
    </>,
    scarf: () => <>
      {/* Thick cozy knitted plum & rose scarf with ochre stripes & tassels */}
      <path d="M54 37q20 1 23 18l6 24-18 6-11-34Z" fill={paint('plum')} stroke="#493644" strokeWidth="1.8" />
      <path d="M55 39q18 1 21 16l5 22-16 5-10-31Z" fill={knit} opacity=".8" />
      <path d="m66 82 2 8m4-9 2 8m4-9 2 8m4-9 2 8" stroke="#c89b72" strokeWidth="2.1" />
      {/* Wrapped collar loop */}
      <path d="M18 28q3-15 29-17 22-2 35 10 6 9-1 18-9 9-30 10-20 0-29-8-6-4-4-13Z" fill={paint('plum')} stroke="#493644" strokeWidth="1.9" />
      <path d="M20 28q3-13 27-15 20-2 32 9 5 8-1 15-8 8-28 9-18 0-26-7-5-3-4-11Z" fill={knit} opacity=".85" />
      <path d="M25 22q21-12 48 0M25 32q21 8 48-3" fill="none" stroke={cream} strokeWidth="2.2" opacity=".78" />
      {/* Front draped tail with dusty-rose & gold woven stripes */}
      <path d="M33 41q11 5 24 0l-5 42q-12 5-25 1Z" fill={paint('plum')} stroke="#493644" strokeWidth="1.85" />
      <path d="M34 42q10 4 22 0l-4 40q-11 4-23 1Z" fill={knit} opacity=".85" />
      <path d="M32 52q11 3 23-1M30 66q11 3 23-1" fill="none" stroke={paint('rose')} strokeWidth="4.2" />
      <path d="M31 59q11 3 23-1M29 74q11 3 23-1" fill="none" stroke={gold} strokeWidth="2.1" />
      <path d="m29 85-2 8m7-7-2 8m7-8-1 8m6-9v8m5-9 1 8" stroke="#e4c398" strokeWidth="2.1" />
    </>,
    tea: () => <>
      {/* Handcrafted porcelain teacup & saucer matching sugar8 with glowing amber tea */}
      <ellipse cx="49" cy="78" rx="38" ry="10.5" fill={paint('ceramic')} stroke="#755952" strokeWidth="1.85" />
      <ellipse cx="49" cy="77.5" rx="32" ry="7.6" fill="none" stroke="#9e6d7d" strokeWidth="1.6" opacity=".82" />
      {/* Sculpted teacup handle */}
      <path d="M67 45q19-7 19 5 1 12-16 15l-4-2 1-5q10-1 12-7 0-5-11-1Z" fill={paint('ceramic')} stroke="#755952" strokeWidth="1.8" />
      {/* Cup body with signature dusty-rose glaze stripe */}
      <path d="M22 41h50l-2 15q-3 18-16 20-10 2-17-1-13-4-14-24Z" fill={paint('ceramic')} stroke="#755952" strokeWidth="1.85" />
      <path d="M25 52q16 8 44 1" fill="none" stroke="#a66f81" strokeWidth="2.6" opacity=".85" />
      <path d="M29 58q13 5 35 1M28 48l3 18" fill="none" stroke={cream} strokeWidth="1.5" opacity=".72" />
      {/* Rim & glowing amber tea */}
      <ellipse cx="47" cy="41" rx="25" ry="8.4" fill={paint('paper')} stroke="#836459" strokeWidth="1.4" />
      <ellipse cx="47" cy="42" rx="21" ry="5.8" fill={paint('orange')} />
      <path d="M31 41q11-4.5 25-1.5" fill="none" stroke="#ffe7b0" strokeWidth="1.7" opacity=".85" />
      {/* Curling aromatic steam & warm sparkle */}
      <path d="M35 30c-6-6 6-10 0-17m15 15c-5-6 6-10 0-17m12 19c-4-5 4-8 0-13" fill="none" stroke={cream} strokeWidth="2.2" opacity=".84" />
      <MiniSpark x={73} y={22} size={8} light={light} />
    </>,
    'button-piece': () => <>
      {/* Thick glossy vintage sage coat button with beveled rim & gold cross-stitch */}
      <circle cx="50" cy="53" r="30" fill="#46574c" stroke="#36463d" strokeWidth="1.8" />
      <circle cx="50" cy="49" r="29" fill={paint('sage')} stroke="#485a4d" strokeWidth="1.9" />
      <circle cx="50" cy="49" r="21.5" fill="#70826b" stroke="#dbe0bd" strokeWidth="1.8" opacity=".85" />
      <circle cx="50" cy="49" r="19" fill={paint('sage')} />
      <path d="M32 33q13-13 28-6m-1 41q10-3 15-12" fill="none" stroke={cream} strokeWidth="1.8" opacity=".76" />
      {/* Four deep button holes & warm crossed linen threads */}
      <circle cx="42" cy="41" r="3" fill="#3a4a3f" /><circle cx="58" cy="41" r="3" fill="#3a4a3f" />
      <circle cx="42" cy="57" r="3" fill="#3a4a3f" /><circle cx="58" cy="57" r="3" fill="#3a4a3f" />
      <path d="M42 41l16 16m0-16L42 57" stroke={gold} strokeWidth="3.2" />
      <path d="M42 41l16 16m0-16L42 57" stroke={cream} strokeWidth="1.1" opacity=".85" />
    </>,
    'triangle-piece': () => <>
      {/* Stitched dusty-rose umbrella gore patch with knit weave, grommet & thread */}
      <path d="M50 17 86 76q-36 7-72 2Z" fill={dark} opacity=".3" transform="translate(1 3.5)" />
      <path d="M49 16 86 75q-37 7-73 3Z" fill={paint('rose')} stroke="#754957" strokeWidth="1.9" />
      <path d="M49 18 84 74q-35 6-69 3Z" fill={knit} opacity=".62" />
      <path d="M49 25 78 70q-29 5-57 2Z" fill="none" stroke={cream} strokeWidth="1.7" strokeDasharray="3.2 2.6" opacity=".88" />
      {/* Folded top corner */}
      <path d="M41 30q8 4 16 0l-8-14Z" fill={paint('paper')} stroke="#815a63" strokeWidth="1.5" />
      {/* Brass reinforcing grommet & trailing thread */}
      <circle cx="49" cy="66" r="4.8" fill={paint('ochre')} stroke="#755235" strokeWidth="1.4" />
      <circle cx="49" cy="66" r="1.9" fill="#5e3d49" />
      <path d="M68 61c12 2 17-4 14-12" fill="none" stroke={gold} strokeWidth="1.8" />
      <MiniSpark x={78} y={32} size={7} light={light} />
    </>,
    'ribbon-piece': () => <>
      {/* Undulating ochre-gold silk tie ribbon with shaded fold & porcelain snap */}
      <path d="M12 55q22-15 44-4t32-6l-6 18q-18 8-34 0t-32 4l4-6Z" fill={dark} opacity=".28" transform="translate(1 3.5)" />
      <path d="M12 52q21-16 44-5t32-7l-6 17q-17 9-34 0t-31 4l5-4Z" fill={paint('ochre')} stroke="#765134" strokeWidth="1.9" />
      <path d="M44 43q7 2 14 5l-5 15q-8-3-14-4Z" fill={paint('copper')} opacity=".65" />
      <path d="M18 51q19-12 38-3t27-5M17 57q19-10 38-1t24-3" fill="none" stroke={cream} strokeWidth="1.5" strokeDasharray="3 2.5" opacity=".9" />
      {/* Stitched porcelain & brass snap button */}
      <circle cx="71" cy="49" r="5.6" fill={paint('ceramic')} stroke="#765134" strokeWidth="1.5" />
      <circle cx="71" cy="49" r="2.5" fill={paint('ochre')} stroke="#765134" strokeWidth=".9" />
      <MiniSpark x={23} y={32} size={7} light={light} />
    </>,
    leaf: () => <>
      {/* Autumn café leaf with warm sage-ochre gouache shading & crisp veins */}
      <path d="M19 75q-2-44 61-57 10 59-61 57Z" fill={paint('sage')} stroke="#495b48" strokeWidth="1.9" />
      <path d="M34 45q16-20 45-26-3 24-21 40-15 12-35 15 3-17 11-29Z" fill={paint('ochre')} opacity=".34" />
      <path d="M15 84q26-31 56-57M35 61l-1-20m14 7 21 1m-12-11 1-11m-22 44 16 1" fill="none" stroke="#4c5d49" strokeWidth="1.85" />
      <path d="M23 63q9-24 38-34" fill="none" stroke={cream} strokeWidth="1.9" opacity=".76" />
      {/* Tiny glistening dewdrop */}
      <circle cx="58" cy="47" r="3" fill={paint('glass')} stroke={cream} strokeWidth="1" opacity=".88" />
    </>,
    spoon: () => <>
      {/* Vintage copper-and-porcelain café teaspoon with glowing glint */}
      <path d="M44 48 30 82q-3 8 3.5 10.5 6.5 2 9.5-6l13-35Z" fill={paint('copper')} stroke="#6c4939" strokeWidth="1.8" />
      <ellipse cx="36" cy="84.5" rx="4.5" ry="5.8" transform="rotate(22 36 84.5)" fill={paint('ochre')} stroke="#6c4939" strokeWidth="1.4" />
      <path d="M43 53l-9 23" stroke={cream} strokeWidth="1.5" opacity=".78" />
      {/* Sculpted glossy spoon bowl */}
      <ellipse cx="56" cy="30" rx="17" ry="23" transform="rotate(13 56 30)" fill={paint('ceramic')} stroke="#725751" strokeWidth="1.9" />
      <ellipse cx="56.5" cy="30.5" rx="11.5" ry="16.2" transform="rotate(13 56.5 30.5)" fill={paint('glass')} opacity=".32" />
      <path d="M46 33q-1-13 10-19m-5 27q7 6 12-4" fill="none" stroke="#fffbf0" strokeWidth="2.1" />
      <MiniSpark x={69} y={17} size={8} light={light} />
    </>,
    cloud: () => <>
      {/* Plush cozy stitched lavender-plum cloud pillow with tiny raindrops */}
      <path d="M20 65Q6 58 17 42Q20 20 41 27Q56 8 74 29Q94 27 91 52Q93 70 73 70H28Z" fill={paint('plum')} stroke="#493644" strokeWidth="1.9" />
      <path d="M21 64Q8 58 18 42Q21 22 41 28Q56 10 73 30Q92 29 90 52Q91 69 72 69H28Z" fill={knit} opacity=".55" />
      <path d="M24 62q-10-6-4-18q6-18 22-12q16-16 30 2q15-2 14 16q1 15-14 15H30Z" fill="none" stroke={cream} strokeWidth="1.5" strokeDasharray="3 2.5" opacity=".78" />
      {/* Cozy smiling face & rosy cheeks */}
      <path d="M35 48q4-3.5 8 0m15 0q4-3.5 8 0m-19 7q4 3.5 8 0" fill="none" stroke={cream} strokeWidth="2" />
      <ellipse cx="30" cy="54" rx="4.5" ry="2.4" fill={paint('rose')} opacity=".85" />
      <ellipse cx="70" cy="54" rx="4.5" ry="2.4" fill={paint('rose')} opacity=".85" />
      {/* Three gleaming glass raindrops below */}
      <path d="M34 75q3 5 0 8t-3-3q0-2 3-5Zm16 3q3 5 0 8t-3-3q0-2 3-5Zm16-3q3 5 0 8t-3-3q0-2 3-5Z" fill={paint('glass')} stroke="#e4f2ef" strokeWidth="1.1" />
    </>,
    'umbrella-case': () => <>
      {/* Tailored sage umbrella slipcase with wooden collar, wrist loop & brass snap */}
      <path d="M62 21q14-6 15 8t-10 14" fill="none" stroke={brown} strokeWidth="3.2" />
      <path d="M62 21q14-6 15 8t-10 14" fill="none" stroke={paint('copper')} strokeWidth="1.3" />
      <path d="M33 17q17-7 32 0l6 59q-20 14-43 1Z" fill={paint('sage')} stroke="#46584b" strokeWidth="1.9" />
      <path d="M56 17l9 1 6 58q-7 5-15 7Z" fill="#46584b" opacity=".32" />
      {/* Stitched wood-leather collar band */}
      <path d="M32 27q18 5 34 0l1 9q-18 5-36 0Z" fill={paint('wood')} stroke="#5c3e35" strokeWidth="1.5" />
      <path d="M50 37v42" stroke={cream} strokeWidth="1.5" strokeDasharray="3 2.5" opacity=".78" />
      <circle cx="50" cy="33" r="4.2" fill={paint('ochre')} stroke="#6c4b30" strokeWidth="1.3" />
      <circle cx="50" cy="33" r="1.4" fill={cream} opacity=".8" />
      <MiniSpark x={24} y={30} size={7} light={light} />
    </>,
    star: () => <>
      {/* Radiant wish star matching Season 2 star aura */}
      <circle cx="50" cy="49" r="40" fill={light} />
      <circle cx="50" cy="49" r="28" fill="none" stroke={gold} strokeWidth="1.2" strokeDasharray="3.5 4" opacity=".62" />
      <path d="M50 11 61 36 88 39 68 57l5 27-23-14-23 14 5-27-20-18 27-3Z" fill={paint('ochre')} stroke="#7c5534" strokeWidth="1.9" />
      <path d="M50 11v41l23 32-5-27 20-18-27-3Z" fill={paint('copper')} opacity=".35" />
      <path d="m50 18 7 20 20 3-15 11 3 19-15-9" fill="none" stroke="#fff6d6" strokeWidth="1.9" opacity=".84" />
      <circle cx="50" cy="49" r="6" fill="#fffaf0" opacity=".8" />
      <MiniSpark x={22} y={24} size={7.5} light={light} />
      <MiniSpark x={81} y={72} size={6.5} light={light} />
    </>,
    controller: () => <>
      {/* Cozy retro co-op gamepad in rich plum & jewel tones */}
      <path d="M22 33q7-11 28-11t28 11q10 12 13 34 1 11-5 12-6 2-14-8L63 61H37l-9 10q-8 10-14 8-6-1-5-12 3-22 13-34Z" fill="#3a2c38" transform="translate(0 3)" opacity=".65" />
      <path d="M22 31q7-11 28-11t28 11q10 12 13 34 1 11-5 12-6 2-14-8L63 59H37l-9 10q-8 10-14 8-6-1-5-12 3-22 13-34Z" fill={paint('plum')} stroke="#43323f" strokeWidth="1.9" />
      <path d="M16 53q3-13 10-20 8-8 24-8t24 8" fill="none" stroke={cream} strokeWidth="1.7" opacity=".68" />
      {/* Sculpted D-pad & thumbstick */}
      <path d="M28 32v17M20 40.5h16" stroke="#3c2e3b" strokeWidth="5.2" />
      <path d="M28 33v15M21 40.5h14" stroke="#8b7589" strokeWidth="1.6" />
      <circle cx="42" cy="52" r="6.5" fill="#5e4b5d" stroke="#3c2e3b" strokeWidth="1.6" />
      <circle cx="41" cy="51" r="2.6" fill="#a58fa3" opacity=".65" />
      {/* Jewel action buttons */}
      <circle cx="70" cy="34" r="3.7" fill={paint('sage')} stroke="#435447" strokeWidth="1.2" />
      <circle cx="78" cy="42" r="3.7" fill={paint('rose')} stroke="#734352" strokeWidth="1.2" />
      <circle cx="62" cy="42" r="3.7" fill={paint('ochre')} stroke="#755233" strokeWidth="1.2" />
      <circle cx="70" cy="50" r="3.7" fill={paint('glass')} stroke="#344a57" strokeWidth="1.2" />
      {/* Glowing green status LED */}
      <circle cx="50" cy="31" r="3" fill="#bce6a5" stroke="#4f6b47" strokeWidth="1.2" />
      <MiniSpark x={50} y={24} size={6} light={light} />
    </>,
    envelope: () => <>
      {/* Mini Season 2 kraft photo-lab envelope matching PhotoEnvelope & dropbox9 */}
      <rect x="13" y="29" width="76" height="49" rx="5" fill={dark} opacity=".28" transform="translate(1 3.5)" />
      {/* Peeking cream photograph corner */}
      <rect x="21" y="20" width="58" height="22" rx="2.5" fill={cream} stroke="#a68a78" strokeWidth="1.4" transform="rotate(-2.5 50 30)" />
      <rect x="12" y="28" width="76" height="49" rx="5" fill={paint('paper')} stroke="#735449" strokeWidth="1.9" />
      <path d="M14 75L42 52M86 75L58 52" stroke="#a8846d" strokeWidth="1.5" opacity=".7" />
      {/* Cast shadow under flap + folded triangular flap */}
      <path d="M14 31l36 27 36-27v3L50 61 14 34Z" fill="#5e3e30" opacity=".24" />
      <path d="M13 30q0-2 3-2h68q3 0 3 2L50 57Z" fill={paint('ceramic')} stroke="#735449" strokeWidth="1.8" />
      <path d="M19 30.5h62" stroke="#fff7e6" strokeWidth="1.4" opacity=".78" />
      {/* Dimensional dusty-rose wax seal with star */}
      <circle cx="50" cy="57" r="11" fill="#4f2f34" opacity=".24" />
      <circle cx="50" cy="55" r="10.5" fill={paint('rose')} stroke="#754352" strokeWidth="1.6" />
      <circle cx="50" cy="55" r="7.4" fill="none" stroke="#f7ced4" strokeWidth=".9" opacity=".6" />
      <path d="M50 50.5 51.3 53.7 54.5 55 51.3 56.3 50 59.5 48.7 56.3 45.5 55 48.7 53.7Z" fill={cream} />
      <MiniSpark x={81} y={20} size={8} light={light} />
    </>,
    cafe: () => <>
      {/* Charming miniature «Пауза» café facade with striped awning & warm glowing window */}
      <rect x="17" y="38" width="66" height="44" rx="2.5" fill={paint('ceramic')} stroke="#6d5148" strokeWidth="1.85" />
      <rect x="15" y="79" width="70" height="4.5" rx="1.5" fill={paint('wood')} stroke="#593f38" strokeWidth="1.3" />
      {/* Glowing warm café display window & wooden door */}
      <circle cx="38" cy="60" r="16" fill={light} opacity=".7" />
      <rect x="25" y="51" width="25" height="20" rx="2.5" fill={paint('ochre')} stroke="#6c4b36" strokeWidth="1.6" />
      <path d="M37.5 51v20M25 61h25" stroke="#7c5640" strokeWidth="1.3" />
      <path d="M29 56l5-3m-4 13 6-3" stroke={cream} strokeWidth="1.3" opacity=".8" />
      <path d="M57 79V54q0-4 7.5-4t7.5 4v25Z" fill={paint('wood')} stroke="#593e36" strokeWidth="1.6" />
      <circle cx="69" cy="66" r="1.8" fill={gold} />
      {/* Scalloped dusty-rose & cream café awning */}
      <path d="M17 42h66v4.5H17Z" fill={dark} opacity=".22" />
      <path d="M22 20h56l10 21q-9.5 8-19 1-9.5 7-19 0-9.5 7-19 0-9.5 7-19-1Z" fill={paint('rose')} stroke="#754653" strokeWidth="1.85" />
      <path d="M28.1 22.4 21.1 42.2M42.7 22.4 40.3 42.6M57.3 22.4 59.7 42.6M71.9 22.4 78.9 42.2" stroke={cream} strokeWidth="2.8" opacity=".9" />
      <MiniSpark x={79} y={16} size={7.5} light={light} />
    </>,
    'tea-for-two': () => <>
      {/* Two cozy ceramic mugs on a warm wooden tray with rising steam */}
      <path d="M11 74h78l-5 8H16Z" fill={paint('wood')} stroke="#5d4138" strokeWidth="1.8" />
      <path d="M16 76.5h68" stroke="#f0cca0" strokeWidth="1.3" opacity=".68" />
      {/* Left cream-and-rose mug */}
      <path d="M44 48q11-3 9 5-2 7-9 5" fill="none" stroke="#755850" strokeWidth="3.2" />
      <path d="M16 43h29l-1 20q-2 11-14 11-11 0-13-11Z" fill={paint('ceramic')} stroke="#72554e" strokeWidth="1.8" />
      <path d="M18 54q12 4 25 0" fill="none" stroke="#b67486" strokeWidth="2.5" />
      <ellipse cx="30.5" cy="43" rx="14.5" ry="4.8" fill={paint('orange')} stroke={cream} strokeWidth="1.6" />
      {/* Right sage mug */}
      <path d="M81 53q10-3 9 5-2 6-9 5" fill="none" stroke="#485a4c" strokeWidth="3" />
      <path d="M56 49h26l-1 16q-2 9-12 9t-12-9Z" fill={paint('sage')} stroke="#485a4c" strokeWidth="1.8" />
      <path d="M58 59q11 3 22 0" fill="none" stroke={cream} strokeWidth="2" opacity=".82" />
      <ellipse cx="69" cy="49" rx="13" ry="4.2" fill={paint('orange')} stroke={cream} strokeWidth="1.5" />
      {/* Rising aromatic steam */}
      <path d="M26 35c-5-6 5-9 0-15m40 20c-4-5 5-8 0-14" fill="none" stroke={cream} strokeWidth="2.1" opacity=".84" />
      <MiniSpark x={74} y={24} size={7} light={light} />
    </>,
    promenade: () => <>
      {/* Dusk riverside promenade with glowing vintage lantern, wooden bench & water reflections */}
      <circle cx="28" cy="28" r="28" fill={light} />
      {/* River water band & warm reflections */}
      <path d="M10 73q20-6 40 0t40 0v12H10Z" fill={paint('glass')} opacity=".42" />
      <path d="M14 76q16-5 36 0t36 0m-60 6q14-4 28 0t28-1" fill="none" stroke="#537380" strokeWidth="1.8" />
      <path d="M22 79h14m-10 4h10" stroke={gold} strokeWidth="1.8" opacity=".85" />
      {/* Wrought-iron lantern post & glowing ochre head */}
      <path d="M28 73V34m-7 39h14m-7-53v-5" stroke="#4f3d44" strokeWidth="2.9" />
      <path d="M19 35l3-14h12l3 14Z" fill={paint('ochre')} stroke="#6c4d35" strokeWidth="1.7" />
      <path d="M23 35V22m10 0v13" stroke="#fff6d4" strokeWidth="1.2" opacity=".8" />
      <path d="M17 21h22l-11-5Z" fill="#4f3d44" />
      {/* Cozy oak & sage embankment bench */}
      <path d="M48 50h36v13H48Z" fill={paint('wood')} stroke="#5c4037" strokeWidth="1.7" />
      <path d="M48 56h36" stroke="#f0cca0" strokeWidth="1.2" opacity=".68" />
      <path d="M46 63h40m-33 1v10m26-10v10" stroke="#4f3d44" strokeWidth="2.4" />
      <MiniSpark x={73} y={24} size={9.5} light={light} />
    </>,
    cinema: () => <>
      {/* Courtyard cinema clapperboard in rich plum, cream & rose */}
      <rect x="16" y="38" width="68" height="42" rx="4" fill={paint('ceramic')} stroke="#6d524c" strokeWidth="1.9" />
      <path d="M18 47h64" stroke="#85655c" strokeWidth="1.6" />
      <path d="M22 42.5h18m32 0h6" stroke="#8c6c62" strokeWidth="1.3" opacity=".7" />
      {/* Hinged plum-and-cream striped clapper bar */}
      <path d="M15 30 79 12l4 14-64 18Z" fill={paint('plum')} stroke="#463441" strokeWidth="1.9" />
      <path d="m26 27 9 11m9-16 9 11m9-16 9 11" stroke={cream} strokeWidth="4.2" />
      <circle cx="21" cy="40" r="2.2" fill={paint('ochre')} stroke="#6b4b32" strokeWidth="1" />
      {/* Play triangle badge */}
      <circle cx="50" cy="63" r="13" fill={paint('paper')} stroke="#b89882" strokeWidth="1.3" />
      <path d="m45 55 15 8-15 8Z" fill={paint('rose')} stroke="#7c4b5a" strokeWidth="1.6" />
      <MiniSpark x={82} y={28} size={7.5} light={light} />
    </>,
    camera: () => <>
      {/* Vintage film camera matching Season 2 kiosk6 & CameraArt */}
      <rect x="13" y="29" width="74" height="50" rx="10" fill={paint('sage')} stroke="#46584b" strokeWidth="2" />
      <path d="M15 38q35-3 70 0v-7q0-5-6-5H21q-6 0-6 5Z" fill={paint('copper')} stroke="#6c4b39" strokeWidth="1.6" />
      <rect x="20" y="31" width="16" height="9" rx="2.5" fill={paint('paper')} stroke={brown} strokeWidth="1.5" />
      <rect x="63" y="21" width="14" height="8" rx="2.5" fill={paint('rose')} stroke="#784855" strokeWidth="1.5" />
      <rect x="14" y="42" width="72" height="4.5" fill={paint('ochre')} />
      {/* Multi-ring glass lens with specular reflections */}
      <circle cx="52" cy="57" r="18.5" fill={paint('ceramic')} stroke="#69504a" strokeWidth="2" />
      <circle cx="52" cy="57" r="12.5" fill={paint('glass')} stroke="#3a444d" strokeWidth="1.8" />
      <circle cx="52" cy="57" r="6" fill="#2c3a47" opacity=".68" />
      <circle cx="47.5" cy="52.5" r="3" fill={cream} opacity=".92" />
      <path d="M56 64q5-2 6-7" fill="none" stroke="#cce0dc" strokeWidth="1.5" opacity=".75" />
      <MiniSpark x={81} y={19} size={9.5} light={light} />
    </>,
    gallery: () => <>
      {/* Chapter 7 «Линии и свет» framed exhibition print with arched blue door & sunbeam */}
      <rect x="17" y="17" width="66" height="66" rx="4.5" fill={paint('copper')} stroke="#6c4b38" strokeWidth="1.95" />
      <rect x="23" y="23" width="54" height="54" rx="2" fill={paint('paper')} stroke="#9c7a64" strokeWidth="1.4" />
      <rect x="29" y="29" width="42" height="39" rx="1.2" fill="#ebd5b6" stroke="#b69478" strokeWidth="1.2" />
      {/* Arched deep-glass doorway with warm diagonal sunbeam & steps */}
      <path d="M38 63V43a12 12 0 0 1 24 0v20Z" fill={paint('glass')} stroke="#374b5b" strokeWidth="1.5" />
      <path d="M44 35 70 59v9H46L37 59Z" fill={paint('ochre')} opacity=".52" />
      <path d="M33 63h34M37 66.5h26" stroke="#7c5d4e" strokeWidth="1.5" />
      <rect x="43" y="71" width="14" height="2.6" rx="1" fill="#8d6c5d" opacity=".75" />
      <path d="M24 25h28M56 75h19" stroke="#fff6db" strokeWidth="1.4" opacity=".82" />
      <MiniSpark x={77} y={22} size={8} light={light} />
    </>,
    'evening-lamp': () => <>
      {/* Cozy table lamp matching cafeLamp10 with glowing aura, urn base & pleated shade */}
      <circle cx="50" cy="48" r="41" fill={light} />
      <path d="M26 49h48l10 30H16Z" fill={gold} opacity=".28" />
      {/* Ceramic urn base & brass foot */}
      <rect x="47.5" y="45" width="5" height="15" fill={paint('ochre')} stroke="#745134" strokeWidth="1.3" />
      <path d="M36 74c0-12 6-18 14-18s14 6 14 18Z" fill={paint('ceramic')} stroke="#755952" strokeWidth="1.75" />
      <path d="M42 69q3-7 9-8" fill="none" stroke="#fffbf0" strokeWidth="1.8" opacity=".88" />
      <path d="M32 74h36l4 8H28Z" fill={paint('copper')} stroke="#6c4b39" strokeWidth="1.7" />
      {/* Brass pull-chain & bead */}
      <path d="M59 49v13" stroke="#7d593c" strokeWidth="1.5" />
      <circle cx="59" cy="63" r="2.4" fill={paint('ochre')} stroke="#69482e" strokeWidth="1" />
      {/* Pleated dusty-rose shade with scalloped edge */}
      <path d="M33 21q17-3 34 0l13 28q-7 4-15 0-7 4-15 0-8 4-15 0-8 4-15 0Z" fill={paint('rose')} stroke="#754653" strokeWidth="1.9" />
      <path d="M39 23l-6 25m12-26-2 26m14-26 2 26m6-25 6 25" fill="none" stroke={cream} strokeWidth="1.5" opacity=".76" />
      <path d="M45 16h10l1 5H44Z" fill={paint('ochre')} stroke="#745134" strokeWidth="1.3" />
      <MiniSpark x={76} y={53} size={8.5} light={light} />
      <MiniSpark x={23} y={34} size={6.5} light={light} />
    </>,
    box: () => <>
      {/* Isometric tabletop game / keepsake box with rose ribbon & sage seal */}
      <path d="M16 49 49 64 86 48 85 73 49 89 16 75Z" fill={paint('copper')} stroke="#6b4a39" strokeWidth="1.85" />
      <path d="M49 64 86 48 85 73 49 89Z" fill={paint('wood')} opacity=".55" />
      <path d="M19 37 52 24 86 39 51 55Z" fill={paint('paper')} stroke="#7c5b4c" strokeWidth="1.8" />
      <path d="M16 48 19 37 51 54 86 39 87 49 51 66Z" fill={paint('rose')} stroke="#764754" strokeWidth="1.7" />
      {/* Decorative stitched rim & wrapped ribbon */}
      <path d="M51 67v19M21 51l26 13m8-1 28-13" fill="none" stroke={cream} strokeWidth="1.5" strokeDasharray="3.2 2.4" opacity=".82" />
      <path d="m35 40 16-7 17 7-17 8Z" fill={paint('sage')} stroke="#4a5c4e" strokeWidth="1.5" />
      <circle cx="51" cy="40" r="3.2" fill={paint('ochre')} stroke="#755234" strokeWidth="1.1" />
      <MiniSpark x={78} y={24} size={7.5} light={light} />
    </>,
    hair: () => <>
      {/* Sculpted tapered tuft of unruly chestnut curls springing up from (33, 83) */}
      <g>
        <path d="M35 83C19 72 13 50 23 35c6-9 17-9 18 0 1 5-4 8-8 6 4-2 5-6 2-8-6-2-11 6-10 17 1 11 7 22 16 30Z" fill={paint('wood')} stroke="#4e352b" strokeWidth="1.9" />
        <path d="M22 52q1-10 7-15" fill="none" stroke="#e4b784" strokeWidth="1.8" opacity=".76" />
        <path d="M29 84C24 62 34 36 55 23c14-8 28-1 26 12-2 10-13 15-21 9-5-4-4-11 2-12-3 4-1 8 4 8 6 0 9-6 6-11-4-6-14-4-22 6-10 12-13 30-7 48Z" fill={paint('copper')} stroke="#4e352b" strokeWidth="2" />
        <path d="M34 73C32 54 41 35 58 25c8-4 15-3 17 3" fill="none" stroke="#f2ca8f" strokeWidth="2.6" opacity=".86" />
        <path d="M40 74C39 58 46 43 59 33" fill="none" stroke="#6a493c" strokeWidth="1.9" opacity=".6" />
        <path d="M37 83c9-12 22-17 34-13 6 2 8 8 3 11-4 3-9 0-8-4 3 1 5-1 3-3-6-3-16 2-24 10Z" fill={paint('wood')} stroke="#4e352b" strokeWidth="1.8" />
        <path d="M47 75q10-6 19-4" fill="none" stroke="#ecc08a" strokeWidth="1.6" opacity=".76" />
        <path d="M62 12q11-3 19 4m4 8q4 6 2 14" fill="none" stroke={gold} strokeWidth="2.1" opacity=".88" />
        <MiniSpark x={18} y={24} size={7.5} light={light} />
        <MiniSpark x={84} y={50} size={6} light={light} />
      </g>
    </>,
  } satisfies Record<IllustrationKind, () => ReactElement>;

  return <svg className={`illustration ${className}`} viewBox={viewBox} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <defs>
      <radialGradient id={`${id}-shade`}><stop stopColor="#48363b" stopOpacity=".34" /><stop offset="1" stopColor="#48363b" stopOpacity="0" /></radialGradient>
      {(Object.entries(seasonPaint) as [PaintKey, readonly [string, string, string]][]).map(([name, [hi, mid, lo]]) => (
        <linearGradient key={name} id={`${id}-${name}`} x2=".75" y2="1">
          <stop stopColor={hi} /><stop offset=".6" stopColor={mid} /><stop offset="1" stopColor={lo} />
        </linearGradient>
      ))}
      <radialGradient id={`${id}-light`}>
        <stop stopColor="#fff6de" /><stop offset=".52" stopColor="#f9d897" stopOpacity=".68" /><stop offset="1" stopColor="#e8a86a" stopOpacity="0" />
      </radialGradient>
      <pattern id={`${id}-knit`} width="6.5" height="6.5" patternUnits="userSpaceOnUse" patternTransform="rotate(11)">
        <path d="M1 1q0 2.6 2.2 3.2 2.2-.6 2.2-3.2" fill="none" stroke="#f0d9c4" strokeWidth=".9" opacity=".52" />
        <path d="M1 2.2q.4 2.1 2.2 3.2" fill="none" stroke="#594350" strokeWidth=".75" opacity=".38" />
      </pattern>
    </defs>
    {kind !== 'hair' && <ellipse cx="50" cy={kind === 'scarf' ? 89 : 84} rx="40" ry="8.5" fill={`url(#${id}-shade)`} />}
    {art[kind]()}
  </svg>;
}
