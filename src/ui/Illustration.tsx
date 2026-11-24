import { useId, type ReactElement } from 'react';

type IllustrationKind = 'bag' | 'mat' | 'paper' | 'cup' | 'umbrella' | 'token' | 'scarf' | 'tea' | 'hair' | 'button-piece' | 'triangle-piece' | 'ribbon-piece' | 'leaf' | 'spoon' | 'cloud' | 'umbrella-case' | 'star' | 'controller' | 'envelope' | 'cafe' | 'tea-for-two' | 'promenade' | 'cinema' | 'camera' | 'gallery' | 'evening-lamp' | 'box';

export function Illustration({ kind, className = '', viewBox = '0 0 100 100' }: { kind: string; className?: string; viewBox?: string }) {
  const id = useId().replace(/:/g, '');
  const paint = (name: string) => `url(#${id}-${name})`;
  const art = {
    bag: () => <>
      <path d="M38 38c0-11 2-17 12-17s13 6 13 17" fill="none" stroke="#776554" strokeWidth="5"/>
      <path d="M38 37c0-10 3-15 12-15 8 0 12 6 12 15" fill="none" stroke="#b29b78" strokeWidth="2"/>
      <path d="M19 42q28-10 61 0l5 36q-1 6-8 7l-56 1q-7-1-7-7Z" fill={paint('sage')} stroke="#657061" strokeWidth="1.6"/>
      <path d="M69 40l10 2 6 36q-1 6-8 7H63q10-12 6-45Z" fill="#596557" opacity=".43"/>
      <path d="M19 42q31-10 61 0l-3 10q-2 8-11 10l-33 1q-10-2-13-10Z" fill="#adba9d" stroke="#76806d" strokeWidth="1.45"/>
      <path d="M23 44q21-6 51-2m-53 7q4 11 12 11l32-1q7-1 10-8M20 77q1 5 8 5l42-1" fill="none" stroke="#ead9ba" strokeWidth="1.25" strokeDasharray="2 2.7" opacity=".75"/>
      <rect x="43" y="54" width="14" height="12" rx="2.5" fill={paint('brass')} stroke="#806344" strokeWidth="1.15"/>
      <path d="M49 59v3" stroke="#7a654f" strokeWidth="1.3"/>
    </>,
    mat: () => <>
      <path d="M17 32 78 27 90 69 22 78Z" fill="#825a55" opacity=".58" transform="translate(0 3)"/>
      <path d="M17 32 78 27 90 69 22 78Z" fill={paint('rose')} stroke="#9c6e65" strokeWidth="1.3"/>
      <path d="m22 36 53-4 9 34-59 8Z" fill="none" stroke="#e7b996" strokeWidth="2.1" opacity=".75"/>
      <path d="m23 41 54-4m-53 11 55-5m-55 12 57-6m-56 13 58-7m-57 14 59-8" fill="none" stroke="#eed2b7" strokeWidth="1" strokeDasharray="1.1 2.05" opacity=".65"/>
      <ellipse cx="52" cy="51" rx="11" ry="8" transform="rotate(-6 52 51)" fill="#e3b67e" stroke="#aa7958" strokeWidth="1.4"/>
      <path d="M46 50q6-4 12 0m-9 3h.5m4.5 0h.5" fill="none" stroke="#966954" strokeWidth="1.15"/>
    </>,
    paper: () => <>
      <path d="M24 17 70 22l9 56-57 6Z" transform="translate(1 3)" fill="#9c817b" opacity=".32"/>
      <path d="M25 16 71 22l7 53q-2 4-7 5l-50 4Z" fill={paint('porcelain')} stroke="#a88777" strokeWidth="1.35"/>
      <path d="M65 79q4-1 5-8l8 4q-2 6-13 4Z" fill="#b98f78" opacity=".68"/>
      <path d="m34 26 5 4 8-6m-15 15 30 3m-31 4 33 3m-34 5 32 2m-33 6 32 1m-32 6 24-1" fill="none" stroke="#977a73" strokeWidth="1.45" opacity=".75"/>
      <path d="m54 43 8 1m-7 12 7 1m-8 6 7-.2" fill="none" stroke="#826953" strokeWidth="1.65"/>
      <path d="M27 19q21 2 40 5" fill="none" stroke="#fff1dc" strokeWidth="1.2" opacity=".7"/>
    </>,
    cup: () => <>
      <path d="M31 31q20 7 39 0l-6 49q-13 7-27 0Z" fill={paint('porcelain')} stroke="#a28375" strokeWidth="1.45"/>
      <path d="M34 45q19 6 33 0l-3 20q-12 4-28 0Z" fill={paint('rose')} stroke="#ab7d78" strokeWidth="1.1"/>
      <path d="M38 48l2 18m5 6 1 5" stroke="#f7e4c9" fill="none" strokeWidth="1.8" opacity=".7"/>
      <path d="M30 24q20-5 41 0l2 7q-22 7-45 0Z" fill={paint('sage')} stroke="#74806d" strokeWidth="1.4"/>
      <ellipse cx="50" cy="24" rx="20.4" ry="4.6" fill="#bcc4a8" stroke="#89927a" strokeWidth="1.1"/>
      <path d="M46 56l3 3l6-6" fill="none" stroke="#f8edda" strokeWidth="1.8"/>
    </>,
    umbrella: () => <>
      <path d="M52 25v50q0 12 8 12t9-8" fill="none" stroke="#795d4d" strokeWidth="4.1"/>
      <path d="M53 27v47q0 10 6 11" fill="none" stroke="#c39d77" strokeWidth="1.4"/>
      <path d="M12 48q11-30 40-31 29 0 38 31-13-8-25 1-13-8-26 0-13-7-27-1Z" fill={paint('wool')} stroke="#78637c" strokeWidth="1.5"/>
      <path d="M39 49q3-22 13-31 12 9 13 31-14-8-26 0Z" fill="#cbbbcb" stroke="#8d778e" strokeWidth="1.3"/>
      <path d="M18 42q11-15 25-19m19-1q13 4 21 16m-32-17v19" fill="none" stroke="#f0dfdc" strokeWidth="1.45" opacity=".63"/>
      <circle cx="52" cy="17" r="1.9" fill="#b38f75"/>
    </>,
    token: () => <>
      <ellipse cx="50" cy="53" rx="31" ry="30" fill="#a37546" stroke="#805f41" strokeWidth="1.5"/>
      <circle cx="50" cy="48" r="30" fill={paint('brass')} stroke="#986e4c" strokeWidth="1.4"/>
      <circle cx="50" cy="48" r="24.5" fill="none" stroke="#9e7045" strokeWidth="1.4" strokeDasharray="1.7 2.1"/>
      <circle cx="50" cy="48" r="19.8" fill="#ebcb91" stroke="#d8a86d" strokeWidth="1.2"/>
      <circle cx="41" cy="48" r="4" fill="#806050" stroke="#aa805e" strokeWidth="1.2"/>
      <circle cx="59" cy="48" r="4" fill="#806050" stroke="#aa805e" strokeWidth="1.2"/>
      <path d="M34 30q13-9 25-3m-15 33q9 1 15-3M27 57l2 6m42-1 2-4" fill="none" stroke="#fff0bc" strokeWidth="1.6" opacity=".69"/>
    </>,
    scarf: () => <>
      <path d="M54 37q19 0 22 17l6 24-17 6-10-33Z" fill="#928591" stroke="#827482" strokeWidth="1.5"/>
      <path d="m65 81 2 6m3-7 2 6m3-7 2 6m3-7 2 6" stroke="#8b7d8c" strokeWidth="1.65"/>
      <path d="M20 27q3-13 27-16 21-2 33 9 6 8-1 17-8 9-28 10-19 0-27-7-6-4-4-13Z" fill={paint('wool')} stroke="#8b798b" strokeWidth="1.5"/>
      <path d="M26 23q20-13 46-1m-46 9q20 9 47-3m-42 9q15 7 37 1" fill="none" stroke="#f4e2df" strokeWidth="1.55" opacity=".64"/>
      <path d="M34 40q10 5 23 0l-5 43q-11 5-24 1Z" fill={paint('wool')} stroke="#8b798b" strokeWidth="1.5"/>
      <path d="M34 48q10 3 21 0M32 58q11 3 22-1M32 68q10 3 20-1M30 78q9 3 21-1m-14-28-5 31m14-30-4 30" fill="none" stroke="#e8d6db" strokeWidth="1.4" opacity=".84"/>
      <path d="m30 84-2 7m7-6-2 7m7-7-1 7m6-8v7m5-8 1 7" stroke="#938193" strokeWidth="1.65"/>
    </>,
    tea: () => <>
      <ellipse cx="49" cy="77" rx="37" ry="9.5" fill={paint('porcelain')} stroke="#b18b81" strokeWidth="1.45"/>
      <path d="M20 79q28 8 57-2" fill="none" stroke="#b98b86" strokeWidth="1.4"/>
      <path d="M66 45q18-8 19 3 3 11-14 15l-5-1 1-5q10-1 12-7 0-5-10-1Z" fill={paint('porcelain')} stroke="#a8817c" strokeWidth="1.45"/>
      <path d="M23 41h49l-2 15q-2 17-15 19-9 2-16-1-13-4-14-23Z" fill={paint('porcelain')} stroke="#a68177" strokeWidth="1.45"/>
      <path d="M26 50q15 12 43 5M32 51q1 13 8 17" fill="none" stroke="#b88591" strokeWidth="1.35" opacity=".78"/>
      <ellipse cx="47.5" cy="41" rx="24.5" ry="8" fill="#f8e5c4" stroke="#aa887a" strokeWidth="1.1"/>
      <ellipse cx="47.5" cy="42" rx="21" ry="5.7" fill={paint('amber')}/>
      <path d="M30 41q10-5 24-2m-18-9q-5-5 1-11m11 9q4-4 0-10-2-3 1-7m8 19q5-4 2-8" fill="none" stroke="#dcc2af" strokeWidth="1.5" opacity=".8"/>
    </>,

    'button-piece': () => <>
      <circle cx="50" cy="52" r="29" fill="#76806c" stroke="#5f685a" strokeWidth="1.5"/>
      <circle cx="50" cy="49" r="28" fill={paint('sage')} stroke="#707969" strokeWidth="1.5"/>
      <circle cx="50" cy="49" r="21" fill="none" stroke="#e4dac3" strokeWidth="1.55" opacity=".8"/>
      <path d="M34 33q12-12 26-5m-2 39q9-3 13-11" fill="none" stroke="#f3e5c9" strokeWidth="1.5" opacity=".6"/>
      <path d="M43 42l14 14m0-14L43 56" stroke="#f4ddc0" strokeWidth="2.2"/>
      <path d="M43 42h.1m14 0h.1M43 56h.1m14 0h.1" stroke="#4d5a4c" strokeWidth="3.8"/>
    </>,
    'triangle-piece': () => <>
      <path d="M49 18 87 77 13 80Z" fill={paint('rose')} stroke="#936d75" strokeWidth="1.4"/>
      <path d="M49 25 79 73l-59 2Z" fill="none" stroke="#f6dfc9" strokeWidth="1.6" strokeDasharray="3 2.5"/>
      <path d="M41 45l20 5m-25 4 30 6m-35 4 40 6" fill="none" stroke="#805f72" strokeWidth="1" opacity=".39"/>
    </>,
    'ribbon-piece': () => <>
      <path d="M18 33 83 45l-7 21-61-10Z" fill={paint('brass')} stroke="#9b7553" strokeWidth="1.45"/>
      <path d="m22 38 56 10M20 52l54 9" fill="none" stroke="#f8e2b6" strokeWidth="1.8" strokeDasharray="3 2.6"/>
      <path d="m18 35-4 5m4 1-5 4m63 15 6-2" stroke="#b2885d" strokeWidth="1.2"/>
    </>,
    leaf: () => <>
      <path d="M19 74q-2-42 60-55 10 57-60 55Z" fill={paint('sage')} stroke="#68785f" strokeWidth="1.5"/>
      <path d="M15 83q25-29 54-55M36 60l-1-19m13 7 20 1m-12-10 1-10" fill="none" stroke="#6e795e" strokeWidth="1.7"/>
      <path d="M23 62q8-23 36-32" fill="none" stroke="#e1dfac" strokeWidth="1.8" opacity=".64"/>
    </>,
    spoon: () => <>
      <path d="M47 47 35 83q-3 8 3 10 6 2 8-6l13-36" fill={paint('wool')} stroke="#81717d" strokeWidth="1.55"/>
      <ellipse cx="55" cy="31" rx="16" ry="23" transform="rotate(11 55 31)" fill={paint('porcelain')} stroke="#9a837d" strokeWidth="1.55"/>
      <path d="M46 35q-2-13 9-20m-6 25q6 7 11-3m-18 19-9 26" fill="none" stroke="#fff1d8" strokeWidth="1.8"/>
    </>,
    cloud: () => <>
      <path d="M20 67Q6 60 17 44Q20 22 41 29Q56 9 74 31Q94 29 91 54Q93 72 73 72H28Z" fill={paint('wool')} stroke="#866e84" strokeWidth="1.6"/>
      <path d="M24 64q-10-6-4-18q6-19 22-13q16-16 31 2q15-2 14 17q1 15-15 15H30Z" fill="none" stroke="#f5e4da" strokeWidth="1.45" strokeDasharray="2.5 2.5"/>
      <path d="M34 49q4-3 8 0m15 0q4-3 8 0m-19 7q4 3 8 0" fill="none" stroke="#765b70" strokeWidth="1.65"/>
      <ellipse cx="30" cy="55" rx="4" ry="2.3" fill="#da9da9"/><ellipse cx="69" cy="55" rx="4" ry="2.3" fill="#da9da9"/>
    </>,
    'umbrella-case': () => <>
      <path d="M34 18q16-8 30 0l6 57q-19 15-39 1Z" fill={paint('sage')} stroke="#687663" strokeWidth="1.5"/>
      <path d="M35 30q16 4 29-1M50 31v44m-13-52 24-2" fill="none" stroke="#ebd9b4" strokeWidth="1.7" opacity=".8"/>
      <circle cx="50" cy="32" r="3.3" fill={paint('brass')} stroke="#87704f" strokeWidth="1"/>
    </>,
    star: () => <>
      <circle cx="50" cy="49" r="35" fill={paint('glow')}/>
      <path d="M50 12 61 36 87 40 68 57l5 27-23-14-24 14 6-27-20-17 27-4Z" fill={paint('brass')} stroke="#a17a50" strokeWidth="1.55"/>
      <path d="m50 20 7 19 19 3-15 9 3 18-14-9" fill="none" stroke="#fff0bc" strokeWidth="1.65" opacity=".75"/>
    </>,
    controller: () => <>
      <path d="M22 32q7-11 28-11t28 11q10 12 13 34 1 11-5 12-6 2-14-8L63 60H37l-9 10q-8 10-14 8-6-1-5-12 3-22 13-34Z" fill={paint('wool')} stroke="#75617e" strokeWidth="1.6"/>
      <path d="M15 55q3-14 10-21 8-8 25-8t25 8" fill="none" stroke="#f2dcd8" strokeWidth="1.75"/>
      <path d="M28 33v17M20 41.5h16" stroke="#68546c" strokeWidth="4.5"/>
      <circle cx="43" cy="53" r="6.5" fill="#907c94" stroke="#69596c" strokeWidth="1.4"/>
      <g strokeWidth="1"><circle cx="70" cy="35" r="3.5" fill="#a6bdab" stroke="#627b69"/><circle cx="78" cy="43" r="3.5" fill="#dca2ad" stroke="#8b6477"/><circle cx="62" cy="43" r="3.5" fill="#e5bd77" stroke="#987952"/><circle cx="70" cy="51" r="3.5" fill="#a6bdab" stroke="#627b69"/></g>
      <circle cx="50" cy="32" r="2.4" fill="#d0db9e" stroke="#84906f" strokeWidth="1.1"/>
    </>,
    envelope: () => <>
      <path d="M12 29q37-4 75 0v47q-35 6-75 0Z" fill={paint('porcelain')} stroke="#a58677" strokeWidth="1.45"/>
      <path d="M13 30q23 21 37 27 17-8 37-27M15 74l25-22m45 22L60 52" fill="none" stroke="#b69a83" strokeWidth="1.6"/>
      <path d="M15 31q36-3 69-1L50 56Z" fill="#f8e6cc" opacity=".75"/>
      <circle cx="50" cy="55" r="10" fill={paint('rose')} stroke="#935f69" strokeWidth="1.45"/>
      <path d="M50 59q-10-5-4-7 3-1 4 2 3-4 6-1 3 3-6 6Z" fill="#f4d7c7"/>
    </>,
    cafe: () => <>
      <path d="M18 39h65v41H18Z" fill={paint('porcelain')} stroke="#9c7e72" strokeWidth="1.45"/>
      <path d="M24 23h52l10 19q-8 10-18 2-9 8-18 0-9 8-18 0-9 8-18-2Z" fill={paint('rose')} stroke="#a27678" strokeWidth="1.5"/>
      <path d="M31 24l-5 19m21-19-2 21m18-21 5 20" stroke="#f9ddc5" strokeWidth="2.1"/>
      <path d="M27 54h22v15H27Zm29 25V58h15v21Z" fill={paint('brass')} stroke="#9a795d" strokeWidth="1.45"/>
      <path d="M38 54v15m-11-7h22" stroke="#9b7c68" strokeWidth="1.1"/>
    </>,
    'tea-for-two': () => <>
      <ellipse cx="49" cy="76" rx="35" ry="8" fill={paint('porcelain')} stroke="#b5988a" strokeWidth="1.4"/>
      <path d="M16 44h29l-1 17q-2 10-14 10-11 0-13-10Zm42 6h24l-1 14q-3 10-11 10t-11-10Z" fill={paint('porcelain')} stroke="#a8877b" strokeWidth="1.45"/>
      <path d="M44 49q12-4 9 5-2 6-9 5m37-4q11-3 9 4-2 6-9 5" fill="none" stroke="#a8877b" strokeWidth="2.3"/>
      <ellipse cx="30.5" cy="44" rx="14.5" ry="4.8" fill={paint('amber')} stroke="#e7caaa" strokeWidth="1.6"/><ellipse cx="70" cy="50" rx="12" ry="4.1" fill={paint('amber')} stroke="#e7caaa" strokeWidth="1.5"/>
      <path d="M24 36q-4-5 2-9m7 9q4-5 0-9m35 15q-5-7 1-10" fill="none" stroke="#c5a28e" strokeWidth="1.5"/>
    </>,
    promenade: () => <>
      <circle cx="27" cy="30" r="24" fill={paint('glow')}/>
      <path d="M14 77q14-6 34 0t36 0m-64 7q15-5 30 0t31-1" fill="none" stroke="#8792a0" strokeWidth="1.6"/>
      <path d="M27 69V31m-6 38h12m-6-47v-6" stroke="#7b6555" strokeWidth="2.3"/>
      <path d="M19 33l3-12h10l3 12Z" fill={paint('brass')} stroke="#9f815d" strokeWidth="1.4"/>
      <path d="M48 53q14-2 32 0v13H48Z" fill={paint('sage')} stroke="#71806a" strokeWidth="1.45"/>
      <path d="M46 62h36m-30 4v8m24-8v8" fill="none" stroke="#7e6658" strokeWidth="2"/>
      <path d="m68 17 2 7 7 2-7 2-2 7-2-7-7-2 7-2Z" fill="#f2c789"/>
    </>,
    cinema: () => <>
      <path d="M17 39h66v38H17Z" fill={paint('porcelain')} stroke="#957d78" strokeWidth="1.5"/>
      <path d="M17 30 79 13l4 14-63 17Z" fill={paint('wool')} stroke="#856b80" strokeWidth="1.5"/>
      <path d="m29 28 8 10m10-15 8 10m10-15 8 10M19 46h63" stroke="#f1dfdd" strokeWidth="1.9"/>
      <path d="m44 53 17 9-17 10Z" fill={paint('rose')} stroke="#a4777e" strokeWidth="1.5"/>
    </>,
    camera: () => <>
      <path d="M15 36q0-7 8-7h18l6-8h18l7 8h10q7 0 7 8v36q0 7-8 7H23q-8 0-8-7Z" fill={paint('sage')} stroke="#5c6153" strokeWidth="1.6"/>
      <path d="M17 39q36-4 70 0V47H17Z" fill={paint('porcelain')} stroke="#a18777" strokeWidth="1.25"/>
      <circle cx="53" cy="58" r="18" fill={paint('brass')} stroke="#846d62" strokeWidth="1.7"/>
      <circle cx="53" cy="58" r="13" fill="#4b5b63" stroke="#605062" strokeWidth="1.3"/>
      <path d="M43 55q3-9 12-9m5 21q5-3 5-7" fill="none" stroke="#c1ccd1" strokeWidth="2" opacity=".75"/>
      <path d="M24 51h7m-6 19 8 1m43-20 4-1" stroke="#d7d4ae" strokeWidth="1.3" opacity=".8"/>
    </>,
    gallery: () => <>
      <path d="M18 23h64v54H18Z" fill={paint('brass')} stroke="#956e50" strokeWidth="1.6"/>
      <path d="M24 29h52v42H24Z" fill={paint('porcelain')} stroke="#b59676" strokeWidth="1.35"/>
      <path d="M30 36h40v30H30Z" fill="#737d8c"/>
      <path d="M30 58 44 45 56 56 62 47 70 55v11H30Z" fill={paint('sage')}/>
      <circle cx="60" cy="43" r="4" fill="#f5d9a3"/>
      <path d="m25 25 24-1m10 51 16-1" stroke="#f1d5a5" strokeWidth="1.25"/>
    </>,
    'evening-lamp': () => <>
      <circle cx="50" cy="50" r="37" fill={paint('glow')}/>
      <path d="M48 44h4v34h-4Zm-15 33h34l5 7H28Z" fill={paint('brass')} stroke="#927658" strokeWidth="1.5"/>
      <path d="M37 25q13-3 26 0l13 23H24Z" fill={paint('rose')} stroke="#a47b7f" strokeWidth="1.7"/>
      <path d="M29 46h42M37 28l-6 16m26-16 7 15" fill="none" stroke="#f3dbc2" strokeWidth="1.5"/>
      <path d="M66 55l1.5 5 5 1.5-5 1.5-1.5 5-1.5-5-5-1.5 5-1.5Z" fill="#f5d391"/>
    </>,
    box: () => <>
      <path d="M17 50 48 63 85 48 84 72 49 88 16 75Z" fill={paint('brass')} stroke="#9b785f" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M20 38 52 26 85 41 51 56Z" fill={paint('porcelain')} stroke="#ac8976" strokeWidth="1.4"/>
      <path d="M17 49 20 38 51 55 85 41 86 50 51 66Z" fill={paint('rose')} stroke="#9f786f" strokeWidth="1.3"/>
      <path d="M51 67v17M22 52l24 13m10-1 26-12" fill="none" stroke="#f3dabb" strokeWidth="1.4" strokeDasharray="3 2"/>
      <path d="m37 41 11-5 16 6-16 7Z" fill={paint('sage')} stroke="#7c806c" strokeWidth="1.2"/>
    </>,
    hair: () => <>
      <path d="M33 83q30-9 31-28 2-15-18-22-12-4-7-13 5-7 16 1" fill="none" stroke="#765747" strokeWidth="13" opacity=".78"/>
      <path d="M33 81q29-9 31-27 2-15-18-22-12-4-7-13 5-7 16 1" fill="none" stroke="#b88c67" strokeWidth="8"/>
      <path d="M35 79q27-12 27-25 0-13-17-20-15-6-7-15" fill="none" stroke="#e8bb85" strokeWidth="2.5" opacity=".75"/>
    </>,
  } satisfies Record<IllustrationKind, () => ReactElement>;

  const selected=Object.hasOwn(art,kind)?kind as IllustrationKind:'token';

  return <svg className={`illustration ${className}`} viewBox={viewBox} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <defs>
      <radialGradient id={`${id}-shade`}><stop stopColor="#67493f" stopOpacity=".32"/><stop offset="1" stopColor="#67493f" stopOpacity="0"/></radialGradient>
      <linearGradient id={`${id}-sage`} x2=".72" y2="1"><stop stopColor="#c5ccac"/><stop offset=".55" stopColor="#9ca889"/><stop offset="1" stopColor="#6c7a66"/></linearGradient>
      <linearGradient id={`${id}-rose`} x2=".78" y2="1"><stop stopColor="#e7bbac"/><stop offset=".55" stopColor="#c99188"/><stop offset="1" stopColor="#a66e73"/></linearGradient>
      <linearGradient id={`${id}-brass`} x2=".82" y2="1"><stop stopColor="#ffe6a8"/><stop offset=".55" stopColor="#d5a469"/><stop offset="1" stopColor="#ae7e4e"/></linearGradient>
      <linearGradient id={`${id}-porcelain`} x2=".85" y2="1"><stop stopColor="#fff5dc"/><stop offset=".6" stopColor="#eedbc0"/><stop offset="1" stopColor="#c8a09b"/></linearGradient>
      <linearGradient id={`${id}-wool`} x2=".78" y2="1"><stop stopColor="#e0d4dd"/><stop offset=".58" stopColor="#b8a8bb"/><stop offset="1" stopColor="#9e90a6"/></linearGradient>
      <linearGradient id={`${id}-amber`} x2=".92" y2="1"><stop stopColor="#ecc180"/><stop offset="1" stopColor="#a45c43"/></linearGradient>
      <radialGradient id={`${id}-glow`}><stop stopColor="#fae1a0" stopOpacity=".7"/><stop offset="1" stopColor="#e7bd8a" stopOpacity="0"/></radialGradient>
    </defs>
    {selected !== 'hair' && <ellipse cx="50" cy={selected === 'scarf' ? 88 : 83} rx="41" ry="9" fill={paint('shade')}/>}
    {art[selected]()}
  </svg>;
}
