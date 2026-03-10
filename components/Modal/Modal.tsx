'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.scss';

// Описуємо, які пропси приймає наша модалка
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // Блокуємо скрол сторінки, коли модалка відкрита
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay}>
          {/* Темний фон, при кліку на який модалка закривається */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Сама коробочка модалки */}
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Кнопка закриття (Хрестик) */}
            <button className={styles.closeBtn} onClick={onClose}>
              ✕
            </button>
            
            {/* Сюди буде потрапляти наш контент (форма оплати) */}
            <div className={styles.body}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}