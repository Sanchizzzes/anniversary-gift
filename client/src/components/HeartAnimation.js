import React from 'react';
import './HeartAnimation.css'; // Імпортуємо спеціальні стилі для анімації

// Кількість сердець, які ми хочемо бачити
const HEART_COUNT = 25; 

const HeartAnimation = () => {
  // Створюємо масив, щоб згенерувати HEART_COUNT елементів
  const hearts = Array.from({ length: HEART_COUNT }, (_, index) => {
    // Кожне серце отримує унікальний стиль, щоб вони рухались випадковим чином
    const style = {
      // Випадкова позиція по горизонталі (від 0 до 100%)
      left: `${Math.random() * 100}vw`,
      // Випадкова тривалість анімації (від 8 до 15 секунд)
      animationDuration: `${8 + Math.random() * 7}s`,
      // Випадкова затримка, щоб вони починали падати не одночасно
      animationDelay: `${Math.random() * -10}s`, 
      // Випадковий розмір
      transform: `scale(${0.5 + Math.random() * 0.7})`, 
    };
    return <div key={index} className="heart" style={style}></div>;
  });

  return (
    // Фіксована позиція, щоб анімація була над усім контентом
    <div className="heart-animation-container">
      {hearts}
    </div>
  );
};

export default HeartAnimation;