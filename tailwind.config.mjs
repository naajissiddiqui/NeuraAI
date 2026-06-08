/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Example: override using hex or rgb directly
        background: "#ffffff",
        foreground: "#000000",
        // Add your custom safe hex/rgb-based color values here
      },
    },
  },
  plugins: [],
};
