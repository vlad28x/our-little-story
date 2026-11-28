import { useEffect, useRef, type RefObject } from 'react';
import { checkCode } from '../content/chapters/manifest';
import type { ChapterId } from '../engine/types';
import { canOpenChapter, chapterAction } from '../state/chapterAccess';
import { Illustration } from '../ui/Illustration';
import { useGame } from './GameProvider';

export type CodeEntryState = { text: string; message?: string; error?: boolean; chapter?: ChapterId };

type Props = {
  value: CodeEntryState;
  onChange: (value: CodeEntryState) => void;
  folded: boolean;
  input: RefObject<HTMLInputElement | null>;
  onOpen: (chapter: ChapterId) => void;
  onUnlockSeason: () => void;
};

export function ChapterCodeEntry({value, onChange, folded, input, onOpen, onUnlockSeason}: Props) {
  const { save, send, conflict, cloudBlocked } = useGame();
  const details = useRef<HTMLDetailsElement>(null);
  const { text, message, chapter, error = false } = value;
  const action = chapter && chapterAction(save, chapter);
  const invitation = action === 'result' && (chapter === 5 || chapter === 10);

  useEffect(() => {
    if (message && details.current) details.current.open = true;
  }, [message, folded]);

  function submit() {
    const found = checkCode(text);
    if (!found?.available) {
      onChange({ text, error: true, message: found
        ? `«${found.title}» ещё готовится. Код пока не откроет эту встречу.`
        : 'Код не подошёл. Проверь латинские буквы и дефис в сообщении Влада.' });
      return;
    }
    const alreadyOpen = save.unlocked.includes(found.id);
    const unlocked = alreadyOpen ? save : { ...save, unlocked: [...save.unlocked, found.id] };
    const ready = canOpenChapter(chapterAction(unlocked, found.id));
    const hint = ready ? 'Можно перейти к встрече.' : 'Код сохранён. Сначала заверши предыдущие встречи или текущую главу.';
    send({ type: 'unlock', code: text });
    if (found.id >= 6) onUnlockSeason();
    onChange({ text: '', chapter: found.id, message: `${alreadyOpen ? 'Уже открыта' : 'Открыта'} встреча ${found.id}: «${found.title}». ${hint}` });
  }

  const fields = <>
    {folded && <p id="chapter-code-hint">Введи код из сообщения Влада.</p>}
    <form onSubmit={event => { event.preventDefault(); submit(); }}>
      <label htmlFor="chapter-access-code">Код
        <input ref={input} id="chapter-access-code" name="chapter-code" value={text}
          placeholder="Код из сообщения" maxLength={64} onChange={event => onChange({ text: event.target.value })}
          autoComplete="off" autoCapitalize="characters" autoCorrect="off" spellCheck={false} enterKeyHint="go"
          aria-invalid={error} aria-describedby={folded ? 'chapter-code-hint chapter-code-message' : 'chapter-code-message'} />
      </label>
      <button className="primary" disabled={!text.trim()}>Открыть встречу</button>
    </form>
    <p id="chapter-code-message" className="code-entry-status" role="status">{message}</p>
    {chapter && action && canOpenChapter(action) && <button className="code-open-chapter full"
      disabled={invitation && (conflict || cloudBlocked)} onClick={() => onOpen(chapter)}>
      {invitation ? 'Встретиться вживую' : action === 'result' ? 'Открыть мой финал' :
        action === 'resume' ? 'Продолжить встречу' : `Начать встречу ${chapter}`} →
    </button>}
  </>;

  if (folded) return <details ref={details} className="code-entry code-entry-fold">
    <summary><Illustration kind="envelope"/>Есть код от Влада?</summary>
    <div className="season-code-fields">{fields}</div>
  </details>;
  return <section className="code-entry" aria-labelledby="chapter-code-title">
    <div className="code-entry-heading"><Illustration kind="envelope"/><h2 id="chapter-code-title">Есть код от Влада?</h2></div>
    {fields}
  </section>;
}
