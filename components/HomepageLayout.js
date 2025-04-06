import Head from "next/head";
import NavBar from "./NavBar";
import Script from "next/script";
import Contact from "./Contact";
import HeroSection from "./Herosection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import FAQ from "./FAQ";
import Fotos from "./Fotos";
import Testimonials from "./Testimonials";
import ModalTours from "./ModalTours";
import Footer from "./Footer";

export const HomepageLayout = ({ props, locale }) => {
  // console.log("props");
  //console.log(locale);
  return (
    <>
      <Head>
        <title>Experiencias Futaleufu</title>
        <meta
          name="description"
          content="Tu Aventura Te Espera en Futaleufu Chile"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar props={props} locale={locale} />
      <HeroSection props={props} locale={locale} />
      <AboutSection props={props} locale={locale} />
      <ServicesSection props={props} locale={locale} />
      <Fotos props={props} locale={locale} />
      <Testimonials props={props} locale={locale} />
      <FAQ props={props} locale={locale} />

      <Contact locale={locale} />
      <ModalTours props={props} locale={locale} />
      <Footer/>
      <Script src="/js/tw-elements.umd.min.js" strategy="lazyOnload" />
    </>
  );
};
