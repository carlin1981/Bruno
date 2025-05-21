import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer class="netflix-footer">
      <div class="footer-content">
        <div class="social-links">
          <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
        </div>
        
        <div class="footer-links">
          <div class="links-column">
            <a href="#">Início</a>
            <a href="#">Séries</a>
            <a href="#">Filmes</a>
            <a href="#">Bombando</a>
          </div>
          <div class="links-column">
            <a href="#">Minha lista</a>
            <a href="#">Navegar por idiomas</a>
            <a href="#">Buscar</a>
          </div>
          <div class="links-column">
            <a href="#">Central de Ajuda</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2023 Netflix Clone (não oficial)</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
