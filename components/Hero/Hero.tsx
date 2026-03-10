'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

import { DISCOUNT_PERCENT, PRICE_BASIC } from '@/lib/constants';

const titleText = "ПРОЩАВАЙ ТРИВОЖНІСТЬ";
const titleWords = titleText.split(" ");

export default function Hero() {
  // Логіка таймера для Херо
  const [timeLeft, setTimeLeft] = useState(600); // 10 хвилин
  const newBasicPrice = Math.round(PRICE_BASIC * (1 - DISCOUNT_PERCENT / 100));

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>

          {/* 1. Заголовок по центру */}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {titleWords.map((word, index) => (
              <span key={index}>{word}&nbsp;</span>
            ))}
          </motion.h1>

          <motion.div
            className={styles.mainContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* 2. Середній ряд: Текст зліва, Картинка справа */}
            <div className={styles.middleRow}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                  ЦЕ КУРС, ПІСЛЯ ЯКОГО ВИ НЕ ПРОСТО ЗРОЗУМІЄТЕ СВОЮ ТРИВОЖНІСТЬ, А НАВЧИТЕСЯ З НЕЮ СПРАВЛЯТИСЯ.
                </p>
              </div>

              <div className={styles.imageContent}>
                <img src="/hero-image.png" alt="Прощавай тривожність" className={styles.heroImg} />
              </div>
            </div>

            {/* 3. Блок дій: Широка кнопка знизу */}



            <div className={styles.actions}>
              <button
                className={styles.primaryBtn}
                onClick={() => document.getElementById('tariffs-cards')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className={styles.btnMainText}>
                  ПРИДБАТИ КУРС ЗА{' '}
                  <span className={styles.oldPrice}>{PRICE_BASIC}</span>{' '}
                  <span className={styles.newPrice}>{newBasicPrice}₴</span>
                </span>
                <span className={styles.btnSubText}>
                  ЗНИЖКА ДІЄ: <span className={styles.timerDigits}>{formatTime(timeLeft)}</span>
                </span>
              </button>
            </div>



            {/* 4. Другий ряд (Реверс): Картинка зліва, Текст справа (на десктопі) */}
            <div className={`${styles.middleRow} ${styles.reverseRow}`}>

              {/* ТЕПЕР ТЕКСТ ПЕРШИЙ */}
              <div className={styles.textContent}>
                <p className={styles.description}>
                  ПРАКТИЧНИЙ КУРС ДЛЯ ТИХ, ХТО ВТОМИВСЯ ЖИТИ В ПОСТІЙНОМУ НАПРУЖЕННІ, ПРОКРУЧУВАТИ ТРИВОЖНІ ДУМКИ ТА ЧЕКАТИ «А РАПТОМ ЩОСЬ СТАНЕТЬСЯ».
                </p>
              </div>

              {/* А КАРТИНКА ДРУГА */}
              <div className={styles.imageContent}>
                <img src="/hero-image2.png" alt="Прощавай тривожність" className={styles.heroImg} />
              </div>

            </div>

            {/* 5. Фінальний текст (Строгий стовпчик по центру) */}
            <div className={styles.bottomDescription}>
              <p>
                НА КУРСІ ВИ ЗРОЗУМІЄТЕ, ЯК ПРАЦЮЄ ТРИВОЖНІСТЬ, ЧОМУ ВОНА ВИНИКАЄ ТА ОТРИМАЄТЕ ІНСТРУМЕНТИ, ЯКІ ДОПОМОЖУТЬ ПОВЕРНУТИ ВНУТРІШНІЙ СПОКІЙ.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}