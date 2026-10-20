import type { CardId, ChapterId, StoryState } from '../engine/types';
import type { CardRecord } from '../state/types';
import { teamNames } from '../minigames/kitchenModel';
import { constellationNames } from '../minigames/constellationModel';
import { effectiveVenue } from './season2';
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
  "c6.hand":{"title": "Рука в руке", "caption": "Короткая дорога подождёт", "quote": "короткую дорогу сегодня точно не предлагаю.", "chapter": 6, "motif": "star", "background": "bg.river.evening"},
  "c6.lap":{"title": "Ещё один круг", "caption": "Разговору нашлось продолжение", "quote": "сегодня у меня с этим особенно хорошо.", "chapter": 6, "motif": "star", "background": "bg.river.evening"},
  "c6.home":{"title": "До следующего вечера", "caption": "Хороший вечер можно закончить вовремя", "quote": "мне было хорошо с тобой.", "chapter": 6, "motif": "star", "background": "bg.river.evening"},
  "c7.open":{"title": "Сказано вслух", "caption": "У этого разговора будет продолжение", "quote": "ты мне тоже нравишься.", "chapter": 7, "motif": "star", "background": "bg.s2.gallery.evening"},
  "c7.promise":{"title": "Продолжим при встрече", "caption": "Вы ещё не договорили", "quote": "а ты продолжишь так смотреть на меня?", "chapter": 7, "motif": "star", "background": "bg.s2.gallery.evening"},
  "c7.calm":{"title": "В своём темпе", "caption": "Новый вечер можно выбрать без спешки", "quote": "мне нравится узнавать тебя по чуть-чуть.", "chapter": 7, "motif": "star", "background": "bg.s2.gallery.evening"},
  "c8.kiss":{"title": "Чай немного подождёт", "caption": "Первый поцелуй в губы", "quote": "вот эту твою идею я точно запомню.", "chapter": 8, "motif": "tea", "background": "bg.cafe.sunset"},
  "c8.near":{"title": "Ещё немного рядом", "caption": "Вашему темпу можно довериться", "quote": "побудем. мне нравится и так.", "chapter": 8, "motif": "tea", "background": "bg.cafe.sunset"},
  "c8.tea":{"title": "На чай. Конечно", "caption": "Разговор оказался самым интересным", "quote": "я ещё хочу тебя послушать.", "chapter": 8, "motif": "tea", "background": "bg.cafe.sunset"},
  "c9.kiss":{"title": "Фильм подождёт", "caption": "Кино оказалось хорошим поводом встретиться", "quote": "мне нравится, когда ты меня отвлекаешь.", "chapter": 9, "motif": "star", "background": "bg.s2.cinema.courtyard"},
  "c9.hug":{"title": "Удобно рядом", "caption": "Начало фильма можно смотреть вместе", "quote": "иди ко мне.", "chapter": 9, "motif": "star", "background": "bg.s2.cinema.courtyard"},
  "c9.film":{"title": "Вечер с котом", "caption": "Вы всё-таки включили кино", "quote": "теперь попробую следить за сюжетом.", "chapter": 9, "motif": "star", "background": "bg.s2.cinema.courtyard"},
  "c10.goodnight":{"title": "До следующей встречи", "caption": "Этот вечер закончился тепло", "quote": "рад, что мы встретились.", "chapter": 10, "motif": "star", "background": "bg.s2.cafe.terrace"},
  "c10.stay":{"title": "Просто рядом", "caption": "У хорошего вечера свой темп", "quote": "мне хочется тебя послушать.", "chapter": 10, "motif": "star", "background": "bg.s2.cafe.terrace"},
  "c10.private":{"title": "Оставим свет?", "caption": "Продолжение вы выбираете сами", "quote": "побудь со мной.", "chapter": 10, "motif": "star", "background": "bg.s2.cafe.terrace"},
  "c10.overnight":{"title": "До утра", "caption": "А утром — ещё одна маленькая история", "quote": "теперь утро уже хорошее.", "chapter": 10, "motif": "star", "background": "bg.s2.kitchen.morning"},
  "c8.r3.dance":{"chapter": 8, "title": "Наши шаги", "caption": "Чай, смешной поворот и вечер, который не хотелось торопить.", "quote": "сложнее пока не придумываю. мне и так нравится", "motif": "tea", "background": "bg.cafe.sunset"},
  "c8.r3.tea":{"chapter": 8, "title": "Без особого повода", "caption": "Обычный чай стал хорошим поводом побыть вместе.", "quote": "в следующий раз тоже можно просто прийти", "motif": "tea", "background": "bg.cafe.sunset"},
  "c8.r3.next":{"chapter": 8, "title": "Следующая идея", "caption": "Вы ещё не выбрали новое занятие, а уже хочется продолжить.", "quote": "теперь твой ход. я буду ждать", "motif": "tea", "background": "bg.cafe.sunset"},
  "c9.r3.talk":{"chapter": 9, "title": "Наша версия фильма", "caption": "У одного фильма получилось сразу несколько ваших историй.", "quote": "мне нравится спорить с тобой о таких глупостях", "motif": "star", "background": "bg.s2.cinema.courtyard"},
  "c9.r3.quiet":{"chapter": 9, "title": "Рядом после титров", "caption": "Экран погас, а вы ещё немного оставались рядом.", "quote": "можно ничего не добавлять. мне хорошо", "motif": "star", "background": "bg.s2.cinema.courtyard"},
  "c9.r3.credits":{"chapter": 9, "title": "Следующий фильм с тебя", "caption": "Хороший вечер закончился новой маленькой договорённостью.", "quote": "в следующий раз постараюсь не угадывать заранее", "motif": "star", "background": "bg.s2.cinema.courtyard"},
};
export const searchCaptions = {tidy:'Три точных находки',detour:'Провели расследование',skipped:'Собрали вместе'};
export const umbrellaCaptions={patched:'Облако-нашивка на память',borrowed:'Сухой чехол для зонтика',skipped:'Просто хороший перерыв'};
export const kitchenCaptions={feast:'Целый пир на экране',snack:'Один большой бутерброд',chaos:'Зато красиво сервировали',skipped:'Печенье без обучения'};
export function archivedEpisodeCard(id:CardId){return ['c8.kiss','c8.near','c8.tea','c9.kiss','c9.hug','c9.film'].includes(id);}
export function cardDetail(card:CardRecord){return archivedEpisodeCard(card.id)?'Из прежнего сценария · встреча '+card.chapter:card.chapter>=8?`После титров · ${card.chapter-5} / 5`:card.chapter===7?'После титров · вторая встреча':card.chapter===6?'После титров · первая встреча':card.chapter===1?searchCaptions[card.variant as keyof typeof searchCaptions]:card.chapter===2?umbrellaCaptions[card.variant as keyof typeof umbrellaCaptions]:card.chapter===3?kitchenCaptions[card.variant as keyof typeof kitchenCaptions]:card.chapter===5?(card.variant==='adventure'?'Больше маленьких приключений':'Больше спокойных вечеров'):card.usedPreset?'Выбрали готовую картинку · Чайник':constellationNames[card.variant as keyof typeof constellationNames];}
export function cardBackground(card:CardRecord){return card.id==='c10.overnight'?'bg.s2.kitchen.morning':card.chapter>=8?(card.venue==='home'?(card.chapter===8?'bg.s2.kitchen.evening':'bg.home.living'):cards[card.id].background):cards[card.id].background;}
export function cardCharacter(id:CardId,venue?:CardRecord['venue']){const chapter=cards[id].chapter;return chapter>=8&&venue==='home'?'vlad.casual.warm':chapter>=6?'vlad.city.smile':chapter===3?'vlad.casual.smile':chapter===5?(id==='c5.comic'?'cat.idle':id==='c5.romantic'?'vlad.elegant.awkward':id==='c5.gaming'?'vlad.elegant.laugh':'vlad.elegant.smile'):'cat.idle';}
export function cardTeam(card:CardRecord){return card.teamName?teamNames[card.teamName]:'';}
export function cardFromStory(story:StoryState,chapter:ChapterId=1,results?:Run['results']):CardRecord {
  let id:CardId;let variant:CardRecord['variant'];
  if(chapter===1&&story.plan&&story.searchResult){id=`c1.${story.plan}`;variant=story.searchResult;}
  else if(chapter===2&&story.rainRoute&&story.umbrella){id=`c2.${story.rainRoute}`;variant=story.umbrella;}
  else if(chapter===3&&story.kitchenResult&&story.teamName){id='c3.dinner';variant=story.kitchenResult;}
  else if(chapter===4&&story.wish&&story.constellation){id=`c4.${story.wish}`;variant=story.constellation;}
  else if(chapter===5&&story.ending&&story.wish){id=`c5.${story.ending}`;variant=story.wish;}
  else if(chapter===6&&story.c6Ending){id=`c6.${story.c6Ending}`;variant='evening';}
  else if(chapter===7&&story.c7Ending){id=`c7.${story.c7Ending}`;variant='evening';}
  else if(chapter===8&&story.c8Close){id=`c8.r3.${story.c8Close}`;variant='evening';}
  else if(chapter===9&&story.c9Close){id=`c9.r3.${story.c9Close}`;variant='evening';}
  else if(chapter===10&&story.c10Ending){id=`c10.${story.c10Ending}`;variant=story.c10Ending==='overnight'?'morning':'evening';}
  else throw new Error('История ещё не завершена');
  return {id,chapter,...(chapter>=8?{venue:effectiveVenue(chapter,story)}:{}),endingId:id,variant,captionId:`${id}.${variant}`,...(chapter===3?{teamName:story.teamName}:{}),...(chapter===4?{usedPreset:results?.constellation?.usedPreset??false}:{})};
}
