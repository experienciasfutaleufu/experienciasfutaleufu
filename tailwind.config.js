module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the App Router
    "./tina/**/*.{js,ts,jsx,tsx}", // Include Tina-related files
    "./components/**/*.{js,ts,jsx,tsx}", // Include shared components
  ],
  darkMode: "class", // Enables class-based dark mode

  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
