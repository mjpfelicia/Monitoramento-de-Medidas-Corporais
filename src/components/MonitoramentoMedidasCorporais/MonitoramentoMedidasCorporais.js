import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import IconeFitness from '../IconeFitness/IconeFitness'; 
import './MonitoramentoMedidasCorporais.css';

const MonitoramentoMedidasCorporiais = () => {
  const [showIcone, setShowIcone] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowIcone(false); // Ocultar o ícone ao navegar para outra página
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowIcone(true); // Mostrar o ícone apenas na página inicial
    }
  }, [location.pathname]);

  return (
    <div className="monitoramento-medidas-container">
      <Menu setShowIcone={setShowIcone} />
      <Header />
      <div className="conteudo">
        {showIcone && <IconeFitness className="icone-fitness" />}
        <div className="conteudo-dinamico">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MonitoramentoMedidasCorporiais;
