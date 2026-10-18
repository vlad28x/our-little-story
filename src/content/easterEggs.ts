// Optional scene reactions. These never emit engine commands or achievements.
export const easterEggs={
  hair:{label:'Потрогать кудри Влада',text:'я их укладывал. у них другое мнение'},
  cat:{label:'Погладить Пончика',text:'так. теперь он уверен, что ты пришла к нему'},
  cookie:{label:'Взять печеньку',text:'план был дожить до начала игры'},
} as const;
export type EasterEggId=keyof typeof easterEggs;
