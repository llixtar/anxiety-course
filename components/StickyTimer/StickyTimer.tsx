'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './StickyTimer.module.scss';

export default function StickyTimer() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 хвилин = 600 секунд

  // Логіка таймера
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Логіка появи/зникнення при скролі
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pricingSection = document.getElementById('pricing');
      
      // Якщо секція з тарифами знайдена, дізнаємось її позицію
      if (pricingSection) {
        // Відстань від верху сторінки до блоку тарифів
        const pricingTop = pricingSection.offsetTop; 
        
        // Показуємо кнопку, якщо проскролили Hero (десь 600px), 
        // АЛЕ ховаємо її, коли наблизились до тарифів (за 500px до них)
        if (scrollY > 600 && scrollY < pricingTop - 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Форматуємо секунди у хвилини:секунди (09:59)
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={styles.stickyWrapper}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className={styles.stickyBar}>
            <div className={styles.timerBlock}>
              <span className={styles.text}>Знижка діє ще:</span>
              <span className={styles.timer}>{formatTime(timeLeft)}</span>
            </div>
            <button className={styles.actionBtn} onClick={scrollToPricing}>
              ОБРАТИ ТАРИФ
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}