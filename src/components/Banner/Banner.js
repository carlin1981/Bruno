import React from 'react';
import '../../App.css';

function Banner() {
  return (
    <section className="banner">
      {/* Banner principal */}
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
  );
}

export default Banner;