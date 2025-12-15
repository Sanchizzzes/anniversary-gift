import React, { useState, useEffect } from 'react';

const SixMonthMilestone = ({ date }) => {
  const startDate = new Date(date);
  
  const calculateTimeElapsed = () => {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Порожній масив означає, що ефект запускається лише один раз

  return (
    <section className="milestone-section">
      <h2>💖 Ми разом вже:</h2>
      <div className="time-counter">
        <span><strong>{timeElapsed.days}</strong> Днів</span>
        <span><strong>{timeElapsed.hours}</strong> Годин</span>
        <span><strong>{timeElapsed.minutes}</strong> Хвилин</span>
        <span><strong>{timeElapsed.seconds}</strong> Секунд</span>
      </div>
      <p className="milestone-text">І це лише початок нашої історії...</p>
    </section>
  );
};

export default SixMonthMilestone;