'use client';

import { motion, Variants } from 'framer-motion';
import styles from './ForWhom.module.scss';

const points = [
  "Ви постійно прокручуєте думки і не можете «вимкнути» голову",
  "Часто думаєте: «А раптом щось піде не так?»",
  "Вам складно розслабитися навіть у вихідний день",
  "Через думки важко заснути або прокидаєтесь серед ночі",
  "Відчуваєте напругу в тілі без зрозумілої причини",
  "Коли все добре — все одно є тривога",
  "Ви вже пробували поради «не накручувати себе», але це не працює"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const lineVariants: Variants = {
  hidden: { height: 0 },
  visible: { 
    height: '100%', 
    transition: { duration: 1.5, ease: "easeInOut" as const } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.5 } 
  }
};

export default function ForWhom() {
  return (
    <section className={styles.forWhom} id="for-whom">
      <div className={styles.container}>
        
        {/* Головний заголовок */}
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Вам знайоме це відчуття?
        </motion.h2>

        {/* Новий підзаголовок */}
        <motion.h3
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Виберіть цей курс, якщо впізнаєте себе хоча б у 2-х пунктах:
        </motion.h3>

        <motion.div 
          className={styles.timelineWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.timeline}>
            <motion.div className={styles.mainLine} variants={lineVariants} />
            <div className={styles.itemsList}>
              {points.map((text, index) => (
                <motion.div key={index} className={styles.item} variants={itemVariants}>
                  <div className={styles.marker} />
                  <span className={styles.text}>{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}