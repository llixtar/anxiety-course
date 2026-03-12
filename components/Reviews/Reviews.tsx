'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import styles from './Reviews.module.scss';

// ТУТ ПРОПИСУЄШ РЕАЛЬНІ НАЗВИ СВОЇХ ФАЙЛІВ
// Файли мають лежати в папці public/reviews/
const reviewsData = [
  '/reviews/1.jpg', 
  '/reviews/2.jpg',
  '/reviews/3.jpg',
  '/reviews/4.jpg',
  '/reviews/5.jpg',
];

export default function Reviews() {
  // Ініціалізуємо карусель з автоплеєм (затримка 4 секунди). 
  // stopOnInteraction: false означає, що автоплей не зупиниться назавжди, якщо юзер свайпне сам
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ВІДГУКИ
        </motion.h2>

        <motion.div 
          className={styles.carouselWrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Ліва кнопка */}
          <button className={styles.navButton} onClick={scrollPrev} aria-label="Попередній відгук">
            ←
          </button>

          {/* Вікно каруселі */}
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {reviewsData.map((src, index) => (
                <div className={styles.emblaSlide} key={index}>
                  <div className={styles.slideInner}>
                    <img src={src} alt={`Відгук ${index + 1}`} className={styles.reviewImage} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Права кнопка */}
          <button className={styles.navButton} onClick={scrollNext} aria-label="Наступний відгук">
            →
          </button>
        </motion.div>
      </div>
    </section>
  );
}