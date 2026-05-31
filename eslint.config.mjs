import nextVitals from "eslint-config-next/core-web-vitals";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "public/js/**", "*.min.js"],
  },
  ...nextVitals,
];
