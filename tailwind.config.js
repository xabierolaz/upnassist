/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['"Source Code Pro"', 'monospace'],
        heading: ['Roboto', 'sans-serif'],
      },
      colors: {
        // Colores inspirados en MOOC.fi
        brand: {
          red: '#c0392b', // El rojo ladrillo clásico
          blue: '#2980b9', // Azul académico
          dark: '#2c3e50', // Gris oscuro para texto
          light: '#ecf0f1', // Fondo claro
        }
      }
    },
  },
  plugins: [],
}
