import { useEffect, useRef, type ReactNode } from 'react';
export function Modal({title,children,onClose,className,decoration}:{title:string;children:ReactNode;onClose:()=>void;className?:string;decoration?:ReactNode}){
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const dialog=ref.current,previous=document.activeElement;dialog?.showModal();return()=>{dialog?.close();if(previous instanceof HTMLElement&&previous.isConnected)previous.focus({preventScroll:true});};},[]);
  const content=<><div className="modal-top"><h2>{title}</h2><button className="icon-button modal-close" aria-label="Закрыть" onClick={onClose}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>{children}</>;
  return <dialog ref={ref} className={className} onCancel={e=>{e.preventDefault();onClose();}} aria-label={title}>{decoration}{decoration?<div className="modal-surface">{content}</div>:content}</dialog>;
}
