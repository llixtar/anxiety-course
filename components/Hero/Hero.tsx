'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import { DISCOUNT_PERCENT, PRICE_BASIC } from '@/lib/constants';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(600); 
  const newBasicPrice = Math.round((PRICE_BASIC * (1 - DISCOUNT_PERCENT / 100))-1);

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

          {/* 1. Головний заголовок */}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Як приборкати нескінченне «А раптом?» та нарешті видихнути
          </motion.h1>

          {/* 2. Підзаголовок */}
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Досить прокручувати в голові найгірші сценарії... */}
          </motion.h2>

          <motion.div
            className={styles.mainContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* 3. Середній ряд: Текст (зліва) та Картинка (справа). На мобілці перевернеться */}
            <div className={styles.middleRow}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                  {/* Практичний інтенсив за ціною однієї сесії з психологом. Отримайте покроковий алгоритм з 4-х кроків, щоб зупинити тривожні думки та прибрати постійну напругу в тілі вже сьогодні. */}
                  Отримайте покроковий алгоритм із 4 кроків від практикуючого психолога, щоб зупинити тривожні думки вже сьогодні. 
                </p>
              </div>

              <div className={styles.imageContent}>
                <img src="/hero-image.png" alt="Прощавай тривожність" className={styles.heroImg} />
              </div>
            </div>

            {/* 4. Текст перед плашкою */}
            <p className={styles.prePriceText}>
              {/* Ваш спокій коштує менше, ніж вечеря в кафе: */}
              Менше, ніж одна сесія з психологом - інструменти, які залишаться з вами назавжди.
            </p>

            {/* 5. Темна плашка з цінами, таймером, текстом та кнопкою */}
            <div className={styles.priceBlock}>
              
              {/* НОВИЙ БЛОК ЦІН (В РЯДОК) */}
              <div className={styles.pricesHorizontal}>
                <div className={styles.priceCol}>
                  <span className={styles.priceLabel}>Стара ціна:</span>
                  <span className={styles.oldPrice}>{PRICE_BASIC} грн</span>
                </div>
                
                <div className={styles.priceDivider}></div>
                
                <div className={styles.priceCol}>
                  <span className={styles.priceLabel}>Ціна сьогодні:</span>
                  <span className={styles.newPrice}>{newBasicPrice} грн</span>
                </div>
              </div>
              
              <div className={styles.timerRow}>
                ЗНИЖКА ДІЄ: <span className={styles.timerDigits}>{formatTime(timeLeft)}</span>
              </div>

              {/* 6. Текст перед кнопкою */}
              {/* <p className={styles.preButtonText}>
                Заберіть свій квиток у спокійне життя, поки діє акція:
              </p> */}

              {/* 7. Кругла пульсуюча кнопка */}
              <div className={styles.actions}>
                <button
                  className={styles.primaryBtn}
                  onClick={() => document.getElementById('tariffs-cards')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className={styles.btnMainText}>
                    ПРИДБАТИ КУРС ТА ЗАСПОКОЇТИСЬ
                  </span>
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}