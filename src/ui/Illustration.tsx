import type { ReactNode } from 'react';

export function Illustration({kind,className=''}:{kind:string;className?:string}){
  const drawings:Record<string,ReactNode>={
    cloud:<>
      <ellipse cx="50" cy="77" rx="34" ry="5" fill="#3a2212" opacity=".14" stroke="none"/>
      <path d="M20 67Q6 60 17 44Q20 22 41 29Q56 9 74 31Q94 29 91 54Q93 72 73 72H28Z" fill="#d9d0ec" stroke="#665068" strokeWidth="2.4"/>
      <path d="M24 62Q15 56 22 45Q25 29 42 34Q54 18 70 35Q84 35 84 52Q85 65 71 66H30Z" fill="#ece6f8" stroke="none"/>
      <path d="M27 68H72" stroke="#c3b4df" strokeWidth="2.4" strokeDasharray="4 4"/>
      <path d="M35 49q4-3 8 0M57 49q4-3 8 0" stroke="#665068" strokeWidth="2.2"/>
      <ellipse cx="32" cy="54" rx="4" ry="2.2" fill="#e8a7b8" stroke="none" opacity=".55"/>
      <ellipse cx="68" cy="54" rx="4" ry="2.2" fill="#e8a7b8" stroke="none" opacity=".55"/>
    </>,
    'umbrella-case':<>
      <ellipse cx="50" cy="89" rx="22" ry="4.5" fill="#3a2212" opacity=".15" stroke="none"/>
      <path d="M35 14Q50 5 65 14L69 78Q50 96 31 78Z" fill="#b7ccb8" stroke="#4f6652" strokeWidth="2.4"/>
      <path d="M39 17Q50 11 61 17L64 76Q50 88 36 76Z" fill="#cfe0d0" stroke="none"/>
      <path d="M36 27H64M50 30V76" stroke="#5b755f" strokeWidth="2.2"/>
      <path d="M41 18H59" stroke="#e4c37b" strokeWidth="3.2"/>
      <circle cx="50" cy="30" r="3.2" fill="#e4c37b" stroke="#7a5e2f" strokeWidth="1.5"/>
    </>,
    controller:<>
      <ellipse cx="50" cy="82" rx="37" ry="6" fill="#3a2212" opacity=".16" stroke="none"/>
      <path d="M23 28Q50 18 77 28Q89 37 92 69Q91 86 76 73L66 61H34L24 73Q9 86 8 69Q11 37 23 28Z" fill="#cbc2e2" stroke="#5a4b63" strokeWidth="2.4"/>
      <path d="M26 31Q50 23 74 31" stroke="#ece6f7" strokeWidth="2.4"/>
      <path d="M28 35V52M20 43.5H36" stroke="#5a4b63" strokeWidth="3.8"/>
      <circle cx="69" cy="36" r="3.4" fill="#b5d1ba" stroke="#536857" strokeWidth="1.6"/>
      <circle cx="78" cy="44" r="3.4" fill="#efb8c9" stroke="#855164" strokeWidth="1.6"/>
      <circle cx="60" cy="44" r="3.4" fill="#f7da8f" stroke="#99713b" strokeWidth="1.6"/>
      <circle cx="69" cy="52" r="3.4" fill="#b5d1ba" stroke="#536857" strokeWidth="1.6"/>
      <circle cx="44" cy="54" r="6.8" fill="#efe7dc" stroke="#6c5e72" strokeWidth="2"/>
      <circle cx="44" cy="54" r="3.2" fill="#c7bdd6" stroke="none"/>
      <circle cx="50" cy="31" r="2.6" fill="#c7e8a2" stroke="#5d7845" strokeWidth="1.3"/>
    </>,
    'button-piece':<>
      <ellipse cx="50" cy="82" rx="26" ry="5" fill="#3a2212" opacity=".16" stroke="none"/>
      <circle cx="50" cy="50" r="30" fill="#b4ccb8" stroke="#4f6853" strokeWidth="2.6"/>
      <circle cx="50" cy="50" r="22" fill="#cbe0ce" stroke="#76947a" strokeWidth="1.8"/>
      <circle cx="42" cy="42" r="3.4" fill="#4f6853" stroke="none"/><circle cx="58" cy="42" r="3.4" fill="#4f6853" stroke="none"/>
      <circle cx="42" cy="58" r="3.4" fill="#4f6853" stroke="none"/><circle cx="58" cy="58" r="3.4" fill="#4f6853" stroke="none"/>
      <path d="M42 42l16 16M58 42l-16 16" stroke="#fff7e8" strokeWidth="2.8"/>
    </>,
    'triangle-piece':<>
      <ellipse cx="50" cy="83" rx="34" ry="5" fill="#3a2212" opacity=".15" stroke="none"/>
      <path d="M50 15L86 79H14Z" fill="#efb9cb" stroke="#854f62" strokeWidth="2.5"/>
      <path d="M50 22L79 75H21Z" fill="#f7cfdc" stroke="none"/>
      <path d="M50 27L74 72H26Z" stroke="#fff7fa" strokeWidth="2" strokeDasharray="4 4"/>
    </>,
    'ribbon-piece':<>
      <ellipse cx="48" cy="73" rx="33" ry="5" fill="#3a2212" opacity=".15" stroke="none"/>
      <path d="M18 33L81 42L75 66L14 57Z" fill="#f5d484" stroke="#966c34" strokeWidth="2.5"/>
      <path d="M21 38L77 46L73 61L18 53Z" fill="#fce4a6" stroke="none"/>
      <path d="M22 41L74 49M20 52L72 60" stroke="#bf8c3d" strokeWidth="1.8" strokeDasharray="4 4"/>
    </>,
    leaf:<>
      <ellipse cx="50" cy="84" rx="28" ry="5" fill="#3a2212" opacity=".15" stroke="none"/>
      <path d="M21 77Q10 25 81 17Q91 71 21 77Z" fill="#aac49c" stroke="#4f6b47" strokeWidth="2.5"/>
      <path d="M24 72Q18 33 75 23Q58 55 24 72Z" fill="#c7dbba" stroke="none"/>
      <path d="M16 83L68 30M34 62L33 44M48 50L66 50M45 38L44 29" stroke="#4f6b47" strokeWidth="2.2"/>
    </>,
    spoon:<>
      <ellipse cx="49" cy="91" rx="18" ry="4" fill="#3a2212" opacity=".15" stroke="none"/>
      <path d="M49 48L37 88Q43 95 49 88L60 48" fill="#d9d1e0" stroke="#6c5f75" strokeWidth="2.4"/>
      <ellipse cx="55" cy="29" rx="18" ry="23" fill="#e5deeb" stroke="#6c5f75" strokeWidth="2.4"/>
      <ellipse cx="55" cy="29" rx="11.5" ry="15" fill="#f7f3fa" stroke="none"/>
      <path d="M48 22q3-6 8-7" stroke="#ffffff" strokeWidth="2.2"/>
    </>,
    token:<>
      <ellipse cx="50" cy="85" rx="29" ry="5.5" fill="#3a2212" opacity=".18" stroke="none"/>
      <circle cx="50" cy="50" r="32" fill="#eab95c" stroke="#8a6024" strokeWidth="2.6"/>
      <circle cx="50" cy="50" r="26" fill="#f6d687" stroke="#c9963d" strokeWidth="1.6" strokeDasharray="4 3"/>
      <circle cx="50" cy="50" r="19" fill="#fae2a2" stroke="none"/>
      <circle cx="40" cy="50" r="4.2" fill="#7c475f" stroke="#532d3f" strokeWidth="1.2"/>
      <circle cx="60" cy="50" r="4.2" fill="#7c475f" stroke="#532d3f" strokeWidth="1.2"/>
      <path d="M35 30q15-9 30 0" stroke="#fff7d9" strokeWidth="2.2" opacity=".8"/>
    </>,
    bag:<>
      <ellipse cx="50" cy="87" rx="32" ry="5" fill="#3a2212" opacity=".16" stroke="none"/>
      <path d="M36 39V28Q50 8 64 28V39" stroke="#546b57" strokeWidth="3.2"/>
      <path d="M21 40Q50 30 79 40L83 82Q50 92 17 82Z" fill="#b4ccb8" stroke="#4f6653" strokeWidth="2.4"/>
      <path d="M21 40Q50 32 79 40L77 54Q50 63 23 54Z" fill="#cbe0ce" stroke="#4f6653" strokeWidth="2"/>
      <rect x="44" y="50" width="12" height="12" rx="2" fill="#e9c478" stroke="#856330" strokeWidth="1.8"/>
    </>,
    mat:<>
      <ellipse cx="53" cy="82" rx="35" ry="5" fill="#3a2212" opacity=".15" stroke="none"/>
      <path d="M14 28L79 25L91 72L19 80Z" fill="#df9f95" stroke="#824d47" strokeWidth="2.4"/>
      <path d="M21 35L74 32L84 67L24 73Z" fill="#ecc0b8" stroke="none"/>
      <path d="M24 39L71 36M27 49L75 46M30 59L78 56M33 69L81 66" stroke="#b37269" strokeWidth="1.8"/>
      <circle cx="52" cy="51" r="11" fill="#f7da8f" stroke="#99713b" strokeWidth="2"/>
    </>,
    paper:<>
      <ellipse cx="48" cy="89" rx="30" ry="4.5" fill="#3a2212" opacity=".15" stroke="none"/>
      <path d="M25 13L71 19L79 81L19 88Z" fill="#faf0dc" stroke="#7c5e4e" strokeWidth="2.4"/>
      <path d="M29 19L67 24L74 77L24 83Z" fill="#fffaf0" stroke="none"/>
      <path d="M34 36L62 39M32 48L65 51M30 61L66 64M29 73L56 75" stroke="#b99c85" strokeWidth="2.2"/>
      <path d="M46 25l4 4l8-6" stroke="#c86b7a" strokeWidth="2.4"/>
    </>,
    cup:<>
      <ellipse cx="49" cy="85" rx="22" ry="4.5" fill="#3a2212" opacity=".16" stroke="none"/>
      <path d="M29 32H69L63 83H35Z" fill="#faf1df" stroke="#75554a" strokeWidth="2.4"/>
      <path d="M33 48H65L63 66H35Z" fill="#e5aebf" stroke="#855164" strokeWidth="2"/>
      <rect x="24" y="23" width="50" height="10" rx="3" fill="#b7ccb8" stroke="#536b57" strokeWidth="2.2"/>
      <path d="M45 56l4 4l7-7" stroke="#fff8f0" strokeWidth="2.4"/>
    </>,
    umbrella:<>
      <ellipse cx="50" cy="91" rx="22" ry="4" fill="#3a2212" opacity=".15" stroke="none"/>
      <path d="M50 20V78Q50 93 64 84" stroke="#82583a" strokeWidth="3.8"/>
      <path d="M13 46Q50 4 87 46Q74 37 62 48Q50 37 38 48Q26 37 13 46Z" fill="#cec3e6" stroke="#624a5e" strokeWidth="2.5"/>
      <path d="M38 48Q40 25 50 21Q60 25 62 48Q50 37 38 48Z" fill="#e4dcf5" stroke="#624a5e" strokeWidth="2"/>
      <path d="M50 21V42" stroke="#624a5e" strokeWidth="1.8"/>
    </>,
    tea:<>
      <ellipse cx="46" cy="86" rx="33" ry="5" fill="#3a2212" opacity=".16" stroke="none"/>
      <path d="M62 43Q89 39 81 59Q75 69 62 66" stroke="#75554a" strokeWidth="3.2"/>
      <path d="M18 39H63V60Q61 81 40.5 81Q19 80 18 60Z" fill="#fff7e8" stroke="#75554a" strokeWidth="2.4"/>
      <ellipse cx="40.5" cy="39" rx="22.5" ry="5.5" fill="#c98f54" stroke="#75554a" strokeWidth="2"/>
      <path d="M26 50v16" stroke="#f0d9b8" strokeWidth="3" opacity=".8"/>
      <path d="M13 84H75" stroke="#99775e" strokeWidth="3"/>
      <path d="M31 28Q23 20 33 11M48 27Q40 19 50 11" stroke="#b99c8c" strokeWidth="2.2"/>
    </>,
    cafe:<>
      <ellipse cx="50" cy="86" rx="37" ry="4.5" fill="#3a2212" opacity=".16" stroke="none"/>
      <rect x="20" y="36" width="60" height="48" fill="#faf0dc" stroke="#75554a" strokeWidth="2.4"/>
      <path d="M25 24L31 13H69L75 24Z" fill="#d9a5b5" stroke="#75554a" strokeWidth="2.2"/>
      <path d="M14 24H86L80 41Q72 48 65 41Q57 48 50 41Q43 48 35 41Q28 48 20 41Z" fill="#e6b0c0" stroke="#75554a" strokeWidth="2.3"/>
      <path d="M36 25L35 41M50 25V41M64 25L65 41" stroke="#fff7f0" strokeWidth="2.2" opacity=".75"/>
      <rect x="28" y="54" width="19" height="19" rx="2" fill="#ffe79e" stroke="#75554a" strokeWidth="2"/>
      <path d="M37.5 54v19M28 63.5h19" stroke="#997458" strokeWidth="1.5"/>
      <path d="M57 84V55q0-4 7.5-4t7.5 4v29Z" fill="#9c7258" stroke="#5d4233" strokeWidth="2.2"/>
      <circle cx="68" cy="69" r="1.6" fill="#f7d882" stroke="none"/>
      <path d="M15 84H85" stroke="#75554a" strokeWidth="2.6"/>
    </>,
    promenade:<>
      <path d="M12 78Q32 70 50 78T88 78M12 88Q32 80 50 88T88 88" stroke="#7f9ca8" strokeWidth="2.6"/>
      <circle cx="27" cy="22" r="16" fill="#ffe69c" stroke="none" opacity=".45"/>
      <path d="M27 72V30M20 72H34M27 14V9" stroke="#63514c" strokeWidth="2.6"/>
      <path d="M18 30H36L33 14H21Z" fill="#ffeba6" stroke="#755a44" strokeWidth="2.2"/>
      <rect x="48" y="54" width="34" height="13" rx="2" fill="#b7ccb8" stroke="#4f6653" strokeWidth="2.2"/>
      <path d="M44 67H86M52 67V74M78 67V74M57 55V66M65 55V66M73 55V66" stroke="#63514c" strokeWidth="2.2"/>
      <path d="M66 14L69 22L78 23L71 29L73 38L66 33L58 38L60 29L53 23L62 22Z" fill="#f7d680" stroke="#966e32" strokeWidth="1.8"/>
    </>,
    gallery:<>
      <rect x="14" y="18" width="54" height="52" rx="3" fill="#e4c287" stroke="#7c5d3f" strokeWidth="2.4"/>
      <rect x="21" y="25" width="40" height="38" fill="#fffaf0" stroke="#997c5e" strokeWidth="1.6"/>
      <circle cx="49" cy="36" r="5.5" fill="#e6a7b8" stroke="none"/>
      <path d="M22 62L35 43L47 56L54 48L60 62Z" fill="#a9c2aa" stroke="none"/>
      <rect x="48" y="48" width="38" height="39" rx="3" fill="#cec3e6" stroke="#624a5e" strokeWidth="2.4"/>
      <rect x="54" y="54" width="26" height="27" fill="#fffaf0" stroke="#8a748a" strokeWidth="1.4"/>
      <path d="M58 75Q66 59 74 68Q79 78 66 78Z" fill="#e6a7b8" stroke="none"/>
    </>,
    'tea-for-two':<>
      <ellipse cx="50" cy="83" rx="40" ry="6" fill="#3a2212" opacity=".18" stroke="none"/>
      <ellipse cx="50" cy="80" rx="39" ry="7" fill="#c9a57d" stroke="#7a593f" strokeWidth="2"/>
      <path d="M43 49q13-3 10 8q-3 7-10 5" stroke="#75564c" strokeWidth="3.2"/>
      <path d="M16 44H44V63Q44 76 30 76Q16 76 16 63Z" fill="#fff6e6" stroke="#75564c" strokeWidth="2.2"/>
      <ellipse cx="30" cy="44" rx="14" ry="3.8" fill="#c98f55" stroke="#75564c" strokeWidth="1.8"/>
      <path d="M21 52v11" stroke="#f0d9b8" strokeWidth="2.5"/>
      <path d="M81 53q12-2 9 8q-2 6-9 4" stroke="#75564c" strokeWidth="3.2"/>
      <path d="M56 49H81V66Q81 78 68.5 78Q56 78 56 66Z" fill="#e6b0bd" stroke="#75564c" strokeWidth="2.2"/>
      <ellipse cx="68.5" cy="49" rx="12.5" ry="3.4" fill="#c98f55" stroke="#75564c" strokeWidth="1.8"/>
      <path d="M62 56v10" stroke="#f5d2da" strokeWidth="2.2"/>
      <path d="M26 35q-5-6 1-11q4-4 0-8M36 33q-4-5 1-10M68 40q-5-6 1-12" stroke="#b99c8c" strokeWidth="2" opacity=".8"/>
    </>,
    cinema:<>
      <ellipse cx="50" cy="84" rx="38" ry="4.5" fill="#3a2212" opacity=".16" stroke="none"/>
      <rect x="17" y="30" width="66" height="50" rx="4" fill="#faf0dc" stroke="#6d514b" strokeWidth="2.4"/>
      <path d="M16 29L79 13L83 28L20 44Z" fill="#cec3e6" stroke="#624a5e" strokeWidth="2.4"/>
      <path d="M29 26L39 39M47 21L57 34M65 17L75 30M17 46H83" stroke="#624a5e" strokeWidth="2.2"/>
      <path d="M44 54L64 64L44 74Z" fill="#e6a4b6" stroke="#854f62" strokeWidth="2"/>
    </>,
    'evening-lamp':<>
      <circle cx="50" cy="44" r="35" fill="#ffe599" stroke="none" opacity=".55"/>
      <path d="M50 60V81" stroke="#7c5b4f" strokeWidth="3.6"/>
      <path d="M34 85Q50 76 66 85Z" fill="#c9bede" stroke="#624a5e" strokeWidth="2.2"/>
      <path d="M28 24H72L82 60H18Z" fill="#fff4d6" stroke="#87644f" strokeWidth="2.4"/>
      <path d="M40 25L35 59M60 25L65 59" stroke="#dfbf8b" strokeWidth="1.8"/>
      <path d="M68 60V72" stroke="#7c5b4f" strokeWidth="2"/>
      <circle cx="68" cy="75" r="3.4" fill="#e6a4b6" stroke="#854f62" strokeWidth="1.5"/>
    </>,
    scarf:<>
      <ellipse cx="48" cy="92" rx="28" ry="4.5" fill="#3a2212" opacity=".14" stroke="none"/>
      {/* Back scarf tail in softer shadow */}
      <path d="M51 39q15 2 20 12l6 28q-9 4-19 2l-7-31Z" fill="#9a95a3" stroke="#534d59" strokeWidth="2.2"/>
      <path d="M56 53l15-2M58 63l16-2M61 73l15-2" stroke="#c8c2cf" strokeWidth="1.6" opacity=".7"/>
      <path d="M61 82l2 7M66 82l2 7M71 81l2 7M75 80l2 7" stroke="#534d59" strokeWidth="2"/>
      {/* Soft knitted collar loop */}
      <path d="M19 32q-5-11 8-17q24-10 49-1q11 5 6 18q-4 11-18 13q-18 3-34-1q-9-2-11-12Z" fill="#bdb8c6" stroke="#534d59" strokeWidth="2.4"/>
      <path d="M23 23q26-10 51-1q5 4 2 10q-26 9-52 0q-4-4-1-9Z" fill="#d3cedb" stroke="none"/>
      <path d="M26 21q10-4 22-4M27 32q20 4 42-1" stroke="#857f8f" strokeWidth="1.8" opacity=".75"/>
      <path d="M28 26q22-4 44 0" stroke="#f0e5d1" strokeWidth="2.4" strokeDasharray="5 4" opacity=".85"/>
      {/* Front draped scarf tail with knit ribs & stripes */}
      <path d="M31 37q12 4 23 1l-3 46q-12 6-24 2l4-49Z" fill="#c7c2d0" stroke="#534d59" strokeWidth="2.4"/>
      <path d="M34 40l-2 43q8 3 15 0l2-42Z" fill="#dad5e2" stroke="none" opacity=".6"/>
      <path d="M31 48q11 3 22 0M30 58q11 3 22 0M29 68q11 3 22 0M28 77q11 3 22 0" stroke="#9992a3" strokeWidth="1.6" opacity=".65"/>
      <path d="M30 53q11 3 22 0M29 73q11 3 22 0" stroke="#f2e6cf" strokeWidth="2.6"/>
      <path d="M36 42l-2 40M44 43l-1 40" stroke="#8c8696" strokeWidth="1.2" strokeDasharray="3 4" opacity=".55"/>
      {/* Swaying fringe tassels */}
      <path d="M29 87l-2 8M34 88l-1 8M39 88v8M44 87l1 8M49 85l2 8" stroke="#534d59" strokeWidth="2.1"/>
    </>,
    envelope:<>
      <ellipse cx="50" cy="83" rx="38" ry="5" fill="#3a2212" opacity=".16" stroke="none"/>
      <rect x="12" y="27" width="76" height="52" rx="5" fill="#f7ebd6" stroke="#7c5d50" strokeWidth="2.4"/>
      <path d="M14 77L42 52M86 77L58 52" stroke="#cbb498" strokeWidth="2"/>
      <path d="M13 28L50 56L87 28" fill="#fff8ea" stroke="#7c5d50" strokeWidth="2.4"/>
      <path d="M17 29L50 53L83 29" stroke="#e5d0b3" strokeWidth="1.4"/>
      <circle cx="50" cy="56" r="10.5" fill="#c96f7b" stroke="#843f4b" strokeWidth="2"/>
      <circle cx="50" cy="56" r="7" fill="none" stroke="#e89aa5" strokeWidth="1.3"/>
      <path d="M50 59.5c-4-2.5-3.8-6-1.2-6c1 0 1.2 1 1.2 1s.2-1 1.2-1c2.6 0 2.8 3.5-1.2 6Z" fill="#ffe6ea" stroke="none"/>
    </>,
    star:<>
      <circle cx="50" cy="52" r="34" fill="#ffe79e" stroke="none" opacity=".32"/>
      <path d="M50 10L61 36L90 39L68 59L74 88L50 73L26 88L32 59L10 39L39 36Z" fill="#f7d57c" stroke="#966c2d" strokeWidth="2.4"/>
      <path d="M50 18L57 38L77 41L62 55L66 75L50 65Z" fill="#ffeba8" stroke="none" opacity=".75"/>
    </>,
    box:<>
      <ellipse cx="51" cy="87" rx="34" ry="5" fill="#3a2212" opacity=".16" stroke="none"/>
      <path d="M15 35L51 18L87 33L52 51Z" fill="#d9d0ec" stroke="#624a5e" strokeWidth="2.4"/>
      <path d="M15 35V70L52 88V51Z" fill="#efb9cb" stroke="#7c4f61" strokeWidth="2.4"/>
      <path d="M87 33V69L52 88V51Z" fill="#df9fb4" stroke="#7c4f61" strokeWidth="2.4"/>
      <path d="M32 27L69 43M28 47L42 54M30 59L39 64" stroke="#fff7fa" strokeWidth="2.4"/>
    </>,
  };
  return <svg className={`illustration ${className}`} viewBox="0 0 100 100" fill="none" stroke="#70534f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[kind]??drawings.token}</svg>;
}
