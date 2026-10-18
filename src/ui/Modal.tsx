import { useEffect, useRef, type ReactNode } from 'react';
export function Modal({title,children,onClose}:{title:string;children:ReactNode;onClose:()=>void}){
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const dialog=ref.current;dialog?.showModal();return()=>dialog?.close();},[]);
  return <dialog ref={ref} onCancel={e=>{e.preventDefault();onClose();}} aria-label={title}><div className="modal-top"><h2>{title}</h2><button className="icon-button modal-close" aria-label="Закрыть" onClick={onClose}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>{children}</dialog>;
}
