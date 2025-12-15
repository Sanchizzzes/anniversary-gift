// src/components/Header.js

import React from 'react';

const Header = ({ anniversary }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          Наші {anniversary} разом! 
          {/* !!! НОВИЙ ЕЛЕМЕНТ ТУТ !!! */}
          <span className="anniversary-icon">6</span>
        </h1>
        <p>Щість місяців, наповнених щастям, теплом та нескінченною любов'ю.</p>
      </div>
    </header>
  );
};

export default Header;
/* 1. Стиль для зображення (допомагає масштабувати) */
.gallery-image {
    max-width: 100%; 
    height: auto;   
    display: block;
}

/* 2. Базовий макет (для великих екранів) */
.photo-gallery {
    /* Цей стиль має вже існувати, якщо ні, додайте його */
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 15px; 
}


/* 3. ОНОВЛЕННЯ: Медіазапит для мобільного телефону (ширина до 600px) */
/* Цей блок ПОВИНЕН бути доданий в кінці CSS-файлу */
@media (max-width: 600px) {
    .photo-gallery {
        /* НАЙГОЛОВНІША ЗМІНА: 2 фотографії в рядку замість 5 */
        grid-template-columns: repeat(2, 1fr); 
        gap: 8px;
    }
}