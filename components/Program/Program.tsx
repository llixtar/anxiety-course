'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Program.module.scss';

// Оновлена структура: content тепер масив рядків для красивого виводу списком
const modules = [
  {
    id: "01",
    title: "МЕЖА ТРИВОГИ: КОЛИ «ДРУГ» СТАЄ «ВОРОГОМ»",
    content: [
      "Що таке тривожність насправді?",
      "Як відрізнити здорову реакцію організму від хронічного стану.",
      "Розбір реальних прикладів: де тривога допомагає, а де руйнує ваше життя."
    ]
  },
  {
    id: "02",
    title: "ПРИБОРКАННЯ ВНУТРІШНЬОГО КРИТИКА «А РАПТОМ?»",
    content: [
      "Знайомство з вашим постійним супутником, який шепоче про провали та найгірші сценарії.",
      "Чому цей голос насправді хоче вас захистити?",
      "Практика: вчимося перехоплювати управління та переписувати сценарії страху."
    ]
  },
  {
    id: "03",
    title: "КАРТА ТРИВОГИ У ВАШОМУ ТІЛІ",
    content: [
      "Як розпізнати тривогу за фізичними симптомами.",
      "Чому тіло реагує саме так (затиски, дихання, напруга).",
      "Експрес-техніки: прості вправи та рухи для миттєвого покращення фізичного стану."
    ]
  },
  {
    id: "04",
    title: "ВЕЛИКИЙ ПРАКТИКУМ: ПОГЛЯД У МИНУЛЕ",
    content: [
      "Аналіз 5-10 ваших останніх тривожних епізодів.",
      "Чесна ревізія: чи виправдалися страхи та яку ціну ви заплатили за ці переживання?",
      "Визначення сфер життя, де тривожність «гостює» найчастіше."
    ]
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

        {/* Блок з акордеонами */}
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
                    <ul className={styles.descriptionList}>
                      {module.content.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Темний блок з бонусами */}
        <motion.div 
          className={styles.bonusBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className={styles.bonusTitle}>🎁 БОНУС: Пакет із 3-х практик для самостійної роботи:</h3>
          <ul className={styles.bonusList}>
            <li><span className={styles.accentNum}>1.</span> «Чорні хмари — ясне небо» (дистанціювання від думок).</li>
            <li><span className={styles.accentNum}>2.</span> «Найгірший варіант» (проживання страху до кінця).</li>
            <li><span className={styles.accentNum}>3.</span> «Переверни навпаки» (трансформація тривоги в ресурс).</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}