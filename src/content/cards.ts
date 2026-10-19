import type { CardId, ChapterId, StoryState } from '../engine/types';
import type { CardRecord } from '../state/types';
import { teamNames } from '../minigames/kitchenModel';
import { constellationNames } from '../minigames/constellationModel';
import type { Run } from '../engine/types';
export const cards: Record<CardId,{chapter:ChapterId;title:string;caption:string;quote:string;motif:string;background:string}> = {
  'c1.tea': {chapter:1,title:'Маленькая пауза',caption:'Иногда хороший день начинается с того, что никуда не торопишься',quote:'спасибо, что задержалась.',motif:'tea',background:'bg.cafe.window'},
  'c1.banter': {chapter:1,title:'Нелепо познакомились',caption:'План знакомиться красиво заменён на план смеяться вместе',quote:'хорошо посидели. неожиданно буквально.',motif:'scarf',background:'bg.cafe.window'},
  'c1.coop': {chapter:1,title:'Второй игрок найден',caption:'Сначала собрали жетоны. Кажется, теперь собралась команда',quote:'сохраним место. у нас тут ещё мостик непостроенный.',motif:'token',background:'bg.cafe.window'},
  'c2.shelter': {chapter:2,title:'Навес на двоих',caption:'Прогулка стала короче. Хороший вечер — нет',quote:'путешествие было коротким, но я многое понял.',motif:'tea',background:'bg.rain.awning'},
  'c2.arcade': {chapter:2,title:'Короткий путь с лужей',caption:'Маршрут немного промок, зато история получилась своя',quote:'ну, зато маршрут эксклюзивный.',motif:'umbrella',background:'bg.rain.arcade'},
  'c3.dinner': {chapter:3,title:'Ужин по обстоятельствам',caption:'Хорошая команда остаётся вместе даже после закрытия виртуальной кухни',quote:'вот эту часть вечера я точно подготовил.',motif:'controller',background:'bg.home.living'},
  'c4.adventure': {chapter:4,title:'Созвездие приключений',caption:'У маленького желания появилось своё место под звёздами',quote:'маленькие звучат хорошо. чтобы потом ещё оставались силы на чай.',motif:'star',background:'bg.river.evening'},
  'c4.calm': {chapter:4,title:'Созвездие передышки',caption:'Иногда самый хороший план — никуда не торопиться',quote:'чай можно оставить в списке. он не против.',motif:'star',background:'bg.river.evening'},
  'c5.romantic': {chapter:5,title:'Место для шестой встречи',caption:'У пяти встреч появилось продолжение, которое вы выбрали сами',quote:'хочу ещё увидеться.',motif:'envelope',background:'bg.cafe.sunset'},
  'c5.comic': {chapter:5,title:'Продлено котом',caption:'Бюро случайных встреч продолжает работу. Руководитель одобряет',quote:'руководитель утвердил. не читая.',motif:'token',background:'bg.cafe.sunset'},
  'c5.gaming': {chapter:5,title:'Второй игрок остаётся',caption:'Состав команды сохранён. Новое приключение выберем вместе',quote:'финальный босс — выбрать, во что играть.',motif:'controller',background:'bg.cafe.sunset'},
  'c5.friendly': {chapter:5,title:'Хорошо, что встретились',caption:'Можно просто быть собой и находить время для хороших встреч',quote:'мне нравится, что здесь не надо ничего изображать.',motif:'tea',background:'bg.cafe.sunset'},
  'c6.hand':{chapter:6,title:'Рука в руке',caption:'Короткая дорога подождёт',quote:'маршрут теперь можешь вообще не объяснять.',motif:'star',background:'bg.river.evening'},
  'c6.lap':{chapter:6,title:'Ещё один круг',caption:'Вечер, которому не нужен большой план',quote:'договорились. теперь расскажу, почему керамический кот выглядит успешнее меня.',motif:'star',background:'bg.river.evening'},
  'c6.home':{chapter:6,title:'До следующего вечера',caption:'Хорошее прощание тоже часть встречи',quote:'мне понравился этот вечер. спасибо, что свернула со мной.',motif:'star',background:'bg.river.evening'},
};
export const searchCaptions = {tidy:'Три точных находки',detour:'Провели расследование',skipped:'Собрали вместе'};
export const umbrellaCaptions={patched:'Облако-нашивка на память',borrowed:'Сухой чехол для зонтика',skipped:'Просто хороший перерыв'};
export const kitchenCaptions={feast:'Целый пир на экране',snack:'Один большой бутерброд',chaos:'Зато красиво сервировали',skipped:'Печенье без обучения'};
export function cardDetail(card:CardRecord){return card.chapter===6?'После титров · первая встреча':card.chapter===1?searchCaptions[card.variant as keyof typeof searchCaptions]:card.chapter===2?umbrellaCaptions[card.variant as keyof typeof umbrellaCaptions]:card.chapter===3?kitchenCaptions[card.variant as keyof typeof kitchenCaptions]:card.chapter===5?(card.variant==='adventure'?'Больше маленьких приключений':'Больше спокойных вечеров'):card.usedPreset?'Выбрали готовую картинку · Чайник':constellationNames[card.variant as keyof typeof constellationNames];}
export function cardCharacter(id:CardId){const chapter=cards[id].chapter;return chapter===6?'vlad.city.smile':chapter===3?'vlad.casual.smile':chapter===5?(id==='c5.comic'?'cat.idle':id==='c5.romantic'?'vlad.elegant.awkward':id==='c5.gaming'?'vlad.elegant.laugh':'vlad.elegant.smile'):'cat.idle';}
export function cardTeam(card:CardRecord){return card.teamName?teamNames[card.teamName]:'';}
export function cardFromStory(story:StoryState,chapter:ChapterId=1,results?:Run['results']):CardRecord {
  let id:CardId;let variant:CardRecord['variant'];
  if(chapter===1&&story.plan&&story.searchResult){id=`c1.${story.plan}`;variant=story.searchResult;}
  else if(chapter===2&&story.rainRoute&&story.umbrella){id=`c2.${story.rainRoute}`;variant=story.umbrella;}
  else if(chapter===3&&story.kitchenResult&&story.teamName){id='c3.dinner';variant=story.kitchenResult;}
  else if(chapter===4&&story.wish&&story.constellation){id=`c4.${story.wish}`;variant=story.constellation;}
  else if(chapter===5&&story.ending&&story.wish){id=`c5.${story.ending}`;variant=story.wish;}
  else if(chapter===6&&story.c6Ending){id=`c6.${story.c6Ending}`;variant='evening';}
  else throw new Error('История ещё не завершена');
  return {id,chapter,endingId:id,variant,captionId:`${id}.${variant}`,...(chapter===3?{teamName:story.teamName}:{}),...(chapter===4?{usedPreset:results?.constellation?.usedPreset??false}:{})};
}
