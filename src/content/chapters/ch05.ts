import type { Chapter,Choice,Emotion,Line,NodeId,StoryNode } from '../../engine/types';
import { teamNames } from '../../minigames/kitchenModel';
const nodes:Record<NodeId,StoryNode>={};
const N=(text:string):Line=>({speaker:'narrator',text});
const V=(text:string):Line=>({speaker:'vlad',text});
const Y=(text:string):Line=>({speaker:'heroine',text});
const Nina=(text:string):Line=>({speaker:'nina',text});
const scene=(emotion:Emotion='smile')=>({background:'bg.cafe.sunset',character:`vlad.elegant.${emotion}`});
function d(id:NodeId,next:NodeId,emotion:Emotion,lines:Line[]){nodes[id]={id,kind:'dialogue',scene:scene(emotion),lines,next};}
function c(id:NodeId,prompt:string,choices:Choice[]){nodes[id]={id,kind:'choice',scene:scene(),prompt,choices};}

d('c5.return','c5.hug.route','smile',[
  N('К пятой встрече вы возвращаетесь в «Паузу». На арочном окне лежит закатный свет, и знакомый столик снова свободен.'),
  N('Влад в мягком чёрном пиджаке и водолазке. Кудри остались такими же непослушными.'),
  V('привет. сегодня даже без реквизита.'),Y('Пиджак считается?'),V('это чтобы меня пустили к вашему столику.'),
]);
nodes['c5.hug.route']={id:'c5.hug.route',kind:'route',cases:[{all:[{key:'c4Goodbye',equals:'her'}],next:'c5.hug.her'},{all:[{key:'c4Goodbye',equals:'accept'}],next:'c5.hug.accept'}],fallback:'c5.cat.route'};
d('c5.hug.her','c5.cat.route','laugh',[V('в прошлый раз ты меня обняла первой. я потом полдороги улыбался.'),Y('Только полдороги?'),V('дальше уже начал выглядеть подозрительно.')]);
d('c5.hug.accept','c5.cat.route','smile',[V('знаешь, я со вчерашнего вечера ждал этой встречи.'),Y('С самой набережной?'),V('с того момента у выхода, если честно.')]);
nodes['c5.cat.route']={id:'c5.cat.route',kind:'route',cases:[{all:[{key:'catApproach',equals:'wait'}],next:'c5.cat.wait'}],fallback:'c5.cat.help'};
d('c5.cat.wait','c5.drink.offer','smile',[N('Пончик сам выходит из-за стойки и занимает соседний стул. Ты отодвигаешь сумку, освобождая ему место.'),Nina('У окна сегодня полная посадка. Сейчас принесу вам меню.')]);
d('c5.cat.help','c5.drink.offer','smile',[Nina('Ваш знакомый сегодня у стойки. На улицу его не тянет.'),N('Кремовый хвост мелькает под полкой. Ты машешь Пончику, пока Влад помогает снять со стула пальто.')]);
d('c5.drink.offer','c5.drink.first','thinking',[
  Nina('Я пробую новый чай для меню. Яблоко и ваниль. Хотите по маленькой порции? Мне как раз нужен взгляд со стороны.'),
  Y('Давайте. Только я в дегустациях без диплома.'),Nina('Тем лучше. Диплом пить его потом не будет.'),
  N('Нина ставит перед каждым небольшую чашку. От чая пахнет яблоком и тёплой ванилью.'),
  V('мне нравится. как яблочный пирог, которому не понадобилась духовка.'),
]);
c('c5.drink.first','Как тебе первая проба?',[
  {id:'vanilla',text:'Мне тоже нравится. Я бы оставила так',next:'c5.drink.first.vanilla',effects:[{kind:'set',key:'c5FirstTaste',value:'vanilla'}]},
  {id:'sweet',text:'Для меня сладковато',next:'c5.drink.first.sweet',effects:[{kind:'set',key:'c5FirstTaste',value:'sweet'}]},
  {id:'compare',text:'Давай сравним с менее сладким вариантом',next:'c5.drink.first.compare',effects:[{kind:'set',key:'c5FirstTaste',value:'compare'}]},
]);
d('c5.drink.first.vanilla','c5.drink.compare','smile',[
  Y('Мне тоже нравится. Ваниль мягкая, и яблоко ещё чувствуется.'),V('вот. у пирога появились свидетели.'),
  Nina('Есть ещё версия с меньшим количеством сиропа и лимоном. Принести?'),Y('Да. Пусть у нашего пирога будет соперник.'),
]);
d('c5.drink.first.sweet','c5.drink.compare','laugh',[
  Y('Для меня сладковато. После глотка ваниль остаётся, а яблоко теряется.'),V('а мне этот хвост как раз нравится. мы даже чай пьём с разными титрами.'),
  Nina('У меня есть менее сладкая версия с лимоном. Сделаю вам по отдельной пробе.'),Y('Отлично. Тогда сравним рядом.'),
]);
d('c5.drink.first.compare','c5.drink.compare','thinking',[
  Y('А можно рядом попробовать менее сладкий? Так я пока только догадываюсь.'),Nina('Можно. Есть версия с лимоном, сейчас сделаю.'),
  V('ставлю на первую. лимон наверняка начнёт командовать яблоком.'),Y('Проверим. Пока это голословное обвинение.'),
]);
d('c5.drink.compare','c5.drink.work.route','smile',[
  N('Нина готовит отдельные небольшие порции с меньшим количеством сиропа и лимоном. Свои первые чашки вы оставляете рядом.'),
  Nina('Здесь сиропа вдвое меньше. Попробуйте по очереди, я пока обслужу соседний стол.'),
  Y('Во второй яблоко заметнее. И лимон не такой громкий, как ты обещал.'),V('признаю, ведёт себя прилично. но первая всё равно уютнее.'),
]);
nodes['c5.drink.work.route']={id:'c5.drink.work.route',kind:'route',cases:[{all:[{key:'kitchenStyle',equals:'planner'}],next:'c5.drink.work.planner'}],fallback:'c5.drink.work.improv'};
d('c5.drink.work.planner','c5.drink.recommend','smile',[
  N('Ты расставляешь пробы: слева ванильная, справа лимонная. Бумагу для заметки кладёшь между вами, как когда-то распределяла дела у виртуальной кухни.'),
  Y('Сначала сравним, потом запишем. А то ты уже готов защищать первую чашку.'),V('я могу и без чашки. но так убедительнее.'),
]);
d('c5.drink.work.improv','c5.drink.recommend','laugh',[
  N('Вы одновременно тянетесь к бумаге и смеётесь. Ты пододвигаешь Владу пробы, а ручку оставляешь у себя: после той кухни договориться выходит быстрее.'),
  Y('Ты пока пробуй. Я записываю — иначе будет два заголовка и ни одной рекомендации.'),V('подожди, мой заголовок ещё может победить.'),
]);
c('c5.drink.recommend','Что предложим Нине после сравнения?',[
  {id:'vanilla',text:'Оставить исходный ванильный вариант',next:'c5.drink.reason.route',effects:[{kind:'set',key:'c5Recommendation',value:'vanilla'}]},
  {id:'fresh',text:'Предложить менее сладкий вариант',next:'c5.drink.reason.route',effects:[{kind:'set',key:'c5Recommendation',value:'fresh'}]},
  {id:'both',text:'Попробовать в меню оба',next:'c5.drink.reason.route',effects:[{kind:'set',key:'c5Recommendation',value:'both'}]},
]);
const reasons={
  vanilla:{vanilla:['Рядом попробовала — всё-таки первая. У неё вкус мягче.','уверенное заключение. разрешаю допить вещественное доказательство.'],fresh:['Сначала мне понравилась ванильная. Но после сравнения во второй лучше слышно яблоко. Предложу её.','а я остаюсь с пирогом. будем отзывами с разных флангов.'],both:['Мне первая по вкусу. Но для меню я бы проверила обе: они получились совсем разными.','тогда мою чашку из протокола не исключай.']},
  sweet:{vanilla:['Сначала показалось сладко. А после лимонной вернулась к первой — с яблоком ваниль всё-таки хорошо сочетается.','она просто дождалась второго слушания. поддерживаю.'],fresh:['Да, вторая мне больше подходит. Яблоко чувствуется, и сироп не перебивает. Её и предложу.','я по-прежнему за первую. но твой лимон действительно не мешает.'],both:['Себе я бы взяла вторую. А в меню можно дать попробовать обе: ты ведь свою не отдашь.','мою ваниль отобрать не удалось. веский аргумент.']},
  compare:{vanilla:['Теперь могу выбрать: первая мягче, и ваниль мне здесь нравится больше. Предложу её.','эксперимент завершён. пирог без духовки остаётся.'],fresh:['Сравнение помогло. Мне интереснее вторая — яблоко и чуть-чуть лимона. Предложу её.','а мне первая. зато теперь у каждого есть подробные показания.'],both:['Разница заметная. Я бы предложила день с двумя версиями и посмотрела на отзывы.','и без победителя? ладно, зато обеим чашкам нашлось занятие.']},
} as const;
const reasonCases:{all:({key:'c5FirstTaste';equals:'vanilla'|'sweet'|'compare'}|{key:'c5Recommendation';equals:'vanilla'|'fresh'|'both'})[];next:NodeId}[]=[];
for(const first of ['vanilla','sweet','compare'] as const)for(const recommendation of ['vanilla','fresh','both'] as const){
  const id:NodeId=`c5.drink.reason.${first}.${recommendation}`;
  reasonCases.push({all:[{key:'c5FirstTaste',equals:first},{key:'c5Recommendation',equals:recommendation}],next:id});
  d(id,`c5.drink.result.${recommendation}`,'smile',[Y(reasons[first][recommendation][0]),V(reasons[first][recommendation][1])]);
}
nodes['c5.drink.reason.route']={id:'c5.drink.reason.route',kind:'route',cases:reasonCases,fallback:'c5.drink.reason.compare.both'};
d('c5.drink.result.vanilla','c5.drink.team.route','smile',[
  Y('Нина, после сравнения рекомендуем ванильную. Я запишу, что нам понравилось.'),
  Nina('Начну с неё, небольшой партией. Пропорцию сиропа зафиксирую, чтобы завтра получилась такая же.'),
  N('Нина записывает количество сиропа в свой блокнот. Ты переворачиваешь свободный листок и берёшься за короткую рекомендацию.'),
]);
d('c5.drink.result.fresh','c5.drink.team.route','smile',[
  Y('Нина, я бы попробовала в меню вторую, с лимоном. Влад остаётся за ванильную.'),
  Nina('Тогда начну с нескольких порций второй. Лимон оставлю в этой пропорции — проверю, как будут брать.'),
  N('Нина помечает в блокноте меньшую дозу сиропа и лимон. Ты берёшь листок, чтобы рядом осталось и ваше впечатление.'),
]);
d('c5.drink.result.both','c5.drink.team.route','smile',[
  Y('А если на один день попробовать обе версии и посмотреть на отзывы? Я так и напишу.'),
  Nina('На один день могу. По несколько порций каждой, а дальше сама решу, что оставить. Весь лист меню пока переделывать не будем.'),
  N('Нина делит страницу блокнота на две колонки. Ты рисуешь на своём листке две маленькие чашки для рекомендации.'),
]);
nodes['c5.drink.team.route']={id:'c5.drink.team.route',kind:'route',cases:[{all:[{key:'teamName',equals:'dumpling'}],next:'c5.drink.team.dumpling'},{all:[{key:'teamName',equals:'calm'}],next:'c5.drink.team.calm'}],fallback:'c5.drink.team.accident'};
for(const team of ['dumpling','calm','accident'] as const)d(`c5.drink.team.${team}`,'c5.drink.sky.route','laugh',[
  N(`Под рекомендацией ты подписываешь: «${teamNames[team]}».`),
  V(team==='dumpling'?'пельмени теперь ещё и чай оценивают. расширяемся.':team==='calm'?'спокойные люди. столько шума из-за двух чашек.':'в этот раз у отдела есть письменные доказательства.'),
]);
// Keep existing cursors and action counts compatible; the tasting no longer recalls or redraws the constellation.
nodes['c5.drink.sky.route']={id:'c5.drink.sky.route',kind:'route',cases:[{all:[{key:'constellation',equals:'cat'}],next:'c5.drink.sky.cat'},{all:[{key:'constellation',equals:'controllers'}],next:'c5.drink.sky.controllers'}],fallback:'c5.drink.sky.teapot'};
for(const shape of ['cat','controllers','teapot'] as const)d(`c5.drink.sky.${shape}`,'c5.album.intro','smile',[
  N('Ты кладёшь подписанную рекомендацию рядом с чашками.'),
]);
d('c5.album.intro','c5.album','smile',[
  N('Нина уносит рекомендацию к стойке. Влад освобождает середину стола для альбома, трёх жетонов и вчерашнего конверта.'),
  V('теперь можно сделать перерыв от экспертной работы.'),Y('Давай. А то я уже начала писать на всём, что лежит на столе.'),
]);
nodes['c5.album']={id:'c5.album',kind:'minigame',scene:scene(),game:'memories',next:'c5.letter'};
d('c5.letter','c5.close','smile',[
  N('Ты открываешь конверт. Внутри ваш рисунок созвездия и два жетона с желаниями. Влад переворачивает свой надписью вверх.'),
  N('На обороте написано: «ещё не один такой вечер».'),Y('Хорошее желание. Короткое.'),V('длинное не влезало. пришлось оставить главное.'),
]);
d('c5.close','c5.drink.echo.route','smile',[
  N('Ты закрываешь альбом и сдвигаешь его к краю стола. Влад складывает оба жетона обратно в конверт и убирает его в карман.'),
  Y('Нашу рекомендацию оставляем Нине?'),V('конечно. документ уже подписан.'),
]);
nodes['c5.drink.echo.route']={id:'c5.drink.echo.route',kind:'route',cases:[{all:[{key:'c5Recommendation',equals:'vanilla'}],next:'c5.drink.echo.vanilla'},{all:[{key:'c5Recommendation',equals:'fresh'}],next:'c5.drink.echo.fresh'}],fallback:'c5.drink.echo.both'};
d('c5.drink.echo.vanilla','c5.exit','smile',[Nina('Ваш листок положила к рецепту. Завтра начну с небольшой партии ванильного — пропорцию записала.'),Y('Тогда пусть у дегустационной комиссии останется копия в памяти.')]);
d('c5.drink.echo.fresh','c5.exit','smile',[Nina('Лимонную версию отметила для пробной подачи. Посмотрю, как она пойдёт. За отзыв про ваниль тоже спасибо.'),V('мой голос за неё сохраните. на всякий случай.')]);
d('c5.drink.echo.both','c5.exit','smile',[Nina('Завтра попробую два варианта, как вы предложили. Две маленькие партии, только на день. Потом сравню отзывы.'),Y('На листке как раз осталось место для заметок.')]);
d('c5.exit','c5.finish.story','smile',[
  Y('Спасибо за чай, Нина. До свидания!'),Nina('Хорошего вечера вам. И спасибо за компанию моим пробам.'),
  N('Вы выходите из «Паузы». Дверь тихо звякает за спиной, в окне остаются свет и записка у стойки.'),
  Y('И как тебе вечер экспериментов?'),V('чай с характером. компания тоже.'),
  N('У развилки вы прощаетесь и расходитесь каждый своей дорогой. Окно кафе ещё немного светится за спиной.'),
]);
nodes['c5.finish.story']={id:'c5.finish.story',kind:'end',endingId:'c5.story',cardId:'c5.story'};
export const chapter5:Chapter={id:5,contentVersion:14,firstSeasonEdition:3,title:'А что, если это не конец?',entry:'c5.return',nodes};
