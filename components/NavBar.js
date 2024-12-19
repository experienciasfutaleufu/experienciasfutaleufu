"use client";

import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navbarMenu = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    contact: "Contact",
  },
  es: {
    home: "Inicio",
    aboutUs: "Sobre Nos",
    services: "Servicios",
    contact: "Contacto",
  },
};

export default function NavBar({ props, locale }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menu = navbarMenu[locale];
  const router = useRouter();

  const currentLocale =
    typeof locale === "string" ? locale : router.locale || "en";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const isDark = !prevMode;
      localStorage.setItem("theme", isDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDark);
      return isDark;
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const changeLocale = () => {
    const newLocale = currentLocale === "en" ? "es" : "en";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <header
      className={`${poppins.className} bg-white dark:bg-gray-900 shadow-md fixed w-full z-50`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white uppercase"
        >
          Experiencias Futaleufú
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-800 dark:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            // Close Icon
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
              />
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="#home"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {menu.home}
          </Link>
          <Link
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white scroll-smooth"
          >
            {menu.aboutUs}
          </Link>
          <Link
            href="#services"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {menu.services}
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {menu.contact}
          </Link>
          <Link
            href="https://www.instagram.com/experienciasfutaleufu/"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
          >
            {darkMode ? (
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            ) : (
              <img
                src="/images/instagram2.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            )}
          </Link>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              // Sun Icon for Light Mode
              <svg
                id="theme-toggle-light-icon"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                ></path>
              </svg>
            ) : (
              // Moon Icon for Dark Mode
              <svg
                id="theme-toggle-dark-icon"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
          </button>
          {/* Locale Switcher */}
          <div className="flex items-center gap-4">
            <button
              onClick={changeLocale}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium focus:outline-none"
            >
              {currentLocale === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col items-center space-y-4 px-4 py-6">
            <li>
              <Link
                href="#home"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {menu.home}
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {menu.aboutUs}
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {menu.services}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                {menu.contact}
              </Link>
            </li>
            <li>
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="text-gray-800 dark:text-white focus:outline-none"
                aria-label="Toggle Theme"
              >
                {darkMode ? (
                  // Sun Icon for Light Mode
                  <svg
                    id="theme-toggle-light-icon"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    ></path>
                  </svg>
                ) : (
                  // Moon Icon for Dark Mode
                  <svg
                    id="theme-toggle-dark-icon"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
            </li>
            <li>
              <div className="flex items-center gap-4">
                <button
                  onClick={changeLocale}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium focus:outline-none"
                >
                  {currentLocale === "en" ? "Español" : "English"}
                </button>
              </div>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/experienciasfutaleufu/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
              >
                {darkMode ? (
                  <img
                    src="/images/instagram.png"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src="/images/instagram2.png"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
