import React from "react";

import "./global.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from '@vercel/analytics/next';


const App = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Analytics />

    </>
  );
};

export default App;
