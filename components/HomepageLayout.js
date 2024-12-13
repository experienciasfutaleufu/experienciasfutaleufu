import Head from "next/head";
import NavBar from "./NavBar";
import Script from "next/script";
import { tinaField, useTina } from "tinacms/dist/react";
import Contact from "./Contact";
import HeroSection from "./Herosection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

export const HomepageLayout = ({ props }) => {
  // console.log("props");
  // console.log(props);
  return (
    <>
      <Head>
        <title>Experiencias Futaleufu</title>
        <meta
          name="description"
          content="Turismo y caminatas en Futaleufu Chile"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroSection props={props} />
      <AboutSection props={props} />
      <ServicesSection props={props} />

      <Contact />
      <footer></footer>
      <Script src="/js/tw-elements.umd.min.js" strategy="lazyOnload" />
    </>
  );
};
