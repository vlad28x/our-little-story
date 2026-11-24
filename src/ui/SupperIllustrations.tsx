function WoodBoard(){
  return <>
    <ellipse cx="160" cy="164" rx="137" ry="14" fill="#584038" opacity=".25"/>
    <rect x="20" y="30" width="280" height="136" rx="22" fill="#895d4c" stroke="#795044" strokeWidth="2.4"/>
    <rect x="20" y="24" width="280" height="133" rx="22" fill="var(--supper-board, #ccab84)" stroke="#90614f" strokeWidth="2"/>
    <rect x="22" y="26" width="276" height="129" rx="20" fill="var(--supper-grain)"/>
    <path d="M28 48q3-17 22-18 104-2 222 1m-238 111q12 9 32 9l196-1q17 0 27-6" fill="none" stroke="#f5cfa3" strokeWidth="2.2" strokeLinecap="round" opacity=".64"/>
    <path d="M36 45q67-8 123 0t118-3M43 54q50-4 104 4m22 13q56-9 108-3M37 82q36-5 65 1t66 2m-124 25q58 8 112 2t118-3M38 133q39-5 66 1t67 1m17 3q54-5 83-4" fill="none" stroke="#8e5f47" strokeWidth="1.6" strokeLinecap="round" opacity=".43"/>
    <path d="M46 49q37-5 71-1m87 25q44-6 65-3M41 86q51-4 86 3m44 21q44-7 89-4m-129 32q48 4 84-2" fill="none" stroke="#f6d8ac" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
    <path d="M243 57q13-5 30-4-8 6-21 6m-199 57q11 5 24 1-9-3-17-2" fill="none" stroke="#865442" strokeWidth="1.3" strokeLinecap="round" opacity=".55"/>
  </>;
}

function SupperPlate(){
  return <>
    <ellipse cx="160" cy="164" rx="140" ry="16" fill="#5b3d39" opacity=".26"/>
    <ellipse cx="160" cy="102" rx="144" ry="70" fill="#886477" stroke="#775769" strokeWidth="2.5"/>
    <ellipse cx="160" cy="98" rx="144" ry="70" fill="var(--supper-rim, #d4bdc7)" stroke="#987789" strokeWidth="2"/>
    <ellipse cx="160" cy="98" rx="139" ry="66" fill="var(--supper-grain)"/>
    <ellipse cx="160" cy="98" rx="134" ry="61" fill="none" stroke="#f4dbc9" strokeWidth="1.8" opacity=".71"/>
    <ellipse cx="160" cy="98" rx="124" ry="54" fill="var(--supper-glaze, #faf0dc)" stroke="#b79498" strokeWidth="1.7"/>
    <path d="M45 89q15-27 57-35m71 95q59-2 94-28" fill="none" stroke="#fbf0dc" strokeWidth="2.2" strokeLinecap="round" opacity=".75"/>
  </>;
}

function CheeseBowl(){
  return <>
    <ellipse cx="98" cy="128" rx="46" ry="14" fill="#624036" opacity=".3"/>
    <circle cx="94" cy="97" r="41" fill="#927582" stroke="#805f69" strokeWidth="2"/>
    <circle cx="94" cy="94" r="41" fill="var(--supper-glaze, #f7ecd6)" stroke="#a47d76" strokeWidth="2"/>
    <circle cx="94" cy="94" r="36.5" fill="none" stroke="#c29194" strokeWidth="1.7"/>
    <circle cx="94" cy="94" r="32" fill="var(--supper-cheese, #f5d374)"/>
    <path d="M67 81q7-15 23-16m13 57q14-3 20-13" fill="none" stroke="#fff4df" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="m72 88 11-6m5-7 13 4m3 5 11 8m-32 1 14-6m1 9 14-3m-42 7 10 3m6 5 12 3m2-8 15-5m-8 16 8-5m-35 5 7 3" stroke="#b48047" strokeWidth="2.7" strokeLinecap="round" opacity=".68"/>
    <path d="m73 86 11-6m5-7 13 4m3 5 11 8m-33 1 14-6m1 9 14-3m-42 7 10 3m6 5 12 3m2-8 15-5m-8 16 8-5m-35 5 7 3" stroke="#fff1b5" strokeWidth="2.8" strokeLinecap="round"/>
  </>;
}

function Mushroom(){
  return <>
    <ellipse cy="10" rx="12" ry="3.8" fill="#604036" opacity=".29"/>
    <path d="M-4 0h8l1 8q-1 4-5 4t-5-4Z" fill="var(--supper-dough, #d3b490)" stroke="#7d5949" strokeWidth="1.25"/>
    <path d="M-13 2q0-12 9-14 14-4 17 14-10 4-26 0Z" fill="var(--supper-mushroom, #9c795e)" stroke="#66483e" strokeWidth="1.35"/>
    <path d="M-10-2q4-10 13-8m-11 6 1-1m0 7q8 2 15-1M-1 6v3" fill="none" stroke="#e9c29c" strokeWidth="1.05" strokeLinecap="round" opacity=".78"/>
  </>;
}

function HerbLeaf(){
  return <>
    <path d="M-15 4q11-12 31-7-11 14-31 7Z" fill="#5e483c" opacity=".26"/>
    <path d="M-17 1q7-10 15-10 8-.5 19 8Q10 7 2 8q-11 1-19-7Z" fill="var(--supper-herb, #788852)" stroke="#536244" strokeWidth="1.25"/>
    <path d="M-17 3q12-5 30-4M-9 0l5-5m-1 4 5 5M2-1l5-4m1 4 3 2" fill="none" stroke="#ced09b" strokeWidth="1.05" strokeLinecap="round" opacity=".82"/>
  </>;
}

function PastryFinish({open=false}:{open?:boolean}){
  return <>
    <rect x="4" y="5" width="62" height="41" rx="8" fill="var(--supper-grain)"/>
    <path d={open?"M9 12q-7 9-3 23m14-28q15-2 31 0m11 11q5 9 2 20M15 44q19 1 32 0":"M9 8q8 7 16 11m15 1 17-11M16 43l13-8m22 4 8 4"} fill="none" stroke="#ffe5ad" strokeWidth="1.6" strokeLinecap="round" opacity=".77"/>
    <path d="M12 30l2-.6m7 9 2 .5m31-24 2 .4m4 15 1 .8m-18-18 1-.5" fill="none" stroke="#a06845" strokeWidth="1.4" strokeLinecap="round" opacity=".67"/>
  </>;
}

// Geometry and ingredient states for the five stages of supper.
export const supperIllustrations = {
  "board": (
    <svg className="supper-art" data-stage="board" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Доска после готовки: мучная запятая, ложка и крошки">
      <WoodBoard/>
      <path d="M62 72q34 22 12 45q-9 8 1 16" stroke="#fff5e0" strokeWidth="10" fill="none" strokeLinecap="round" opacity=".9"/>
      <circle cx="84" cy="126" r="4" fill="#fff5e0" opacity=".65"/>
      <path d="M216 62l-56 60" stroke="#856552" strokeWidth="10" strokeLinecap="round"/>
      <ellipse cx="228" cy="50" rx="17" ry="24" transform="rotate(42 228 50)" fill="#b89984" stroke="#856552" strokeWidth="3"/>
      <path d="M214 56q-1-13 17-19m-11 29q13-6 21-17m-33 25-45 48" fill="none" stroke="#ead0aa" strokeWidth="2.8" strokeLinecap="round" opacity=".65"/>
      <path d="m59 84 9 11m-13-2 4 2m20 37 6-2m5 6 2-2m-48-5 3-1m-10 9 4-2m91-14 3-1m111 4 4-2m14 16 2-1" stroke="#fff1da" strokeWidth="2" strokeLinecap="round" opacity=".75"/>
      <circle cx="48" cy="136" r="3.5" fill="#eee0b8"/>
      <circle cx="98" cy="118" r="3" fill="#eee0b8"/>
      <circle cx="136" cy="134" r="3.5" fill="#eee0b8"/>
      <circle cx="192" cy="120" r="3" fill="#eee0b8"/>
      <circle cx="258" cy="134" r="3.5" fill="#eee0b8"/>
    </svg>
  ),
  "cooked-fold-mix": (
    <svg className="supper-art" data-stage="cooked" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре румяных конвертика: mix">
      <SupperPlate/>
      <g transform="translate(70 48) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M18 44Q28 47 36 44" stroke="#b45445" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="47" cy="44" rx="5.5" ry="2.8" fill="#7c5b43"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(170 46) rotate(8 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M18 44Q28 47 36 44" stroke="#b45445" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="47" cy="44" rx="5.5" ry="2.8" fill="#7c5b43"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(164 96) rotate(5 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M18 44Q28 47 36 44" stroke="#b45445" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="47" cy="44" rx="5.5" ry="2.8" fill="#7c5b43"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(76 98) rotate(-7 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M18 44Q28 47 36 44" stroke="#b45445" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="47" cy="44" rx="5.5" ry="2.8" fill="#7c5b43"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
        <path d="M58 27Q76 25 74 37Q72 47 59 44Z" fill="#e89f36" stroke="#a6621c" strokeWidth="1.8"/>
        <circle cx="67" cy="36" r="2.2" fill="#f7d574"/>
      </g>
    </svg>
  ),
  "cooked-fold-mushroom": (
    <svg className="supper-art" data-stage="cooked" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре румяных конвертика: mushroom">
      <SupperPlate/>
      <g transform="translate(70 48) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="28" cy="44" rx="6" ry="3" fill="#7c5b43"/>
        <ellipse cx="44" cy="44" rx="5.5" ry="2.8" fill="#8b684d"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(170 46) rotate(8 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="28" cy="44" rx="6" ry="3" fill="#7c5b43"/>
        <ellipse cx="44" cy="44" rx="5.5" ry="2.8" fill="#8b684d"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(164 96) rotate(5 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="28" cy="44" rx="6" ry="3" fill="#7c5b43"/>
        <ellipse cx="44" cy="44" rx="5.5" ry="2.8" fill="#8b684d"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(76 98) rotate(-7 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="28" cy="44" rx="6" ry="3" fill="#7c5b43"/>
        <ellipse cx="44" cy="44" rx="5.5" ry="2.8" fill="#8b684d"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
        <path d="M58 27Q76 25 74 37Q72 47 59 44Z" fill="#e89f36" stroke="#a6621c" strokeWidth="1.8"/>
        <circle cx="67" cy="36" r="2.2" fill="#f7d574"/>
      </g>
    </svg>
  ),
  "cooked-fold-pepper": (
    <svg className="supper-art" data-stage="cooked" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре румяных конвертика: pepper">
      <SupperPlate/>
      <g transform="translate(70 48) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M20 44Q35 47 50 44" stroke="#b45445" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(170 46) rotate(8 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M20 44Q35 47 50 44" stroke="#b45445" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(164 96) rotate(5 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M20 44Q35 47 50 44" stroke="#b45445" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(76 98) rotate(-7 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M20 44Q35 47 50 44" stroke="#b45445" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
        <path d="M58 27Q76 25 74 37Q72 47 59 44Z" fill="#e89f36" stroke="#a6621c" strokeWidth="1.8"/>
        <circle cx="67" cy="36" r="2.2" fill="#f7d574"/>
      </g>
    </svg>
  ),
  "cooked-fold-simple": (
    <svg className="supper-art" data-stage="cooked" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре румяных конвертика: simple">
      <SupperPlate/>
      <g transform="translate(70 48) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="44" r="2.6" fill="#728357"/>
        <circle cx="36" cy="45" r="2.8" fill="#728357"/>
        <circle cx="48" cy="44" r="2.5" fill="#728357"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(170 46) rotate(8 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="44" r="2.6" fill="#728357"/>
        <circle cx="36" cy="45" r="2.8" fill="#728357"/>
        <circle cx="48" cy="44" r="2.5" fill="#728357"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(164 96) rotate(5 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="44" r="2.6" fill="#728357"/>
        <circle cx="36" cy="45" r="2.8" fill="#728357"/>
        <circle cx="48" cy="44" r="2.5" fill="#728357"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
      </g>
      <g transform="translate(76 98) rotate(-7 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="44" r="2.6" fill="#728357"/>
        <circle cx="36" cy="45" r="2.8" fill="#728357"/>
        <circle cx="48" cy="44" r="2.5" fill="#728357"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
        <path d="M58 27Q76 25 74 37Q72 47 59 44Z" fill="#e89f36" stroke="#a6621c" strokeWidth="1.8"/>
        <circle cx="67" cy="36" r="2.2" fill="#f7d574"/>
      </g>
    </svg>
  ),
  "cooked-open-mix": (
    <svg className="supper-art" data-stage="cooked" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре открытые запечённые порции: mix">
      <SupperPlate/>
      <g transform="translate(70 48) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M16 19q14-4 28 3M18 35q16-3 30 3" stroke="#b45445" strokeWidth="4.2" strokeLinecap="round" fill="none"/>
        <g transform="translate(47 22) rotate(16) scale(0.58)">
          <Mushroom/>
        </g>
        <g transform="translate(26 28) rotate(-14) scale(0.56)">
          <Mushroom/>
        </g>
      </g>
      <g transform="translate(170 46) rotate(8 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M16 19q14-4 28 3M18 35q16-3 30 3" stroke="#b45445" strokeWidth="4.2" strokeLinecap="round" fill="none"/>
        <g transform="translate(47 22) rotate(16) scale(0.58)">
          <Mushroom/>
        </g>
        <g transform="translate(26 28) rotate(-14) scale(0.56)">
          <Mushroom/>
        </g>
      </g>
      <g transform="translate(164 96) rotate(5 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M16 19q14-4 28 3M18 35q16-3 30 3" stroke="#b45445" strokeWidth="4.2" strokeLinecap="round" fill="none"/>
        <g transform="translate(47 22) rotate(16) scale(0.58)">
          <Mushroom/>
        </g>
        <g transform="translate(26 28) rotate(-14) scale(0.56)">
          <Mushroom/>
        </g>
      </g>
      <g transform="translate(76 98) rotate(-7 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <path d="M55 9q10 2 11 16q1 14-10 18q4-10 3-17q-1-9-4-17z" fill="#df8e2b" stroke="#9d5816" strokeWidth="1.4"/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M16 19q14-4 28 3M18 35q16-3 30 3" stroke="#b45445" strokeWidth="4.2" strokeLinecap="round" fill="none"/>
        <g transform="translate(47 22) rotate(16) scale(0.58)">
          <Mushroom/>
        </g>
        <g transform="translate(26 28) rotate(-14) scale(0.56)">
          <Mushroom/>
        </g>
      </g>
    </svg>
  ),
  "cooked-open-mushroom": (
    <svg className="supper-art" data-stage="cooked" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре открытые запечённые порции: mushroom">
      <SupperPlate/>
      <g transform="translate(70 48) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g transform="translate(24 24) rotate(-14) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(46 22) rotate(16) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(36 36) rotate(-6) scale(0.58)">
          <Mushroom/>
        </g>
      </g>
      <g transform="translate(170 46) rotate(8 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g transform="translate(24 24) rotate(-14) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(46 22) rotate(16) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(36 36) rotate(-6) scale(0.58)">
          <Mushroom/>
        </g>
      </g>
      <g transform="translate(164 96) rotate(5 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g transform="translate(24 24) rotate(-14) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(46 22) rotate(16) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(36 36) rotate(-6) scale(0.58)">
          <Mushroom/>
        </g>
      </g>
      <g transform="translate(76 98) rotate(-7 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <path d="M55 9q10 2 11 16q1 14-10 18q4-10 3-17q-1-9-4-17z" fill="#df8e2b" stroke="#9d5816" strokeWidth="1.4"/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g transform="translate(24 24) rotate(-14) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(46 22) rotate(16) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(36 36) rotate(-6) scale(0.58)">
          <Mushroom/>
        </g>
      </g>
    </svg>
  ),
  "cooked-open-pepper": (
    <svg className="supper-art" data-stage="cooked" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре открытые запечённые порции: pepper">
      <SupperPlate/>
      <g transform="translate(70 48) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M17 17q16-4 32 3M16 28q18-3 36 3M21 37q13-3 26 2" stroke="#b45445" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M19 16q12-3 24 2M18 27q14-2 28 2" stroke="#eb7c61" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(170 46) rotate(8 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M17 17q16-4 32 3M16 28q18-3 36 3M21 37q13-3 26 2" stroke="#b45445" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M19 16q12-3 24 2M18 27q14-2 28 2" stroke="#eb7c61" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(164 96) rotate(5 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M17 17q16-4 32 3M16 28q18-3 36 3M21 37q13-3 26 2" stroke="#b45445" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M19 16q12-3 24 2M18 27q14-2 28 2" stroke="#eb7c61" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(76 98) rotate(-7 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <path d="M55 9q10 2 11 16q1 14-10 18q4-10 3-17q-1-9-4-17z" fill="#df8e2b" stroke="#9d5816" strokeWidth="1.4"/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M17 17q16-4 32 3M16 28q18-3 36 3M21 37q13-3 26 2" stroke="#b45445" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M19 16q12-3 24 2M18 27q14-2 28 2" stroke="#eb7c61" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </g>
    </svg>
  ),
  "cooked-open-simple": (
    <svg className="supper-art" data-stage="cooked" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Четыре открытые запечённые порции: simple">
      <SupperPlate/>
      <g transform="translate(70 48) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g fill="#728357" stroke="#476332" strokeWidth="1">
          <ellipse cx="24" cy="21" rx="7.5" ry="4" transform="rotate(-22 24 21)"/>
          <ellipse cx="45" cy="22" rx="7.5" ry="4" transform="rotate(18 45 22)"/>
          <ellipse cx="34" cy="34" rx="7.5" ry="4" transform="rotate(-10 34 34)"/>
        </g>
        <circle cx="50" cy="34" r="2" fill="#597842"/>
        <circle cx="19" cy="33" r="1.8" fill="#597842"/>
      </g>
      <g transform="translate(170 46) rotate(8 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g fill="#728357" stroke="#476332" strokeWidth="1">
          <ellipse cx="24" cy="21" rx="7.5" ry="4" transform="rotate(-22 24 21)"/>
          <ellipse cx="45" cy="22" rx="7.5" ry="4" transform="rotate(18 45 22)"/>
          <ellipse cx="34" cy="34" rx="7.5" ry="4" transform="rotate(-10 34 34)"/>
        </g>
        <circle cx="50" cy="34" r="2" fill="#597842"/>
        <circle cx="19" cy="33" r="1.8" fill="#597842"/>
      </g>
      <g transform="translate(164 96) rotate(5 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g fill="#728357" stroke="#476332" strokeWidth="1">
          <ellipse cx="24" cy="21" rx="7.5" ry="4" transform="rotate(-22 24 21)"/>
          <ellipse cx="45" cy="22" rx="7.5" ry="4" transform="rotate(18 45 22)"/>
          <ellipse cx="34" cy="34" rx="7.5" ry="4" transform="rotate(-10 34 34)"/>
        </g>
        <circle cx="50" cy="34" r="2" fill="#597842"/>
        <circle cx="19" cy="33" r="1.8" fill="#597842"/>
      </g>
      <g transform="translate(76 98) rotate(-7 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <path d="M55 9q10 2 11 16q1 14-10 18q4-10 3-17q-1-9-4-17z" fill="#df8e2b" stroke="#9d5816" strokeWidth="1.4"/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g fill="#728357" stroke="#476332" strokeWidth="1">
          <ellipse cx="24" cy="21" rx="7.5" ry="4" transform="rotate(-22 24 21)"/>
          <ellipse cx="45" cy="22" rx="7.5" ry="4" transform="rotate(18 45 22)"/>
          <ellipse cx="34" cy="34" rx="7.5" ry="4" transform="rotate(-10 34 34)"/>
        </g>
        <circle cx="50" cy="34" r="2" fill="#597842"/>
        <circle cx="19" cy="33" r="1.8" fill="#597842"/>
      </g>
    </svg>
  ),
  "half-fold-mix": (
    <svg className="supper-art" data-stage="half" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Половину съели: целая и разломленная порция (fold, mix)">
      <SupperPlate/>
      <g transform="translate(58 72) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M18 44Q28 47 36 44" stroke="#b45445" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="47" cy="44" rx="5.5" ry="2.8" fill="#7c5b43"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
        <path d="M58 27Q76 25 74 37Q72 47 59 44Z" fill="#e89f36" stroke="#a6621c" strokeWidth="1.8"/>
        <circle cx="67" cy="36" r="2.2" fill="#f7d574"/>
      </g>
      <g transform="translate(172 64)">
        <path d="M4 12L54 6L46 28L55 37L44 54L6 50Z" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M6 13 52 8 45 28 54 37 43 53 7 49Z" fill="var(--supper-grain)"/>
        <path d="M8 14L44 28L10 47" fill="none" stroke="#b18049" strokeWidth="1.8"/>
        <ellipse cx="24" cy="24" rx="6" ry="3.5" fill="#a36b4b" opacity=".4"/>
        <path d="M48 22Q59 24 66 20M49 34Q60 39 69 33M46 46Q57 49 65 44" stroke="#f5d374" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M44 25L60 27" stroke="#b45445" strokeWidth="3.4" strokeLinecap="round"/>
        <ellipse cx="53" cy="39" rx="5.5" ry="3" fill="#7c5b43"/>
        <path d="M64 14L96 20L88 60L58 52L67 36L60 27Z" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M65 15 95 21 87 59 59 51 68 36 61 27Z" fill="var(--supper-grain)"/>
        <ellipse cx="78" cy="36" rx="5.5" ry="3" fill="#a36b4b" opacity=".4"/>
      </g>
      <circle cx="144" cy="68" r="2.5" fill="#cfa263"/>
      <circle cx="152" cy="82" r="2" fill="#cfa263"/>
      <circle cx="162" cy="126" r="3" fill="#cfa263"/>
      <circle cx="148" cy="132" r="2" fill="#cfa263"/>
      <circle cx="184" cy="138" r="2.5" fill="#cfa263"/>
      <circle cx="216" cy="136" r="2" fill="#cfa263"/>
      <circle cx="132" cy="122" r="2.2" fill="#cfa263"/>
    </svg>
  ),
  "half-fold-mushroom": (
    <svg className="supper-art" data-stage="half" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Половину съели: целая и разломленная порция (fold, mushroom)">
      <SupperPlate/>
      <g transform="translate(58 72) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="28" cy="44" rx="6" ry="3" fill="#7c5b43"/>
        <ellipse cx="44" cy="44" rx="5.5" ry="2.8" fill="#8b684d"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
        <path d="M58 27Q76 25 74 37Q72 47 59 44Z" fill="#e89f36" stroke="#a6621c" strokeWidth="1.8"/>
        <circle cx="67" cy="36" r="2.2" fill="#f7d574"/>
      </g>
      <g transform="translate(172 64)">
        <path d="M4 12L54 6L46 28L55 37L44 54L6 50Z" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M6 13 52 8 45 28 54 37 43 53 7 49Z" fill="var(--supper-grain)"/>
        <path d="M8 14L44 28L10 47" fill="none" stroke="#b18049" strokeWidth="1.8"/>
        <ellipse cx="24" cy="24" rx="6" ry="3.5" fill="#a36b4b" opacity=".4"/>
        <path d="M48 22Q59 24 66 20M49 34Q60 39 69 33M46 46Q57 49 65 44" stroke="#f5d374" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <ellipse cx="52" cy="27" rx="5.5" ry="3.2" fill="#7c5b43"/>
        <ellipse cx="54" cy="39" rx="5" ry="3" fill="#8b684d"/>
        <path d="M64 14L96 20L88 60L58 52L67 36L60 27Z" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M65 15 95 21 87 59 59 51 68 36 61 27Z" fill="var(--supper-grain)"/>
        <ellipse cx="78" cy="36" rx="5.5" ry="3" fill="#a36b4b" opacity=".4"/>
      </g>
      <circle cx="144" cy="68" r="2.5" fill="#cfa263"/>
      <circle cx="152" cy="82" r="2" fill="#cfa263"/>
      <circle cx="162" cy="126" r="3" fill="#cfa263"/>
      <circle cx="148" cy="132" r="2" fill="#cfa263"/>
      <circle cx="184" cy="138" r="2.5" fill="#cfa263"/>
      <circle cx="216" cy="136" r="2" fill="#cfa263"/>
      <circle cx="132" cy="122" r="2.2" fill="#cfa263"/>
    </svg>
  ),
  "half-fold-pepper": (
    <svg className="supper-art" data-stage="half" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Половину съели: целая и разломленная порция (fold, pepper)">
      <SupperPlate/>
      <g transform="translate(58 72) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M20 44Q35 47 50 44" stroke="#b45445" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
        <path d="M58 27Q76 25 74 37Q72 47 59 44Z" fill="#e89f36" stroke="#a6621c" strokeWidth="1.8"/>
        <circle cx="67" cy="36" r="2.2" fill="#f7d574"/>
      </g>
      <g transform="translate(172 64)">
        <path d="M4 12L54 6L46 28L55 37L44 54L6 50Z" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M6 13 52 8 45 28 54 37 43 53 7 49Z" fill="var(--supper-grain)"/>
        <path d="M8 14L44 28L10 47" fill="none" stroke="#b18049" strokeWidth="1.8"/>
        <ellipse cx="24" cy="24" rx="6" ry="3.5" fill="#a36b4b" opacity=".4"/>
        <path d="M48 22Q59 24 66 20M49 34Q60 39 69 33M46 46Q57 49 65 44" stroke="#f5d374" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M44 26L61 28M45 39L59 36" stroke="#b45445" strokeWidth="3.6" strokeLinecap="round"/>
        <path d="M64 14L96 20L88 60L58 52L67 36L60 27Z" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M65 15 95 21 87 59 59 51 68 36 61 27Z" fill="var(--supper-grain)"/>
        <ellipse cx="78" cy="36" rx="5.5" ry="3" fill="#a36b4b" opacity=".4"/>
      </g>
      <circle cx="144" cy="68" r="2.5" fill="#cfa263"/>
      <circle cx="152" cy="82" r="2" fill="#cfa263"/>
      <circle cx="162" cy="126" r="3" fill="#cfa263"/>
      <circle cx="148" cy="132" r="2" fill="#cfa263"/>
      <circle cx="184" cy="138" r="2.5" fill="#cfa263"/>
      <circle cx="216" cy="136" r="2" fill="#cfa263"/>
      <circle cx="132" cy="122" r="2.2" fill="#cfa263"/>
    </svg>
  ),
  "half-fold-simple": (
    <svg className="supper-art" data-stage="half" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Половину съели: целая и разломленная порция (fold, simple)">
      <SupperPlate/>
      <g transform="translate(58 72) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="8" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M12 43Q35 49 58 43" stroke="#f5d578" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="44" r="2.6" fill="#728357"/>
        <circle cx="36" cy="45" r="2.8" fill="#728357"/>
        <circle cx="48" cy="44" r="2.5" fill="#728357"/>
        <path d="M4 6L35 27L66 6" fill="var(--supper-fold, #edd09a)" stroke="#a77844" strokeWidth="2"/>
        <path d="M4 46L35 26L66 46" fill="none" stroke="#b18049" strokeWidth="1.8" opacity=".82"/>
        <PastryFinish/>
        <ellipse cx="22" cy="17" rx="6" ry="3.5" fill="#a36b4b" opacity=".45"/>
        <ellipse cx="48" cy="21" rx="7" ry="4" fill="#a36b4b" opacity=".4"/>
        <ellipse cx="34" cy="36" rx="8" ry="3.5" fill="#a36b4b" opacity=".38"/>
        <path d="M58 27Q76 25 74 37Q72 47 59 44Z" fill="#e89f36" stroke="#a6621c" strokeWidth="1.8"/>
        <circle cx="67" cy="36" r="2.2" fill="#f7d574"/>
      </g>
      <g transform="translate(172 64)">
        <path d="M4 12L54 6L46 28L55 37L44 54L6 50Z" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M6 13 52 8 45 28 54 37 43 53 7 49Z" fill="var(--supper-grain)"/>
        <path d="M8 14L44 28L10 47" fill="none" stroke="#b18049" strokeWidth="1.8"/>
        <ellipse cx="24" cy="24" rx="6" ry="3.5" fill="#a36b4b" opacity=".4"/>
        <path d="M48 22Q59 24 66 20M49 34Q60 39 69 33M46 46Q57 49 65 44" stroke="#f5d374" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <ellipse cx="52" cy="27" rx="5" ry="2.8" fill="#728357" transform="rotate(-15 52 27)"/>
        <ellipse cx="54" cy="39" rx="5" ry="2.8" fill="#728357" transform="rotate(14 54 39)"/>
        <path d="M64 14L96 20L88 60L58 52L67 36L60 27Z" fill="var(--supper-crust, #d6a26c)" stroke="#996838" strokeWidth="2.2"/>
        <path d="M65 15 95 21 87 59 59 51 68 36 61 27Z" fill="var(--supper-grain)"/>
        <ellipse cx="78" cy="36" rx="5.5" ry="3" fill="#a36b4b" opacity=".4"/>
      </g>
      <circle cx="144" cy="68" r="2.5" fill="#cfa263"/>
      <circle cx="152" cy="82" r="2" fill="#cfa263"/>
      <circle cx="162" cy="126" r="3" fill="#cfa263"/>
      <circle cx="148" cy="132" r="2" fill="#cfa263"/>
      <circle cx="184" cy="138" r="2.5" fill="#cfa263"/>
      <circle cx="216" cy="136" r="2" fill="#cfa263"/>
      <circle cx="132" cy="122" r="2.2" fill="#cfa263"/>
    </svg>
  ),
  "half-open-mix": (
    <svg className="supper-art" data-stage="half" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Половину съели: целая и разломленная порция (open, mix)">
      <SupperPlate/>
      <g transform="translate(58 72) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <path d="M55 9q10 2 11 16q1 14-10 18q4-10 3-17q-1-9-4-17z" fill="#df8e2b" stroke="#9d5816" strokeWidth="1.4"/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M16 19q14-4 28 3M18 35q16-3 30 3" stroke="#b45445" strokeWidth="4.2" strokeLinecap="round" fill="none"/>
        <g transform="translate(47 22) rotate(16) scale(0.58)">
          <Mushroom/>
        </g>
        <g transform="translate(26 28) rotate(-14) scale(0.56)">
          <Mushroom/>
        </g>
      </g>
      <g transform="translate(172 64)">
        <path d="M4 12L54 6L46 28L55 37L44 54L6 50Z" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <path d="M6 13 52 8 45 28 54 37 43 53 7 49Z" fill="var(--supper-grain)"/>
        <path d="M10 17L47 12L41 28L48 36L40 48L12 45Z" fill="var(--supper-cheese, #eeca79)"/>
        <path d="M48 22Q59 24 66 20M49 34Q60 39 69 33M46 46Q57 49 65 44" stroke="#f5d374" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M44 25L60 27" stroke="#b45445" strokeWidth="3.4" strokeLinecap="round"/>
        <ellipse cx="53" cy="39" rx="5.5" ry="3" fill="#7c5b43"/>
        <path d="M64 14L96 20L88 60L58 52L67 36L60 27Z" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <path d="M65 15 95 21 87 59 59 51 68 36 61 27Z" fill="var(--supper-grain)"/>
        <path d="M67 20L90 24L84 54L63 48L70 36L65 28Z" fill="var(--supper-cheese, #eeca79)"/>
        <path d="M18 24l18 3M71 34l12 3" stroke="#b45445" strokeWidth="3.6" strokeLinecap="round"/>
        <g transform="translate(26 36) rotate(-12) scale(0.52)">
          <Mushroom/>
        </g>
        <g transform="translate(77 42) rotate(12) scale(0.48)">
          <Mushroom/>
        </g>
      </g>
      <circle cx="144" cy="68" r="2.5" fill="#cfa263"/>
      <circle cx="152" cy="82" r="2" fill="#cfa263"/>
      <circle cx="162" cy="126" r="3" fill="#cfa263"/>
      <circle cx="148" cy="132" r="2" fill="#cfa263"/>
      <circle cx="184" cy="138" r="2.5" fill="#cfa263"/>
      <circle cx="216" cy="136" r="2" fill="#cfa263"/>
      <circle cx="132" cy="122" r="2.2" fill="#cfa263"/>
    </svg>
  ),
  "half-open-mushroom": (
    <svg className="supper-art" data-stage="half" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Половину съели: целая и разломленная порция (open, mushroom)">
      <SupperPlate/>
      <g transform="translate(58 72) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <path d="M55 9q10 2 11 16q1 14-10 18q4-10 3-17q-1-9-4-17z" fill="#df8e2b" stroke="#9d5816" strokeWidth="1.4"/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g transform="translate(24 24) rotate(-14) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(46 22) rotate(16) scale(0.62)">
          <Mushroom/>
        </g>
        <g transform="translate(36 36) rotate(-6) scale(0.58)">
          <Mushroom/>
        </g>
      </g>
      <g transform="translate(172 64)">
        <path d="M4 12L54 6L46 28L55 37L44 54L6 50Z" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <path d="M6 13 52 8 45 28 54 37 43 53 7 49Z" fill="var(--supper-grain)"/>
        <path d="M10 17L47 12L41 28L48 36L40 48L12 45Z" fill="var(--supper-cheese, #eeca79)"/>
        <path d="M48 22Q59 24 66 20M49 34Q60 39 69 33M46 46Q57 49 65 44" stroke="#f5d374" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <ellipse cx="52" cy="27" rx="5.5" ry="3.2" fill="#7c5b43"/>
        <ellipse cx="54" cy="39" rx="5" ry="3" fill="#8b684d"/>
        <path d="M64 14L96 20L88 60L58 52L67 36L60 27Z" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <path d="M65 15 95 21 87 59 59 51 68 36 61 27Z" fill="var(--supper-grain)"/>
        <path d="M67 20L90 24L84 54L63 48L70 36L65 28Z" fill="var(--supper-cheese, #eeca79)"/>
        <g transform="translate(26 36) rotate(-12) scale(0.52)">
          <Mushroom/>
        </g>
        <g transform="translate(77 42) rotate(12) scale(0.48)">
          <Mushroom/>
        </g>
      </g>
      <circle cx="144" cy="68" r="2.5" fill="#cfa263"/>
      <circle cx="152" cy="82" r="2" fill="#cfa263"/>
      <circle cx="162" cy="126" r="3" fill="#cfa263"/>
      <circle cx="148" cy="132" r="2" fill="#cfa263"/>
      <circle cx="184" cy="138" r="2.5" fill="#cfa263"/>
      <circle cx="216" cy="136" r="2" fill="#cfa263"/>
      <circle cx="132" cy="122" r="2.2" fill="#cfa263"/>
    </svg>
  ),
  "half-open-pepper": (
    <svg className="supper-art" data-stage="half" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Половину съели: целая и разломленная порция (open, pepper)">
      <SupperPlate/>
      <g transform="translate(58 72) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <path d="M55 9q10 2 11 16q1 14-10 18q4-10 3-17q-1-9-4-17z" fill="#df8e2b" stroke="#9d5816" strokeWidth="1.4"/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <path d="M17 17q16-4 32 3M16 28q18-3 36 3M21 37q13-3 26 2" stroke="#b45445" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M19 16q12-3 24 2M18 27q14-2 28 2" stroke="#eb7c61" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(172 64)">
        <path d="M4 12L54 6L46 28L55 37L44 54L6 50Z" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <path d="M6 13 52 8 45 28 54 37 43 53 7 49Z" fill="var(--supper-grain)"/>
        <path d="M10 17L47 12L41 28L48 36L40 48L12 45Z" fill="var(--supper-cheese, #eeca79)"/>
        <path d="M48 22Q59 24 66 20M49 34Q60 39 69 33M46 46Q57 49 65 44" stroke="#f5d374" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M44 26L61 28M45 39L59 36" stroke="#b45445" strokeWidth="3.6" strokeLinecap="round"/>
        <path d="M64 14L96 20L88 60L58 52L67 36L60 27Z" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <path d="M65 15 95 21 87 59 59 51 68 36 61 27Z" fill="var(--supper-grain)"/>
        <path d="M67 20L90 24L84 54L63 48L70 36L65 28Z" fill="var(--supper-cheese, #eeca79)"/>
        <path d="M18 24l18 3M71 34l12 3" stroke="#b45445" strokeWidth="3.6" strokeLinecap="round"/>
      </g>
      <circle cx="144" cy="68" r="2.5" fill="#cfa263"/>
      <circle cx="152" cy="82" r="2" fill="#cfa263"/>
      <circle cx="162" cy="126" r="3" fill="#cfa263"/>
      <circle cx="148" cy="132" r="2" fill="#cfa263"/>
      <circle cx="184" cy="138" r="2.5" fill="#cfa263"/>
      <circle cx="216" cy="136" r="2" fill="#cfa263"/>
      <circle cx="132" cy="122" r="2.2" fill="#cfa263"/>
    </svg>
  ),
  "half-open-simple": (
    <svg className="supper-art" data-stage="half" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Половину съели: целая и разломленная порция (open, simple)">
      <SupperPlate/>
      <g transform="translate(58 72) rotate(-10 35 26)">
        <rect x="2" y="4" width="66" height="44" rx="9" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <rect x="8" y="9" width="54" height="34" rx="6" fill="var(--supper-cheese, #eeca79)" stroke="#d59e3c" strokeWidth="1.6"/>
        <PastryFinish open/>
        <path d="M55 9q10 2 11 16q1 14-10 18q4-10 3-17q-1-9-4-17z" fill="#df8e2b" stroke="#9d5816" strokeWidth="1.4"/>
        <circle cx="18" cy="14" r="2.2" fill="#d99a32" opacity=".7"/>
        <circle cx="52" cy="37" r="2.6" fill="#d99a32" opacity=".7"/>
        <g fill="#728357" stroke="#476332" strokeWidth="1">
          <ellipse cx="24" cy="21" rx="7.5" ry="4" transform="rotate(-22 24 21)"/>
          <ellipse cx="45" cy="22" rx="7.5" ry="4" transform="rotate(18 45 22)"/>
          <ellipse cx="34" cy="34" rx="7.5" ry="4" transform="rotate(-10 34 34)"/>
        </g>
        <circle cx="50" cy="34" r="2" fill="#597842"/>
        <circle cx="19" cy="33" r="1.8" fill="#597842"/>
      </g>
      <g transform="translate(172 64)">
        <path d="M4 12L54 6L46 28L55 37L44 54L6 50Z" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <path d="M6 13 52 8 45 28 54 37 43 53 7 49Z" fill="var(--supper-grain)"/>
        <path d="M10 17L47 12L41 28L48 36L40 48L12 45Z" fill="var(--supper-cheese, #eeca79)"/>
        <path d="M48 22Q59 24 66 20M49 34Q60 39 69 33M46 46Q57 49 65 44" stroke="#f5d374" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <ellipse cx="52" cy="27" rx="5" ry="2.8" fill="#728357" transform="rotate(-15 52 27)"/>
        <ellipse cx="54" cy="39" rx="5" ry="2.8" fill="#728357" transform="rotate(14 54 39)"/>
        <path d="M64 14L96 20L88 60L58 52L67 36L60 27Z" fill="var(--supper-crust, #d9a863)" stroke="#966434" strokeWidth="2.2"/>
        <path d="M65 15 95 21 87 59 59 51 68 36 61 27Z" fill="var(--supper-grain)"/>
        <path d="M67 20L90 24L84 54L63 48L70 36L65 28Z" fill="var(--supper-cheese, #eeca79)"/>
        <ellipse cx="26" cy="32" rx="6" ry="3.2" fill="#728357" transform="rotate(-15 26 32)"/>
        <ellipse cx="77" cy="38" rx="5.5" ry="3" fill="#728357" transform="rotate(14 77 38)"/>
      </g>
      <circle cx="144" cy="68" r="2.5" fill="#cfa263"/>
      <circle cx="152" cy="82" r="2" fill="#cfa263"/>
      <circle cx="162" cy="126" r="3" fill="#cfa263"/>
      <circle cx="148" cy="132" r="2" fill="#cfa263"/>
      <circle cx="184" cy="138" r="2.5" fill="#cfa263"/>
      <circle cx="216" cy="136" r="2" fill="#cfa263"/>
      <circle cx="132" cy="122" r="2.2" fill="#cfa263"/>
    </svg>
  ),
  "ingredients-mix": (
    <svg className="supper-art" data-stage="ingredients" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Доска с тёртым сыром, перцем и грибами">
      <WoodBoard/>
      <CheeseBowl/>
      <g stroke="var(--supper-pepper, #b94432)" strokeWidth="9.2" strokeLinecap="round" fill="none">
        <path d="M160 62q18-5 38 4"/>
        <path d="M158 82q20-4 40 5"/>
        <path d="M164 102q16-4 34 4"/>
      </g>
      <g stroke="#efad8a" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity=".86">
        <path d="M164 61q14-3 28 3"/>
        <path d="M162 81q15-3 30 4"/>
        <path d="M168 101q12-3 24 3"/>
      </g>
      <g transform="translate(240 68) rotate(14) scale(0.98)">
        <Mushroom/>
      </g>
      <g transform="translate(258 102) rotate(-14) scale(0.95)">
        <Mushroom/>
      </g>
      <g transform="translate(214 122) rotate(16) scale(1)">
        <Mushroom/>
      </g>
    </svg>
  ),
  "ingredients-mushroom": (
    <svg className="supper-art" data-stage="ingredients" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Доска с тёртым сыром и обжаренными грибами">
      <WoodBoard/>
      <CheeseBowl/>
      <g transform="translate(178 72) rotate(-16) scale(1.05)">
        <Mushroom/>
      </g>
      <g transform="translate(224 68) rotate(14) scale(1)">
        <Mushroom/>
      </g>
      <g transform="translate(258 96) rotate(-8) scale(0.95)">
        <Mushroom/>
      </g>
      <g transform="translate(196 114) rotate(18) scale(1.05)">
        <Mushroom/>
      </g>
      <g transform="translate(240 122) rotate(-20) scale(0.95)">
        <Mushroom/>
      </g>
    </svg>
  ),
  "ingredients-pepper": (
    <svg className="supper-art" data-stage="ingredients" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Доска с тёртым сыром и нарезанным сладким перцем">
      <WoodBoard/>
      <g transform="translate(29 0)">
        <CheeseBowl/>
        <g stroke="var(--supper-pepper, #b94432)" strokeWidth="10.5" strokeLinecap="round" fill="none">
          <path d="M162 60q20-6 42 4"/>
          <path d="M158 82q22-5 46 5"/>
          <path d="M164 104q20-4 42 6"/>
          <path d="M160 125q18-5 38 4"/>
        </g>
        <g stroke="#efad8a" strokeWidth="2.3" opacity=".86" strokeLinecap="round" fill="none">
          <path d="M166 59q15-4 32 3"/>
          <path d="M163 81q17-4 36 4"/>
          <path d="M169 103q15-3 32 4"/>
          <path d="M165 124q14-4 28 3"/>
        </g>
      </g>
    </svg>
  ),
  "ingredients-simple": (
    <svg className="supper-art" data-stage="ingredients" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Доска с тёртым сыром и свежей зеленью">
      <WoodBoard/>
      <CheeseBowl/>
      <g transform="translate(182 70) rotate(-26)"><HerbLeaf/></g>
      <g transform="translate(222 64) rotate(16) scale(.95)"><HerbLeaf/></g>
      <g transform="translate(254 88) rotate(-12) scale(.95)"><HerbLeaf/></g>
      <g transform="translate(186 112) rotate(20)"><HerbLeaf/></g>
      <g transform="translate(228 118) rotate(-22) scale(.88)"><HerbLeaf/></g>
      <g fill="#5b7c43">
        <circle cx="206" cy="90" r="2.8"/>
        <circle cx="238" cy="96" r="2.4"/>
        <circle cx="164" cy="94" r="2.5"/>
        <circle cx="256" cy="116" r="2.6"/>
      </g>
    </svg>
  ),
  "torn": (
    <svg className="supper-art" data-stage="torn" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Лист лепёшки разошёлся по сгибу на две половины">
      <WoodBoard/>
      <path d="M46 56L146 46L142 74L153 91L141 110L148 139L50 133Z" fill="var(--supper-dough, #f5dab0)" stroke="#b0844e" strokeWidth="2.5"/>
      <path d="M47 57 145 47 141 74 152 91 140 110 147 138 51 132Z" fill="var(--supper-grain)"/>
      <path d="m52 63 80-9m-74 73 69 4m19-42-8-12m-3 34 5 19" fill="none" stroke="#fff0ce" strokeLinecap="round" strokeWidth="2.2" opacity=".75"/>
      <circle cx="82" cy="78" r="5" fill="#d9ad70" opacity=".45"/>
      <circle cx="114" cy="112" r="7" fill="#d9ad70" opacity=".35"/>
      <circle cx="72" cy="116" r="4" fill="#d9ad70" opacity=".4"/>
      <path d="M172 47L272 56L264 134L172 141L164 111L175 91L165 73Z" fill="var(--supper-dough, #f5dab0)" stroke="#b0844e" strokeWidth="2.5"/>
      <path d="M173 48 271 57 263 133 173 140 165 111 176 91 166 73Z" fill="var(--supper-grain)"/>
      <path d="m177 55 84 8m-77 70 71-7m-81-50 7 14-10 21" fill="none" stroke="#fff0ce" strokeLinecap="round" strokeWidth="2.2" opacity=".75"/>
      <circle cx="212" cy="80" r="6" fill="#d9ad70" opacity=".4"/>
      <circle cx="240" cy="108" r="5" fill="#d9ad70" opacity=".45"/>
      <circle cx="195" cy="120" r="4" fill="#d9ad70" opacity=".35"/>
    </svg>
  ),
};
