// Owner-authorized discard of the never-played old 6–10. The first season,
// its active/trial cursors, postcards, settings and real invitation stay intact.
export function resetOldSecondSeason(source:Record<string,unknown>){
 const s=structuredClone(source);
 const obj=(v:unknown):Record<string,unknown>|undefined=>v&&typeof v==='object'&&!Array.isArray(v)?v as Record<string,unknown>:undefined;
 const later=(v:unknown)=>typeof v==='number'&&v>=6&&v<=10;
 const campaign=obj(s.campaign);
 if(campaign){
  if(Array.isArray(campaign.completed))campaign.completed=campaign.completed.filter(n=>!later(n));
  for(const key of ['records','startStates']){const group=obj(campaign[key]);if(group)for(const id of ['6','7','8','9','10'])delete group[id];}
  if(later(obj(campaign.active)?.chapter))campaign.active=null;
 }
 if(later(obj(s.trial)?.chapter))s.trial=null;
 if(later(obj(s.lastResult)?.chapter))s.lastResult=null;
 const collection=obj(s.collection);
 if(collection){if(Array.isArray(collection.cards))collection.cards=collection.cards.filter(c=>!later(obj(c)?.chapter));if('memories'in collection)collection.memories=[];if('secrets'in collection)collection.secrets=[];}
 if('privateNotes'in s)s.privateNotes={};if('privateWords'in s)s.privateWords={};
 return s;
}

// November 13: the owner explicitly confirmed that the second season is unplayed.
// Retain the untouched sixth and every first-season value and entitlement.
export function resetEditedChapters(source:Record<string,unknown>){
 const s=structuredClone(source);
 const later=(v:unknown)=>typeof v==='number'&&v>=7&&v<=10;
 const campaign=s.campaign as {completed:unknown[];records:Record<string,unknown>;startStates:Record<string,unknown>;active:{chapter:number}|null};
 if(!campaign||!Array.isArray(campaign.completed))return s;
 campaign.completed=campaign.completed.filter(n=>!later(n));
 for(const group of [campaign.records,campaign.startStates])if(group&&typeof group==='object')for(const id of ['7','8','9','10'])delete group[id];
 if(later(campaign.active?.chapter))campaign.active=null;
 if(later((s.trial as {chapter?:number}|null)?.chapter))s.trial=null;
 if(later((s.lastResult as {chapter?:number}|null)?.chapter))s.lastResult=null;
 const collection=s.collection as {cards?:{chapter:number}[]};
 if(Array.isArray(collection?.cards))collection.cards=collection.cards.filter(card=>!later(card.chapter));
 return s;
}
