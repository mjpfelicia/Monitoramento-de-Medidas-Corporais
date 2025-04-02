import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaChartBar, FaBullseye, FaWpforms } from 'react-icons/fa';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer className="dark-footer">
            <div className="footer-container">
                <div className="footer-column footer-branding">
                    <h2 className="footer-title">MonitoramentoMedidasCorporais</h2>
                    <p className="footer-text">
                        Acompanhe seu progresso corporal com precisão! Defina objetivos, monitore a composição corporal e alcance sua melhor versão.
                    </p>
                </div>
                <div className="footer-column footer-links">
                    <h2 className="footer-title">Funcionalidades</h2>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link"><FaBullseye /> Definição de Objetivos</a></li>
                        <li><a href="#" className="footer-link"><FaChartBar /> Medição de Massa Magra</a></li>
                        <li><a href="#" className="footer-link"><FaWpforms /> Relatórios de Progresso</a></li>
                        <li><a href="#" className="footer-link"><FaChartBar /> Histórico de Medidas</a></li>
                    </ul>
                </div>
                <div className="footer-column footer-links">
                    <h2 className="footer-title">Recursos</h2>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">Monitoramento Corporal</a></li>
                        <li><a href="#" className="footer-link">Visualização de Gráficos</a></li>
                        <li><a href="#" className="footer-link">Análise de Resultados</a></li>
                        <li><a href="#" className="footer-link">Dicas de Treinamento</a></li>
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
