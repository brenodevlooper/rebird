/** Config do build estático do Tailwind (substitui o Play CDN).
 *  Rebuild: npx -y tailwindcss@3.4.17 -c tailwind.config.js -i tailwind-input.css -o tailwind.css --minify
 */
module.exports = {
  content: ['./index.html', './servicos.html', './como-trabalhamos.html', './contato.html'],
  safelist: ['hidden', 'open', 'visible', 'scrolled', 'drawn'],
  theme: {
    extend: {
      colors: {
        red: {
          950: '#1a0005',
          900: '#2d000a',
          700: '#a50c18',
          600: '#c4101f',
          500: '#e21023',
          400: '#e8394a',
          100: '#fde8ea',
        },
        brand: {
          700: '#a50c18',
          600: '#c4101f',
          500: '#e21023',
          400: '#e8394a',
          100: '#fde8ea',
        },
      },
    },
  },
};
