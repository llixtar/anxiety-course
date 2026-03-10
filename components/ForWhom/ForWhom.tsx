'use client';

import { motion, Variants } from 'framer-motion';
import styles from './ForWhom.module.scss';

const points = [
  "постійно переживаєте за майбутнє",
  "часто ловите себе на думках «а раптом щось піде не так»",
  "накручуєте себе через дрібниці",
  "відчуваєте внутрішню напругу, тривогу або страх без чіткої причини",
  "вам складно розслабитися і відпочити",
  "маєте поганий сон через думки",
  "відчуваєте емоційне виснаження",
  "хочете навчитися керувати своїми думками і емоціями"
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
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ЦЕЙ КУРС ДЛЯ ВАС, ЯКЩО ВИ:
        </motion.h2>

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

        <motion.p 
          className={styles.footerNote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Також курс підійде тим, хто хоче краще зрозуміти себе та свою психіку. */}
        </motion.p>
      </div>
    </section>
  );
}