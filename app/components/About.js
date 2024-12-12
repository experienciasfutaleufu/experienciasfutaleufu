import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 text-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Explore the wild</h2>
            <p className="text-lg mb-8">Unforgettable guided hiking tours</p>
            <p className="text-lg mb-8">
              En Experiencias Futaleufú, te invitamos a sumergirte en la
              impresionante belleza de Futaleufú, Chile. Nuestras excursiones
              guiadas bilingües de senderismo están diseñadas para crear
              recuerdos inolvidables.
            </p>
            <p className="text-lg mb-8">
              Dirigidos por guías profesionales, explorarás paisajes
              impresionantes mientras disfrutas de comidas saludables de origen
              local. Ya seas un excursionista experimentado o recién estés
              comenzando, nuestras excursiones se adaptan a todos los niveles de
              habilidad, lo que garantiza una increíble aventura en el paraíso
              de la naturaleza.
            </p>
            <a
              href="/index#contact"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded my-12"
            >
              Get in touch
            </a>
          </div>
          <div className="md:w-1/2 md:ml-8 mt-10 lg:mt-2">
            <Image
              src="/uploads/about1.jpg"
              alt="Futaleufú hiking, stunning landscapes, guided tours"
              width={600}
              height={400}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
