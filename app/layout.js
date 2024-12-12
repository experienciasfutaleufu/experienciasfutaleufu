"use client";

import "./globals.css"; // Tailwind or global styles
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <html lang="es">
      <body className="bg-white dark:bg-gray-900">
        <Navbar />
        <Herosection />
        <About />
        <main>{children}</main>
      </body>
    </html>
  );
}
