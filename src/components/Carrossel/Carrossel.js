import React from 'react';
import '../../App.css';

function Carrossel() {
  return (
    <div className="Header">
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

export default Carrossel;