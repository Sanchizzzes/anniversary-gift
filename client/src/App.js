import React, { useMemo } from 'react';
import './App.css'; 
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery'; 
import LovePoem from './components/LovePoem';
import ThankYouNote from './components/ThankYouNote';
import SixMonthMilestone from './components/SixMonthMilestone';

// Кількість сердець, які ми хочемо бачити
const HEART_COUNT = 25; 

// Функція для генерації сердець (оптимізована через useMemo)
const AnimatedHearts = () => {
  return useMemo(() => {
    return Array.from({ length: HEART_COUNT }, (_, index) => {
      // Кожне серце отримує унікальний стиль, щоб вони рухались випадковим чином
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${8 + Math.random() * 7}s`,
        animationDelay: `${Math.random() * -10}s`, 
        transform: `scale(${0.5 + Math.random() * 0.7})`, 
      };
      return <div key={index} className="heart" style={style}></div>;
    });
  }, []);
};


function App() {
  return (
    <div className="App">
      {/* !!! ВСТАВЛЯЄМО КОНТЕЙНЕР АНІМАЦІЇ НА САМ ПОЧАТОК !!! */}
      <div className="heart-animation-container">
        <AnimatedHearts />
      </div>

      <Header partnerName="Віта" anniversary="6 місяців" />
      
      <main>
        <SixMonthMilestone date="2025-06-15" /> 
        <PhotoGallery />
        <LovePoem />
        <ThankYouNote />
      </main>

      <footer>
        <p>© 2025 Зроблено з любов'ю для Віти від Лисого дядька</p>
      </footer>
    </div>
  );
}

export default App;