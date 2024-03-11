import React from "react";

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Salut, je suis Pierre !
              <br className="hidden lg:inline-block" />
              Développeur Full Stack en recherche d'une alternance.
            </h1>
            <p className="mb-8 leading-relaxed">
              Bienvenue sur mon portfolio en ligne !
              <br className="hidden lg:inline-block" />
              Après 15 ans de métier en tant qu'opticien, le désir d'une reconversion s'est imposé comme une évidence pour continuer mon évolution. Naturellement attiré par le monde dynamique du développement, un domaine constamment en réinvention, devenir développeur représente bien plus qu'un simple changement professionnel pour moi. C'est l'occasion idéale d'épanouir une nouvelle vie, explorant toutes les facettes de mes compétences et laissant libre cours à ma créativité.
              <br className="hidden lg:inline-block" />
              Mes atouts résident dans ma passion profonde, ma grande adaptabilité, mon enthousiasme constant et ma curiosité insatiable. Sur ce site, vous découvrirez mon parcours en constante évolution, les projets qui ont sculpté ma transition, et comment ma passion pour le développement s'exprime dans chacune de mes créations. Bienvenue dans mon univers, où l'optique se transforme en code et la créativité s'exprime avec rigueur et professionnalisme.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contactez moi
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Mes différents projets
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full border-double border-4 border-black"
              alt="hero"
              src="./photointro.jpg"
            />
          </div>
        </div>
      </section>
    );
  }