'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  // 1. Скидання скролу при оновленні сторінки
  useEffect(() => {
    // Кажемо браузеру не відновлювати позицію скролу автоматично
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Примусово кидаємо на самий верх без плавної анімації при завантаженні
    window.scrollTo(0, 0);
  }, []);

  // Функція для закриття меню на мобілці при кліку
  const closeMenu = () => setIsActive(false);

  // 2. Функція для кліку по логотипу (скрол наверх + закриття бургера)
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Зупиняємо стандартний перехід
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавно їдемо наверх
    closeMenu(); // Закриваємо меню, якщо воно було відкрите
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Лого з новим обробником кліку */}
        <Link href="/" className={styles.logo} onClick={handleLogoClick}>
          ANXIETY.COURSE
        </Link>

        <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
          <ul>
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