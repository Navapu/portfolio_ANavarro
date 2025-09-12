const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Alejandro Navarro</h1>
          <h2>Full Stack Developer Junior</h2>
          <p>Aprendiendo, programando y mejorando con cada proyecto</p>
          <a href="#projects" className="btn-cta">Ver mis proyectos</a>
        </div>
        <div className="hero-image">
          <img src="/public/Navarro.jpg" alt="Foto de Alejandro Navarro" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
