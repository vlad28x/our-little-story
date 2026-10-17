import { useEffect, useRef, type ReactNode } from 'react';
export function Modal({title,children,onClose}:{title:string;children:ReactNode;onClose:()=>void}){
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const dialog=ref.current;dialog?.showModal();return()=>dialog?.close();},[]);
  return <dialog ref={ref} onCancel={e=>{e.preventDefault();onClose();}} aria-label={title}><div className="modal-top"><h2>{title}</h2><button className="icon-button" aria-label="Закрыть" onClick={onClose}>×</button></div>{children}</dialog>;
}
