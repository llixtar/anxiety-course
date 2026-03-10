'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Program.module.scss';

const modules = [
  {
    id: "01",
    title: "ЩО ТАКЕ ТРИВОЖНІСТЬ І ЯК ВОНА ЗІ ЗДОРОВОЇ ПЕРЕРОСТАЄ В ХРОНІЧНУ",
    content: "У цьому модулі ви зрозумієте, що таке тривожність насправді і чому вона виникає."
  },
  {
    id: "02",
    title: "Я І «А РАПТОМ»",
    content: "Цей модуль присвячений тривожним думкам, які постійно прокручуються в голові."
  },
  {
    id: "03",
    title: "ПРОЯВИ ТРИВОЖНОСТІ",
    content: "Тривожність проявляється не тільки в думках, але і в тілі."
  },
  {
    id: "04",
    title: "ПРАКТИКУМ",
    content: "Це практичний модуль, у якому ви отримаєте інструменти для роботи з тривожністю."
  }
];

export default function Program() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className={styles.program} id="program">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ПРОГРАМА КУРСУ
        </motion.h2>

        <div className={styles.accordion}>
          {modules.map((module) => (
            <div 
              key={module.id} 
              className={`${styles.module} ${activeId === module.id ? styles.active : ''}`}
              onClick={() => setActiveId(activeId === module.id ? null : module.id)}
            >
              <div className={styles.header}>
                <span className={styles.number}>{module.id}</span>
                <h3 className={styles.title}>{module.title}</h3>
                <div className={styles.icon}>
                  <div className={styles.plusLine} />
                  <div className={`${styles.plusLine} ${styles.vertical}`} />
                </div>
              </div>

              <AnimatePresence>
                {activeId === module.id && (
                  <motion.div 
                    className={styles.content}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p className={styles.description}>{module.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}