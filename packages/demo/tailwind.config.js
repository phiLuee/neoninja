/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.ts", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  plugins: [
    function ({ addBase, theme }) {
      const colors = theme("colors");
      const variables = Object.keys(colors).reduce((acc, key) => {
        const value = colors[key];
        if (typeof value === "string") {
          acc[`--color-${key}`] = value;
        } else {
          Object.keys(value).forEach((subKey) => {
            acc[`--color-${key}-${subKey}`] = value[subKey];
          });
        }
        return acc;
      }, {});

      addBase({
        ":root": variables,
      });
    },
  ],
};
