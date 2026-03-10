'use client';

import { motion } from 'framer-motion';
import styles from './About.module.scss';
import Image from 'next/image';

const stats = [
    { value: "3+", label: "роки практичного досвіду" },
    { value: "700+", label: "годин роботи з клієнтами" },
    { value: "Автор воркбуку “It’s me”", label: "з пропрацювання особистості" }
];

export default function About() {
    return (
        <section className={styles.about} id="about">
            
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    ХТО ВЕДЕ КУРС
                </motion.h2>

                {/* ВСТУПНИЙ ТЕКСТ */}
                <motion.div
                    className={styles.introText}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className={styles.accentText}>Марія — креативний психолог.</p>
                    <p>
                        Працюю у форматі «лагідної терапії»: без тиску та агресії, через запитання, практики, візуалізації та прості пояснення складних речей.
                    </p>
                </motion.div>

                {/* ГОЛОВНЕ ФОТО */}
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Image
                        src="/images/maria.jpg" 
                        alt="Марія - креативний психолог"
                        fill 
                        className={styles.photo}
                        sizes="(max-width: 768px) 100vw, 450px"
                    />
                </motion.div>

                {/* БЛОК 1: ТЕКСТ ЗЛІВА, КАРТИНКА СПРАВА */}
                <motion.div 
                    className={styles.rowBlock}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.rowText}>
                        <p>
                            Моя задача — створити простір, де не страшно говорити, зрозуміло розбиратися у собі і комфортно рухатися до змін.
                        </p>
                    </div>
                    <div className={styles.rowImage}>
                        <Image
                            src="/images/about-1.png" 
                            alt="Моя задача"
                            fill 
                            className={styles.photo}
                            sizes="(max-width: 768px) 100vw, 350px"
                        />
                    </div>
                </motion.div>

                {/* БЛОК 2: КАРТИНКА ЗЛІВА, ТЕКСТ СПРАВА */}
                <motion.div 
                    className={`${styles.rowBlock} ${styles.rowReverse}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.rowImage}>
                        <Image
                            src="/images/about-2.png" 
                            alt="Робота з клієнтами"
                            fill 
                            className={styles.photo}
                            sizes="(max-width: 768px) 100vw, 350px"
                        />
                    </div>
                    <div className={styles.rowText}>
                        <p>Працюю із запитами:</p>
                        
                        <ul className={styles.queriesList}>
                            <li>тривожність</li>
                            <li>самооцінка</li>
                            <li>стосунки</li>
                            <li>самореалізація</li>
                            <li>прийняття та любов до себе</li>
                            <li>допомога у структурі внутрішнього хаосу</li>
                        </ul>
                    </div>
                </motion.div>

                {/* ФІНАЛЬНИЙ ТЕКСТ */}
                <motion.div
                    className={styles.finalText}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p>Я не про терапію роками.</p>
                    <p>Я про якісні зміни у вашому темпі та ритмі.</p>
                </motion.div>

                {/* ПЛАШКИ ЗІ СТАТИСТИКОЮ */}
                <motion.div
                    className={styles.statsContainer}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {stats.map((stat, index) => {
                        const isTextStat = index === 2; 
                        
                        return (
                            <div key={index} className={styles.statBox}>
                                <div className={`${styles.statValue} ${isTextStat ? styles.textStatValue : ''}`}>
                                    {stat.value}
                                </div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}