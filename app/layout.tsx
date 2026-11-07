import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'ZILAL TRAVEL — почувствуй Кыргызстан', description: 'Знакомство с Кыргызстаном: горы Тянь-Шаня, Иссык-Куль, культура кочевников и идеи индивидуальных путешествий. Демонстрационная версия сайта.', robots: { index: false, follow: false }, openGraph: {title:'ZILAL TRAVEL — почувствуй Кыргызстан',description:'Горы. Свобода. Люди. Путешествие, которое остаётся с тобой.',locale:'ru_RU',type:'website'} };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {return <html lang="ru"><body><a className="skip-link" href="#main">Перейти к содержимому</a>{children}</body></html>}
