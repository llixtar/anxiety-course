'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Pricing.module.scss';
import { DISCOUNT_PERCENT, PRICE_BASIC, PRICE_PREMIUM } from '@/lib/constants';
import Modal from '../Modal/Modal'; 
import PaymentForm from '../PaymentForm/PaymentForm'; 

const tariffs = [
  {
    name: "САМОСТІЙНИЙ",
    desc: "Для тих, хто готовий працювати у своєму темпі.",
    features: [
      "Доступ до всіх відеоуроків",
      "PDF-матеріали та практичні зошити",
      "Доступ до матеріалів на 3 місяці"
    ],
    basePrice: PRICE_BASIC
  },
  {
    name: "З ПІДТРИМКОЮ",
    desc: "Максимальний результат завдяки зворотному зв'язку.",
    features: [
      "Доступ до всіх відеоуроків",
      "PDF-матеріали та практичні зошити",
      "Доступ до матеріалів на 6 місяців",
      "Особисте спілкування з психологом (Q&A сесія)",
      "Аналіз ваших практичних завдань"
    ],
    basePrice: PRICE_PREMIUM
  }
];

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState(600); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  // НОВИЙ СТАН: Запам'ятовуємо обраний тариф
  const [selectedTariff, setSelectedTariff] = useState<{name: string, price: number} | null>(null);

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

  // ФУНКЦІЯ: Що відбувається при кліку "ПРИДБАТИ"
  const handleBuyClick = (name: string, price: number) => {
    setSelectedTariff({ name, price });
    setIsModalOpen(true);
  };

  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ВАРТІСТЬ КУРСУ
        </motion.h2>

        {/* ДОДАНО ID ДЛЯ ПРЯМОГО СКРОЛУ */}
        <div className={styles.grid} id="tariffs-cards">
          {tariffs.map((tariff, index) => {
            const newPrice = Math.round(tariff.basePrice * (1 - DISCOUNT_PERCENT / 100));

            return (
              <motion.div 
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h3 className={styles.name}>{tariff.name}</h3>
                <p className={styles.desc}>{tariff.desc}</p>
                
                <div className={styles.priceBlock}>
                  <div className={styles.oldPrice}>{tariff.basePrice} ₴</div>
                  <div className={styles.newPrice}>{newPrice} ₴</div>
                </div>
                
                <ul className={styles.features}>
                  {tariff.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>

                {/* ПЕРЕДАЄМО ДАНІ ТАРИФУ У ФУНКЦІЮ */}
                <button 
                  className={styles.buyBtn} 
                  onClick={() => handleBuyClick(tariff.name, newPrice)}
                >
                  ПРИДБАТИ
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className={styles.timerBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className={styles.bannerText}>ЗНИЖКА ДІЄ ЩЕ:</span>
          <span className={styles.bannerTimer}>{formatTime(timeLeft)}</span>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 style={{ fontFamily: 'var(--font-logo), sans-serif', fontSize: '1.8rem', textAlign: 'center', marginBottom: '20px', color: '#fff' }}>
          ОФОРМЛЕННЯ ЗАМОВЛЕННЯ
        </h3>
        
        {/* ЯКЩО ТАРИФ ОБРАНО - МАЛЮЄМО ФОРМУ І ПЕРЕДАЄМО ПРОПСИ */}
        {selectedTariff && (
          <PaymentForm price={selectedTariff.price} tariffName={selectedTariff.name} />
        )}
      </Modal>

    </section>
  );
}