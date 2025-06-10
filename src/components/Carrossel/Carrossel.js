import React, { useState } from 'react';
import '../../App.css';

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const posters = [
    { id: 1, alt: "Duna: Parte Dois", imageUrl: "https://image.tmdb.org/t/p/w300/8uUU2pxm6IYZw8UgnKJyx7Dqwu9.jpg" },
    { id: 2, alt: "Oppenheimer", imageUrl: "https://image.tmdb.org/t/p/w300/ptpr0kGAckfQkJeJIt8st5dglvd.jpg" },
    { id: 3, alt: "Barbie", imageUrl: "https://image.tmdb.org/t/p/w300/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },
    { id: 4, alt: "John Wick 4", imageUrl: "https://image.tmdb.org/t/p/w300/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg" },
    { id: 5, alt: "Guardiões da Galáxia Vol. 3", imageUrl: "https://image.tmdb.org/t/p/w300/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" },
    { id: 6, alt: "Napoleão", imageUrl: "https://image.tmdb.org/t/p/w300/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg" },
    { id: 7, alt: "Godzilla Minus One", imageUrl: "https://image.tmdb.org/t/p/w300/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg" },
  ];

  // Criando um array duplicado dos filmes para preencher espaços vazios
  const infinitePosters = [...posters, ...posters];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posters.length) % posters.length);
  };

  return (
    <div className="Header">
      <div className="movie-row">
        <h2>Populares</h2>
        <div className="carrossel-container">
          <button className="carrossel-button prev" onClick={handlePrev}>‹</button>

          <div className="movie-posters">
            <div
              className="movie-poster-wrapper"
              style={{
                transform: `translateX(-${currentIndex * 320}px)`, // Poster + margem
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {infinitePosters.map((poster, index) => (
                <div key={index} className="movie-poster">
                  <img src={poster.imageUrl} alt={poster.alt} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          <button className="carrossel-button next" onClick={handleNext}>›</button>
        </div>
      </div>
    </div>
  );
}
