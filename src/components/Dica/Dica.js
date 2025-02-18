import React, { useState, useEffect } from 'react';
import './Dica.css'; // Importe o CSS

const Dica = () => {
  const [showMore, setShowMore] = useState(false);

  // Carregar o estado do localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('showMoreTips');
    if (savedState) {
      setShowMore(JSON.parse(savedState));
    }
  }, []);

  // Salvar o estado no localStorage
  useEffect(() => {
    localStorage.setItem('showMoreTips', JSON.stringify(showMore));
  }, [showMore]);

  const toggleMoreTips = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container-dicas">
      <h1>Dicas para Medir</h1>
      <ul className="dica-list">
        <li className="dica-item">
          <i className="fa fa-ruler" aria-hidden="true"></i> {/* Ícone de fita métrica */}
          Use uma fita métrica flexível.
        </li>
        <li className="dica-item">
          <i className="fa fa-clock" aria-hidden="true"></i> {/* Ícone de relógio */}
          Meça sempre no mesmo horário do dia, preferencialmente de manhã.
        </li>
        <li className="dica-item">
          <i className="fa fa-align-left" aria-hidden="true"></i> {/* Ícone de alinhamento */}
          Mantenha a fita alinhada e não aperte demais.
        </li>

        {showMore && (
          <>
            <li className="dica-item">
              <i className="fa fa-smile-o" aria-hidden="true"></i> {/* Ícone de relaxar */}
              Mantenha-se relaxado e respire normalmente enquanto mede.
            </li>
            <li className="dica-item">
              <i className="fa fa-tachometer" aria-hidden="true"></i> {/* Ícone de medir */}
              Meça ao redor das áreas que você deseja acompanhar (como cintura, quadris, etc.).
            </li>
            <li className="dica-item">
              <i className="fa fa-clothing" aria-hidden="true"></i> {/* Ícone de roupa */}
              Evite roupas volumosas durante a medição.
            </li>
          </>
        )}
      </ul>
      <div
        className="toggle-btn"
        onClick={toggleMoreTips}
        aria-expanded={showMore ? "true" : "false"}
        aria-controls="more-tips"
      >
        <span className={`arrow ${showMore ? 'rotate' : ''}`}>&darr;</span>
        <span>{showMore ? 'Mostrar Menos Dicas' : 'Mostrar Mais Dicas'}</span>
      </div>
    </div>
  );
};

export default Dica;
