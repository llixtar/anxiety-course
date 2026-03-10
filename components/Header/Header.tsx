'use client';

import { useState } from 'react';
import Link from 'next/link'; // Лишаємо тільки для лого
import styles from './Header.module.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  // Функція для закриття меню на мобілці при кліку
  const closeMenu = () => setIsActive(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Лого лишаємо через Link, бо це перехід на головну */}
        <Link href="/" className={styles.logo}>
          ANXIETY.COURSE
        </Link>

        <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
          <ul>
            {/* Для секцій використовуємо <a>. 
               Це гарантує, що браузер буде скролити при кожному натисканні.
            */}
            <li><a href="#for-whom" onClick={closeMenu}>Для кого</a></li>
            <li><a href="#program" onClick={closeMenu}>Програма</a></li>
            <li><a href="#results" onClick={closeMenu}>Результати</a></li>
            <li><a href="#reviews" onClick={closeMenu}>Відгуки</a></li>
            <li><a href="#about" onClick={closeMenu}>Про нас</a></li>
          </ul>
        </nav>

        <div className={styles.burger} onClick={() => setIsActive(!isActive)}>
          <span className={`${styles.line} ${isActive ? styles.line1 : ''}`}></span>
          <span className={`${styles.line} ${isActive ? styles.line2 : ''}`}></span>
          <span className={`${styles.line} ${isActive ? styles.line3 : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;