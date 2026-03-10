import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
      <Link href="/" style={{ color: '#000', textDecoration: 'underline', marginBottom: '40px', display: 'block' }}>← На головну</Link>

      <h1>Політика конфіденційності</h1>
      <p>Останнє оновлення: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Які дані ми збираємо</h2>
        <p>Ми збираємо ваше ім'я та електронну адресу виключно для надання доступу до навчальних матеріалів курсу та зворотного зв'язку.</p>
      </section>

      <section>
        <h2>2. Використання даних</h2>
        {/* Замість того, щоб пхати список в <p>, робимо так: */}
        <p>Ваші дані використовуються для:</p> {/* Закрили абзац тут */}
        <ul>
          <li>Надання доступу до особистого кабінету курсу.</li>
          <li>Відправки технічних повідомлень (посилання на зум, паролі).</li>
          <li>GDPR compliance: оскільки ми працюємо в ЄС, ми гарантуємо право на видалення ваших даних за запитом.</li>
        </ul>
      </section>

      <section>
        <h2>3. Захист даних</h2>
        <p>Ми не передаємо ваші дані третім особам, окрім платіжних систем (для обробки транзакцій), які мають відповідні сертифікати безпеки.</p>
      </section>

      <p style={{ marginTop: '40px', fontSize: '0.9rem', color: '#666' }}>Контакт для зв'язку: [твій email тут]</p>
    </div>
  );
}