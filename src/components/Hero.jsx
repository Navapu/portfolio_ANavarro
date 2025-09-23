const Hero = () => {
  return (
    <section id="home" className="flex justify-center my-24 mx-5">
      <div className="flex items-center gap-12">
        <div className="hero-text">
          <h1 className="text-5xl font-bold m-0 font-poppins">Alejandro Navarro</h1>
          <h2 className="text-xl my-2 font-inter text-[#D1D5DB]">Full Stack Developer Junior</h2>
          <p className="text-lg mb-5 font-inter">Aprendiendo, programando y mejorando con cada proyecto</p>
          <a href="#projects" className="px-5 py-2 bg-blue-600 text-white rounded-md transition duration-500 hover:bg-black">Ver mis proyectos</a>
        </div>
        <div className="hero-image">
          <img src="/Navarro.jpg" alt="Foto de Alejandro Navarro" className="w-44 h-44 rounded-full object-cover shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
