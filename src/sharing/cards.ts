import { constellationPaths } from '../minigames/constellationModel';
import type { ConstellationResult } from '../engine/types';
import { assetUrl } from '../content/assetManifest';
import { cards, cardText, cardDetail, cardTeam, cardCharacter } from '../content/cards';
import type { CardRecord } from '../state/types';
function image(url:string):Promise<HTMLImageElement>{return new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=url;});}
function lines(ctx:CanvasRenderingContext2D,text:string,max:number){const out:string[]=[];let line='';for(const word of text.split(' ')){const next=line?`${line} ${word}`:word;if(ctx.measureText(next).width>max&&line){out.push(line);line=word;}else line=next;}if(line)out.push(line);return out;}
export async function renderCard(card:CardRecord):Promise<Blob>{
  const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1350;const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Не удалось подготовить открытку');
  const c=cards[card.id];const [bg,cat]=await Promise.all([image(assetUrl(c.background)),card.chapter===4?Promise.resolve(null):image(assetUrl(cardCharacter(card.id)))]);
  ctx.fillStyle='#fff7ed';ctx.fillRect(0,0,1080,1350);ctx.save();ctx.beginPath();ctx.roundRect(48,48,984,660,28);ctx.clip();ctx.drawImage(bg,0,0,bg.width,bg.height*.72,48,48,984,660);ctx.restore();
  if(card.chapter===4){ctx.save();ctx.translate(325,110);ctx.scale(4.3,4.3);ctx.strokeStyle='#fff2c9';ctx.lineWidth=1.5;ctx.shadowColor='#f9dfa3';ctx.shadowBlur=3;ctx.stroke(new Path2D(constellationPaths[card.variant as ConstellationResult['outcome']]));ctx.restore();}else if(cat){ctx.fillStyle='#fff7ed';ctx.beginPath();ctx.ellipse(540,620,240,67,0,0,Math.PI*2);ctx.fill();if(cardCharacter(card.id).startsWith('vlad.'))ctx.drawImage(cat,370,180,340,510);else ctx.drawImage(cat,350,360,380,380);}
  ctx.textAlign='center';ctx.fillStyle='#75425f';ctx.font='600 23px system-ui';ctx.fillText(`ПЯТЬ СЛУЧАЙНЫХ ВСТРЕЧ  ·  ГЛАВА ${card.chapter}`,540,788);
  ctx.fillStyle='#302936';ctx.font='700 58px system-ui';const title=lines(ctx,c.title,900);title.forEach((l,i)=>ctx.fillText(l,540,885+i*70));
  ctx.font='32px system-ui';const caption=lines(ctx,c.caption,840);const y=title.length>1?1048:1010;caption.forEach((l,i)=>ctx.fillText(l,540,y+i*46));
  ctx.fillStyle='#75425f';ctx.font='italic 27px system-ui';lines(ctx,`«${c.quote}»`,870).forEach((l,i)=>ctx.fillText(l,540,1145+i*35));
  ctx.fillStyle='#65586b';ctx.font='25px system-ui';ctx.fillText(cardDetail(card),540,1230);ctx.fillStyle='#75425f';ctx.font='34px system-ui';ctx.font=card.chapter===3?'23px system-ui':'34px system-ui';ctx.fillText(cardTeam(card)||'●  ●',540,1290);
  return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('Не удалось сохранить изображение')),'image/png'));
}
export function downloadBlob(blob:Blob,name:string){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}
export async function shareCard(card:CardRecord,blob:Blob|null){
  const file=blob?new File([blob],`${card.id}.png`,{type:'image/png'}):null;
  const url=new URL(import.meta.env.BASE_URL,location.origin).href;
  if(!navigator.share)return 'unsupported';
  try{if(file&&navigator.canShare?.({files:[file]}))await navigator.share({files:[file],title:cards[card.id].title});else await navigator.share({title:cards[card.id].title,text:cardText(card.id),url});return 'opened';}
  catch(e){if(e instanceof DOMException&&e.name==='AbortError')return 'cancelled';return 'unsupported';}
}
