/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        limit: '1410px',
        stretch: '1610px'
      },
      colors: {
        active: '#F67C6D'
      }
    }
  },
  plugins: []
};
