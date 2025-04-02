import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaChartBar, FaBullseye, FaWpforms } from 'react-icons/fa';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer className="dark-footer">
            <div className="footer-container">
                <div className="footer-column footer-branding">
                    <h2 className="footer-title">Acompanhe sua Composição Corporal</h2>
                    <p className="footer-text">
                        Acompanhe seu progresso corporal com precisão! Defina objetivos, monitore a composição corporal e alcance sua melhor versão.
                    </p>
                </div>
                <div className="footer-column footer-links">
                    <h2 className="footer-title">Funcionalidades</h2>
                    <ul className="footer-list">
                        <li><Link to="/objetivos" className="footer-link"><FaBullseye /> Definição de Objetivos</Link></li>
                        <li><Link to="/grafico" className="footer-link"><FaChartBar /> Gráfico de Medidas</Link></li>
                        <li><Link to="/composicao-corporal" className="footer-link"><FaWpforms /> Análise de Composição Corporal</Link></li>
                        <li><Link to="/IMCForm" className="footer-link"><FaChartBar /> Calculadora de IMC</Link></li>
                    </ul>
                </div>
                <div className="footer-column footer-links">
                    <h2 className="footer-title">Recursos</h2>
                    <ul className="footer-list">
                        <li><Link to="/" className="footer-link">Monitoramento Corporal</Link></li>
                        <li><Link to="/grafico" className="footer-link">Visualização de Gráficos</Link></li>
                        <li><Link to="/calculo-macronutrientes" className="footer-link">Calcular Macronutrientes</Link></li>
                        <li><Link to="/dicas" className="footer-link">Dicas de Saúde</Link></li>
                    </ul>
                </div>
                <div className="footer-column footer-social">
                    <h2 className="footer-title">Conecte-se</h2>
                    <div className="social-icons">
                        <a href="#" className="social-link"><FaFacebook /></a>
                        <a href="#" className="social-link"><FaInstagram /></a>
                        <a href="#" className="social-link"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2025 MonitoramentoMedidasCorporais. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
