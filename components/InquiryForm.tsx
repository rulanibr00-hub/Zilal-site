'use client';
import { useState } from 'react';
export default function InquiryForm() {
 const [sent, setSent] = useState(false);
 return <form className="inquiry" onSubmit={e => {e.preventDefault(); setSent(true);}} onChange={() => setSent(false)}>
 <div className="form-grid"><label>Как к вам обращаться<input name="name" autoComplete="name" placeholder="Ваше имя" required maxLength={100}/></label><label>Электронная почта<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={200}/></label></div>
 <label>Ваше путешествие<textarea name="message" rows={3} placeholder="Когда хотите приехать? О чём мечтаете?" maxLength={2000}/></label>
 <p className="form-note" id="demo-note">Демонстрационная форма. Данные не отправляются и не сохраняются. Не указывайте конфиденциальную информацию.</p><button type="submit" className="button gold" aria-describedby="demo-note">Проверить заявку <span>→</span></button>
 <p role="status" className="form-status">{sent ? 'Заявка заполнена! Это демонстрация: сообщение не отправлено. Отправка появится после подключения реальных контактов.' : ''}</p></form>;
}
