import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';

const App: React.FC = () => {
  // Parei aqui: 1:12'59
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Guarulhos</strong>
          <span>São Paulo</span>
        </div>

        <a href="#none" className="enter-app">
          {'>'}
        </a>
      </div>
    </div>
  );
};

export default App;
