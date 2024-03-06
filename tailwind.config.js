/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-bg-patterns'),] /* the text inside [] was added after npm install --save-dev tailwindcss-bg-patterns
 */
};