function Banner() {
  return (
    <section className="banner">
      {/* Banner principal */}
      <div className="banner-info">
        <h1>Stranger Things</h1>
        <p>
        Quando um garoto desaparece, a cidade toda participa nas buscas.
        Mas o que encontram são segredos, forças sobrenaturais e uma menina.
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