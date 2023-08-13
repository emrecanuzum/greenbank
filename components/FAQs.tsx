import React, { useState } from 'react';
import Image from 'next/image'
import plus from '../public/images/faq/plus.png'
import styles from '../styles/FAQ.module.css';

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: 'What credit score do I need to apply for a credit card?',
      answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
    {
      question: ' How can I apply for a credit card online?',
      answer: 'You can install Next.js using npm or yarn. Run "npm install next" or "yarn add next" in your project directory.',
    },
    {
      question: 'Are there any annual fees associated with the credit card?',
      answer: 'You can install Next.js using npm or yarn. Run "npm install next" or "yarn add next" in your project directory.',
    },
    {
      question: 'How long does it take to receive the credit card once approved?',
      answer: 'You can install Next.js using npm or yarn. Run "npm install next" or "yarn add next" in your project directory.',
    },
    {
      question: 'How can I check my credit card balance and transactions?',
      answer: 'You can install Next.js using npm or yarn. Run "npm install next" or "yarn add next" in your project directory.',
    },
    {
      question: 'What should I do if my credit card is lost or stolen?',
      answer: 'You can install Next.js using npm or yarn. Run "npm install next" or "yarn add next" in your project directory.',
    },
    {
      question: 'Is my credit card information secure?',
      answer: 'You can install Next.js using npm or yarn. Run "npm install next" or "yarn add next" in your project directory.',
    },
    // Add more FAQ items here
  ];

  return (
    <div className={styles.faqBody}>
      <h1>FAQs</h1>
      <div className={styles.faqContainer}>
        {faqData.map((faq, index) => (
        <div
          className={styles.faqItem}
          key={index}
          onClick={() => handleQuestionClick(index)}
        >
          <div className={styles.question}>{faq.question}</div>
          {activeIndex === index && <div className={styles.answer}>{faq.answer}</div>}
          <div className={styles.plusIcon}>  
          <Image
                alt="plusSign"
                src={plus}
                quality={100}
              />
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default FAQs;
