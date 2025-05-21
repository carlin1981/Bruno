import React from 'react';
import '../../App.css';

function Header() {
  return (
    <div className="Header">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">
          <img
            src="https://assets-fabapp.com/2897819/b2068f9983b4dac4b5be859821a6be580f361849"
            alt="Netflix"
            className="logo-img"
          />
        </div>
        <nav>
          <a href="#">Início</a>
          <a href="#">Séries</a>
          <a href="#">Filmes</a>
          <a href="#">Minha Lista</a>
        </nav>
        <div className="profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Perfil"
            className="profile-img"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
