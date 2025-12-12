/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/**/*.js",
  ],
  safelist: [
    // Widths
    'w-full', 'w-auto', 'w-1/2', 'w-1/3', 'w-2/3', 'w-1/4', 'w-3/4',
    'sm:w-full', 'sm:w-1/2', 'sm:w-1/3', 'sm:w-1/4',
    'md:w-full', 'md:w-1/2', 'md:w-1/3', 'md:w-1/4', 'md:w-2/3', 'md:w-3/4',
    'lg:w-full', 'lg:w-1/2', 'lg:w-1/3', 'lg:w-1/4', 'lg:w-2/3', 'lg:w-3/4',
    'xl:w-full', 'xl:w-1/2', 'xl:w-1/3', 'xl:w-1/4', 'xl:w-2/3', 'xl:w-3/4',
    // Padding
    'p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-8', 'p-10', 'p-12', 'p-16', 'p-20',
    'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6', 'px-8', 'px-10', 'px-12',
    'py-0', 'py-1', 'py-2', 'py-3', 'py-4', 'py-5', 'py-6', 'py-8', 'py-10', 'py-12', 'py-16', 'py-20',
    'pt-0', 'pt-1', 'pt-2', 'pt-3', 'pt-4', 'pt-5', 'pt-6', 'pt-8', 'pt-10', 'pt-12',
    'pb-0', 'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5', 'pb-6', 'pb-8', 'pb-10', 'pb-12',
    // Responsive padding
    'md:py-3', 'md:py-4', 'md:py-5', 'md:py-6', 'md:py-8', 'md:py-10', 'md:py-12', 'md:py-16', 'md:py-20',
    'lg:py-3', 'lg:py-4', 'lg:py-5', 'lg:py-6', 'lg:py-8', 'lg:py-10', 'lg:py-12', 'lg:py-16', 'lg:py-20',
    'md:px-4', 'md:px-6', 'md:px-8', 'md:px-10', 'md:px-12',
    'lg:px-4', 'lg:px-6', 'lg:px-8', 'lg:px-10', 'lg:px-12',
    'md:p-4', 'md:p-5', 'md:p-6', 'md:p-8', 'lg:p-4', 'lg:p-5', 'lg:p-6', 'lg:p-8',
    // Margin
    'm-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'm-8', 'm-auto',
    'mx-0', 'mx-1', 'mx-2', 'mx-3', 'mx-4', 'mx-5', 'mx-6', 'mx-8', 'mx-auto',
    'my-0', 'my-1', 'my-2', 'my-3', 'my-4', 'my-5', 'my-6', 'my-8', 'my-auto',
    'mt-0', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5', 'mt-6', 'mt-8', 'mt-10', 'mt-12', 'mt-auto',
    'mb-0', 'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5', 'mb-6', 'mb-8', 'mb-10', 'mb-12', 'mb-auto',
    'ml-0', 'ml-1', 'ml-2', 'ml-3', 'ml-4', 'ml-auto',
    'mr-0', 'mr-1', 'mr-2', 'mr-3', 'mr-4', 'mr-auto',
    // Responsive margin
    'md:mt-0', 'md:mt-4', 'md:mt-6', 'md:mt-8', 'lg:mt-0', 'lg:mt-4', 'lg:mt-6', 'lg:mt-8',
    'md:mb-0', 'md:mb-4', 'md:mb-6', 'md:mb-8', 'lg:mb-0', 'lg:mb-4', 'lg:mb-6', 'lg:mb-8',
    // Flex
    'flex', 'flex-row', 'flex-col', 'flex-wrap', 'flex-nowrap',
    'justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around',
    'items-start', 'items-end', 'items-center', 'items-stretch',
    'gap-0', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-8',
    'md:flex-row', 'lg:flex-row', 'md:flex-col', 'lg:flex-col',
    // Grid
    'grid', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-6', 'grid-cols-12',
    'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-6',
    // Display
    'hidden', 'block', 'inline', 'inline-block',
    'sm:hidden', 'sm:block', 'sm:flex', 'md:hidden', 'md:block', 'md:flex', 'lg:hidden', 'lg:block', 'lg:flex',
    // Text
    'text-left', 'text-center', 'text-right',
    'md:text-left', 'md:text-center', 'lg:text-left', 'lg:text-center',
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl',
    'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold',
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
