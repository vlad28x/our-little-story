import { chapters as chapterManifest } from '../src/content/chapters/manifest';
const chapterTwoCode=chapterManifest.find(c=>c.id===2)!.code!;
import { it,expect } from 'vitest';
import fs from 'node:fs';
import { chapter1 } from '../src/content/chapters/ch01';
import { chapter2 } from '../src/content/chapters/ch02';
import { chapter3 } from '../src/content/chapters/ch03';
import { chapter4 } from '../src/content/chapters/ch04';
import { chapter5 } from '../src/content/chapters/ch05';
import { invitationIntro,invitationEcho,invitationText } from '../src/content/invitation';
import { validateContent } from '../src/engine/validateContent';
import { assetManifest,assetUrl } from '../src/content/assetManifest';
import type { Chapter } from '../src/engine/types';
import { chapters,checkCode } from '../src/content/chapters/manifest';
it('contains precisely all 31 nodes from the approved script',()=>{const source=fs.readFileSync('outputs/CHAPTER_01_SCRIPT.md','utf8');const graph=source.match(/```mermaid([\s\S]*?)```/)![1];const ids=[...new Set(graph.match(/c1\.[a-z.]+/g))].sort();expect(Object.keys(chapter1.nodes).sort()).toEqual(ids);expect(ids).toHaveLength(31);expect(validateContent(chapter1)).toEqual([]);});
it('preserves every authored dialogue line',()=>{const source=fs.readFileSync('outputs/CHAPTER_01_SCRIPT.md','utf8');const lines=source.split(/\r?\n/).filter(l=>/^\d+\. \*\*(Описание|Влад|Ты|Нина)/.test(l)).map(l=>l.replace(/^\d+\. \*\*(Описание|Влад|Ты|Нина)[^:]*:\s*(?:\*\*)?\s*/,''));const actual=Object.values(chapter1.nodes).flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]);expect(actual).toEqual(lines);expect(actual).toHaveLength(113);});
it('all runtime assets exist and no source photographs are shipped',()=>{for(const asset of Object.values(assetManifest)){expect(asset.file.startsWith('/')).toBe(false);expect(fs.existsSync(`public/assets/${asset.file}`)).toBe(true);}expect(fs.readdirSync('public',{recursive:true}).some(p=>String(p).includes('clipboard'))).toBe(false);});
it('resolves every chapter-three home expression before any scene is rendered',()=>{
  for(const emotion of ['neutral','smile','warm','awkward','thinking','surprised','laugh']){
    const id=`vlad.casual.${emotion}`;expect(assetManifest[id]).toBeDefined();expect(()=>assetUrl(id)).not.toThrow();expect(fs.existsSync(`public/assets/${assetManifest[id].file}`)).toBe(true);
  }
  expect(assetUrl('vlad.casual.smile')).toContain('characters/vlad/casual-smile.webp');
});
it('registers and documents every fourth-chapter scene, line and resource',()=>{
  const source=fs.readFileSync('outputs/CHAPTER_04_SCRIPT.md','utf8');const ids=[...source.matchAll(/^### `(c4\.[^`]+)`/gm)].map(m=>m[1]).sort();expect(ids).toEqual(Object.keys(chapter4.nodes).sort());
  const lines=source.split(/\r?\n/).filter(l=>/^\d+\. \*\*(Описание|Влад|Ты|Нина):/.test(l)).map(l=>l.replace(/^\d+\. \*\*(Описание|Влад|Ты|Нина):\*\* /,''));expect(lines).toEqual(Object.values(chapter4.nodes).flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]));expect(ids).toHaveLength(30);expect(lines).toHaveLength(83);
  for(const n of Object.values(chapter4.nodes))if('scene' in n){expect(()=>assetUrl(n.scene.character)).not.toThrow();expect(()=>assetUrl(n.scene.background)).not.toThrow();}
});
it('documents every fifth-chapter line, final and invitation without missing elegant resources',()=>{
  const source=fs.readFileSync('outputs/CHAPTER_05_SCRIPT.md','utf8');const ids=[...source.matchAll(/^### `(c5\.[^`]+)`/gm)].map(m=>m[1]).sort();expect(ids).toEqual(Object.keys(chapter5.nodes).sort());
  const lines=source.split(/\r?\n/).filter(l=>/^\d+\. \*\*(Описание|Влад|Ты|Нина):/.test(l)).map(l=>l.replace(/^\d+\. \*\*(Описание|Влад|Ты|Нина):\*\* /,''));expect(lines).toEqual(Object.values(chapter5.nodes).flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]));expect(ids).toHaveLength(32);expect(lines).toHaveLength(83);
  for(const text of [...invitationIntro,...Object.values(invitationEcho),invitationText])expect(source).toContain(text);
  for(const n of Object.values(chapter5.nodes))if('scene' in n){expect(()=>assetUrl(n.scene.character)).not.toThrow();expect(()=>assetUrl(n.scene.background)).not.toThrow();}
});
it('detects broken graph links and cycles',()=>{const c=structuredClone(chapter1) as Chapter;const n=c.nodes['c1.entry'];if(n.kind==='dialogue')n.next='c1.missing';expect(validateContent(c).some(e=>e.includes('Missing node'))).toBe(true);if(n.kind==='dialogue')n.next='c1.entry';expect(validateContent(c).some(e=>e.includes('Cycle'))).toBe(true);});
it('six chapters are available, with chapter-specific codes and future chapters closed',()=>{expect(chapters.filter(c=>c.available).map(c=>c.id)).toEqual([1,2,3,4,5,6]);expect(checkCode(` ${chapterTwoCode.toLowerCase()} `)?.available).toBe(true);expect(checkCode(' coop ')).toBeUndefined();expect(checkCode(chapters.find(c=>c.id===3)!.code!)?.available).toBe(true);expect(checkCode('DALSHE')).toBeUndefined();});
it('chapter two script documents exactly the shipped nodes and dialogue',()=>{const source=fs.readFileSync('outputs/CHAPTER_02_SCRIPT.md','utf8');const ids=[...source.matchAll(/^### `(c2\.[^`]+)`/gm)].map(m=>m[1]).sort();expect(ids).toEqual(Object.keys(chapter2.nodes).sort());const lines=source.split(/\r?\n/).filter(l=>/^\d+\. \*\*(Описание|Влад|Ты|Нина):/.test(l)).map(l=>l.replace(/^\d+\. \*\*(Описание|Влад|Ты|Нина):\*\* /,''));const actual=Object.values(chapter2.nodes).flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]);expect(lines).toEqual(actual);expect(ids).toHaveLength(37);});
it('chapter three script documents exactly the shipped nodes and dialogue',()=>{const source=fs.readFileSync('outputs/CHAPTER_03_SCRIPT.md','utf8');const ids=[...source.matchAll(/^### `(c3\.[^`]+)`/gm)].map(m=>m[1]).sort();expect(ids).toEqual(Object.keys(chapter3.nodes).sort());const lines=source.split(/\r?\n/).filter(l=>/^\d+\. \*\*(Описание|Влад|Ты|Нина):/.test(l)).map(l=>l.replace(/^\d+\. \*\*(Описание|Влад|Ты|Нина):\*\* /,''));const actual=Object.values(chapter3.nodes).flatMap(n=>n.kind==='dialogue'?n.lines.map(l=>l.text):[]);expect(lines).toEqual(actual);expect(ids).toHaveLength(33);expect(actual).toHaveLength(78);});
