'use client';
import { useState } from 'react';
import { content } from '@/lib/content';
export default function Header() {
 const [open, setOpen] = useState(false);
 return <header className="header"><a href="#home" className="brand" aria-label="ZILAL TRAVEL — главная"><span className="brand-mark" aria-hidden="true">△</span><span>ZILAL<span className="brand-sub">TRAVEL · KYRGYZSTAN</span></span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">{open ? 'Закрыть ✕' : 'Меню ☰'}</button><nav id="main-nav" className={open ? 'navigation open' : 'navigation'} aria-label="Основная навигация">{content.ru.navigation.map(([title, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{title}</a>)}</nav><a className="header-cta" href="#contact">Обсудим путешествие →</a></header>;
}
