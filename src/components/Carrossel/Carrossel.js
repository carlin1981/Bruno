import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';

function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postersRef = useRef(null);
  const posters = [
    { id: 1, alt: "Filme 1", imageUrl: "https://via.placeholder.com/300x450?text=Filme+1" },
    { id: 2, alt: "Filme 2", imageUrl: "https://via.placeholder.com/300x450?text=Filme+2" },
    { id: 3, alt: "Filme 3", imageUrl: "https://via.placeholder.com/300x450?text=Filme+3" },
    { id: 4, alt: "Filme 4", imageUrl: "https://via.placeholder.com/300x450?text=Filme+4" },
    { id: 5, alt: "Filme 5", imageUrl: "https://via.placeholder.com/300x450?text=Filme+5" },
    { id: 6, alt: "Filme 6", imageUrl: "https://via.placeholder.com/300x450?text=Filme+6" },
    { id: 7, alt: "Filme 7", imageUrl: "https://via.placeholder.com/300x450?text=Filme+7" },
    { id: 8, alt: "Filme 8", imageUrl: "https://via.placeholder.com/300x450?text=Filme+8" },
    { id: 9, alt: "Filme 9", imageUrl: "https://via.placeholder.com/300x450?text=Filme+9" },
  ];

  const scrollToPoster = (index) => {
    if (postersRef.current) {
      const posterWidth = postersRef.current.children[0]?.offsetWidth || 300;
      postersRef.current.scrollTo({
        left: index * (posterWidth + 20), // 20 é o margin entre os posters
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < posters.length - 1) {
      scrollToPoster(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToPoster(currentIndex - 1);
    }
  };

  // Efeito para observar mudanças no carrossel (opcional)
  useEffect(() => {
    const handleScroll = () => {
      if (postersRef.current) {
        const posterWidth = postersRef.current.children[0]?.offsetWidth || 300;
        const newIndex = Math.round(postersRef.current.scrollLeft / (posterWidth + 20));
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    };

    if (postersRef.current) {
      postersRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (postersRef.current) {
        postersRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentIndex]);

  return (
    <div className="Header">
      <div className="movie-row">
        <h2>Populares</h2>
        <div className="carrossel-container">
          <button 
            className="carrossel-button prev" 
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          
          <div className="movie-posters" ref={postersRef}>
            {posters.map((poster) => (
              <div key={poster.id} className="movie-poster">
                <img
                  src={poster.imageUrl}
                  alt={poster.alt}
                />
              </div>
            ))}
          </div>
          
          <button 
            className="carrossel-button next" 
            onClick={handleNext}
            disabled={currentIndex === posters.length - 1}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrossel;