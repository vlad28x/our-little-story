import { it,expect } from 'vitest';
import { constellationDrawings,drawingStars,drawingSegments,initialStars,skyShapes,starReduce,starResult } from '../src/minigames/constellationModel';
it('completes the three approved drawings with one tap per unique star and unchanged saved outcome IDs',()=>{
  const counts={cat:17,controllers:12,teapot:16};
  for(const shape of skyShapes){
    let s=starReduce(initialStars,{type:'shape',shape});const stars=drawingStars(shape);expect(stars).toHaveLength(counts[shape]);expect(starResult(s)).toBeNull();
    for(const star of stars){expect(starResult(s)).toBeNull();s=starReduce(s,{type:'star',id:star.id});}
    expect(starResult(s)).toEqual({kind:'constellation',outcome:shape,usedPreset:false});expect(starReduce(s,{type:'star',id:s.progress})).toBe(s);
    const original=s;s=starReduce(s,{type:'undo'});expect(starResult(s)).toBeNull();expect(starReduce(s,{type:'star',id:s.progress})).toEqual(original);
  }
});
it('rejects out-of-order and stale taps; undo and switching drawings never submit an incomplete result',()=>{
  expect(starReduce(initialStars,{type:'star',id:0})).toBe(initialStars);let s=starReduce(initialStars,{type:'shape',shape:'cat'});
  for(const id of [-1,1,17,NaN,1.5])expect(starReduce(s,{type:'star',id})).toBe(s);
  s=starReduce(s,{type:'star',id:0});expect(starReduce(s,{type:'star',id:0})).toBe(s);expect(starReduce(s,{type:'shape',shape:'cat'})).toBe(s);
  expect(starReduce(s,{type:'shape',shape:'teapot'})).toEqual({shape:'teapot',progress:0});expect(starReduce(s,{type:'reset'})).toEqual(initialStars);
});
it('uses only authored contour edges, closes contours automatically, and never draws a bridge between separate strokes',()=>{
  for(const shape of skyShapes){
    const drawing=constellationDrawings[shape],stars=drawingStars(shape),segments=drawingSegments(shape);
    for(const segment of segments){const points=drawing.strokes[segment.stroke].points;const adjacent=points.some((point,i)=>point===segment.from&&points[i+1]===segment.to);expect(adjacent||!!drawing.strokes[segment.stroke].closed&&points.at(-1)===segment.from&&points[0]===segment.to).toBe(true);}
    expect(drawingSegments(shape,0)).toEqual([]);expect(new Set(stars.map(s=>s.point.join(','))).size).toBe(stars.length);
    for(const star of stars){expect(star.point[0]).toBeGreaterThanOrEqual(24);expect(star.point[0]).toBeLessThanOrEqual(264);expect(star.point[1]).toBeGreaterThanOrEqual(24);expect(star.point[1]).toBeLessThanOrEqual(240);}
  }
  const cat=drawingSegments('cat',13);expect(cat.filter(s=>s.stroke===1)).toHaveLength(1);expect(cat.find(s=>s.stroke===1)?.from).toEqual([170,210]);
  expect(cat.some(s=>s.from.join(',')==='102,130'&&s.to.join(',')==='211,210')).toBe(false);
  expect(drawingSegments('teapot').filter(s=>s.stroke===2)).toHaveLength(3);
});
