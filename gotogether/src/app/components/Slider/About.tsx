const About = () => {
  return (
    <div id="about" className="px-4 md:px-8 mt-20 md:mt-50 ml-20 md:ml-30">
      <div className="max-w-lg text-left mx-auto">
        <h2 className="text-xl font-bold">Sobre</h2>
        <div className="w-40 h-10 my-4">
          <img
            src="/Group-297.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-base leading-relaxed text-neutral-500 w-80">
          En Go Together nos ponemos la camiseta para ayudarte a encontrar la
          mejor solución, analizar cada opción y encontrar un camino que
          realmente te sirva.
        </p>
        <p className="text-base leading-relaxed mt-4 text-neutral-500 w-80">
          No creemos en soluciones mágicas, es por eso que nos comprometemos a
          darte todas las herramientas y el conocimiento que tenemos para que
          avances con confianza y seguridad.
        </p>
      </div>
    </div>
  );
};

export default About;