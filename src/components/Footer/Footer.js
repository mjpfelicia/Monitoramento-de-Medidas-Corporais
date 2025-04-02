import React from 'react';
import '../Footer/Footer.css'; // Importando o CSS do Footer

const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="footer-container">
                <div className="footer-content">
                    <h2 className="footer-logo">Monitoramento Medidas Corporais</h2>
                    <p className="footer-description">Acompanhe seu progresso físico com precisão e eficiência.</p>
                    <div className="footer-socials">
                        <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Monitoramento Medidas Corporais. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
