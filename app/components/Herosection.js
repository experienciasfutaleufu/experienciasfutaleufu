import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/uploads/patagonia-jpg-hero_image.jpeg')`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="py-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-aos="slide-up"
            data-aos-offset="120"
            data-aos-delay="0"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Explora las maravillas de la Patagonia
          </h1>
          <p
            className="text-lg md:text-2xl text-gray-300 mb-8"
            data-aos="slide-up"
            data-aos-offset="120"
            data-aos-delay="50"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Paisaje Pintado por Dios -{" "}
            <span className="text-blue-400">Futaleufú Chile</span>
          </p>
          <div
            data-aos="slide-up"
            data-aos-offset="120"
            data-aos-delay="150"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <a
              href="/index#services"
              className="inline-block px-8 py-4 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition uppercase"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
