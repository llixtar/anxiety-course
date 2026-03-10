'use client';

import { useState } from 'react';
import styles from './PaymentForm.module.scss';

declare const Wayforpay: any;

// 1. ОПИСУЄМО, ЯКІ ДАНІ ЧЕКАЄ ФОРМА (ПРОПСИ)
interface PaymentFormProps {
  price: number;
  tariffName: string;
}

// 2. ДОДАЄМО ЇХ В АРГУМЕНТИ КОМПОНЕНТА
export default function PaymentForm({ price, tariffName }: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // 3. ТЕПЕР СУМА ТА НАЗВА ДИНАМІЧНІ
    const amount = price.toString(); 
    const productName = `Курс "Прощавай тривожність" - Тариф: ${tariffName}`;
    const orderReference = `ORDER_${Date.now()}`; 
    const orderDate = Math.floor(Date.now() / 1000).toString(); 

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderReference,
          orderDate,
          amount,
          productName,
          productPrice: amount,
        }),
      });

      const { signature, merchantAccount, merchantDomainName } = await res.json();

      const wayforpay = new Wayforpay();
      
      wayforpay.run({
        merchantAccount: merchantAccount,
        merchantDomainName: merchantDomainName,
        authorizationType: "SimpleSignature",
        merchantSignature: signature,
        orderReference: orderReference,
        orderDate: orderDate,
        amount: amount,
        currency: "UAH",
        productName: [productName],
        productPrice: [amount],
        productCount: [1],
        clientFirstName: name.split(' ')[0] || "Клієнт",
        clientLastName: name.split(' ')[1] || "",
        clientEmail: email,
        language: "UA"
      },
      function (response: any) {
        alert('Оплата пройшла успішно! Перевірте пошту.');
        setIsProcessing(false);
      },
      function (response: any) {
        console.log("Відхилено або закрито:", response);
        setIsProcessing(false);
      },
      function (response: any) {
        setIsProcessing(false);
      });

    } catch (error) {
      console.error(error);
      alert('Помилка з\'єднання. Спробуйте пізніше.');
      setIsProcessing(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handlePayment}>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Ім'я та Прізвище</label>
        <input 
          type="text" id="name" required placeholder="Марія Іванова"
          value={name} onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email (сюди прийде доступ)</label>
        <input 
          type="email" id="email" required placeholder="maria@example.com"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button 
        type="submit" 
        className={`${styles.submitBtn} ${isProcessing ? styles.processing : ''}`}
        disabled={isProcessing}
      >
        {isProcessing ? "З'ЄДНАННЯ..." : `ОПЛАТИТИ ${price} ₴`}
      </button>

      <div className={styles.secureNote}>
        🔒 Оплата здійснюється через захищений шлюз WayForPay
      </div>
    </form>
  );
}