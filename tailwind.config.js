/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      // Match your existing variables
      colors: {
        'primary': '#0d6efd',    // Bootstrap primary
        'secondary': '#6c757d',  // Bootstrap secondary
        'success': '#198754',    // Bootstrap success
        'danger': '#dc3545',     // Bootstrap danger
        'warning': '#ffc107',    // Bootstrap warning
        'info': '#0dcaf0',       // Bootstrap info
        'light': '#f8f9fa',      // Bootstrap light
        'dark': '#212529',       // Bootstrap dark
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      maxWidth: {
        '1340': '1340px',
      },
    },
    // Bootstrap breakpoints
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    },
  },
  plugins: [],
}
