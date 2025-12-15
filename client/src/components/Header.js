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