import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Netflix_logo.png"
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

      {/* Banner principal */}
      <section className="banner">
        <div className="banner-info">
          <h1>Stranger Things</h1>
          <p>
            Um grupo de crianças de uma pequena cidade precisa enfrentar forças
            sobrenaturais.
          </p>
          <div className="banner-buttons">
            <button className="button">Assistir</button>
            <button className="button">Mais informações</button>
          </div>
        </div>
      </section>

      {/* Carrossel de filmes */}
      <div className="movie-row">
        <h2>Populares</h2>
        <div className="movie-posters">
          <div className="movie-poster">
            <img
              src="https://via.placeholder.com/150x250/000000/FFFFFF/?text=Filme+1"
              alt="Filme 1"
            />
          </div>
          <div className="movie-poster">
            <img
              src="https://via.placeholder.com/150x250/000000/FFFFFF/?text=Filme+2"
              alt="Filme 2"
            />
          </div>
          <div className="movie-poster">
            <img
              src="https://via.placeholder.com/150x250/000000/FFFFFF/?text=Filme+3"
              alt="Filme 3"
            />
          </div>
          <div className="movie-poster">
            <img
              src="https://via.placeholder.com/150x250/000000/FFFFFF/?text=Filme+4"
              alt="Filme 4"
            />
          </div>
          <div className="movie-poster">
            <img
              src="https://via.placeholder.com/150x250/000000/FFFFFF/?text=Filme+5"
              alt="Filme 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
