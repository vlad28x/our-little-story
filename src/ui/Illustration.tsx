import type { ReactNode } from 'react';
export function Illustration({kind,className=''}:{kind:string;className?:string}){
  const drawings:Record<string,ReactNode>={
    cloud:<><path d="M19 65Q4 57 17 42Q20 21 41 29Q56 7 74 31Q95 29 92 54Q95 72 74 72H29Z" fill="#ddd4ef"/><path d="M31 48Q35 45 40 48M57 48Q62 45 66 48"/></>,
    'umbrella-case':<><path d="M36 13Q50 4 64 13L68 79Q50 97 32 79Z" fill="#c8d8ca"/><path d="M38 26L62 26M50 29V74M43 17H57"/></>,
    controller:<><path d="M23 28Q50 18 77 28Q88 36 92 69Q91 85 77 73L67 61H33L22 73Q8 85 9 69Q12 36 23 28Z" fill="#ddd4ef"/><path d="M28 35V52M20 43H37"/><circle cx="69" cy="36" r="3" fill="#c8d8ca"/><circle cx="78" cy="44" r="3" fill="#f3cbd9"/><circle cx="60" cy="44" r="3" fill="#f9dfa3"/><circle cx="69" cy="52" r="3" fill="#c8d8ca"/><circle cx="46" cy="54" r="7" fill="#fff7ed"/></>,
    'button-piece':<><circle cx="50" cy="50" r="28" fill="#c8d8ca"/><circle cx="43" cy="43" r="3"/><circle cx="57" cy="43" r="3"/><circle cx="43" cy="57" r="3"/><circle cx="57" cy="57" r="3"/></>,
    'triangle-piece':<><path d="M50 15L85 78H15Z" fill="#f3cbd9"/><path d="M50 26L75 72H25Z" strokeDasharray="3 5"/></>,
    'ribbon-piece':<><path d="M20 34L79 42L73 65L16 57Z" fill="#f9dfa3"/><path d="M24 39L71 46M22 52L69 59" strokeDasharray="3 4"/></>,
    leaf:<><path d="M20 78Q10 25 80 17Q92 70 20 78Z" fill="#c8d8ca"/><path d="M18 83L65 33M33 62L32 46M47 51L65 51"/></>,
    spoon:<><ellipse cx="55" cy="29" rx="17" ry="22" fill="#e1d8e7"/><path d="M49 49L38 88Q43 94 49 87L60 49" fill="#e1d8e7"/></>,
    token:<><circle cx="50" cy="50" r="31" fill="#f4d9a6"/><circle cx="50" cy="50" r="24" strokeDasharray="3 4"/><circle cx="40" cy="50" r="4" fill="#75425f"/><circle cx="60" cy="50" r="4" fill="#75425f"/></>,
    bag:<><path d="M22 40Q50 30 78 40L82 82Q50 91 18 82Z" fill="#c8d8ca"/><path d="M36 38V28Q50 7 64 28V38"/><path d="M22 51Q50 61 78 51M44 49V61H56V49"/></>,
    mat:<><path d="M15 28L78 25L90 72L20 80Z" fill="#e7b4ac"/><path d="M24 38L70 35M28 48L74 45M31 59L77 56M34 70L81 66"/><circle cx="51" cy="50" r="10" fill="#f9dfa3"/></>,
    paper:<><path d="M25 13L70 19L78 81L19 88Z" fill="#fff7ed"/><path d="M34 35L61 37M32 46L64 49M30 60L66 62M28 73L55 75"/><path d="M48 22L51 27L56 25"/></>,
    cup:<><path d="M29 31H69L63 83H35Z" fill="#fff7ed"/><path d="M25 25H73V34H25Z" fill="#c8d8ca"/><path d="M34 48H66V65H34Z" fill="#e9b8c8"/><path d="M45 55L49 59L55 53"/></>,
    umbrella:<><path d="M15 45Q48 5 85 45Q73 36 61 47Q48 36 37 47Q25 36 15 45Z" fill="#ddd4ef"/><path d="M50 24V78Q50 94 64 83M37 47Q39 25 50 24Q60 27 61 47"/></>,
    tea:<><path d="M19 38H63V59Q61 80 41 80Q20 79 19 59Z" fill="#fff7ed"/><path d="M63 42Q91 39 81 59Q75 69 63 66M14 84H76M31 28Q22 19 33 10M48 27Q40 19 50 11"/></>,
    cafe:<><path d="M20 36H80V83H20Z" fill="#fff7ed"/><path d="M15 24H85L80 40Q72 48 65 40Q57 48 50 40Q43 48 35 40Q28 48 20 40Z" fill="#e9b8c8"/><path d="M25 24L31 13H69L75 24M36 25L35 40M50 25V40M64 25L65 40"/><path d="M30 56H46V72H30Z" fill="#f9dfa3"/><path d="M58 83V56H72V83M16 84H84"/></>,
    promenade:<><path d="M14 78Q32 70 50 78T86 78M14 88Q32 80 50 88T86 88" stroke="#9caeb8"/><path d="M27 72V29M18 30H36L33 14H21ZM25 14V9M20 72H34" fill="#f9dfa3"/><path d="M49 54H81V66H49Z" fill="#c8d8ca"/><path d="M45 67H85M52 67V73M78 67V73M56 55V65M66 55V65M76 55V65"/><path d="M65 17L68 24L76 25L70 30L71 38L65 34L58 38L60 30L54 25L62 24Z" fill="#f9dfa3"/></>,
    gallery:<><path d="M14 19H68V70H14Z" fill="#f4d9a6"/><path d="M21 26H61V63H21Z" fill="#fff7ed"/><circle cx="49" cy="37" r="5" fill="#e9b8c8"/><path d="M22 62L35 44L47 57L54 49L61 62" fill="#c8d8ca"/><path d="M49 49H85V87H49Z" fill="#ddd4ef"/><path d="M55 55H79V81H55Z" fill="#fff7ed"/><path d="M60 74Q66 59 74 68Q79 78 66 77Z" fill="#e9b8c8"/></>,
    'tea-for-two':<><ellipse cx="50" cy="82" rx="37" ry="5" fill="#ddd4ef"/><path d="M16 44H44V62Q44 74 30 74Q16 74 16 62Z" fill="#fff7ed"/><path d="M44 48Q60 45 54 58Q51 64 44 62M56 49H80V66Q80 77 68 77Q56 77 56 66Z" fill="#e9b8c8"/><path d="M80 53Q94 51 90 62Q87 68 80 66M24 33Q17 26 25 19M36 33Q29 26 37 18M65 38Q58 31 66 24"/><path d="M59 14L63 18L70 12" stroke="#9ca18c"/></>,
    cinema:<><path d="M17 28H83V78H17Z" fill="#fff7ed"/><path d="M17 28L79 13L83 28L21 43Z" fill="#ddd4ef"/><path d="M29 25L39 38M47 21L57 33M65 17L75 29M17 45H83"/><path d="M44 53L62 63L44 73Z" fill="#e9b8c8"/><path d="M12 84H88"/></>,
    'evening-lamp':<><circle cx="50" cy="43" r="33" fill="#f9dfa3" stroke="none" opacity=".65"/><path d="M29 25H69L80 59H18Z" fill="#fff7ed"/><path d="M50 59V80M35 84Q50 76 65 84Z" fill="#ddd4ef"/><path d="M68 59V71"/><circle cx="68" cy="74" r="3" fill="#e9b8c8"/><path d="M15 16L18 10M83 19L88 15"/></>,
    scarf:<><path d="M26 20Q50 6 74 20L68 43L50 39L53 82L32 89L30 43L19 39Z" fill="#ddd4ef"/><path d="M24 29L68 31M35 50L48 48M35 61L49 60M36 73L50 71M34 87V96M42 85V94M49 83V91"/></>,
    envelope:<><path d="M13 28H87V79H13Z" fill="#fff7ed"/><path d="M13 28L50 57L87 28M13 79L37 52M87 79L63 52"/><circle cx="50" cy="57" r="8" fill="#e9b8c8"/></>,
    star:<path d="M50 10L61 36L90 39L68 59L74 88L50 73L26 88L32 59L10 39L39 36Z" fill="#f9dfa3"/>,
    box:<><path d="M15 35L51 18L87 33L52 51Z" fill="#ddd4ef"/><path d="M15 35V70L52 88L87 69V33L52 51V88" fill="#f3cbd9"/><path d="M28 46L42 53M30 58L39 63"/></>,
  };
  return <svg className={`illustration ${className}`} viewBox="0 0 100 100" fill="none" stroke="#70534f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[kind]??drawings.token}</svg>;
}
