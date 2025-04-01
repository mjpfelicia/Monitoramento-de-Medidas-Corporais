import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import IconeFitness from '../IconeFitness/IconeFitness'; 
import Login from '../Login/Login';
import '../MonitoramentoMedidasCorporais/MonitoramentoMedidasCorporais.css'; // Importa o CSS para estilização



const MonitoramentoMedidasCorporiais = () => {
  const [showIcone, setShowIcone] = useState(true);
  const [showLogin, setShowLogin] = useState(false); // Controla a exibição do login
  const location = useLocation();

  // Atualiza o ícone de fitness quando a rota mudar
  useEffect(() => {
    if (location.pathname === '/') {
      setShowIcone(true);  // Exibe o ícone apenas na página inicial
    } else {
      setShowIcone(false);  // Esconde o ícone nas outras páginas
    }
  }, [location.pathname]);

  const handleLoginClick = () => {
    setShowLogin(true);  // Exibe o login
    setShowIcone(false); // Esconde o ícone de fitness
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Fecha o login
    if (location.pathname === '/') {
      setShowIcone(true);  // Mostra o ícone de volta se estiver na página inicial
    }
  };

  return (
    <div className="monitoramento-medidas-container">
      {/* Menu sempre visível */}
      <Menu setShowIcone={setShowIcone} onLoginClick={handleLoginClick} />

      <div className="conteudo">
        {/* Ícone de fitness apenas na página inicial */}
        {showIcone && <IconeFitness className="icone-fitness" />}
        
        <div className="conteudo-dinamico">
          {/* Se o login estiver ativo, ele aparece na área central */}
          {showLogin ? (
            <div className="login-container">
              <Login onClose={handleCloseLogin} />
            </div>
          ) : (
            <Outlet />  // Mostra a página atual da rota (Gráficos, Objetivo, etc.)
          )}
        </div>
      </div>

      {/* Rodapé sempre visível */}
      <Footer />
    </div>
  );
};

export default MonitoramentoMedidasCorporiais;
