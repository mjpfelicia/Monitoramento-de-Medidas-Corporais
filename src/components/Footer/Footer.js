import React from 'react';
import '../Footer/Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p className="footer-title">
        <Link to="/">
          <i className="fa fa-home"></i> Monitoramento de medidas corporais para acompanhamento de saúde e bem-estar.
        </Link>
      </p>
      <div className="footer-links">
        <div>
          <h6>Funcionalidades</h6>
          <Link to="/objetivos">
            <i className="fa fa-bullseye"></i> Definição de Objetivos
          </Link>
          <Link to="/formulario">
            <i className="fa fa-plus-circle"></i> Adicionar Medidas
          </Link>
          <Link to="/grafico">
            <i className="fa fa-line-chart"></i> Gráfico de Progresso
          </Link>
          <Link to="/dicas">
            <i className="fa fa-lightbulb-o"></i> Dicas de Saúde
          </Link>
        </div>
        <div>
          <h6>Ferramentas</h6>
          <Link to="/calculo-macronutrientes">
            <i className="fa fa-calculator"></i> Cálculo de Macronutrientes
          </Link>
          <Link to="/composicao-corporal">
            <i className="fa fa-pie-chart"></i> Composição Corporal
          </Link>
          <Link to="/IMCForm">
            <i className="fa fa-heartbeat"></i> Cálculo de IMC
          </Link>
        </div>
        <div>
          <h6>Usuário</h6>
          <Link to="/login">
            <i className="fa fa-sign-in"></i> Login
          </Link>
          <Link to="/registrar">
            <i className="fa fa-user-plus"></i> Registrar
          </Link>
          <Link to="/user-info">
            <i className="fa fa-user"></i> Perfil
          </Link>
        </div>
        <div>
          <h6>Contato</h6>
          <Link to="/ajuda">
            <i className="fa fa-question-circle"></i> Ajuda
          </Link>
        </div>
      </div>

      <div className="social-icons">
        <a href="#!"><i className="fab fa-facebook-f"></i></a>
        <a href="#!"><i className="fab fa-twitter"></i></a>
        <a href="#!"><i className="fab fa-instagram"></i></a>
        <a href="#!"><i className="fab fa-linkedin"></i></a>
        <a href="#!"><i className="fab fa-github"></i></a>
      </div>

      <div className="copyright">
        © 2025 MonitoramentoMedidasCorporais. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
