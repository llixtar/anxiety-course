'use client';

import { motion, Variants } from 'framer-motion'; 
import styles from './Results.module.scss';

const detailedResults = [
  "думки більше не захоплюють вас у нескінченні сценарії",
  "тривога більше не керує вашим днем",
  "ви можете розслабитися без постійного напруження",
  "з’являється відчуття внутрішнього спокою",
  "життя знову відчувається легшим"
];

const summaryResults = [
  "менше тривожних думок",
  "більше внутрішнього спокою",
  "розуміння своїх емоцій",
  "інструменти для самодопомоги",
  "навички роботи з тривожністю"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Results() {
  return (
    <section className={styles.results} id="results">
      <div className={styles.container}>
        
        {/* ГОЛОВНИЙ ЗАГОЛОВОК */}
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ПІСЛЯ ПРОХОДЖЕННЯ КУРСУ
        </motion.h2>

        {/* ПІДЗАГОЛОВОК */}
        <motion.h3
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ви почнете помічати, що:
        </motion.h3>

        {/* 1. Детальний список по центру */}
        <motion.div 
          className={styles.detailedList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {detailedResults.map((item, index) => (
            <motion.div key={index} className={styles.listItem} variants={itemVariants}>
              <span className={styles.listDash}>—</span>
              <p className={styles.itemText}>{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ФІНАЛЬНИЙ ТЕКСТ ПО ЦЕНТРУ */}
        <motion.p 
          className={styles.finalNote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Спокій — це не талант. Це навичка, якій можна навчитися.
        </motion.p>

        {/* 2. Головний результат знизу зі світляком (ТЕПЕР ТЕМНИЙ) */}
        <motion.div 
          className={styles.summaryContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.summaryBox}>
            <div className={styles.summaryContent}>
              <h3 className={styles.summaryTitle}>Результат курсу</h3>
              <div className={styles.checkList}>
                {summaryResults.map((item, index) => (
                  <div key={index} className={styles.checkItem}>
                    <span className={styles.checkIcon}>[✓]</span>
                    <span className={styles.checkText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}